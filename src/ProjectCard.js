import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './ProjectCard.css';



const ProjectCard = ({imgSrc, title, desc, link}) => {
    return (
        <div className="project-card">
            

            <div className="card">
                {link !== false &&
                <>
                <a href={link}>
                    <img
                        alt={title + " demo picure"}
                        src={imgSrc}
                        className="card-img-top"
                    />
                </a>
                </>
                }
                {link === false &&
                <>
                <img
                    alt={title + " demo picure"}
                    src={imgSrc}
                    className="card-img-top"
                />
                </>
                }

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;