 
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({
    image,
    title,
    category,
    description,
    tags
}){

    return(

<div className="project-card">

<div className="project-image">

<img src={image} alt={title}/>

</div>

<div className="project-content">

<div className="project-header">

<div>

<h3>{title}</h3>

<p>{category}</p>

</div>

<button>

<HiOutlineExternalLink/>

</button>

</div>

<span className="project-description">

{description}

</span>

<div className="project-tags">

{

tags.map((tag,index)=>

<span key={index}>{tag}</span>

)

}

</div>

</div>
<style>{`
.project-card{
    background:var(--card);
    border:1px solid var(--border);
    border-radius:22px;
    overflow:hidden;
    transition:.35s ease;
    display:flex;
    flex-direction:column;
    height:100%;
}

.project-card:hover{
    transform:translateY(-8px);
    border-color:var(--primary);
    box-shadow:0 20px 40px rgba(0,0,0,.25);
}

.project-image{
    width:100%;
    aspect-ratio:16/9;
    overflow:hidden;
}

.project-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.45s;
    display:block;
}

.project-card:hover .project-image img{
    transform:scale(1.08);
}

.project-content{
    padding:24px;
    display:flex;
    flex-direction:column;
    flex:1;
}

.project-header{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:16px;
    margin-bottom:18px;
}

.project-header h3{
    font-size:28px;
    color:var(--white);
    margin:0 0 8px;
    line-height:1.2;
}

.project-header p{
    margin:0;
    color:var(--gray);
    font-size:15px;
}

.project-header button{
    width:46px;
    height:46px;
    flex-shrink:0;
    border-radius:14px;
    border:1px solid var(--border);
    background:transparent;
    color:var(--white);
    cursor:pointer;
    transition:.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
}

.project-header button:hover{
    background:var(--primary);
    border-color:var(--primary);
}

.project-description{
    display:block;
    color:var(--gray);
    line-height:1.8;
    margin-bottom:24px;
    flex:1;
}

.project-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.project-tags span{
    padding:8px 14px;
    border-radius:999px;
    background:#161F31;
    color:var(--white);
    font-size:14px;
    white-space:nowrap;
}

/* ======================
   Laptop
====================== */

@media (max-width:992px){

.project-content{
    padding:20px;
}

.project-header h3{
    font-size:24px;
}

}

/* ======================
   Tablet
====================== */

@media (max-width:768px){

.project-image{
    aspect-ratio:16/10;
}

.project-header{
    gap:12px;
}

.project-header h3{
    font-size:22px;
}

.project-description{
    font-size:15px;
}

.project-tags span{
    font-size:13px;
    padding:7px 12px;
}

}

/* ======================
   Mobile
====================== */

@media (max-width:576px){

.project-content{
    padding:18px;
}

.project-header{
    flex-direction:column;
    align-items:flex-start;
}

.project-header button{
    width:42px;
    height:42px;
}

.project-header h3{
    font-size:20px;
}

.project-header p{
    font-size:14px;
}

.project-description{
    font-size:14px;
    line-height:1.7;
}

.project-tags{
    gap:8px;
}

.project-tags span{
    font-size:12px;
    padding:6px 10px;
}

}

/* ======================
   Small Phones
====================== */

@media (max-width:380px){

.project-header h3{
    font-size:18px;
}

.project-description{
    font-size:13px;
}

.project-tags span{
    font-size:11px;
}

}
`}</style>


</div>

    )

}