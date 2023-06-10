import React from 'react';
import './EngineeringSchoolHomepage.css';
import logoImage from '../assets/uglogo1.jpeg';
import facebookLogo from '../assets/facebook-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

const EngineeringSchoolHomepage = () => {
  return (
    <div className="engineering-school-homepage">
      <div className="topbar">
        <img src={logoImage} alt="UG Logo" className="logo" />
        <h1 className="head1">University Of Ghana, Legon. School of Engineering Sciences</h1>
      </div>
      <div className="sectopbar">
        {/* Menu */}
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <a href="https://www.ug.edu.gh/home">UG website</a>
            <a href="https://engineering.ug.edu.gh/">School of Engineering</a>
            <a href="https://engineering.ug.edu.gh/administration">Administration</a>
            <a href="https://www.engineering.ug.edu.gh/home">Recent News</a>
            <a href="https://engineering.ug.edu.gh/">About</a>
          </div>
        </div>
  
        {/* Login/Register Buttons */}
        <div className="login-register">
          <button className="login-btn"><a href="/login">Login</a></button>
          <button className="register-btn"><a href="/register">Register</a></button>
        </div>
      </div>

      <div className="content">
        <div className="widget">
          <h2>Welcome to the School of Engineering Sciences!</h2>
          <p>Here is some information about our school:</p>
          <ul>
            <li>We are a leading engineering school in Ghana.</li>
            <li>We offer a variety of undergraduate and graduate programs in engineering.</li>
            <li>Our faculty are world-renowned experts in their fields.</li>
            <li>Our students have won numerous awards and honors.</li>
          </ul>
        </div>
        <div className="widget">
          <h2>What we offer</h2>
          <p>We offer a variety of programs and services to our students, including:</p>
          <ul>
            <li>Undergraduate and graduate programs in engineering</li>
            <li>Research opportunities</li>
            <li>Co-op and internship programs</li>
            <li>Career services</li>
            <li>Student organizations</li>
          </ul>
        </div>
        <div className="widget">
          <h2>Why choose us?</h2>
          <p>There are many reasons to choose the School of Engineering Sciences, including:</p>
          <ul>
            <li>Our world-renowned faculty</li>
            <li>Our state-of-the-art facilities</li>
            <li>Our strong alumni network</li>
            <li>Our commitment to diversity and inclusion</li>
          </ul>
        </div>
        <div className="widget">
          <h2>Get involved</h2>
          <p>There are many ways to get involved at the School of Engineering Sciences, including:</p>
          <ul>
            <li>Joining a student organization</li>
            <li>Volunteering your time</li>
            <li>Attending events</li>
            <li>Participating in research</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com"><img src={facebookLogo} alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src={twitterLogo} alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src={instagramLogo} alt="Instagram" /></a>
        </div>

        <div className="footer-sections">
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="blog-section">
            <h3>Latest Blog Posts</h3>
            <ul>
              <li>Blog Post 1</li>
              <li>Blog Post 2</li>
              <li>Blog Post 3</li>
            </ul>
          </div>

          <div className="testimonials-section">
            <h3>Student Testimonials</h3>
            <div className="testimonial">
              <p>"The University of Ghana, Legon has provided me with an exceptional engineering education. The dedicated faculty, modern facilities, and vibrant campus community have made my learning experience truly enriching. I am proud to be a part of this prestigious institution."
</p>
              <span>- Daniel Doe, Engineering Student</span>
            </div>
            <div className="testimonial">
              <p>"At the University of Ghana, Legon, I have found a nurturing environment for my engineering studies. The university's strong emphasis on practical learning, collaborative atmosphere, and opportunities for research have helped me develop valuable skills and connections. I am grateful for the holistic education I am received at Legon."</p>
              <span>- Nana Kwame, Engineering Alumni</span>
            </div>
          </div>

          <div className="donate-button">
            <h3>Support Our School</h3>
            <button>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringSchoolHomepage;
