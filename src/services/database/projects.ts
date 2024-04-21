import { Project, TechnologiesEnum } from "@/interfaces/projects";

export const ProjectsDB: Project[] = [
  {
    id: "de9ca834-8f55-4abe-8adc-317166471adf",
    name: "Blog",
    about:
      "Our blog utilizes the lazy loading component for optimization of loading, avoiding unnecessary requests.",
    links: {
      github: "https://github.com/MatheusPalmieri/blog",
      demo: "https://matheuspalmieri-blog.netlify.app",
    },
    technologies: [
      TechnologiesEnum.NEXT,
      TechnologiesEnum.TYPESCRIPT,
      TechnologiesEnum.CSS,
    ],
    image: "blog.png",
  },
  {
    id: "b7a09c74-35e9-4e02-b61f-fb09f6e13de9",
    name: "NLW Unite",
    about:
      "Development of a front-end application in ReactJS, applying concepts of Properties, States, and Components, typing with Typescript, tooling with Vite, responsive interface with TailwindCSS, consumption of Node.js API, and utilization of URL states.",
    links: {
      github: "https://github.com/MatheusPalmieri/nlw-unite",
      demo: "https://nlw-unite.netlify.app",
    },
    technologies: [
      TechnologiesEnum.REACT,
      TechnologiesEnum.TYPESCRIPT,
      TechnologiesEnum.TAILWIND,
    ],
    image: "nlw-unite.png",
  },
  {
    id: "4bfa82e4-25a4-40da-ba67-8a6841fee2ed",
    name: "iMovi",
    about:
      "Created to promote a company dedicated to home decoration, bringing elegance and style to its clients' homes. The project is developed using the Bootstrap framework.",
    links: {
      github: "https://github.com/MatheusPalmieri/iMovi",
      demo: "https://matheuspalmieri.github.io/iMovi",
    },
    technologies: [
      TechnologiesEnum.HTML,
      TechnologiesEnum.CSS,
      TechnologiesEnum.BOOTSTRAP,
    ],
    image: "imovi.png",
  },
  {
    id: "71f4a712-301b-42f5-b99d-f72825515ea8",
    name: "Weather Forecast",
    about: "We provide accurate historical weather data via API.",
    links: {
      github: "https://github.com/MatheusPalmieri/weather-forecast",
      demo: "https://matheuspalmieri-weatherforecast.netlify.app",
    },
    technologies: [
      TechnologiesEnum.REACT,
      TechnologiesEnum.JAVASCRIPT,
      TechnologiesEnum.CSS,
    ],
    image: "weather-forecast.png",
  },
];
