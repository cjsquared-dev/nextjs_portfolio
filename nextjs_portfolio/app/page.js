import Image from 'next/image';
import styles from 'globals';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <h1>Welcome to CJSquared&apos;s First Next JS App</h1>
      <div className={styles.imageContainer}>
        <Image
          src="/images/cjsquared.png"
          alt="Headshot"
          width={300}
          height={300}
          className={styles.roundedImage}
        />
      </div>
      <p className={styles.paragraph}>
        Hi there! I&apos;m Chris, an Information Security and Cyber Security professional who&apos;s decided to spread his wings into the world of full stack web development. I&apos;m a graduate of the University of Utah and have returned to participate in the University&apos;s Software Development Coding Bootcamp! I would like to bring my security background and perspective to the world of web development. I&apos;m a lifelong learner who&apos;s always looking for new challenges and opportunities to grow in the tech industry. I&apos;m excited to see where this journey takes me and look forward to putting my new and developing skills to work!
      </p>
    </div>
    </Layout>
  );
}