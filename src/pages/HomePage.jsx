import React from 'react';
import HeroSection from '../components/HeroSection';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { FaUtensils, FaBed, FaCouch, FaBath, FaHome, FaStore } from 'react-icons/fa';

function HomePage() {
  
  return (
    <div className="home-page">
      <HeroSection />
      <div className="con2">
        <div className= "left">
          <h1>WELCOME TO INSPIRENEST</h1>
          <h3>We are the Leader in the Interior</h3>
          <p>"InspireNet" is a vibrant platform for interior design enthusiasts, showcasing a gallery of design inspirations.
             Users can browse through images, search for styles, view detailed design pages, and explore trending ideas.
             The site is responsive and user-friendly, perfect for discovering and sharing innovative design concepts.</p>
             <div className="card-container">
        <div className="card-icon"><FaUtensils /></div>
        <div className="card-icon"><FaBed /></div>
        <div className="card-icon"><FaCouch /></div>
        <div className="card-icon"><FaBath /></div>
        <div className="card-icon"><FaHome /></div>
        <div className="card-icon"><FaStore /></div>
      </div>
        </div>
        <div className="right">
          <div className="blank"></div>
          <img src = "https://th.bing.com/th/id/OIP.mwFBR-YVmmZc2u052pdzrAHaE6?w=900&h=597&rs=1&pid=ImgDetMain" alt= "about" style = {{ width:'35vw',height:'60vh'}} className="about"/>
        </div>
      </div>
      <div className="main-con3">
      <div className="con3">
        <h1> SERVICES WE DO</h1>
        <h3>A wall for our Project and a place to find more</h3>
        </div>
        <div className="row">
      <div className="column">
        <div className="card">
          <img src="https://i.pinimg.com/originals/10/0d/95/100d9527c5ac99b49bfdab4368b51395.jpg" alt="Card 1" className="card-image" style={{width:'100%'}} />
          <h3>MODULAR KITCHEN</h3>
          <p>Explore sleek, space-saving modular kitchens with customizable designs for a perfect blend of style and functionality.</p>
          <div className="hero-buttons">
            <Link to ="/kitchen">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/245e48fc-514d-4ccc-acd1-be5e639ecefc/1cff6027e43ee70feb6c488221a7f663.png" alt="Card 2" className="card-image" style={{width:'100%'}} />
          <h3>BEDROOM</h3>
          <p>Discover serene bedroom designs that combine comfort and elegance, creating a peaceful retreat tailored to your style.</p>
          <div className="hero-buttons">
            <Link to = "/bedroom">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://www.livingroomideas.eu/wp-content/uploads/2020/05/black-2-1.jpg" alt="Card 3" className="card-image"style={{width:'100%'}} />
          <h3>LIVING ROOM</h3>
          <p>Transform your living room with stylish and elegance designs that blend comfort for the perfect gathering space.</p>
          <div className="hero-buttons">
            <Link to ="/living">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
        <div className="row">
      <div className="column">
        <div className="card">
          <img src="https://i.shelterness.com/2019/04/a-stunning-black-masculine-bathroom-done-with-black-marble-a-matte-black-bathtub-and-a-floating-vanity.jpg" alt="Card 1" className="card-image" style={{width:'100%'}} />
          <h3>BATHROOM</h3>
          <p>Explore sleek, space-saving modular bathroom with customizable designs for a perfect blend of style and functionality.</p>
          <div className="hero-buttons">
            <Link to ="bathroom">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://i.pinimg.com/originals/9e/50/e3/9e50e3818fc7667310b9e97a97d2919a.jpg" alt="Card 2" className="card-image" style={{width:'100%',height:'41vh'}} />
          <h3>HOME OFFICE</h3>
          <p>Discover serene homeoffice designs that combine comfort and elegance, creating a peaceful retreat tailored to your style.</p>
          <div className="hero-buttons">
            <Link to = "/office">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://pepuphome.com/wp-content/uploads/2020/02/Smart-And-Space-Saving-Storage-Solution_design-cafe.jpg" alt="Card 3" className="card-image"style={{width:'100%'}} />
          <h3>SPACE SAVING FURNITURE</h3>
          <p>Transform your living room with Space saving furniture that blend comfort for the perfect gathering space.</p>
          <div className="hero-buttons">
            <Link to ="/furniture">
          <button className="btn explore-btn">Explore Designs</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="con4">
      <h1>LATEST DESIGNS</h1>
      <div className="gallery">
      <span style={{ '--i': 1 }}>
        <img src="https://i0.wp.com/www.thedreamafrica.com/wp-content/uploads/2021/04/Contemporary_flair_living_room.jpg" alt="Design 1" />
      </span>
      <span style={{ '--i': 2 }}>
        <img src="https://i.pinimg.com/originals/38/20/4a/38204a306968763227097ea7f92799b2.jpg" alt="Design 2" />
      </span>
      <span style={{ '--i': 3 }}>
        <img src="https://i.pinimg.com/originals/e7/9c/f4/e79cf4a8c6520c22ce2d2083be9f0dcf.jpg" alt="Design 3" />
      </span>
      <span style={{ '--i': 4 }}>
        <img src="https://i.pinimg.com/originals/bc/f6/09/bcf609b3fdd7fb31c18f83a78c8c4149.jpg" alt="Design 4" />
      </span>
      <span style={{ '--i': 5 }}>
        <img src="https://www.sbid.org/wp-content/uploads/2019/08/Show-Flat-Design-by-INNEST-Interior-Design-Cover-Image.jpg" alt="Design 5" />
      </span>
      <span style={{ '--i': 6 }}>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2019/07/black-living-room-071619-min.jpg" alt="Design 6" />
      </span>
      <span style={{ '--i': 7 }}>
        <img src="https://i.pinimg.com/originals/36/11/4b/36114bc3af37d5fe7df7e16b83fe52c6.jpg" alt="Design 7" />
      </span>
      <span style={{ '--i': 8 }}>
        <img src="http://static1.squarespace.com/static/63dde481bbabc6724d988548/t/6474c978e8ff7e293840b22a/1685375352724/e569e76b8c3547f99458de5e1ddedb9e.png?format=1500w" alt="Design 8" />
      </span>
    </div>

    </div>
    </div>
  );
}

export default HomePage;
