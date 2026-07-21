 

import {

FaGithub,
FaLinkedinIn,
FaTwitter,
FaInstagram

} from "react-icons/fa";

export default function SocialLinks(){

return(
    <>
    <div className="social-links">

<a href="#"><FaGithub/></a>

<a href="#"><FaLinkedinIn/></a>

<a href="#"><FaTwitter/></a>

<a href="#"><FaInstagram/></a>

</div>
<style>
    {`
    .social-links{

display:flex;

gap:18px;

margin-top:10px;

}

.social-links a{

width:58px;

height:58px;

border-radius:16px;

display:flex;

justify-content:center;

align-items:center;

font-size:24px;

background:#121A2C;

border:1px solid rgba(255,255,255,.05);

color:white;

transition:.35s;

}

.social-links a:hover{

transform:translateY(-5px);

border-color:#7C3AED;

background:#181F35;

color:#A855F7;

}`}
</style>
    </>



)

}