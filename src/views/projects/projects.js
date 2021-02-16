import React from "react"
import ProjectCard from './projectCards/templates/cardTemplate.js'
import './project.css'
import BoggleSolve from "./bogglesolve/bogglesolve"
import RPIPlay from "./rpiplay/rpiplay"
import HerokuExpress from "./herokuexpress/herokuExpress"
import ThisSite from "./thissite/thissite"
import OtherProjects from "./otherprojects/otherprojects"
import LazyLoad from 'react-lazy-load';
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition, pageStyle, pageVariants } from "../../parallax/transitions"
import Jtoolkit from "./jarvtoolkit/jarvtoolkit"
// import Home1 from "./reactPractice/practice"
const ProjectList = () => (
        <div>
                {/* <Home1/> */}
                <motion.div
                        style={pageStyle}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                >
                        <ProjectCard
                                title='Take a look at some of my projects'
                                text="Below are a collection of some of the projects I have done over the years. I am still building the site. (It is fairly new, so please forgive bugs.) I have many more projects which will be added soon."

                                buttonText="Go Home"
                                newURL="/"
                        />
                </motion.div>
                <motion.div
                        style={pageStyle}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                >
                        <ThisSite />
                </motion.div>
                <motion.div
                        style={pageStyle}
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                >
                        <RPIPlay />
                </motion.div>
                <LazyLoad offsetVertical={900} height={"100%"}>
                        <motion.div
                                style={pageStyle}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                        >
                                <BoggleSolve /></motion.div>
                </LazyLoad>
                <LazyLoad offsetVertical={900} height={"100%"}>
                        <motion.div
                                style={pageStyle}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                        >
                                <HerokuExpress />
                        </motion.div>

                </LazyLoad>
                <LazyLoad offsetVertical={900} height={"100%"}>
                        <motion.div
                                style={pageStyle}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                        >
                                <Jtoolkit />
                        </motion.div>

                </LazyLoad>
                <LazyLoad offsetVertical={900} height={"100%"}>
                        <motion.div
                                style={pageStyle}
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                        >
                                <OtherProjects/>
                        </motion.div>

                </LazyLoad>


        </div>
)


export default ProjectList