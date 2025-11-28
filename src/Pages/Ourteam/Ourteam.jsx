import React from 'react'
import './Ourteam.css'
import blog8 from '../../assets/blog8.jpg'
import blog9 from '../../assets/blog9.jpg'
import blog10 from '../../assets/blog10.jpg'
import blog11 from '../../assets/blog11.jpg'
import blog12 from '../../assets/blog12.jpg'
import blog13 from '../../assets/blog13.jpg'
import facebook from '../../assets/facebook.png'
import twiter from '../../assets/twiter.png'
import instegram from '../../assets/instegram.png'
import linkedin from '../../assets/linkedin.png'






function Ourteam() {

    const socialLinks = [
        { icon: facebook, url: "https://facebook.com/" },
        { icon: twiter, url: "https://twiter.com/" },
        { icon: instegram, url: "https://instegram.com/" },
        { icon: linkedin, url: "https://linkedin.com/" }
    ];

    const teamMembers = [
        { img: blog8, name: "Dr. Addition Smith", role: "Dentist" },
        { img: blog9, name: "Dr. Mahfuz Riad", role: "Chiropractor" },
        { img: blog10, name: "Dr. David Benjamin", role: "Cardiologist" },
        { img: blog11, name: "Dr. Addition Smith", role: "Dentist" },
        { img: blog12, name: "Dr. Mahfuz Riad", role: "Chiropractor" },
        { img: blog13, name: "Dr. David Benjamin", role: "Cardiologist" }
    ];



    return (
        <>

            <div className="Our-team">
                <div className="container">
                    <h2>Our Team</h2>
                    <div className="row">
                        {teamMembers.map((member, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-4">
                                    <div className="img">
                                        <img src={member.img} alt={member.img} className='img-fluid' />
                                        <h3>{member.name}</h3>
                                        <p>{member.role}</p>
                                        <div className="socialmedia">
                                            <ul>
                                                {socialLinks.map((socialItem, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <a href={socialItem.url} target='_blank' rel='noreferrer'>
                                                                <img src={socialItem.icon} alt={socialItem.icon} />
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


        </>
    )
}
export default Ourteam;




















































































// function Ourteam() {
//     return (
//         <>
//             <div className="Our-team">
//                 <div className="container">
//                     <h2>Our Team</h2>
//                     <div className="imags">
//                         <div className="row">
//                             <div className="col-12 col-md-6 col-lg-4">
//                                 <div className="img">
//                                     <img src={blog8} alt="blog8" className="img-fluid" />
//                                     <h3>Dr. Addition Smith</h3>
//                                     <p>Dentist</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>



//                             <div className="col-12 col-md-6 col-lg-4">

//                                 <div className="img">
//                                     <img src={blog9} alt="blog9" className="img-fluid" />
//                                     <h3>Dr. Mahfuz Riad</h3>
//                                     <p>Chiropractor</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>


//                             <div className="col-12 col-md-6 col-lg-4">

//                                 <div className="img">
//                                     <img src={blog10} alt="blog10" className="img-fluid" />
//                                     <h3>Dr. David Benjamin</h3>
//                                     <p>Cardiologist</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>


//                             <div className="col-12 col-md-6 col-lg-4">

//                                 <div className="img">
//                                     <img src={blog11} alt="blog11" className="img-fluid" />
//                                     <h3>Dr. Addition Smith</h3>
//                                     <p>Dentist</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>


//                             <div className="col-12 col-md-6 col-lg-4">

//                                 <div className="img">
//                                     <img src={blog12} alt="blog12" className="img-fluid" />
//                                     <h3>Dr. Mahfuz Riad</h3>
//                                     <p>Chiropractor</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>


//                             <div className="col-12 col-md-6 col-lg-4">

//                                 <div className="img">
//                                     <img src={blog13} alt="blog13" className="img-fluid" />
//                                     <h3>Dr. David Benjamin</h3>
//                                     <p>Cardiologist</p>
//                                     <div className="socialmedia">
//                                         <ul>
//                                             <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a></li>
//                                             <li><a href="https://twite.com/" target="_blank" rel="noreferrer"><img src={twiter} alt="twiter" /></a></li>
//                                             <li><a href="https://www.instegram.com/" target="_blank" rel="noreferrer"><img src={instegram} alt="instegram" /></a></li>
//                                             <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>





//         </>
//     )
// }

// export default Ourteam