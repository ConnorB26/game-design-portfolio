import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaGooglePlay,
    FaCode, FaGamepad, FaBone, FaCamera, FaVideo, FaCodeBranch,
    FaStickyNote, FaFilePdf, FaGlobe
} from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import gamesData from '../data/games.json';
import './HomePage.css';

const gameCount = gamesData.length;
const startYear = Math.min(...gamesData.map((g) => g.year));

const stats = [
    { value: gameCount, label: 'Games' },
    { value: startYear, label: 'Started' },
    { value: 'C# · C++ · Java', label: 'Languages' },
    { value: 'Unity · Unreal', label: 'Engines' },
];

const milestones = [
    {
        year: '2014',
        text: 'Attended a summer camp at age 12 and discovered a passion for game design. Started building 2D games and quickly fell in love with the process.',
    },
    {
        year: '2015 - 2019',
        text: 'Incorporated game design into school projects throughout middle and high school, using it as a creative outlet whenever possible.',
    },
    {
        year: '2021',
        text: 'Joined the Texas Aggie Game Developers organization at Texas A&M. Participated in semester-long game jams with a growing focus on Unreal Engine.',
    },
    {
        year: '2022 - 2023',
        text: 'Designed and developed a Unity game for handwriting-skill research at the Sketch Recognition Lab, integrating real-time data capture as part of an undergraduate thesis.',
    },
    {
        year: '2024',
        text: 'Graduated from Texas A&M with a B.S. in Computer Science. Began a career as a Software Engineer, temporarily stepping back from game development.',
    },
    {
        year: '2026',
        text: 'Returning to game development for fun. Currently building an online multiplayer card game in Unity.',
    },
];

const skillGroups = [
    { icon: FaCode,        label: 'Languages',        items: ['C#', 'C++', 'Java'] },
    { icon: FaGamepad,     label: 'Game Engines',      items: ['Unity', 'Unreal Engine'] },
    { icon: FaBone,        label: 'Modeling & Rigging', items: ['Blender'] },
    { icon: FaCamera,      label: 'Image Editing',     items: ['Photoshop', 'GIMP', 'Paint Shop Pro'] },
    { icon: FaVideo,       label: 'Video Editing',     items: ['HitFilm Express', 'Windows Video Editor'] },
    { icon: FaCodeBranch,  label: 'Source Control',    items: ['Git'] },
    { icon: FaStickyNote,  label: 'Organization',      items: ['Trello', 'Microsoft Word'] },
];

const contactLinks = [
    {
        icon: FaGlobe,
        label: 'Personal Portfolio',
        desc: 'connorbowling.com',
        href: 'https://connorbowling.com/',
        color: 'var(--color-accent)',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        desc: 'connor-bowling',
        href: 'https://www.linkedin.com/in/connor-bowling/',
        color: '#0A66C2',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        desc: 'ConnorB26',
        href: 'https://www.github.com/ConnorB26',
        color: '#e6edf3',
    },
    {
        icon: FaYoutube,
        label: 'YouTube',
        desc: 'Bowling Game Design',
        href: 'https://www.youtube.com/channel/UC7BMrUMx2Ox0RQjxNJDK1jQ',
        color: '#FF0000',
    },
    {
        icon: FaGooglePlay,
        label: 'Google Play',
        desc: 'BowlingGames',
        href: 'https://play.google.com/store/apps/developer?id=BowlingGames',
        color: '#34A853',
    },
    {
        icon: FaEnvelope,
        label: 'Game Design Email',
        desc: 'bowlinggamedesign@gmail.com',
        href: 'mailto:bowlinggamedesign@gmail.com',
        color: 'var(--color-secondary)',
    },
    {
        icon: FaEnvelope,
        label: 'Personal Email',
        desc: 'connorbowling26@gmail.com',
        href: 'mailto:connorbowling26@gmail.com',
        color: 'var(--color-secondary)',
    },
    {
        icon: FaFilePdf,
        label: 'Resume',
        desc: 'View PDF',
        href: 'https://drive.google.com/file/d/1xVSFtmVFo54qaA_uwgGYNh_F-e0wqIXH/view',
        color: 'var(--color-accent)',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const HomePage = () => {
    return (
        <PageTransition>
            <Container>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    {/* Introduction */}
                    <section>
                        <motion.h1 variants={itemVariants}>Introduction</motion.h1>
                        <motion.p variants={itemVariants}>
                            Howdy! My name is Connor Bowling. I graduated from Texas A&M University with a B.S. in Computer Science and currently work as a Software Engineer.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Game design has been a passion of mine since I was 12. This site showcases the games I've built over the years and the ones I'm most proud of. Feel free to explore, learn more about each one, and try them out for yourself!
                        </motion.p>
                    </section>

                    {/* Stats */}
                    <Row as={motion.div} variants={containerVariants} className="stats-row">
                        {stats.map((stat) => (
                            <Col key={stat.label} xs={6} md={3} as={motion.div} variants={itemVariants}>
                                <div className="stat-card">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Journey Timeline */}
                    <section>
                        <motion.h2 variants={itemVariants}>My Journey With Game Design</motion.h2>
                        <div className="timeline">
                            <motion.div className="timeline-line" variants={itemVariants} />
                            {milestones.map((m) => (
                                <motion.div key={m.year} className="timeline-entry" variants={itemVariants}>
                                    <div className="timeline-year">{m.year}</div>
                                    <p>{m.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Skills & Tools */}
                    <section>
                        <motion.h2 variants={itemVariants}>Skills &amp; Tools</motion.h2>
                        <motion.p variants={itemVariants}>
                            Game design pushed me to pick up a wide range of tools and disciplines over the years.
                        </motion.p>
                        <Row as={motion.div} variants={containerVariants} className="skills-row">
                            {skillGroups.map((group) => {
                                const Icon = group.icon;
                                return (
                                    <Col key={group.label} xs={6} sm={4} lg={3} as={motion.div} variants={itemVariants}>
                                        <div className="skill-card">
                                            <Icon className="skill-card-icon" />
                                            <span className="skill-card-label">{group.label}</span>
                                            <div className="skill-tags">
                                                {group.items.map((item) => (
                                                    <span key={item} className="skill-tag">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </section>

                    {/* Connect */}
                    <section className="connect-section">
                        <motion.h2 variants={itemVariants}>Connect</motion.h2>
                        <motion.p variants={itemVariants}>
                            Feel free to reach out or find me across the web.
                        </motion.p>
                        <Row as={motion.div} variants={containerVariants} className="links-row">
                            {contactLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Col key={link.label} xs={6} sm={4} md={3} as={motion.div} variants={itemVariants}>
                                        <motion.a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-card"
                                            whileHover={{ y: -4, scale: 1.03 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ '--link-color': link.color }}
                                        >
                                            <Icon className="link-card-icon" style={{ color: link.color }} />
                                            <span className="link-card-label">{link.label}</span>
                                            <span className="link-card-desc">{link.desc}</span>
                                        </motion.a>
                                    </Col>
                                );
                            })}
                        </Row>
                    </section>
                </motion.div>
            </Container>
        </PageTransition>
    );
};

export default HomePage;
