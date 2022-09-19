
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Iceberg from './img/iceberg.svg';
import Photo from './img/photo.jpg';
import { Github, Linkedin, Google, Telegram } from 'react-bootstrap-icons';

function HomeMobile() {

    const [scrollPosition, setScrollPosition] = useState(0);

    const feElement = useRef(null);
    const beElement = useRef(null);

    const [toggle, setToggle] = useState(false);

    const frontendStyles = {
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
        }
    };

    const backendStyles = {
        switch: {
            borderColor: !toggle ? "#fff" : "#1d1d1d"
        },
        track: {
            background: !toggle ? "#fff" : "#1d1d1d",
            top: !toggle ? "66px" : "6px",
        },
        background: {
            height: !toggle ? "100%" : "0%"
        },
        text: {
            color: !toggle ? "#fff" : "#1d1d1d"
        },
        divider: {
            background: !toggle ? "#fff" : "#1d1d1d"
        },
        title: {
            WebkitTextStroke: !toggle ? "2px #fff" : "2px #1d1d1d"
        },
        pill: {
            borderColor: !toggle ? "#fff" : "#1d1d1d"
        },
        circle: {
            background: !toggle ? "#1d1d1d" : "#fff",
            borderColor: !toggle ? "#fff" : "#1d1d1d"
        },
        circleFill: {
            background: !toggle ? "#fff" : "#1d1d1d",
            borderColor: !toggle ? "#1d1d1d" : "#fff"
        },
        line: {
            background: !toggle ? "#fff" : "#1d1d1d"
        },
        skillsHeader: {
            background: !toggle ? "#fff" : "#1d1d1d",
            color: !toggle ? "#1d1d1d" : "#fff"
        },
        skillsCategory: {
            borderColor: !toggle ? "#fff" : "#1d1d1d"
        }
    };


    const frontEndSkills = [{ "name": "LIBRARIES", "items": ["React JS", "Redux", "JQuery"] }, { "name": "LANGUAGES", "items": ["JavaScript", "HTML5", "CSS3"] }, { "name": "FRAMEWORKS CSS", "items": ["Materialize", "Bootstrap", "Tailwind"] }];
    const backEndSkills = [{ "name": "LANGUAGES", "items": ["Node JS", "PHP", "Python", "BASH"] }, { "name": "DATABASES", "items": ["MySQL", "Redis", "MongoDB"] }, { "name": "SOFT SKILLS", "items": ["REST API", "Git", "Web Servers", "AWS"] }];

    /* useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
       console.log("position changed =>", scrollPosition);
    }, [scrollPosition]); */

    return (
        <div className="app">
            <div className="container">
                <div className="about">
                    <div className="photo">
                        <img src={Photo} />
                        <div className="socials">
                            <a href="https://github.com/anAverageSlavGuy" target="_blank"><Github className="socials-logo" /></a>
                            <a href="https://github.com/anAverageSlavGuy" target="_blank"><Linkedin className="socials-logo" /></a>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&to=yev.shavlay@gmail.com&su=Software%20Developer%20Job&tf=cm" target="_blank"><Google className="socials-logo" /></a>
                            <a href="https://telegram.me/yev_sh" target="_blank"><Telegram className="socials-logo" /></a>
                        </div>
                    </div>
                    <div className="bio">
                        Hi, i’m <span>Yev</span><br />
                        <hr />
                        I am a fullstack developer specialized in frontend and backend.
                        I have been working for about 5 years and I really want to learn new and stimulating things
                        because I like to range in the field of programming, from the deepness of the backend to fancy CSS.
                    </div>

                    <div className="action-buttons">
                        <NavLink to="/work"><button>CHECK MY WORK</button></NavLink>
                        <NavLink to="/cv"><button>CHECK MY CV</button></NavLink>
                    </div>


                </div>

                <div className="content-frontend" ref={feElement}>

                    <div className="background" style={frontendStyles.background}></div>
                    <img src={Iceberg} className={"iceberg-" + (toggle ? "top" : "bottom")} />
                    <div className="content-body">


                        <div className="title" style={frontendStyles.title}>
                            FRONT-END
                        </div>
                        <div className="description">
                            The frontend for me was like love at first sight, I had never touched javascript or anything like that when I was in school.
                            It changed my way of seeing programming and made me want to write code again, because thanks to web based languages
                            I was able to create incredible things from scratch and I was able to touch and see my works with my eyes.
                        </div>
                        <div className="divider" style={frontendStyles.divider}></div>
                        <div className="skills-title" style={frontendStyles.title}>SKILLS</div>
                        <div className="skills">
                            {
                                frontEndSkills.map(category => {
                                    return (
                                        <div key={category.name} className="skills-category" style={frontendStyles.skillsCategory}>
                                            <div className="skills-header" style={frontendStyles.skillsHeader}>{category.name}</div>
                                            <div className="skills-body">
                                                {category.items.map(skill => <div key={skill} className="skill">{skill}</div>)}
                                            </div>
                                        </div>)
                                })
                            }
                        </div>
    
                    </div>
                </div>





                <div className="content-backend" ref={beElement}>

                    <div className="background" style={backendStyles.background}></div>
                    <img src={Iceberg} className={"iceberg-" + (!toggle ? "top" : "bottom")} />
                    <div className="content-body">


                        <div className="title" style={backendStyles.title}>
                            BACK-END
                        </div>
                        <div className="description">
                            I also can switch to backend, because when you have to develop entire applications, or simply broaden your horizons,
                            it becomes essential to also know it. I am passionate about server-side programming as well as with the client one.
                            It has become fun and fascinating for me to work with data in different formats and optimize the work done by the server.
                        </div>
                        <div className="divider" style={backendStyles.divider}></div>
                        <div className="skills-title" style={backendStyles.title}>SKILLS</div>
                        <div className="skills">
                            {
                                backEndSkills.map(category => {
                                    return (
                                        <div key={category.name} className="skills-category" style={backendStyles.skillsCategory}>
                                            <div className="skills-header" style={backendStyles.skillsHeader}>{category.name}</div>
                                            <div className="skills-body">
                                                {category.items.map(skill => <div key={skill} className="skill">{skill}</div>)}
                                            </div>
                                        </div>)
                                })
                            }
                        </div>
    
                    </div>
                </div>

                

            </div>
        </div >
    )
}

export default HomeMobile;