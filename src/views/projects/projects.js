import React from "react"
import ProjectCard from './projectCards/templates/cardTemplate.js'
import './project.css'
import BoggleSolve from "./bogglesolve/bogglesolve"
import RPIPlay from "./rpiplay/rpiplay"
import HerokuExpress from "./herokuexpress/herokuExpress"
import ThisSite from "./thissite/thissite"
import LazyLoad from 'react-lazy-load';

const ProjectList = () => (
        <div>
                <ProjectCard
                        title='Take a look at some of my projects'
                        text="Below are a collection of some of the projects I have done over the years. I am still building the site and have many more projects which will be added soon."

                        buttonText="Go Home"
                        newURL="/"
                />
                
                <ThisSite/>
                <RPIPlay />
                <LazyLoad offsetVertical={1000}>
                        <BoggleSolve />
                </LazyLoad>
                <LazyLoad offsetVertical={1000}>
                        <HerokuExpress />
                </LazyLoad>


        </div>
)


export default ProjectList