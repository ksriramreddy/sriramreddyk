
import insta1 from '../projectimages/insta/insta1.jpeg'
import webchat1 from '../projectimages/webchat/webchat1.png'
import ml1 from '../projectimages/machinelearning/ml1.png'
import portfolio1 from '../projectimages/portfolio/portfolio1.png'
import games1 from '../projectimages/games/games1.png'
import yt1 from '../projectimages/youtube/yt1.png'
import discard1 from '../projectimages/discard/discard1.png'

export const projects = [
    {
        title : "ECHO-AI Chat Application",
        image :"https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747813896/rk1vd8ma2ivppcqjc62x.png" ,
        description : "A MERN Stack project with seamless live chat with personal AI assitance feature.",
        technologies : ["React", "Redux", "Firebase","Java Script","Chakra UI"],
        code : "https://github.com/ksriramreddy/ECHO.git",
        demo : "https://echo-vvm8.onrender.com"
    },
    {
        title : "Instagram clone",
        image : insta1,
        description : "An Instagram clone built with React, Redux, and Firebase. Users can create, like, and comment on posts.",
        technologies : ["ReactJs", "Nodejs", "ExpressJs","Mongodb","Socket.io","JWT"],
        code : "https://github.com/ksriramreddy/instagram-clone.git",
        demo : "https://instagram-clone-sandy.vercel.app/"
    },
    {
        title : "Web Chat Application",
        image : webchat1,
        description : "A web chat application built with React and Appwrite. Users can create , login and chat",
        technologies : ["React",  "Appwrite","Java Script","Chakra UI"],
        code : "https://github.com/ksriramreddy/anonymous-chatapp.git",
        demo : 'https://anonymous-chatapp.vercel.app/login'
    },
    {
        title : "Improve Student learning",
        image : ml1,
        description : "A project built using Machine Learning to improve student learning performance based on their past grades and experience",
        technologies : ["Machine Learning","Python","Django","Sklearn","Javascript"],
        code : "https://github.com/ksriramreddy/mini-project.git",
        demo : 0
    },
    {
        title : "Portfolio",
        image : portfolio1,
        description : "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies : ["React", "HTML","CSS","JavaScript"],
        code : "",
        demo : 0
    },
    {
        title : "Javascript Games",
        image : games1,
        description : "A collection of simple games built with JavaScript. Users can play tic-tac-toe, rock-paper-scissors, and memory game.",
        technologies : ["JavaScript","HTML","CSS"],
        code : "https://github.com/ksriramreddy/javascript-games.git",
        demo : "https://ksriramreddy.github.io/javascript-games/"
    },
    {
        title : "Youtube Home Template",
        image : yt1,
        description : "A responsive YouTube home template using HTML, CSS.",
        technologies : ["HTML","CSS"],
        code : "https://github.com/ksriramreddy/youtube-clone.git",
        demo : "https://ksriramreddy.github.io/youtube-clone/"
    },
    {
        title : "Discard  Home Template",
        image : discard1,
        description : "A discard home template using HTML, CSS.",
        technologies : ["HTML","CSS"],
        code : "https://github.com/ksriramreddy/discord-home-clone.git",
        demo : "https://ksriramreddy.github.io/discord-home-clone/"
    }

]

export const education = [
    {
        institution : "CMR Technical Campus",
        degree : "Bachelor of Technology - B-Tech",
        field : "Computer Science & Engineering - (Data Science)",
        year : "2022 - 2025",
        gpa : "8.2 CGPA",
        description : "I am currently pursuing a bachelor's degree in Computer Science and Engineering with a specialization in Data Science at CMR Technical Campus. My studies have provided a solid foundation in data structures, algorithms, and data analysis, alongside hands-on experience in web development and database management.",
        image : "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811975/hj6bgdegicpvjgucqkum.webp",
    },
    {
        institution : "Govenment Institute of Electronics",
        degree : "diploma",
        field : "Electronics and Communication Engineering - ( Communication Networks)",
        year : "2018-2022",
        gpa : "8.3 CGPA",
        description : "I have completed my bachelor's degree in Electronics and Communication Engineering (ECE) with a specialization in Communication Networks at GIOE. ",
        image : insta1,
    },
    {
        institution : "Orbit-e-Techno School",
        degree : "Schooling",
        field : "SSC (X)",
        year : "2017-2018",
        gpa : "9.5 CGPA",
        description : "I have completed my schooling in SSC (X) at Orbit-e-Techno School with the grade of 9.5 CGPA",
        image : insta1,
    }
]

const skills = [
    ['HTML', 'CSS', 'JavaScript', 'React.Js','Tailwind','Bootstrap','Redux','ChakraUi'],
    ['JavaScript', 'Node.js', 'exports.js','Mongo','SQL','API','Firebase','Appwrite'],
    ['c','c++','JavaScript', 'Python','Java','MySQL'],
    ['Git','GitHub' ,'VS Code','Figma','Canva']
]