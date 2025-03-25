
// import '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
// import Chip from '@mui/material/Chip';
// import '../assets/styles/Expertise.scss';

// const labelsFirst = [
//     "React",
//     "JavaScript",
//     "HTML5",
//     "CSS",
//     "Responsive Web Design",
//     "Tailwindcss",
// ];

// const labelsSecond = [
//     "Git",
//     "GitHub",
//     "Figma",
//     "Trello",
//     "Slack",
// ];

// const labelsThird = [
//     "Node.js",
//     "MongoDB",
//     "Express",
//      "SQL",
// ];
// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container p-[5%_10%] flex flex-col text-left">
//             <h1>Expertise</h1>
//             <div className="skills-grid grid grid-cols-3 gap-12">
//                 <div className="skill text-left items-center">
//                     <FontAwesomeIcon icon={faReact} size="3x" className="text-white" />
//                     <h3>Full Stack Web Development</h3>
//                     <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
//                     <div className="flex-chips leading-[2] my-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill text-left items-center">
//                     <FontAwesomeIcon icon={faDocker} size="3x" className="text-white" />
//                     <h3>DevOps & Automation</h3>
//                     <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
//                     <div className="flex-chips leading-[2] my-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill text-left items-center">
//                     <FontAwesomeIcon icon={faPython} size="3x" className="text-white" />
//                     <h3>GenAI & LLM</h3>
//                     <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
//                     <div className="flex-chips leading-[2] my-2">
//                         <span className="chip-title text-white pr-2">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Expertise;






import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import frontendImage from "../assets/frontend.png";
import toll from "../assets/toll.png";
import backend from "../assets/backend.png"

const frontendSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS",
    "TailwindCSS",
];

const toolsSkills = [
    "Git",
    "GitHub",
    "Figma",
    "Trello",
    "Slack",
];

const backendSkills = [
    "Node.js",
    "MongoDB",
    "Express",
    "SQL",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container p-[5%_10%] flex flex-col text-left">
                <h1>Expertise</h1>
                <div className="skills-grid grid grid-cols-3 gap-12">
               
                    {/* Frontend Section */}
                    <div className="skill text-left items-center">
                        <FontAwesomeIcon icon={faCode} size="3x" className="text-white" />
                        <img src={frontendImage} alt="Frontend" style={{ marginTop: "-60px", marginLeft: "80px", width: "70px", height: "70px" }}/>
                        <h3>Frontend Development</h3>
                        <p>Experienced in crafting modern, responsive, and interactive UI using the latest frontend technologies.</p>
                        <div className="flex-chips leading-[2] my-2">
                            <span className="chip-title text-white pr-2">Tech stack:</span>
                            {frontendSkills.map((label, index) => (
                            <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="skill text-left items-center">
                        <FontAwesomeIcon icon={faTools} size="3x" className="text-white" />
                        <img src={toll} alt="" style={{ marginTop: "-60px", marginLeft: "70px", width: "70px", height: "70px" }}/>
                        <h3>Development Tools</h3>
                        <p>Proficient in various development tools that enhance productivity and collaboration.</p>
                        <div className="flex-chips leading-[2] my-2">
                            <span className="chip-title text-white pr-2">Tech stack:</span>
                            {toolsSkills.map((label, index) => (
                                <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
                            ))}
                        </div>
                    </div>
                    {/* Backend Section */}
                    <div className="skill text-left items-center">
                        <FontAwesomeIcon icon={faServer} size="3x" className="text-white" />
                        <img src={backend} alt=""   style={{ marginTop: "-60px", marginLeft: "70px", width: "70px", height: "70px" }} />
                        <h3>Backend Development</h3>
                        <p>Capable of building robust and scalable backend systems using modern backend technologies.</p>
                        <div className="flex-chips leading-[2] my-2">
                            <span className="chip-title text-white pr-2">Tech stack:</span>
                            {backendSkills.map((label, index) => (
                                <Chip key={index} className='chip text-[rgb(39,40,34)] bg-white text-xs h-[25px] font-mono' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
