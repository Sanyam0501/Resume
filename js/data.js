const skills = [
  { id: 1, name: 'JavaScript', description: 'A popular programming language.', category: 'Programming', experience: 3, image: './assets/javascript.webp', featured: true },
  { id: 2, name: 'Python', description: 'A versatile programming language used in multiple domains.', category: 'Programming', experience: 4, image: './assets/python.svg', featured: false },
  { id: 3, name: 'Java', description: 'A high-level, object-oriented programming language.', category: 'Programming', experience: 9, image: './assets/java.png', featured: true },
  { id: 4, name: 'SQL', description: 'A language for managing databases.', category: 'Databases', experience: 6, image: './assets/sql.png', featured: true },
  { id: 5, name: 'MongoDB', description: 'A NoSQL database for modern applications.', category: 'Databases', experience: 3, image: './assets/mongodb.svg', featured: false },
  { id: 6, name: 'HTML', description: 'The standard markup language for creating web pages.', category: 'Web Development', experience: 7, image: './assets/html.png', featured: false },
  { id: 7, name: 'CSS', description: 'A style sheet language for designing web pages.', category: 'Web Development', experience: 8, image: './assets/css.png', featured: true },
  { id: 8, name: 'React', description: 'A JavaScript library for building user interfaces.', category: 'Web Development', experience: 2, image: './assets/react.png', featured: false },
  { id: 9, name: 'Node.js', description: 'A JavaScript runtime environment for backend development.', category: 'Backend Development', experience: 5, image: './assets/node.png', featured: true },
  { id: 10, name: 'Django', description: 'A high-level Python web framework.', category: 'Backend Development', experience: 4, image: './assets/django.png', featured: false },
  { id: 11, name: 'REST API', description: 'A standard architecture for designing networked applications.', category: 'API Development', experience: 6, image: './assets/restapi.png', featured: true },
  { id: 12, name: 'GraphQL', description: 'A query language for APIs.', category: 'API Development', experience: 3, image: './assets/graphql.png', featured: false },
  { id: 13, name: 'AWS', description: 'Amazon Web Services cloud computing platform.', category: 'Cloud Services', experience: 5, image: './assets/aws.png', featured: true },
  { id: 14, name: 'Google Cloud', description: 'Google Cloud Platform for cloud computing.', category: 'Cloud Services', experience: 4, image: './assets/gcp.png', featured: false },
  { id: 15, name: 'Azure', description: 'Microsoft’s cloud computing platform.', category: 'Cloud Services', experience: 4, image: './assets/azure.png', featured: true },
  { id: 16, name: 'Problem Solving', description: 'Logical thinking to tackle challenges.', category: 'Work Place and Interpersonal Skills', experience: 6, image: './assets/problem.jpg', featured: true },
  { id: 17, name: 'Team Collaboration', description: 'Effective teamwork and communication.', category: 'Work Place and Interpersonal Skills', experience: 7, image: './assets/team.jpg', featured: true },
  { id: 18, name: 'Time Management', description: 'Prioritization with adaptability.', category: 'Work Place and Interpersonal Skills', experience: 9, image: './assets/time.jpg', featured: true }
];

const projects = [
  {
      title: "Online Book Store",
      description: "A web-based library management system.",
      image: "./assets/library.webp",
      category: "web",
      rating: 4,
      technologies: ["HTML", "CSS", "JavaScript","Node.js", "Express.js", "MySQL"],
      github: "https://github.com/Sanyam0501/AWP_PROJECT"
  },
  {
    title: "Thryve",
    description: "A collaborative platform connecting mentors and mentees for guidance and growth.",
    image: "./assets/thryve.png",
    category: "front",
    rating: 5,
    technologies: ["HTML", "CSS", "JavaScript" ,"Bootstrap 5"],
    github: "https://github.com/Sanyam0501/Thryve"
},
  {
      title: "Vipra",
      description: "A platform for matchmaking and marriage connections.",
      image: "./assets/vipra-page.png",
      category: "front",
      rating: 5,
      technologies: ["HTML", "CSS", "Bootstrap 5"],
      github: "https://github.com/sanyam/bank-system"
  },
  {
      title: "ROZEH",
      description: "An online marketplace for buying and selling products.",
      image: "./assets/rozeh.png",
      category: "web",
      rating: 5,
      technologies: ["HTML","CSS","Bootstrap 5","JavaScript","SQLite","Flask"],
      github: "https://github.com/sanyam/robot"
  },
  {
      title: "Kalyan",
      description: "A captivating landing page showcasing a game's features, visuals and download links.",
      image: "./assets/kalyan.png",
      category: "front",
      rating: 3,
      technologies: ["HTML", "CSS", "Bootstrap 5"],
      github: "https://github.com/sanyam/lightsensor"
  },
  {
      title: "Indocuisine",
      description: "A visually appealing landing page showcasing a restaurant's menu, ambiance and booking options.",
      image: "./assets/indocuisine.png",
      category: "front",
      rating: 4,
      technologies: ["HTML", "CSS", "Bootstrap 5"],
      github: "https://github.com/sanyam/lightsensor"
  },
  {
      title: "Attendance Management System",
      description: "A system for tracking and managing attendance efficiently.",
      image: "./assets/attendance.webp",
      category: "web",
      rating: 5,
      technologies: ["HTML", "CSS", "JavaScript","Node.js", "Express.js", "MySQL"],
      github: "https://github.com/Sanyam0501/Student-Attendance-Management-System"
  }
];