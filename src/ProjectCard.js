import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = ({imgSrc, title, desc}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    src={imgSrc}
                    className="card-img-top"
                />
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