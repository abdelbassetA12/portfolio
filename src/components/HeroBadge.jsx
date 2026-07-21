 
export default function HeroBadge() {

    return (
        <>
        <div className="hero-badge">

<div className="badge-dot"></div>

<span>Available for freelance</span>


</div>
<style>
    {`
    .hero-badge{

display:inline-flex;

align-items:center;

gap:14px;

padding:8px 16px;

background:#111A2C;

border:1px solid rgba(255,255,255,.05);

border-radius:50px;

}

.badge-dot{

width:10px;

height:10px;

background:#22C55E;

border-radius:50%;

box-shadow:
0 0 12px #22C55E;

}

.hero-badge span{

font-size:15px;

font-weight:500;

color:white;

}`}
</style>
        </>



    );

}