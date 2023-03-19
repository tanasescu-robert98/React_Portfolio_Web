import React from 'react'
import {useParams} from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
};

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return ( <div className='project'>
    <h1> {project.name} </h1>
    <img src={project.image} />
    <p>
        <b>Skills:</b> {project.skills}
    </p>
    <GithubIcon onClick={() => openInNewTab(project.link)}/>
  </div>
  );
}

export default ProjectDisplay