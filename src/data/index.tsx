import { Work, Mates, Social, Uni, Additional } from "./types";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const work: Work = {
  languages: [
    "React",
    "React-Native",
    "AWS",
    "Redux/Redux-Persist",
    "TypeScript",
  ],
};

export const uni: Uni[] = [
  {
    id: 1,
    title: "TrustBLK",
    description:
      "For my honours project I developed a trustworthy yet fair ad-blocker that you can use with Google Chrome. The project highlighted that there is potential to automate the process of highlighting acceptable ads (ads that don't completely ruin the internet). The ad-blocker developed showed these ads to the end user where they made the final call on if the ad should be blocked.",
    skills: ["Vanilla JavaScript"],
    link: "https://github.com/cheerypal/TrustBLK",
  },
  {
    id: 2,
    title: "F20DB",
    description:
      "I have implemented a multi-layer neural network that trained using Particle Swarm Optimisation. The ANN made use of multiple activation functions that were easily configurable depending on the task the NN had to complete. The neural network accurately predicted several tests when given test data and expected outputs.",
    skills: ["Python"],
    link: "https://github.com/amaan-akram/F20BC",
  },
  {
    id: 3,
    title: "Uplink",
    description:
      "Uplink was a project undertaken in my 3rd year of university as part of the software engineering course I had taken. The task was develop a Smart Home Hub System to control and monitor smart device energy usage within the home. Users could control the smart devices they had connected, set schedules and automate tasks. The system could send push notifications to the user if a device was consuming too much energy. The system was developed using the SCRUM development process.",
    skills: ["Vue.js", "Node.js", "SQLite"],
    link: "https://github.com/HutchieV/F29SO-Sinderet-Green",
  },
];

export const additional: Additional[] = [
  {
    id: 1,
    title: "VIROLL",
    description:
      "Developed a COVID-19 stats comparison webapp. The webapp was a PWA therefore the user can download and install it on their phone via supporting browsers",
    skills: ["Vue.js"],
    link: "https://viroll.herokuapp.com",
  },
  {
    id: 2,
    title: "Personal Site",
    description:
      "Developed this very site to display my projects, experience and other things I find interesting.",
    skills: ["TypeScript", "React", "Redux"],
    link: "https://github.com/cheerypal/euangordon.me",
  },
];

export const mates: Mates[] = [
  {
    id: 1,
    name: "Amaan",
    link: "https://www.amaanakram.tech/",
  },
  {
    id: 2,
    name: "Adithya",
    link: "https://www.instagram.com/aydee.wav/",
  },
  {
    id: 3,
    name: "Alakbar",
    link: "https://alak.bar/",
  },
  {
    id: 4,
    name: "Abdelrahman",
    link: "https://elkabbany.xyz/",
  },
  {
    id: 5,
    name: "Humaid",
    link: "https://huma.id/",
  },
];

export const social: Social[] = [
  {
    id: 1,
    name: "twitter",
    link: "https://twitter.com/Cheerypal_",
    element: <FaTwitter />,
  },
  {
    id: 2,
    name: "github",
    link: "https://github.com/Cheerypal",
    element: <FaGithub />,
  },
  {
    id: 3,
    name: "linkedin",
    link: "https://www.linkedin.com/in/euan-gordon-8b984b151/",
    element: <FaLinkedinIn />,
  },
];
