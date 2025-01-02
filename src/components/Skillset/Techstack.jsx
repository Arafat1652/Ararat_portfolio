import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  // SiGraphql,
  // SiSolidity,
  // SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiNextdotjs ,
  SiJsonwebtokens
} from "react-icons/si";

import { FaCss3Alt, FaGithub, FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { BiLogoFirebase } from "react-icons/bi";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ImNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJsonwebtokens />
      </Col>
    </Row>
  );
};

export default Techstack;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiGit,
// } from "react-icons/di";
// import {
//   SiMaterialui,
//   SiGraphql,
//   SiSolidity,
//   SiRedux,
//   SiMongodb,
//   SiHtml5
// } from "react-icons/si";

// const Techstack = () => {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//  <section className="skills-section" id="skills-section"><div className="container"><div className="row"><div className="col-md-12"><div className="section-header text-center"><h2 className="section-title wow fadeInUp" data-wow-delay=".3s" style={"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"}>My Skills</h2><p className="wow fadeInUp" data-wow-delay=".4s" style={"visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"}>
// I specialize in creating dynamic, responsive, and user-friendly web applications that meet your business needs.</p></div></div></div><div className="row"><div className="col-md-12"><div className="skills-widget d-flex flex-wrap justify-content-center align-items-center" id="skills">
//         <div className="skill-item wow fadeInUp" data-wow-delay=".3s" style={"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png" alt=""/>
//                 </div>
//                 <div className="number">95%</div>
//             </div>
//             <p>HTML</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".4s" style={"visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt=""/>
//                 </div>
//                 <div className="number">92%</div>
//             </div>
//             <p>CSS</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".5s" style={"visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
//                 </div>
//                 <div className="number">84%</div>
//             </div>
//             <p>Javascript</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".6s" style={"visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt=""/>
//                 </div>
//                 <div className="number">87%</div>
//             </div>
//             <p>PHP</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".7s" style={"visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/wordpress-square-social-media-512.png" alt=""/>
//                 </div>
//                 <div className="number">93%</div>
//             </div>
//             <p>Wordpress</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".8s" style={"visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png" alt=""/>
//                 </div>
//                 <div className="number">89%</div>
//             </div>
//             <p>Laravel</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".9s" style={"visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png" alt=""/>
//                 </div>
//                 <div className="number">70%</div>
//             </div>
//             <p>MySQL</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".10s" style={"visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt=""/>
//                 </div>
//                 <div className="number">70%</div>
//             </div>
//             <p>Git</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".11s" style={"visibility: visible; animation-delay: 0.11s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://static-00.iconduck.com/assets.00/github-square-icon-511x512-080fj8cx.png" alt=""/>
//                 </div>
//                 <div className="number">70%</div>
//             </div>
//             <p>GitHub</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".12s" style={"visibility: visible; animation-delay: 0.12s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt=""/>
//                 </div>
//                 <div className="number">87%</div>
//             </div>
//             <p>React</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".13s" style={"visibility: visible; animation-delay: 0.13s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt=""/>
//                 </div>
//                 <div className="number">73%</div>
//             </div>
//             <p>Python</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".14s" style={"visibility: visible; animation-delay: 0.14s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/django-1.png" alt=""/>
//                 </div>
//                 <div className="number">68%</div>
//             </div>
//             <p>Django</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".15s" style={"visibility: visible; animation-delay: 0.15s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" alt=""/>
//                 </div>
//                 <div className="number">92%</div>
//             </div>
//             <p>Tailwind</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".16s" style={"visibility: visible; animation-delay: 0.16s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt=""/>
//                 </div>
//                 <div className="number">94%</div>
//             </div>
//             <p>Bootstrap</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".17s" style={"visibility: visible; animation-delay: 0.17s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt=""/>
//                 </div>
//                 <div className="number">67%</div>
//             </div>
//             <p>NodeJS</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".18s" style={"visibility: visible; animation-delay: 0.18s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" alt=""/>
//                 </div>
//                 <div className="number">79%</div>
//             </div>
//             <p>NPM</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".19s" style={"visibility: visible; animation-delay: 0.19s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt=""/>
//                 </div>
//                 <div className="number">79%</div>
//             </div>
//             <p>ExpressJS</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".20s" style={"visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt=""/>
//                 </div>
//                 <div className="number">73%</div>
//             </div>
//             <p>MongoDB</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".21s" style={"visibility: visible; animation-delay: 0.21s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.iconscout.com/icon/free/png-256/free-figma-3628771-3030133.png" alt=""/>
//                 </div>
//                 <div className="number">64%</div>
//             </div>
//             <p>Figma</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".22s" style={"visibility: visible; animation-delay: 0.22s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png" alt=""/>
//                 </div>
//                 <div className="number">86%</div>
//             </div>
//             <p>FireBase</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".23s" style={"visibility: visible; animation-delay: 0.23s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt=""/>
//                 </div>
//                 <div className="number">90%</div>
//             </div>
//             <p>VS Code</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".24s" style={"visibility: visible; animation-delay: 0.24s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png" alt=""/>
//                 </div>
//                 <div className="number">85%</div>
//             </div>
//             <p>Photoshop</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".25s" style={"visibility: visible; animation-delay: 0.25s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" alt=""/>
//                 </div>
//                 <div className="number">86%</div>
//             </div>
//             <p>Illustrator</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".26s" style={"visibility: visible; animation-delay: 0.26s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/768px-Icons8_flat_linux.svg.png" alt=""/>
//                 </div>
//                 <div className="number">70%</div>
//             </div>
//             <p>Linux</p>
//         </div>

//         <div className="skill-item wow fadeInUp" data-wow-delay=".27s" style={"visibility: visible; animation-delay: 0.27s; animation-name: fadeInUp;"}>
//             <div className="skill-inner">
//                 <div className="icon-box">
//                     <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt=""/>
//                 </div>
//                 <div className="number">70%</div>
//             </div>
//             <p>NextJS</p>
//         </div>
//     </div></div></div></div></section>
//     </Row>
//   );
// }

// export default Techstack;
