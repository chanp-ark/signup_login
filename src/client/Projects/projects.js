import React from 'react'

const Projects = () => {
    
    // make thumbnails of projects, 2 columns 
    // fill initialState with projects in database
    const initialState = [
        {
            name: "Project 1",
            tech_stack: "react, node",
            curCap: 2,
            maxCap: 6,
            users: ["John", "Jane"]
        },
        {
            name: "Project 2",
            tech_stack: "angular, express",
            curCap: 4,
            maxCap: 5,
            users: ["James", "Jo", "Joseph", "Jasmine"]
        },
        {
            name: "Project 3",
            tech_stack: "jQuery, PHP",
            curCap: 1,
            maxCap: 3,
            users: ["Diane"]
        },
        {
            name: "Project 4",
            tech_stack: "react, node",
            curCap: 2,
            maxCap: 4,
            users: ["Kenzie", "Kash"]
        }
    ]
    
    const [projects, setProjects] = React.useState(initialState)
    
    const [curProj, setCurProj] = React.useState(projects[0])
    
    const {name, tech_stack, curCap, maxCap, users} = curProj
    
    return (
        <h1>PROJECTS</h1>
    )
}

export default Projects;