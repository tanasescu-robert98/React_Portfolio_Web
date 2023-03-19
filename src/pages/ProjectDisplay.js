import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import YoutubeEmbed from "../YoutubeEmbed";
import { BrowserView, MobileView } from "react-device-detect";
import YoutubeIcon from "../assets/proj13.png";

function openInNewTab(url) {
  window.open(url, "_blank", "noreferrer");
}

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  if (id == 1) {
    return (
      <>
        <BrowserView>
          <div className="project">
            <h1> {project.name} </h1>
            <YoutubeEmbed embedId="F-AS4YTcAvo" />
            <center>
              <p>
                <b>Skills:</b> {project.skills}
              </p>
            </center>
            <GithubIcon onClick={() => openInNewTab(project.link)} />
          </div>
        </BrowserView>
        <MobileView>
          <div className="project2">
            <h1> {project.name} </h1>
            <img
              src={YoutubeIcon}
              onClick={() => openInNewTab("https://youtu.be/F-AS4YTcAvo")}
            />
            <p>
              <b>Skills:</b> {project.skills}
            </p>
            <GithubIcon onClick={() => openInNewTab(project.link)} />
          </div>
        </MobileView>
      </>
    );
  } else {
    return (
      <div className="project">
        <h1> {project.name} </h1>
        <img src={project.image} />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <GithubIcon onClick={() => openInNewTab(project.link)} />
      </div>
    );
  }
}

export default ProjectDisplay;
