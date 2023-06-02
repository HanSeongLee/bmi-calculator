import type { NextPage } from 'next'
import React from 'react';
import styles from './style.module.scss';
import HeroSection from 'components/sections/HeroSection';
import Header from 'components/commons/Header';
import Container from 'components/commons/Container';
import IntroSection from 'components/sections/IntroSection';
import GuidelineSection from 'components/sections/GuidelineSection';
import LimitationSection from 'components/sections/LimitationSection';

const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <main className={styles.main}>
                <HeroSection className={styles.heroSection} />
                <IntroSection className={styles.introSection} />
                <GuidelineSection />
                <LimitationSection />
            </main>
        </>
    );
};

export default Home
