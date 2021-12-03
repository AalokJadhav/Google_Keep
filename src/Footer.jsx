import React from "react";
import footer_image from './images/footer_logo.PNG'
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
                  <footer className="footer text-center text-white">
                <p>
                  <span className="footer_span" style={{float:'left', paddingLeft:'10%'}}> 
                  <img  src={footer_image}  style={{width:"90px"}} alt="" />
                   </span>
                  Made With <span style={{ color: 'red' }}>❤️</span> By Alok Jadhav
                  <span className="footer_span" style={{float:'right', paddingRight:'10%'}}> Copyright © {year} </span>
                  </p>
            </footer>
    </>
  )
}

export default Footer;