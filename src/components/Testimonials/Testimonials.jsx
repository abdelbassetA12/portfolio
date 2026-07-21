 

import TestimonialCard from "./TestimonialCard";

const testimonials=[

{

image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uM6BSG4L0VU0D8uIJy4KHaBQEgfK-TU8d2fyUI_RVg&s=10",

name:"Youssef A.",

job:"CEO, StartupX",

text:"Amine is a highly skilled developer who delivered high-quality work on time. He's dedicated, detail-oriented, and a great communicator."

},

{

image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKEcONsV8jD3I-dvflishGT-ANoAHNvGqXUEnNxFDiV--xL7Nf1is7W0&s=10",

name:"Sara M.",

job:"Product Manager",

text:"Working with Amine was a fantastic experience. He understood our needs and built a product that exceeded our expectations."

}

];

export default function Testimonials(){

return(

<section className="testimonials">

<div className="container">

<div className="section-title">

<span>

Testimonials

</span>

<h2>

What Clients Say

</h2>

</div>

<div className="testimonial-grid">

{

testimonials.map((item,index)=>

<TestimonialCard

key={index}

{...item}

/>

)

}

</div>

</div>
<style>{`
.testimonials{
    padding:100px 20px;
    border-top:1px solid var(--border);
}

.testimonials .container{
    max-width:1320px;
    margin:auto;
}

.section-title{
    text-align:center;
    margin-bottom:60px;
}

.section-title span{
    display:inline-block;
    color:var(--primary);
    font-size:15px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:2px;
    margin-bottom:10px;
}

.section-title h2{
    margin:0;
    color:var(--white);
    font-size:44px;
    line-height:1.2;
}

.testimonial-grid{
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:30px;
    align-items:stretch;
}

/* ======================
   Large Laptop
====================== */

@media (max-width:1200px){

.testimonial-grid{
    gap:24px;
}

}

/* ======================
   Tablet
====================== */

@media (max-width:992px){

.testimonials{
    padding:80px 25px;
}

.section-title{
    margin-bottom:45px;
}

.section-title h2{
    font-size:38px;
}

.testimonial-grid{
    grid-template-columns:1fr;
}

}

/* ======================
   Mobile
====================== */

@media (max-width:768px){

.testimonials{
    padding:70px 20px;
}

.section-title h2{
    font-size:32px;
}

.section-title span{
    font-size:14px;
}

.testimonial-grid{
    gap:22px;
}

}

/* ======================
   Small Phones
====================== */

@media (max-width:480px){

.testimonials{
    padding:60px 15px;
}

.section-title{
    margin-bottom:35px;
}

.section-title h2{
    font-size:28px;
}

.section-title span{
    font-size:13px;
}

.testimonial-grid{
    gap:18px;
}

}
`}</style>


</section>

)

}