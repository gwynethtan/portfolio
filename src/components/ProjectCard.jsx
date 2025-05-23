import Tilt from 'react-parallax-tilt';
import Voia from '../assets/projectImages/voia.png'
import PortfolioWeb from '../assets/projectImages/portfolioWeb.png'
import YepWeb from '../assets/projectImages/yepWeb.png'
import InfernoWeb from '../assets/projectImages/infernoWeb.png'
import RoleModels from '../assets/projectImages/roleModels.png'
import SpongeLab from '../assets/projectImages/spongeLab.png'
import MosquitoCafe from '../assets/projectImages/mosquitoCafe.png'
import HighRizzHighReward from '../assets/projectImages/highRizzHighReward.png'
import YepVr from '../assets/projectImages/yepVr.png'
import InfernoVr from '../assets/projectImages/infernoVr.png'
import Aura from '../assets/projectImages/aura.png'
import PawPrints from '../assets/projectImages/pawPrints.png'
import NatureLover from '../assets/projectImages/natureLover.png'
import PennyJuice from '../assets/projectImages/pennyJuice.png'
import Island from '../assets/projectImages/island.png'

import Github from '../assets/github.png';
import Youtube from '../assets/youtube.png';
import Link from '../assets/link.png';
import Document from '../assets/document.png';
import Figma from '../assets/figma.png';

const projectDetails =[
  {
    title:'Voia',
    image:Voia,
    description:'(IN PROGRESS) This mixed reality capstone project aims to assist deaf individuals by bridging communication gaps between sign language users and non-signers. It detects sign language, converts it into complete text and audio output, and also supports audio detection. I experimented with YOLOv5, XR Hands, and Google Cloud AI APIs for sign recognition and speech processing.',
    references:[
    ]
  },
  {
    title:'Portfolio Website',
    image:PortfolioWeb,
    description:'Designed and programmed this website to showcase my projects all in one place. It’s a space where people can get to know me, view my experiences, and reach out to me easily. The site’s fully responsive with animations and is designed to be clean and easy to navigate.',
    references:[
      {icon:Youtube,link:'https://github.com/gwynethtan'},
      {icon:Github,link:'https://github.com/gwynethtan/portfolio'},
      {icon:Figma,link:'https://www.figma.com/design/fvrJ3EJfDf0d7e069G00qP/portfolio?node-id=0-1&t=wundoaJKYlgrDvqM-1'}
    ]
  },
  {
    title:'YEP Onboarding Website',
    image:YepWeb,
    description:'Programmed this platform to help users assess their suitability for the Youth Expedition Program by encouraging self-reflection on their experiences, readiness, and personal growth.It offers a personalized space to manage their accounts and track personal growth.',
    references:[
      {icon:Youtube,link:'https://youtu.be/Om3OIa5wROs'},
      {icon:Github,link:'https://github.com/gwynethtan/DDA_Aura_Web'},
      {icon:Document,link:'https://docs.google.com/document/d/116ZhW-f-cP_op-u-hiqmbA8ZN5_QztWwuv-c5d5GJjU/edit?usp=sharing'}
    ]
  },
  {
    title:'Inferno Evaluation Website',
    image:InfernoWeb,
    description:'Programmed this to help firefighting job applicants review their performance, compare results, and assess their fit for the role. It also supports HR by providing detailed insights into each candidate’s responses under pressure offering a deeper evaluation beyond traditional interviews.',
    references:[
      {icon:Link,link:'https://inferno-a3d89.web.app/inferno.html'},
      {icon:Document,link:'https://docs.google.com/document/d/1gFh65hp2N4jketVMKIp06W7W1aK3km-oWygW_uLz4IQ/edit?tab=t.0'},
    ]
  },
  {
    title:'Role Models',
    image:RoleModels,
    description:'Programmed this website with Sketchfab and RestDB API to support 3D modeling students. Users can upload Sketchfab models for help, answer questions to earn points, upvote solutions, and join competitions. Points can be redeemed for vouchers to boost engagement and learning.',
    references:[
      {icon:Youtube,link:'https://www.youtube.com/watch?v=8cRFKr-4PtA'},
      {icon:Github,link:'https://github.com/gwynethtan/RoleModels'},
      {icon:Document,link:'https://docs.google.com/document/d/1tzIogO_Qtd1-wvCa_t3F_0fPrrM6V9ZquGeACOo_y64/edit?tab=t.0'}
    ]
  },
  {
    title:'Sponge Lab AR App',
    image:SpongeLab,
    description:'Programmed this AR app where users can take fun photos with Scrub Daddy, explore the science behind Scrub Daddy and clean various dirty items with Scrub Daddy by activating its properties. This app can promote and educate people about Scrub Daddy.',
    references:[
      {icon:Youtube,link:'https://youtu.be/CHIEX9xqz5g'},
      {icon:Document,link:'https://docs.google.com/document/d/1RayIBwsbKv2azuU6Z1trYfJV0UzpQw0E-zQRdNL-wZY/edit?tab=t.0'},
    ]
  },
  {
    title:'Mosquito Cafe',
    image:MosquitoCafe,
    description:'Programmed this 2D game which puts a heavy focus on the CRUD system and its database storage. It is a simple game where users will click on the corresponding blood type the user has requested in one minute.',
    references:[
      {icon:Youtube,link:'https://youtu.be/A-RM7M_YLvE'},
      {icon:Document,link:'https://docs.google.com/document/d/1Do11AXnQhnwLcw6_T_3gY9AJAZB3tLnrODZzUoqzOO4/edit?usp=sharing'},
    ]
  },
  {
    title:'High Rizz High Reward',
    image:HighRizzHighReward,
    description:'Programmed an open world game where players can select a list of profiles to date and do activities (according to the partner’s preferences) to gain aura. Game ends once players decide to propose and experiment whether their aura is sufficient for the partner.',
    references:[
      {icon:Youtube,link:'https://youtu.be/hEmTSVYKZwM'},
      {icon:Github,link:'https://github.com/gwynethtan/HighRizzHighReward'},
      {icon:Document,link:'https://docs.google.com/document/d/1y0uhOW7ka2wgdkO1jhGj0b40V3O4bfa5r31Ugn77tL4/edit?usp=sharing'}
    ]
  },
  {
    title:'YEP VR Simulation',
    image:YepVr,
    description:'Programmed this VR game to simulate the Youth Expedition Program experience for students who are thinking about joining this program. Students are expected to complete tasks that can be physically demanding and familiarize themselves with the outdoor environment.',
    references:[
      {icon:Youtube,link:'https://youtu.be/o85UFUnnTF4'},
      {icon:Github,link:'https://github.com/JacieThoo/ITD_Aura_Project'},
    ]
  },
  {
    title:'Inferno VR Job Simulator',
    image:InfernoVr,
    description:'Programmed this VR escape room game designed to help employers assess firefighting job candidates. Players have 20 minutes to rescue a dog from a burning room while making strategic decisions, using tools, solving puzzles, and following walkie-talkie instructions.',
    references:[
      {icon:Youtube,link:'https://www.youtube.com/watch?v=I31gWy0RXvA'},
      {icon:Github,link:'https://github.com/gwynethtan/Assg2_Inferno_Unity_Project'},
      {icon:Document,link:'https://docs.google.com/document/d/1NTyNlwFF3-1YJkbpICFJej_j-U2p78CdMpeYGm_V41E/edit?usp=sharing'}
    ]
  },
  {
    title:'Aura',
    image:Aura,
    description:'Designed this dating app where young adults can meet and know more about their potential partners. The goal is to bring out the natural personality in them through the unique Aura system, promoting people to form genuine connections with their dates.',
    references:[
      {icon:Figma,link:'https://www.figma.com/design/UxWboUDaqfjfSFt07vTgHN/Aura?node-id=0-1&p=f&t=piRJvR5d9E738KUX-0'},
      {icon:Document,link:'https://www.canva.com/design/DAGlKp_egNs/zgh2-AvurSNjGGrYbiDqMQ/edit?utm_content=DAGlKp_egNs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'},
    ]
  },
  {
    title:'Paw Prints',
    image:PawPrints,
    description:'Designed this app is to provide peace of mind to dog owners by supporting their pets needs during the COVID-19 period. It allows users to book grooming services, access a lost-and-found list for dogs, and connect with other dog owners for group walks.',
    references:[
      {icon:Figma,link:'https://www.figma.com/design/zMPkXbUMblxXTOeQblysO8/DUX_Assg1_P02_TanTingYuGwyneth?node-id=12-2094&p=f&t=U7TWJ8gfUkcf43vk-0'},
      {icon:Document,link:'https://www.canva.com/design/DAGFy3L1Its/qHvWjZKIFjvPyT_iiYvRPA/edit?utm_content=DAGFy3L1Its&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'},
    ]
  },
  {
    title:'Nature Lover',
    image:NatureLover,
    description:'Designed a platform that builds a community around sharing eco-tips, asking questions, and joining challenges. Users earn points for their actions, redeemable for vouchers and rank boosts—encouraging climate action through fun and connection.',
    references:[
      {icon:Youtube,link:'https://youtu.be/nSVhKRNwsPY'},
      {icon:Document,link:'https://docs.google.com/document/d/1Ak-RKsh6adczvuJeUgSWzfnNKiC3Xc1ryDyAe-rzG24/edit?tab=t.0'},
    ]
  },
  {
    title:'Penny Juice Revamp Poster',
    image:PennyJuice,
    description:'Redesigned the poster and UI/UX website to give the Penny Juice brand a fresh, modern vibe. I used darker tones in the poster for boldness and lighter colors on the website to create contrast and highlight the revamped look',
    references:[
      {icon:Document,link:'https://www.canva.com/design/DAFifyLStcE/Ex_sw_1AqLCsP5LacXrtZg/edit?utm_content=DAFifyLStcE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'},
    ]
  },
  {
    title:'Island Restaurant',
    image:Island,
    description:'Crafted this environment to evoke an ethereal atmosphere. I leaned into a palette of cool tones, soft gradients, and glowing lights to create a sense of mysticism, encouraging viewers to feel as though they have stepped into a serene, otherworldly space suspended in time.',
    references:[
      {icon:Youtube,link:'https://youtu.be/-lrG5z97qdc'},
    ]
  },
 
]
const ProjectCard = () => {
  return (
    <div id="projectDetails" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-10 md:gap-12 lg:gap-16 justify-center mx-10 md:mx-16 lg:mx-40">
      {
        projectDetails.map((projectDetail,index)=>(
          <article key={index}>
            <Tilt className="h-[480px]">
              <div className="bg-card h-[480px] rounded-2xl border-2 border-neon p-4 relative">
                <h2 className="text-white font-bold text-xl">{projectDetail.title}</h2>
                <img src={projectDetail.image} className="mt-4 rounded-md"/>
                <p className="text-secondary text-sm font-medium text-justify pt-5">{projectDetail.description}</p>
                <div className="flex absolute bottom-5">
                  {
                    projectDetail.references.map((reference,idx)=>(
                      <a href={reference.link} key={idx}>
                          <img src={reference.icon} className="w-11 h-11 mr-3" />
                      </a>
                    ))
                  }
                </div>
              </div>
            </Tilt>
          </article>
        )
      )
      }
    </div>
  );
};

export default ProjectCard;