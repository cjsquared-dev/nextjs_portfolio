'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setName('');
            setEmail('');
            setMessage('');
            setIsSubmitted(true);
        } else {
            console.error('Failed to submit the form');
        }
    };

    return (
        <div className={styles.form}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={styles.formControl}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={styles.formControl}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        className={styles.formControl}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.mt2}`}>Send Message</button>
            </form>
            {isSubmitted && <p className={`${styles.textSuccess} ${styles.mt2}`}>Message Sent Successfully!</p>}
        </div>
    );
};

export default Contact;