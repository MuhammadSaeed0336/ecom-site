import React from 'react'
import "./Contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Be in touch with us:</span>
        <div className="mail">
            <input type="email" name="" id=""  placeholder='Entern your email... '/>
            <button>Join Us</button>
        </div>
        <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
        </div>
      </div>
    </div>
  )
}

export default Contact
