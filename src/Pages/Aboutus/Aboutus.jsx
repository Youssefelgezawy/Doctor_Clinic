import React from 'react'
import './Aboutus.css'
import blog5 from '../../assets/blog5.jpg'
import blog6 from '../../assets/blog6.jpg'
import blog7 from '../../assets/blog7.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyringe } from '@fortawesome/free-solid-svg-icons'



function Aboutus() {
  return (
    <>
      <div className="About-Us">
        <div className="container">
          <div className="addres">
            <h2>About Us</h2>
          </div>

          <div className="cards">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="about-img">
                  <img className='blog5' src={blog5} alt="blog5" />
                  <img className='blog6' src={blog6} alt="blog6" />
                  <img className='blog7' src={blog7} alt="blog7" />
                  <p>20 <span>Year Experience</span></p>
                </div>
              </div>






              <div className="col-md-6">
                <div className="About-card">
                  <div className="top-card">
                    <h6>About Us</h6>
                    <h1>The Great Place Of Medical Hospital Center</h1>
                    <p>We provide the special tips and advice’s of heath care treatment
                      and high level of best technology involve in the our hospital.</p>
                  </div>
                 <div className="button-card row g-3">
                    <div className="col-6 "><button><i className="bi bi-truck"></i><span>Emergency Help</span></button></div>
                    <div className="col-6"><button><i className="bi bi-hospital-fill"></i><span>Emergency Help</span></button></div>
                    <div className="col-6"><button><i className="bi bi-droplet-fill"></i><span>Emergency Help</span></button></div>
                    <div className="col-6"><button><FontAwesomeIcon icon={faSyringe} /><span>Emergency Help</span></button></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Aboutus;




