 

export default function TestimonialCard({

image,
name,
job,
text

}){

return(
    <>
    <div className="testimonial-card">

<div className="testimonial-top">

<img src={image} alt={name}/>

<div>

<h3>{name}</h3>

<p>{job}</p>

</div>

</div>

<p className="testimonial-text">

"{text}"

</p>

</div>
<style>{`
.testimonial-card{
    background:var(--card);
    border:1px solid var(--border);
    border-radius:22px;
    padding:30px;
    transition:.35s ease;
    display:flex;
    flex-direction:column;
    height:100%;
}

.testimonial-card:hover{
    transform:translateY(-8px);
    border-color:var(--primary);
    box-shadow:0 20px 40px rgba(0,0,0,.25);
}

.testimonial-top{
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:24px;
}

.testimonial-top img{
    width:72px;
    height:72px;
    border-radius:50%;
    object-fit:cover;
    flex-shrink:0;
    border:3px solid rgba(139,92,246,.25);
}

.testimonial-top h3{
    margin:0 0 6px;
    font-size:22px;
    color:var(--white);
    line-height:1.2;
}

.testimonial-top p{
    margin:0;
    color:var(--gray);
    font-size:15px;
}

.testimonial-text{
    color:var(--gray);
    line-height:1.9;
    font-size:16px;
    flex:1;
}

/* ======================
   Laptop
====================== */

@media (max-width:992px){

.testimonial-card{
    padding:26px;
}

.testimonial-top h3{
    font-size:20px;
}

.testimonial-text{
    font-size:15px;
}

}

/* ======================
   Tablet
====================== */

@media (max-width:768px){

.testimonial-card{
    padding:22px;
}

.testimonial-top{
    gap:15px;
}

.testimonial-top img{
    width:64px;
    height:64px;
}

.testimonial-top h3{
    font-size:18px;
}

.testimonial-top p{
    font-size:14px;
}

.testimonial-text{
    font-size:15px;
    line-height:1.8;
}

}

/* ======================
   Mobile
====================== */

@media (max-width:576px){

.testimonial-card{
    padding:20px;
    border-radius:18px;
}

.testimonial-top{
    flex-direction:column;
    text-align:center;
    gap:12px;
}

.testimonial-top img{
    width:60px;
    height:60px;
}

.testimonial-top h3{
    font-size:18px;
}

.testimonial-text{
    text-align:center;
    font-size:14px;
}

}

/* ======================
   Small Phones
====================== */

@media (max-width:380px){

.testimonial-card{
    padding:18px;
}

.testimonial-top img{
    width:55px;
    height:55px;
}

.testimonial-top h3{
    font-size:17px;
}

.testimonial-text{
    font-size:13px;
    line-height:1.7;
}

}
`}</style>

    </>



)

}