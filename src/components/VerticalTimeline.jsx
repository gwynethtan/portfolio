import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LeaptechLogo from "../assets/leaptechLogo.png"
import CfesLogo from "../assets/cfesLogo.png"
import SynapxeLogo from "../assets/synapxeLogo.png"
import CtssLogo from "../assets/ctssLogo.png"
import NpLogo from "../assets/npLogo.png"

const experiences=[
    {
        icon:SynapxeLogo,
        date:'Sept 2026 - Jan 2026',
        title:'Software Engineer Internship',
        place:'Synapxe (Ministry Of Health)',
        details:[
            "Deployed to the Ministry of Health via Synapxe, Singapore’s national healthtech agency supporting all public healthcare institutions",
            "Developed reusable front-end components and scalable back-end APIs to automate projection simulations, significantly reducing processing time and supporting policy-making decisions",
            "Contributed to AI integration by leveraging LLM services to automatically generate insights from health datasets, improving accessibility for non-technical stakeholders",
            "Supported Agile workflows by utilizing CI/CD pipelines and adhering to government deployment standards"
        ]
    },
    {
        icon:CfesLogo,
        date:'February 2025 - April 2025',
        title:'Software Developer Internship',
        place:'Center of Environmental Sustainability',
        details:[
            "Contributed to the development of a full-stack internal web platform for resource management & booking used by 3 departments, enhancing usability and workflow efficiency",
            "Supported hardware-software integration, handled I/O junction setup & backend functionality for a filtration system, which was then showcased at an industry event in EXPO with 65,000+ attendees",
            "Designed & implemented scalable database structures, backend services, & responsive UI components in 6 core pages to improve data flow and user experience"
        ]
    },
    {
        icon:LeaptechLogo,
        date:'August 2023 - October 2023',
        title:'UI/UX Designer Internship',
        place:'Leaptechnology',
        details:[
            "Managed 3 company projects, creating intuitive interfaces that enhanced user experience",
            "Collaborated with clients & a team of 5 developers to turn design concepts into functional prototypes, refining designs through iterative cycles",
            "Leveraged industry best practices & emerging design trends to inform design decisions, staying abreast of developments in UI/UX design"
        ]
    },
    {
        icon:NpLogo,
        date:'April 2023 - April 2026',
        title:'Diploma in Immersive Media (School of ICT)',
        place:'Ngee Ann Polytechnic',
        details:[
            "Developed expertise in web and multimedia development by working with APIs, databases, and frameworks, equipping me to create scalable and reliable applications.",
            "Gained a strong foundation in UI/UX design, learning how to create user-centered, accessible, and visually appealing interfaces",
            "Explored the strategic role of design and development in driving business outcomes, learning how to align technical solutions with organizational goals to foster innovation and growth",
            "CCAs: ICT Society, The Christieara Committee (Subcommittee), Environmental Rangers Club (EXCO)"
        ]
    },
    {
        icon:CtssLogo,
        date:'January 2019 - December 2022',
        title:'O levels',
        place:'Clementi Town Secondary School',
        details:[
            "Took O level Computing which exposed me to the world of technology, where I developed foundational skills in programming, problem-solving, and computational thinking",
            "Actively participated in multiple hackathons, collaborating with diverse teams to create innovative solutions under time constraints",
            "CCAs: Class Committee (Class Chairperson), Student Council (EXCO), National Civil Defense Cadet Corps (Staff Sergeant)"
        ]
    }
]
const VerticalTimelinePeriod =()=>{
    return(
        <div className="px-5">
            <VerticalTimeline lineColor={'white'} >
                {
                    experiences.map((experience,index)=>(
                        <VerticalTimelineElement 
                        key={index}
                        className="vertical-timeline-element pt-4"
                        contentStyle={{ background: 'rgba(217, 217, 217, 0.1)',color:'white',boxShadow: '-0.001px -5px #DB3DFD',  }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(217, 217, 217, 0.1)' }}
                        date={experience.date}
                        iconStyle={{ background: '#fff' ,color: '#fff',boxShadow: 'none',  }}
                        icon={<div className="flex justify-center items-center w-full h-full">
                            <img src={experience.icon} alt="Email" className="object-contain w-8 h-8 lg:w-11 lg:h-11"/>
                        </div>}
                        >
                            <h3 className="vertical-timeline-element-title font-bold text-neon text-2xl">{experience.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle font-semibold text-xl">{experience.place}</h4>
                            <ul role="list" class="pt-3 list-disc font-medium pl-3 marker:text-secondary text-secondary">
                                {
                                    experience.details.map((detail,idx)=>(
                                        <li key={idx}>{detail}</li>
                                    ))
                                }
                            </ul>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    );
}

export default VerticalTimelinePeriod;