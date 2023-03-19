import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
};

function Home() {
  return (
    <div className='home'> 
      <div className='about'> 
        <h2> Hi, My Name Is Robert</h2>
        <div className='prompt'>
          <p> 
            A software developer with a passion for learning and creating.
          </p>
          <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/tanasescurobert98/')}/>
          <EmailIcon />
          <GithubIcon onClick={() => openInNewTab('https://github.com/tanasescu-robert98')}/>
        </div>
      </div>
      <div className='skills'> 
      <h1> Skills</h1>
      <ol className='list'>
        <li className="item">
          <h2> Programming Skills</h2>
          <span> 
          C, C++, C#, Java, JavaScript, HTML, CSS, Python, Oracle SQL, ReactJS
          </span>
        </li>
        <li className="item">
          <h2> Digital Skills</h2>
          <span> 
          Experienced user with Microsoft Office, Linux Operating Systems, Davinci Resolve, Unity Game Engine
          </span>
        </li>
        <li className="item">
          <h2> Languages</h2>
          <span> Romanian (mother tongue), English (First Certificate B2), French</span>
        </li>
      </ol>
      </div>
    </div>
  )
}

export default Home