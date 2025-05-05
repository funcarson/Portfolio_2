/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Carson King",
  title: "Hi all, I'm Carson",
  subTitle: emoji(
    "A passionate Computer Science graduate aiming to break into Software Development. I have experience building applications in Java, C, C++, Python, and more, using various IDEs such as Visual Studio, VS Code, and IntelliJ."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BKVLOndpsNVC85g123zrqJdgsrJlM5xK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/funcarson",
  linkedin: "https://www.linkedin.com/in/carson-king-676563269/",
  gmail: "carsonwork1246@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CREATIVELY SOLVE COMPLEX PROGRAMMING ISSUES SUCH AS",
  skills: [
    emoji(
      "⚡  Co-Developed a free beginner course on Java programming; integrated fully into Minecraft "
    ),
    emoji("⚡ Co-Created a 2D Simulation"),
    emoji(
      "⚡  Co-Creates an AI Powered Calnder with Canvas Integration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Window",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Agile",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C, C++, C#",
      fontAwesomeClassname: "fa-solid fa-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CU Colorado Springs",
      logo: require("./assets/images/UCCSLogo.png"),
      subHeader: "Bachelors in Computer Science",
      duration: "August 2022 - May 2025",
      desc: "",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "68%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Advanced Programmer AI Training",
      company: "Outlier",
      companylogo: require("./assets/images/Outlier.png"),
      date: "October 2024 – February 2025",
      desc: "I worked on analyzing AI output based on prompts given to it.",
      descBullets: [
        "Analyzed over 100 separate AI responses to various prompts ",
        "Clearly documented all discrepancies of AI generated code in Python, Java, C++, and JavaScript ",
        "Made final judgements on all AI generated outputs, including code and written responses/explanations "
    ]
    },

    {
      role: "IT Intern",
      company: "Lavner Education",
      companylogo: require("./assets/images/LavnerEducation.png"),
      date: "June 2023 – August 2023",
      desc: "I worked with my peers to keep camp software running efficiently and effectively.",
      descBullets: [
          "Taught 3 separate course on basic Python and Java code ",
          "Troubleshooted/Fixed over 50 separate device malfunctions, including both software and hardware issues using Slack "
      ]
    },
    
    {
      role: "Student IT Technician",
      company: "Chatfield Senior High School",
      companylogo: require("./assets/images/ChatfeildLogo.png"),
      date: "August 2021 – May 2022",
      desc: "• I worked as an on-call student IT technician during my senior year of high school.",
      descBullets: [
        "Troubleshooted/Fixed over 100 different school-issued Chromebooks, iPads, and projectors ",
        "Communicated with over 150 students and teachers both in person and on Jira "
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME GROUP PROJECTS THAT'S RELEASED",
  projects: [
    {
      image: require("./assets/images/LearnToCode.png"),
      projectName: "LearnToCode Mod",
      projectDesc: "Served as Head Devloper for a Minecraft mod adding a fully functional terminal with lessons on how to code in java.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.curseforge.com/minecraft/mc-mods/learn-to-code"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Calendai.png"),
      projectName: "Calendai",
      projectDesc: "Devloped an AI powered Calendar with full Canvas Integration for assignment managment.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://calendai.space"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/RedShift.png"),
      projectName: "The Red Shift",
      projectDesc: "Served as Lead Designer for a 2D-simulator game where you play as a bartender on Mars.",
      footerLink: [
        {
          name: "Play Our Game",
          url: "https://store.steampowered.com/app/3545140/The_Red_Shift/"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};


// ==================== Serious Games Section ====================
const seriousGamesSection = {
  display: true, // toggle to show/hide
  title: "Serious Games",

  // 1. Definition
  definition: "Serious Games are games with the intended purpose to teach skills a person can use in the real world.",

  // 2. New learnings (things you didn’t know at semester start)
  learnings: [
    "Trying to build a game thats both fun and educational is a serious challenge, as you awlays lean one way or the other.",
    "Serious games are starting to be used everywhere for jobs, including Military, Health Care, Retail, and more! "
  ],

  // 3. One-paragraph summary of your class work
  classWork: "In this class we started off with a simple premice of building a mars rover simulation, with simulated heat and battery life with the goal of finding life. What I did was create a simple pygame with a rover who aimlessly roams around automatically, trying to find life while avoiding hot and cold spots. Then we were tasked with building a game which could be uses in a Space museum. What I ended up doing was make a rover builder simulator, where the user is tasked from nasa to take pictures of various landmarks on Mars. The player builds their rover, looks for as many hotspots as they can, take photos, then when the time runs out they turn in their photos for more funding to build a a better rover, and this repeats until they've found all the hotspots.",

  // 4. Images for each of the above
  images: {
    definitionImg: {
      src: require("./assets/images/Definition.png"),
      alt: "Diagram illustrating serious games components"
    },
    learningsImg: {
      src: require("./assets/images/Learnings.png"),
      alt: "User testing session photo"
    },
    classWorkImg: {
      src: require("./assets/images/Classwork.png"),
      alt: "Screenshot of prototype matching game"
    }
  },

  // 5. Larger project demo
  projectDemo: {
    media: "./assets/videos/marsRoverDemo.gif", // or .mp4
    caption: "Mars Rover Simulation—resource collection demo"
  },

  // 6. Voiceover file explaining the demo
  voiceover: {
    src: require("./assets/audio/seriousGames_demo_voiceover.mp3"),
    alt: "Audio narration of the Mars Rover demo"
  },

  // 7. Future Predictions
  futurePrediction: "I believe serious games will be full integrated with VR, utilizing it from on the job training, to military simulations. This will allow for more realstics and smarter training simulations, better preparing people for the workforce and the battlefield. "
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications!",

  achievementsCards: [
    {
      title: "Comptia IT Fundementals+ Certification",
      subtitle:
        "Earned certification in IT Fundamentals+.",
      image: require("./assets/images/Cert.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1-9P-Ex25mGcwxm93SYvYNE74L-Tibm4A/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to questions and opportunities.",
  number: "+1-(303)-505-5098",
  email_address: "carsonwork1246@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  seriousGamesSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
