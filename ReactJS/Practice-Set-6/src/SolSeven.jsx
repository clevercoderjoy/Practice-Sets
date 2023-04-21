import React, { useEffect, useState } from "react";
import "./App.css";

export const SolSeven = ({ fetchSeven }) => {
    const [project, setProject] = useState({ loading: true, allProjects: [] });
    const getProjects = async () => {
        try {
            const response = await fetchSeven(
                "https://example.com/api/projects"
            );
            const { status, data } = response;
            if (status === 200) {
                setProject((project) => ({
                    ...project,
                    allProjects: data.projects,
                    loading: false,
                    projectTitle: "",
                    projectDesc: "",
                    projectTech: "",
                    projectCompletion: "",
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const showProjectDetails = (index) => {
        const filterProject = project.allProjects.filter(
            (currProject, i) => i === index
        );
        console.log();
        setProject((project) => ({
            ...project,
            projectTitle: filterProject[0].title,
            projectDesc: filterProject[0].description,
            projectTech: filterProject[0].technologies,
            projectCompletion: filterProject[0].completed,
        }));
    };
    useEffect(() => {
        // getProjects();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 7</h2>
            <h3>{project.loading && "Loading..."}</h3>
            <div
                style={{
                    textAlign: "left",
                    display: project.loading ? "none" : "block",
                }}
            >
                <div>
                    <h3>Projects</h3>
                    {project.allProjects.map(
                        ({ title, description }, index) => (
                            <div key={index}>
                                <p>
                                    <strong>Name: </strong>
                                    {title}
                                </p>
                                <p>
                                    <strong>Description: </strong>
                                    {description}
                                </p>
                                <button
                                    onClick={() => showProjectDetails(index)}
                                >
                                    Show Details
                                </button>
                            </div>
                        )
                    )}
                </div>
                <div>
                    <h3>Project Details</h3>
                    <p>
                        <strong>Title: </strong>
                        {project.projectTitle}
                    </p>
                    <p>
                        <strong>Description: </strong>
                        {project.projectDesc}
                    </p>
                    <p>
                        <strong>Technologies: </strong>
                        {project.projectTech}
                    </p>
                    <p>
                        <strong>Completed: </strong>
                        {project.projectCompletion + ""}
                    </p>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
};
