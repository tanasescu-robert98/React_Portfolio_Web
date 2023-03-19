import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function openInNewTab(url) {
    window.open(url, '_blank', 'noreferrer');
  };

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/tanasescurobert98/')}/>
            <GithubIcon onClick={() => openInNewTab('https://github.com/tanasescu-robert98')}/>
            <YoutubeIcon onClick={() => openInNewTab('https://www.youtube.com/channel/UCyUcG_2ET2kHiaNDpkkD5yQ')}/>
            <FacebookIcon onClick={() => openInNewTab('https://www.facebook.com/andrey.pc.1')}/>
        </div>
        <p> &copy; 2023 tanasescu-robert98</p>
    </div>
  )
}

export default Footer