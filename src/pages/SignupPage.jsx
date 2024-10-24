import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";  
import '../css/signup.css';

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const signIn = async (e) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully");
      navigate("/"); 
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email address is already registered.");
      } else {
        console.error("Error creating user:", error.message);
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      if (user) {
        alert("You are already signed in with this account.");
      } else {
        const provider = googleProvider;
        provider.setCustomParameters({ prompt: "select_account" });
        await signInWithPopup(auth, provider);
        alert("Signed in with Google successfully");
        navigate("/"); 
      }
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        alert("This account already exists with a different sign-in method.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("The email associated with this Google account is already in use.");
      } else {
        console.error("Google sign-in error:", error.message);
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      alert("Logged out successfully");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      {user ? (
        <div className="logout-container">
          <h3>Welcome, {user.email}</h3><br/>
          <button onClick={logout} className="Sg" disabled={loading}>
            {loading ? 'Logging out...' : 'Log Out'}
          </button>
        </div>
      ) : (
        <form onSubmit={signIn} className="form-d">
          <h3 style={{ color: 'var(--bg-primary)' , margin: '0.50rem'}}>Email Address</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="inputs"
            disabled={loading}
          />
          <div className="pass-text">
            <h3 style={{ color: 'var(--bg-primary)', margin: '0.50rem' }}>Password</h3>
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
          <button type="submit" className="Sg" disabled={loading || !email || !password}>
            Sign Up
          </button>
          <br/>
          <p style={{ color:'var(--text-secondary)' ,marginBottom:'1rem'  }}>Or Continue with</p>
          <button type="button" onClick={signInWithGoogle} className="Sg" disabled={loading}>
            <div className="adj">
              <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="icon" style={{ width: '30px' }} className="g-icon" />
              Sign Up with Google
            </div>
          </button>
          <div className="signUp-text" style={{ color: 'var(--text-secondary)' }}>
            Already Have an Account? <span><Link to="/login">Login here</Link></span>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupPage;
