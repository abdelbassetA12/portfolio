 
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
const menuBtnRef = useRef(null);
useEffect(() => {
  function handleClickOutside(e) {
    if (
      menuOpen &&
      navRef.current &&
      !navRef.current.contains(e.target) &&
      !menuBtnRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen]);

return (

<header className="navbar">

<div className="container nav-container">

<div className="logo">

<div className="logo-icon">
{"</>"}
</div>

<span>
Abdelbasset Dev.
</span>

</div>
<nav
  ref={navRef}
  className={menuOpen ? "mobile-open" : ""}
>


 
<NavLink
  to="/"
  className={({ isActive }) => (isActive ? "active" : "")}
  onClick={() => setMenuOpen(false)}
>
  Home
</NavLink>

<NavLink
  to="/About"
  className={({ isActive }) => (isActive ? "active" : "")}
  onClick={() => setMenuOpen(false)}
>
  About
</NavLink>

 

<a href="/">
Skills
</a>


 

<NavLink
  to="/AllProjects"
  className={({ isActive }) => (isActive ? "active" : "")}
  onClick={() => setMenuOpen(false)}
>
  Projects
</NavLink>

<a href="/">
Experience
</a>

<a href="/">
Contact
</a>

</nav>

<button
    ref={menuBtnRef}
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
> {menuOpen ? <HiX /> : <HiMenuAlt3 />}</button>

<button className="cv-btn">

Download CV

</button>

</div>

<style>
    {`
    .navbar{

position:fixed;
top:0;
left:0;
width:100%;
z-index:1000;

padding:22px 0;

background:rgba(7,11,22,.55);

backdrop-filter:blur(18px);

border-bottom:1px solid rgba(255,255,255,.05);

}

.nav-container{

display:flex;
align-items:center;
justify-content:space-between;

}

.logo{

display:flex;
align-items:center;
gap:12px;

font-size:28px;
font-weight:700;

}

.logo-icon{

width:42px;
height:42px;

border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

background:linear-gradient(135deg,#8B5CF6,#6D28D9);

color:white;

box-shadow:
0 0 25px rgba(124,58,237,.45);

font-size:18px;

}

nav{

display:flex;
gap:42px;

}

nav a{

position:relative;

font-size:16px;
font-weight:500;

color:#B3BAC7;

transition:.3s;

}

nav a:hover{

color:white;

}

nav a.active{

color:white;

}

nav a.active::after{

content:"";

position:absolute;

left:0;
bottom:-10px;

width:100%;
height:3px;

border-radius:10px;

background:#8B5CF6;

box-shadow:0 0 12px #8B5CF6;

}

.cv-btn{

border:none;

padding:15px 30px;

border-radius:14px;

font-size:15px;
font-weight:600;

color:white;

background:
linear-gradient(
135deg,
#7C3AED,
#9D4EDD
);

transition:.35s;

box-shadow:
0 8px 30px rgba(124,58,237,.35);

}
.cv-btn:hover{

transform:translateY(-3px);

box-shadow:
0 15px 40px rgba(124,58,237,.5);

}
@media(max-width:1100px){

nav{

display:none;

}

}`}
</style>
<style>{`
.navbar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:1000;
    padding:18px 20px;
    background:rgba(7,11,22,.6);
    backdrop-filter:blur(18px);
    border-bottom:1px solid rgba(255,255,255,.05);
}

.nav-container{
    max-width:1320px;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:30px;
}

.logo{
    display:flex;
    align-items:center;
    gap:12px;
    color:#fff;
    font-size:26px;
    font-weight:700;
}

.logo-icon{
    width:42px;
    height:42px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(135deg,#8B5CF6,#6D28D9);
    color:#fff;
    font-size:18px;
    box-shadow:0 0 25px rgba(124,58,237,.45);
}

nav{
    display:flex;
    align-items:center;
    gap:40px;
}

nav a{
    position:relative;
    color:#B3BAC7;
    text-decoration:none;
    transition:.3s;
}

nav a:hover,
nav a.active{
    color:#fff;
}

nav a.active::after{
    content:"";
    position:absolute;
    left:0;
    bottom:-8px;
    width:100%;
    height:3px;
    border-radius:50px;
    background:#8B5CF6;
}

.cv-btn{
    border:none;
    padding:14px 28px;
    border-radius:14px;
    background:linear-gradient(135deg,#7C3AED,#9D4EDD);
    color:#fff;
    font-weight:600;
    cursor:pointer;
    transition:.35s;
}

.cv-btn:hover{
    transform:translateY(-3px);
}

.menu-btn{
    display:none;
    width:46px;
    height:46px;
    border:none;
    border-radius:12px;
    background:#151d30;
    color:#fff;
    font-size:28px;
    cursor:pointer;
}

/* ================= Laptop ================= */

@media(max-width:1100px){

nav{
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    background:#0C1220;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:25px;
    padding:30px 0;
    transform:translateY(-30px);
    opacity:0;
    visibility:hidden;
    transition:.35s;
    border-bottom:1px solid var(--border);
}

nav.mobile-open{
    opacity:1;
    visibility:visible;
    transform:translateY(0);
}

.menu-btn{
    display:flex;
    align-items:center;
    justify-content:center;
}

.cv-btn{
    display:none;
}

}

/* ================= Tablet ================= */

@media(max-width:768px){

.navbar{
    padding:16px;
}

.logo{
    font-size:22px;
}

.logo-icon{
    width:38px;
    height:38px;
    font-size:16px;
}

}

/* ================= Mobile ================= */

@media(max-width:480px){

.logo span{
    font-size:18px;
}

.logo-icon{
    width:34px;
    height:34px;
}

.menu-btn{
    width:42px;
    height:42px;
    font-size:24px;
}

nav a{
    font-size:18px;
}

}
`}</style>

</header>

);

}

export default Navbar;