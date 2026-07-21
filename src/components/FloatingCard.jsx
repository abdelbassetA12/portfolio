 

export default function FloatingCard({

icon,
number,
title,
subtitle

}){

return(

<div className="floating-card">

<div className="floating-icon">

{icon}

</div>

<div>

<h2>{number}</h2>

<p>{title}</p>

<span>{subtitle}</span>

</div>
<style>
    {`
    
   .floating-card{

    width:200px;
    min-height:110px;

    display:flex;
    align-items:center;

    gap:16px;

    padding:18px;

    background:#101827;

    border:1px solid rgba(255,255,255,.06);

    border-radius:18px;

    box-shadow:0 15px 40px rgba(0,0,0,.35);

}

.floating-icon{
    width:42px;
    height:42px;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:12px;

    background:linear-gradient(135deg,#7C3AED,#9D4EDD);

    color:#fff;

    font-size:20px;

    flex-shrink:0;
}

.floating-card h2{

    margin:0;

    color:#fff;

    font-size:28px;

    line-height:1;

}

.floating-card p{

    margin-top:4px;

    margin-bottom:0;

    font-size:14px;

    color:#8D95A5;

    line-height:1.2;

}

.floating-card span{

    display:block;

    margin-top:2px;

    color:#fff;

    font-size:18px;

    font-weight:600;

    line-height:1.2;

}`}
</style>




</div>

)

}