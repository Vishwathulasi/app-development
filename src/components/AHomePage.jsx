import React from 'react'
import '../assets/css/HomePage.css'
// import bg from "../assets/images/pexels-wildlittlethingsphoto-696271.jpg"
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import XIcon from '@mui/icons-material/X';
// import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from './Footer'
import ANavBar from './ANavBar'
const HomePage = () => {
  return (
    <div>
        <ANavBar/>
        <section>
            <div className="image">
                <p className='midLine'>Dew Event Management</p>
                {/* <div className="callNow">
                    <button className='callNow'>CallNow</button>
                </div> */}
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default HomePage