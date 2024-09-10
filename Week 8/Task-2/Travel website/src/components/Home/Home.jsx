import React from 'react'
import './Home.css'
import dubai from '../../assets/dubai.jpg'
import food from '../../assets/food.png'
import london from '../../assets/london.jpg'
import machupicchu from '../../assets/Machu picchu.jpg'
import mountain from '../../assets/mountain.png'
import newyork from '../../assets/new york.jpg'
import ship from '../../assets/ship.png'
import sunrise from '../../assets/sunrise.png'

const Home = () => {
  return (
    <>
      <header class="header">
        <a href="#home" class="logo">Travel Holidays</a>
          <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#package">Package</a>
            <a href="#destination">Destination</a>
            <a href="#contact">Contact</a>
          </nav>
      </header>  

      <section class="home" id="home">
        <div class="home-content">
          <h1>Fuel Mind<br/>Travel</h1>
          <p>Enthusiastically extend extensive customer service <br/> before best breed convergence completely.</p>
          <a href="#">Let's go now</a>
        </div>
      </section>

      <section class="container">
        <div class="text">
          <h2>Start Your Vacation <br/> with Lots of services!</h2>
        </div>

        <div class="row-items">

          <div class="container-box">
            <div class="container-img">
              <img src={ship} />
            </div>
            <h4>Ship Cruises</h4>
            <p>150 Properties</p>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src={food}/>
            </div>
            <h4>Food Tours</h4>
            <p>150 Properties</p>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src={sunrise} />
            </div>
            <h4>Summer Rest</h4>
            <p>150 Properties</p>
          </div>

          <div class="container-box">
            <div class="container-img">
              <img src={mountain} />
            </div>
            <h4>Mountains Tours</h4>
            <p>150 Properties</p>
          </div>

        </div>
      </section>

      <section class="package" id="package">
        <div class="title">
          <h2>Our Upcoming <br/> Tour Package</h2>
        </div>

        <div class="package-content">
          <div class="box">
            <div class="thum">
              <img src={london} />
              <h3>₹39,999</h3>
            </div>

            <div class="dest-content">
              <div class="location">
                <h4>London</h4>
                <p>4h - 5h</p>
              </div>
              <div class="stars">
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="thum">
              <img src={newyork} />
              <h3>₹39,999</h3>
            </div>

            <div class="dest-content">
              <div class="location">
                <h4>New York</h4>
                <p>4h - 5h</p>
              </div>
              <div class="stars">
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
              </div>
            </div>
          </div>

          <div class="box">
            <div class="thum">
              <img src={dubai} />
              <h3>₹39,999</h3>
            </div>

            <div class="dest-content">
              <div class="location">
                <h4>Dubai</h4>
                <p>4h - 5h</p>
              </div>
              <div class="stars">
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
                <a href="#"><i class='bx bxs-star'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="destination" id="destination">
        <div class="title">
          <h2>Our Most Popular <br/> Destination</h2>
        </div>

        <div class="destination-content">
          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>

          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>

          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>

          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>

          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>

          <div class="col-content">
            <img src={machupicchu}/>
            <h5>Machu Picchu</h5>
            <p>Peru</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="contact-content">
          <div class="main">
            <div class="list">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Tour</a></li>
              </ul>
            </div>

            <div class="list">
              <h4>Support</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Tour</a></li>
              </ul>
            </div>

            <div class="list">
              <h4>Contact Info</h4>
              <ul>
                <li><a href="#">98 21th Street</a></li>
                <li><a href="#">Tamil Nadu Chennai - 600053 </a></li>
                <li><a href="#">+91 1234567890</a></li>
                <li><a href="#">info@mydomain.com</a></li>
                <li><a href="#">+91 1234567890</a></li>
              </ul>
            </div>

            <div class="list">
              <h4>Connect</h4>
              <div class="social">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-linkedin'></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright &copy;2024 All rights Reserved | Made with by Sanjay S</p>
      </footer>
    </>
  )
}

export default Home