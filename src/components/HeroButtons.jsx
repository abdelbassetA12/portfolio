 

import {HiArrowRight} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HeroButtons(){

return(
    <>
    <div className="hero-buttons">
        <Link  to="/AllProjects" className="btn-primary">
        View My Work 
        <HiArrowRight/>
         </Link>
         <Link to="/contact" className="btn-outline">
    Contact Me
    <HiArrowRight />
</Link>


</div>
<style>{`
.hero-buttons{
    display:flex;
    align-items:center;
    gap:20px;
    margin-bottom:35px;
    flex-wrap:wrap;
}

/* =====================
   Shared Button Style
===================== */

.hero-buttons .btn-primary,
.hero-buttons .btn-outline{
    height:62px;
    padding:0 34px;
    border-radius:18px;
    font-size:17px;
    font-weight:600;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:12px;
    cursor:pointer;
    transition:.35s;
    text-decoration:none;
    white-space:nowrap;
}

.btn-primary{
    background:linear-gradient(135deg,#7C3AED,#A855F7);
    color:#fff;
    border:none;
    box-shadow:0 15px 35px rgba(124,58,237,.35);
}

.btn-primary:hover{
    transform:translateY(-5px);
    box-shadow:0 20px 45px rgba(124,58,237,.55);
}

.btn-outline{
    background:transparent;
    color:#fff;
    border:1px solid #2A3444;
}

.btn-outline:hover{
    border-color:#7C3AED;
    background:#121A2C;
    transform:translateY(-5px);
}

/* =====================
   Laptop
===================== */

@media (max-width:992px){

.hero-buttons{
    justify-content:center;
}

}

/* =====================
   Tablet
===================== */

@media (max-width:768px){

.hero-buttons .btn-primary,
.hero-buttons .btn-outline{
    height:58px;
    padding:0 28px;
    font-size:16px;
}

}

/* =====================
   Mobile
===================== */

@media (max-width:576px){

.hero-buttons{
    flex-direction:column;
    width:100%;
    gap:15px;
}

.hero-buttons .btn-primary,
.hero-buttons .btn-outline{
    width:100%;
    max-width:340px;
    height:56px;
    border-radius:16px;
}

}

/* =====================
   Small Phones
===================== */

@media (max-width:380px){

.hero-buttons .btn-primary,
.hero-buttons .btn-outline{
    font-size:15px;
    height:54px;
    padding:0 18px;
}

}
`}</style>

    </>



)

}