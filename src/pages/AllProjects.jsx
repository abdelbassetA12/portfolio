 

import ProjectCard from "../components/Projects/ProjectCard";

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

];

export default function AllProjects(){

return(

<section className="projects">

<div className="container">

<div className="projects-top">

<div>

<span>

Projects

</span>



</div>



</div>

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

</div>


<style>{`
.projects{
    padding:120px 20px 80px;
    min-height:100vh;
    background:#070B16;
}

.projects .container{
    max-width:1400px;
    margin:auto;
}

.projects-top{
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    gap:30px;
    margin-bottom:60px;
}

.projects-top span{
    display:inline-block;
    color:var(--primary);
    font-size:15px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:2px;
    margin-bottom:10px;
}



.projects-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(360px,1fr));
    gap:30px;
    align-items:stretch;
}

/* =========================
   Laptop
========================= */

@media (max-width:1200px){

.projects{
    padding:100px 25px 70px;
}


.projects-grid{
    grid-template-columns:repeat(2,minmax(300px,1fr));
}

}

/* =========================
   Tablet
========================= */

@media (max-width:992px){

.projects-top{
    flex-direction:column;
    align-items:center;
    text-align:center;
}



.projects-grid{
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
}

}

/* =========================
   Mobile
========================= */

@media (max-width:768px){

.projects{
    padding:100px 20px 60px;
}

.projects-top{
    margin-bottom:40px;
}



.projects-grid{
    grid-template-columns:1fr;
    gap:22px;
}

.projects-top button{
    width:100%;
    max-width:300px;
}

}

/* =========================
   Small Phones
========================= */

@media (max-width:480px){

.projects{
    padding:100px 15px 50px;
}

.projects-top span{
    font-size:13px;
}



.projects-grid{
    gap:18px;
}



}
`}</style>


</section>

)

}