import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import '../css/signup.css'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('No account found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password.');
      } else {
        alert('Login failed. Please try again.');
      }
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google', error);
      alert('An error occurred during Google sign-in');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form-d">
        <div className="signUp-text">
          <h1>Welcome Back!</h1>
        </div>
        <br />
        <h3 style={{ color: 'var(--bg-primary)' }}>Email Address</h3>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="inputs"
          disabled={loading}
        />
        <div className="pass-text">
          <h3 style={{ color: 'var(--bg-primary)' }}>Password</h3>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter 6 characters or more"
          className="inputs"
          disabled={loading}
        />
        <br />
        <span className='fp'>
          <Link to="/forgot-password">Forgot Password?</Link>
        </span>
        <br />
        <button type="submit" className="Sg" disabled={loading || !email || !password}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Or continue with</p>
        <button type="button" onClick={handleGoogleLogin} className="Sg" disabled={loading}>
          <div className="adj">
            <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="icon" style={{ width: '30px' }} className="g-icon" />
            Login with Google
          </div>
        </button>
        <div className="signUp-text" style={{ color: 'var(--text-secondary)' }}>
          Don't have an account yet? <span><Link to="/signup">Sign up</Link></span>
        </div>
      </form>
    </div>
  );
}
