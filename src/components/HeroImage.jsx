 

 

import FloatingCard from "./FloatingCard";

import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineFolder } from "react-icons/hi";

export default function HeroImage() {

    return (

<div className="hero-image-wrapper">

<div className="hero-glow"></div>
<div className="hero-glow-up"></div>

<div className="hero-glow glow-2"></div>

<img
src= "/images/image-pro.png"
alt=""
className="hero-image"
/>

<div className="top-card">

<FloatingCard

icon={<HiOutlineBriefcase/>}
number="3+"
title="Years"
subtitle="Experience"

/>

</div>

<div className="bottom-card">

<FloatingCard

icon={<HiOutlineFolder/>}
number="20+"
title="Projects"
subtitle="Completed"

/>

</div>
<style>
    {`
    .hero-image-wrapper{

position:relative;

height:760px;

display:flex;

justify-content:center;

align-items:flex-end;

}

.hero-image{

position:relative;

width:450px;

z-index:3;

user-select:none;

pointer-events:none;

}

.hero-glow{

position:absolute;

width:430px;

height:430px;

border-radius:50%;

background:#7C3AED;

filter:blur(140px);

opacity:.45;

left:50%;

top:45%;

transform:translate(-50%,-50%);

z-index:1;

}

.hero-glow-up{

position:absolute;

width:300px;

height:300px;

border-radius:50%;

background:#7C3AED;


filter:blur(140px);

opacity:.80;

left:90%;

top:60%;

transform:translate(-50%,-50%);

z-index:100;

}

.glow-2{

width:240px;

height:240px;

opacity:.65;

filter:blur(70px);

}

.top-card{

position:absolute;

top:130px;

right:20px;

z-index:10;

}

.bottom-card{

position:absolute;

bottom:130px;


left: -5px;

z-index:10;

}
`}
</style>

</div>

    );

}