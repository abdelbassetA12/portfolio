

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";

export default function Hero() {

    return (

<section className="hero">

<div className="container hero-wrapper">

<div className="hero-content">

<HeroBadge />

<h1>

I build digital

<span>products.</span>

</h1>

<p className="hero-p">

I'm a Full Stack Developer specialized in
building modern, responsive and high-performance
web applications.

</p>

<HeroButtons />

<SocialLinks />

</div>

<HeroImage />

</div>
<style>{`
*{
    box-sizing:border-box;
}

.hero{
    position:relative;
    overflow:hidden;
    background:#070B16;
    padding:0px 20px 80px;
}

.hero-wrapper{
    max-width:1320px;
    margin:auto;
    display:grid;
    grid-template-columns:520px 1fr;
    align-items:center;
    gap:50px;
    min-height:760px;
    position:relative;
    z-index:2;
}

.hero-content{
    position:relative;
    z-index:5;
}

.hero h1{
    font-size:70px;
    line-height:1.05;
    font-weight:800;
    letter-spacing:-2px;
    color:#fff;
    margin:10px 0 15px;
}

.hero h1 span{
    display:block;
    color:#8B5CF6;
}

.hero .hero-p{
    width:100%;
    max-width:500px;
    font-size:22px;
    line-height:1.8;
    color:#9CA3AF;
    margin-bottom:35px;
}

/* =========================
   Large Laptop
========================= */

@media (max-width:1200px){

.hero-wrapper{
    grid-template-columns:470px 1fr;
    gap:30px;
}

.hero h1{
    font-size:60px;
}

.hero .hero-p{
    font-size:20px;
}

}

/* =========================
   Tablet
========================= */

@media (max-width:992px){

.hero{
    padding:70px 25px;
}

.hero-wrapper{
    grid-template-columns:1fr;
    text-align:center;
    min-height:auto;
    gap:60px;
}

.hero-content{
    order:2;
}

.hero-image{
    order:1;
}

.hero h1{
    font-size:55px;
    letter-spacing:-1px;
}

.hero h1 span{
    display:inline;
}

.hero .hero-p{
    margin:25px auto 35px;
    font-size:20px;
}

.hero-buttons{
    justify-content:center;
}

.social-links{
    justify-content:center;
}

}

/* =========================
   Mobile
========================= */

@media (max-width:768px){

.hero{
    padding:60px 20px;
}

.hero-wrapper{
    gap:45px;
}

.hero h1{
    font-size:44px;
    line-height:1.15;
}

.hero h1 span{
    display:block;
}

.hero .hero-p{
    font-size:18px;
    line-height:1.7;
}

}

/* =========================
   Small Mobile
========================= */

@media (max-width:576px){

.hero{
    padding:50px 18px;
}

.hero h1{
    font-size:36px;
    letter-spacing:0;
}

.hero .hero-p{
    font-size:16px;
}

}

/* =========================
   Very Small Phones
========================= */

@media (max-width:380px){

.hero h1{
    font-size:30px;
}

.hero .hero-p{
    font-size:15px;
}

}
`}</style>


</section>

    );

}