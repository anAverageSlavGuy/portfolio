
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Iceberg from './img/iceberg.svg';
import Photo from './img/photo.jpg';
import { Github, Linkedin, Google, Telegram } from 'react-bootstrap-icons';

function HomeDesktop() {

    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [animate, setAnimate] = useState(false);

    const styles = {
        switch: {
            borderColor: toggle ? "#fff" : "#1d1d1d"
        },
        track: {
            background: toggle ? "#fff" : "#1d1d1d",
            top: toggle ? "66px" : "6px",
        },
        background: {
            height: toggle ? "100%" : "0%"
        },
        text: {
            color: toggle ? "#fff" : "#1d1d1d"
        },
        divider: {
            background: toggle ? "#fff" : "#1d1d1d"
        },
        title: {
            WebkitTextStroke: toggle ? "2px #fff" : "2px #1d1d1d"
        },
        pill: {
            borderColor: toggle ? "#fff" : "#1d1d1d"
        },
        circle: {
            background: toggle ? "#1d1d1d" : "#fff",
            borderColor: toggle ? "#fff" : "#1d1d1d"
        },
        circleFill: {
            background: toggle ? "#fff" : "#1d1d1d",
            borderColor: toggle ? "#1d1d1d" : "#fff"
        },
        line: {
            background: toggle ? "#fff" : "#1d1d1d"
        },
        skillsHeader: {
            background: toggle ? "#fff" : "#1d1d1d",
            color: toggle ? "#1d1d1d" : "#fff"
        },
        skillsCategory: {
            borderColor: toggle ? "#fff" : "#1d1d1d"
        },
        mouse: {
            opacity: scroll ? "0" : "1"
        },
        aboutStyle: {
            color: toggle ? "#1d1d1d" : "#fff"
        },
        aboutBackground: {
            height: toggle ? "0%" : "100%",
            zIndex: "-1"
        },
        socialsButtons: {
            color: toggle ? "#1d1d1d" : "#fff"
        },
        actionButtons: {
            borderColor: toggle ? "#1d1d1d" : "#fff"
        },
        photoStyle: {
            borderColor: toggle ? "#1d1d1d" : "#fff"
        }
    };

    const frontEndSkills = [{ "name": "LIBRARIES", "items": ["React JS", "Redux", "JQuery"] }, { "name": "LANGUAGES", "items": ["JavaScript", "HTML5", "CSS3"] }, { "name": "FRAMEWORKS CSS", "items": ["Materialize", "Bootstrap", "Tailwind"] }];
    const backEndSkills = [{ "name": "LANGUAGES", "items": ["Node JS", "PHP", "Python", "BASH"] }, { "name": "DATABASES", "items": ["MySQL", "Redis", "MongoDB"] }, { "name": "SOFT SKILLS", "items": ["REST API", "Git", "Web Servers", "AWS"] }];

    
    useEffect(() => {
        setTimeout(function () {
            setAnimate(true);
        }, 3000);
    }, []);


    const handleTransitionEnd = () => {
        console.log("transition end");
        //setScroll(false);
    }

    const handleWheelScroll = (e) => {

        if (e.deltaY > 0) {
            setScroll(true);
            setToggle(true);
            //setAnimate(true);
            console.log("scroll down", e.deltaY);
        } else {
            setScroll(true);
            setToggle(false);
            //setAnimate(true);
            console.log("scroll up", e.deltaY);
        }

    }

    return (
        <div className="app" onWheel={(e) => handleWheelScroll(e)}>
            <div className="container">


                {toggle ? (
                    <>
                        <div className="about" style={styles.aboutStyle}>
                            <div className="background" style={styles.aboutBackground}></div>
                            <div className="photo">
                                <img src={Photo} style={styles.photoStyle} />
                            </div>
                            <div className="bio">
                                Hi, i’m <span>Yev</span><br />
                                <hr />
                                I am a fullstack developer specialized in frontend and backend.
                                I have been working for about 6 years and I really want to learn new and stimulating things
                                because I like to range in the field of programming, from the deepness of the backend to fancy CSS.
                            </div>

                            <div className="action-buttons">
                                <NavLink to="/work"><button style={styles.actionButtons}>CHECK MY WORKS</button></NavLink>
                                <a href="https://drive.google.com/file/d/1pM4oc3kQyNZojflU5fSuNUNAC2DTHEch/view?usp=share_link" target="_blank"><button style={styles.actionButtons}>ASK FOR MY RESUME</button></a>
                            </div>

                            <div className="socials">
                                <a href="https://github.com/anAverageSlavGuy" target="_blank"><Github className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://www.linkedin.com/in/yevgeniy-shavlay-a023341a1/" target="_blank"><Linkedin className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://mail.google.com/mail/u/0/?fs=1&to=yev.shavlay@gmail.com&su=Software%20Developer%20Job&tf=cm" target="_blank"><Google className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://telegram.me/yev_sh" target="_blank"><Telegram className="socials-logo" style={styles.socialsButtons} /></a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="about" style={styles.aboutStyle}>
                            <div className="background" style={styles.aboutBackground}></div>

                            <div className="photo">
                                <img src={Photo} style={styles.photoStyle} />
                            </div>
                            <div className="bio">
                                Hi, i’m <span>Yev</span><br />
                                <hr />
                                I am a fullstack developer specialized in frontend and backend.
                                I have been working for about 6 years and I really want to learn new and stimulating things
                                because I like to range in the field of programming, from the deepness of the backend to fancy CSS.
                            </div>

                            <div className="action-buttons">
                                <NavLink to="/work"><button style={styles.actionButtons}>CHECK MY WORKS</button></NavLink>
                                <a href="https://drive.google.com/file/d/1pM4oc3kQyNZojflU5fSuNUNAC2DTHEch/view?usp=share_link" target="_blank"><button style={styles.actionButtons}>ASK FOR MY RESUME</button></a>
                            </div>

                            <div className="socials">
                                <a href="https://github.com/anAverageSlavGuy" target="_blank"><Github className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://www.linkedin.com/in/yevgeniy-shavlay-a023341a1/" target="_blank"><Linkedin className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://mail.google.com/mail/u/0/?fs=1&to=yev.shavlay@gmail.com&su=Software%20Developer%20Job&tf=cm" target="_blank"><Google className="socials-logo" style={styles.socialsButtons} /></a>
                                <a href="https://telegram.me/yev_sh" target="_blank"><Telegram className="socials-logo" style={styles.socialsButtons} /></a>
                            </div>
                        </div>
                    </>
                )}



                < div className="content" style={styles.text}>
                    {/* <div className="switch" style={styles.switch} onClick={() => manageToggle()}>
            <div className="switch-track" style={styles.track}></div>
          </div> */}

                    {animate === true &&
                        <div className="scroll-me" style={styles.mouse}>
                            <div className="wheel"></div>
                        </div>
                    }

                    <div className="background" style={styles.background}></div>
                    <img src={Iceberg} className={"iceberg-" + (toggle ? "top" : "bottom")} onTransitionEnd={() => handleTransitionEnd()} />
                    <div className="content-body">

                        {toggle ? (
                            <>
                                <div className="title" style={styles.title}>
                                    BACK-END
                                </div>
                                <div className="description">
                                    I also can switch to backend, because when you have to develop entire applications, or simply broaden your horizons,
                                    it becomes essential to also know it. I am passionate about server-side programming as well as with the client one.
                                    It has become fun and fascinating for me to work with data in different formats and optimize the work done by the server.
                                </div>
                                <div className="divider" style={styles.divider}></div>
                                <div className="skills-title" style={styles.title}>SKILLS</div>
                                <div className="skills">
                                    {
                                        backEndSkills.map(category => {
                                            return (
                                                <div key={category.name} className="skills-category" style={styles.skillsCategory}>
                                                    <div className="skills-header" style={styles.skillsHeader}>{category.name}</div>
                                                    <div className="skills-body">
                                                        {category.items.map(skill => <div key={skill} className="skill">{skill}</div>)}
                                                    </div>
                                                </div>)
                                        })
                                    }
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="title" style={styles.title}>
                                    FRONT-END
                                </div>
                                <div className="description">
                                    The frontend for me was like love at first sight, I had never touched javascript or anything like that when I was in school.
                                    It changed my way of seeing programming and made me want to write code again, because thanks to web based languages
                                    I was able to create incredible things from scratch and I was able to touch and see my works with my eyes.
                                </div>
                                <div className="divider" style={styles.divider}></div>
                                <div className="skills-title" style={styles.title}>SKILLS</div>
                                <div className="skills">
                                    {
                                        frontEndSkills.map(category => {
                                            return (
                                                <div key={category.name} className="skills-category" style={styles.skillsCategory}>
                                                    <div className="skills-header" style={styles.skillsHeader}>{category.name}</div>
                                                    <div className="skills-body">
                                                        {category.items.map(skill => <div key={skill} className="skill">{skill}</div>)}
                                                    </div>
                                                </div>)
                                        })
                                    }
                                </div>
                            </>
                        )
                        }

                    </div>
                </div>
            </div>
        </div >
    );
}

export default HomeDesktop;