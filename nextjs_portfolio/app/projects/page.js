import React from 'react';
import styles from './projects.module.css';

const projects = [
    {
        title: 'Project 1',
        imageUrl: '/images/project1.png',
        link: 'https://deployed-web-app1.com',
    },
    {
        title: 'Project 2',
        imageUrl: '/images/project2.png',
        link: 'https://deployed-web-app2.com',
    },
    {
        title: 'Project 3',
        imageUrl: '/images/project3.png',
        link: 'https://deployed-web-app3.com',
    },
];

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>My Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <img src={project.imageUrl} alt={project.title} className={styles.image} />
                        <h3>{project.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;