 
import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../context/ProjectContext";
 /*
const projects=[

{

image:"https://niftypm.com/blog/wp-content/uploads/2024/02/Hive-task-management-software-1024x605.png",

title:"Task Manager Pro",

category:"Web Application",

description:"A productivity app to manage tasks, teams and projects efficiently.",

tags:["React","Node.js","MongoDB"]

},

{

image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkdV_vhm8Bm7j1wwjywYMQMeYc8S7w-5pbl8vhVGCPOKmO6X7t_gYPA8&s=10",

title:"Finance Dashboard",

category:"Web Application",

description:"Dashboard for tracking finances, investments and analytics.",

tags:["Next.js","TypeScript","Tailwind CSS"]

},
 

{

image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbb4kzTsvxM59ntluIBHgo4PMLPonjs1OTUvENSG3Xg&s=10",

title:"Food Delivery App",

category:"Mobile Application",

description:"A food delivery application with real-time tracking and payments.",

tags:["React Native","Firebase","Redux"]

}

];*/
 

export default function Projects(){
    const {
      projects,
        loading
      } = useProjects(); 
   

return(

<section className="projects">

<div className="container">

<div className="projects-top">

<div>

<span>

Projects

</span>

<h2>

Featured Projects

</h2>

</div>
<Link to="/AllProjects" className='button'>View All Projects</Link>



</div>
 {loading ? (

          <p>Loading projects...</p>

        ) : (
<div className="projects-grid">

{

projects.map((project,index)=>

<ProjectCard

key={index}

{...project}

/>

)

}

</div>

    )}
</div>
<style>{`
.projects{
    padding:100px 20px;
    border-top:1px solid var(--border);
}

.projects .container{
    max-width:1320px;
    margin:auto;
}

.projects-top{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:30px;
    margin-bottom:55px;
}

.projects-top span{
    color:var(--primary);
    font-size:15px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:2px;
}

.projects-top h2{
    margin-top:12px;
    color:var(--white);
    font-size:44px;
    line-height:1.2;
}

.projects-top .button{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:14px 26px;
    border-radius:14px;
    border:1px solid var(--border);
    color:var(--white);
    text-decoration:none;
    transition:.35s;
    white-space:nowrap;
}

.projects-top .button:hover{
    background:var(--primary);
    border-color:var(--primary);
    transform:translateY(-3px);
}

.projects-grid{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:30px;
}

/* ======================
   Large Laptop
====================== */

@media (max-width:1200px){

.projects-grid{
    grid-template-columns:repeat(2,1fr);
}

}

/* ======================
   Tablet
====================== */

@media (max-width:992px){

.projects{
    padding:80px 25px;
}

.projects-top{
    flex-direction:column;
    align-items:center;
    text-align:center;
}

.projects-top h2{
    font-size:38px;
}

.projects-grid{
    gap:24px;
}

}

/* ======================
   Mobile
====================== */

@media (max-width:768px){

.projects{
    padding:70px 20px;
}

.projects-top{
    margin-bottom:40px;
}

.projects-top h2{
    font-size:32px;
}

.projects-top .button{
    width:100%;
    max-width:280px;
}

.projects-grid{
    grid-template-columns:1fr;
}

}

/* ======================
   Small Phones
====================== */

@media (max-width:480px){

.projects{
    padding:60px 15px;
}

.projects-top h2{
    font-size:28px;
}

.projects-top span{
    font-size:13px;
}

.projects-grid{
    gap:20px;
}

}
`}</style>

 



</section>

)

}