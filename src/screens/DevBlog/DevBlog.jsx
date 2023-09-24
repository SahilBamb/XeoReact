import React from "react";
import "./style.css";

export const DevBlog = () => {
  return (
    <div className="dev-blog">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="main-card" alt="Main card" src="/img/main-card.png" />
          <div className="tech-stack">
            <div className="docker-group">
              <div className="overlap-group">
                <div className="text-wrapper">Docker</div>
                <div className="rectangle" />
                <img className="docker-icon" alt="Docker icon" src="/img/docker-icon.svg" />
              </div>
            </div>
            <div className="react-group">
              <div className="overlap-group">
                <div className="text-wrapper">React.js</div>
                <div className="rectangle" />
                <img className="react-icon" alt="React icon" src="/img/react-icon.svg" />
              </div>
            </div>
            <div className="figma-group">
              <div className="overlap-group">
                <div className="text-wrapper">Figma</div>
                <div className="rectangle" />
                <img className="figma-icon" alt="Figma icon" src="/img/figma-icon.svg" />
              </div>
            </div>
            <div className="node-group">
              <div className="overlap-group">
                <div className="text-wrapper">Node.js</div>
                <div className="rectangle" />
                <img className="node-icon" alt="Node icon" src="/img/node-icon.svg" />
              </div>
            </div>
            <div className="javascript-group">
              <div className="overlap-group">
                <div className="text-wrapper">JavaScript</div>
                <div className="rectangle" />
                <img className="java-script" alt="Java script" src="/img/javascript.svg" />
              </div>
            </div>
            <div className="group">
              <div className="overlap-group">
                <div className="div">CSS3</div>
                <div className="rectangle" />
                <img className="icon" alt="Icon" src="/img/css3-icon.svg" />
              </div>
            </div>
            <div className="html-group">
              <div className="overlap-group">
                <div className="text-wrapper-2">HTML5</div>
                <img className="icon" alt="Icon" src="/img/html5-icon.svg" />
                <div className="rectangle" />
              </div>
            </div>
            <div className="text-wrapper-3">Tech Stack</div>
          </div>
          <div className="top-title">
            <div className="overlap-2">
              <p className="p">(mostly nerdy stuff for engineers)</p>
              <div className="text-wrapper-4">Dev Blog</div>
            </div>
          </div>
          <img className="sahiltopbody" alt="Sahiltopbody" src="/img/sahiltopbody-1.png" />
        </div>
      </div>
    </div>
  );
};
