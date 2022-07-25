
import React, { useState, useEffect } from 'react';
import './App.css';
import Iceberg from './iceberg.svg';
import Photo from './photo.jpg';
import { Github, Linkedin, Instagram, Google, Telegram } from 'react-bootstrap-icons';

function Home() {

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
        }
    };

    const frontEndSkills = [{ "name": "LIBRARIES", "items": ["React JS", "Redux", "JQuery"] }, { "name": "LANGUAGES", "items": ["JavaScript", "HTML5", "CSS3"] }, { "name": "FRAMEWORKS CSS", "items": ["Materialize", "Bootstrap", "Tailwind"] }];
    const backEndSkills = [{ "name": "LANGUAGES", "items": ["Node JS", "PHP", "Python", "BASH"] }, { "name": "DATABASES", "items": ["MySQL", "Redis", "MongoDB"] }, { "name": "SOFT SKILLS", "items": ["REST API", "Git", "Web Servers", "AWS"] }];

    /*   const manageToggle = () => {
        if (toggle) {
          console.log("backend");
        } else {
          console.log("frontend");
        }
        setToggle(!toggle);
        setAnimate(true);
      } */

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
                <div className="about">
                    <div className="photo">
                        <img src={Photo} />
                    </div>
                    <div className="bio">
                        Hi, i’m <span>Yev</span><br />
                        <hr />
                        I am a fullstack developer specialized in frontend and backend.
                        I have been working for about 5 years and I really want to learn new and stimulating things
                        because I like to range in the field of programming, from the deepness of the backend to fancy CSS.
                    </div>

                    <div className="action-buttons">
                        <button>CHECK MY WORK</button>
                        <button>CHECK MY CV</button>
                    </div>

                    <div className="socials">
                        <a href="https://github.com/anAverageSlavGuy" target="_blank"><Github className="socials-logo" /></a>
                        <a href="https://github.com/anAverageSlavGuy" target="_blank"><Linkedin className="socials-logo" /></a>
                        <a href="https://github.com/anAverageSlavGuy" target="_blank"><Google className="socials-logo" /></a>
                        <a href="https://github.com/anAverageSlavGuy" target="_blank"><Telegram className="socials-logo" /></a>
                    </div>
                </div>
                <div className="content" style={styles.text}>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae metus pulvinar felis eleifend dignissim nec sit amet orci. Duis sed ipsum vestibulum, vestibulum arcu id, cursus nulla. Nam ligula turpis, fringilla vel sodales sit amet, finibus et neque
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae metus pulvinar felis eleifend dignissim nec sit amet orci. Duis sed ipsum vestibulum, vestibulum arcu id, cursus nulla. Nam ligula turpis, fringilla vel sodales sit amet, finibus et neque
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

export default Home;
