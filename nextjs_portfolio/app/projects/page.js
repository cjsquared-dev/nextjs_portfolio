import React from 'react';
import Image from 'next/image';
import styles from './projects.module.css';

const projects = [
    {
        title: 'Event Task Scheduler',
        imageUrl: '/images/eventscheduler.png',
        link: 'https://jacobbaqleh1.github.io/event-task-scheduler/',
    },
    {
        title: 'linkzen',
        imageUrl: '/images/linkzen.png',
        link: 'https://linkzen.onrender.com/',
    },
    {
        title: 'Krazy Kanban Board',
        imageUrl: '/images/krazy.png',
        link: 'https://krazy-kanbanboard.onrender.com/',
    },
];

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>My Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <Image src={project.imageUrl} alt={project.title} className={styles.image} width={500} height={300} />
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;