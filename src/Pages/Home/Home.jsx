import React from 'react'
import './Home.css'
import blog4 from '../../assets/blog4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button type="button" className="btn">Read More</button>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="header-box">
              <div className="icon">
              <FontAwesomeIcon icon={faSquare} />
                <img src={blog4} className='img-fluid' alt="blog4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;