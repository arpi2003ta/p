import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      
      {/* Horizontal Flex Container for Buttons */}
      <div className="project__links">
        <a
          href={item.demoLink}
          className="project__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo <FaExternalLinkAlt className="project__icon" />
        </a>
        <a
          href={item.githubLink}
          className="project__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FaGithub className="project__icon" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
