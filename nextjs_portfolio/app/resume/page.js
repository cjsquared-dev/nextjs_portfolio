import styles from './resume.module.css';

export default function Resume() {
    return (
        <div className="container my-5">
            <header className="text-left mb-4">
                <h1>Chris Johnson</h1>
            </header>

            <section className='text-left mb-4'>
                <a href="/assets/resume.pdf" download className={styles.downloadButton}>
                    Download Resume
                </a>
            </section>

            <section className="text-left mb-4">
                <h2>Summary</h2>
                <p>
                    Seasoned Cyber Security professional with a Master of Science in Information Systems from the University of Utah.
                    Currently working as a Senior Security Partner at Adobe, Inc. in Lehi, UT.
                    Currently studying Full Stack Web development to earn proficiencies in JavaScript, React, HTML/CSS, MERN Stack, and SQL to transition into a career in Software Engineering within the Security Industry.
                </p>
            </section>

            <section className="mb-4">
                <h2>Proficiencies</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">HTML/CSS</li>
                    <li className="list-group-item">MERN Stack</li>
                    <li className="list-group-item">SQL</li>
                </ul>
            </section>
        </div>
    );
}