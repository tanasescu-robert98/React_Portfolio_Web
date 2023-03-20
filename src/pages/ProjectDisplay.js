import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeEmbed from "../YoutubeEmbed";
import { BrowserView, MobileView } from "react-device-detect";
import YoutubeIcon from "../assets/proj13.png";

import "../styles/ProjectDisplay.css";
import "../styles/Gallery.css";

import proj1_a from "../assets/Gallery/proj1_a.png";
import proj1_b from "../assets/Gallery/proj1_b.png";
import proj1_c from "../assets/Gallery/proj1_c.png";

import proj2_a from "../assets/Gallery/proj2_a.jpg";

import proj3_a from "../assets/Gallery/proj3_a.jpg";
import proj3_b from "../assets/Gallery/proj3_b.png";
import proj3_c from "../assets/Gallery/proj3_c.png";

import proj4_a from "../assets/Gallery/proj4_a.png";

import proj5_a from "../assets/Gallery/proj5_a.jpg";

function openInNewTab(url) {
  window.open(url, "_blank", "noreferrer");
}

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const proj1_images = [
    { id: 0, value: proj1_a },
    { id: 1, value: proj1_b },
    { id: 2, value: proj1_c },
  ];

  const proj2_images = [
    { id: 0, value: proj2_a },
  ];

  const proj3_images = [
    { id: 0, value: proj3_a },
    { id: 1, value: proj3_b },
    { id: 2, value: proj3_c },
  ];

  const proj4_images = [
    { id: 0, value: proj4_a },
  ];

  const proj5_images = [
    { id: 0, value: proj5_a },
  ];

  const [wordData, setWordData] = useState(proj1_images[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = proj1_images[index];
    setWordData(wordSlider);
  };

  const [wordData2, setWordData2] = useState(proj2_images[0]);
  const handleClick2 = (index) => {
    console.log(index);
    const wordSlider2 = proj2_images[index];
    setWordData2(wordSlider2);
  };

  const [wordData3, setWordData3] = useState(proj3_images[0]);
  const handleClick3 = (index) => {
    console.log(index);
    const wordSlider3 = proj3_images[index];
    setWordData3(wordSlider3);
  };

  const [wordData4, setWordData4] = useState(proj4_images[0]);
  const handleClick4 = (index) => {
    console.log(index);
    const wordSlider4 = proj4_images[index];
    setWordData4(wordSlider4);
  };

  const [wordData5, setWordData5] = useState(proj5_images[0]);
  const handleClick5 = (index) => {
    console.log(index);
    const wordSlider5 = proj5_images[index];
    setWordData5(wordSlider5);
  };
  

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

      if(id == 0)
      {
          return (
        <>
        <BrowserView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData.value} height="500" width="850" />
                <div className="flex_row">
                  {proj1_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </BrowserView>
        <MobileView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData.value} height="200" width="300" />
                <div className="flex_row">
                  {proj1_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </MobileView>
        </>
          );
      }

      if(id == 2)
      {
          return (
        <>
        <BrowserView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData2.value} height="500" width="850" />
                <div className="flex_row">
                  {proj2_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData2.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick2(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </BrowserView>
        <MobileView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData2.value} height="200" width="300" />
                <div className="flex_row">
                  {proj2_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData2.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick2(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </MobileView>
        </>
          );
      }

      if(id == 3)
      {
          return (
            <>
        <BrowserView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData3.value} height="500" width="850" />
                <div className="flex_row">
                  {proj3_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData3.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick3(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </BrowserView>
        <MobileView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData3.value} height="200" width="300" />
                <div className="flex_row">
                  {proj3_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData3.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick3(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </MobileView>
        </>
          );
      }

      if(id == 4)
      {
          return (
            <>
        <BrowserView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData4.value} height="500" width="850" />
                <div className="flex_row">
                  {proj4_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData4.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick4(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </BrowserView>
        <MobileView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData4.value} height="200" width="300" />
                <div className="flex_row">
                  {proj4_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData4.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick4(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </MobileView>
        </>
          );
      }

      if(id == 5)
      {
          return (
            <>
        <BrowserView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData5.value} height="500" width="850" />
                <div className="flex_row">
                  {proj5_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData5.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick5(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </BrowserView>
        <MobileView>
        <><div className="project">
              <h1> {project.name} </h1>
            </div><div className="main">
                <img src={wordData5.value} height="200" width="300" />
                <div className="flex_row">
                  {proj5_images.map((data, i) => (
                    <div className="thumbnail" key={i}>
                      <img
                        className={wordData5.id == i ? "clicked" : ""}
                        src={data.value}
                        onClick={() => handleClick5(i)}
                        height="70"
                        width="100" />
                    </div>
                  ))}
                </div>
              </div><div className="project">
                <p>
                  <b>Skills:</b> {project.skills}
                </p>
                <GithubIcon onClick={() => openInNewTab(project.link)} />
              </div></>
        </MobileView>
        </>
          );
      }

    }
}

export default ProjectDisplay;
