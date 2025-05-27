import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "HTML5 & CSS3",
    "Git & GitHub",
    "Node.js",
    "REST APIs",
    "Responsive Design"
  ];

 const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and Vite, showcasing projects, skills, and contact info.",
    link: "#",
image: "/images/portfolio.png"
  },
  {
    title: "Todo App",
    description: "A task management app with React hooks and localStorage for persistence.",
    link: "https://smart-task-manager-final.vercel.app/",
image: "/images/todo-app.png"
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecast app using the OpenWeatherMap API. Built with React and CSS.",
    link: "#",
image: "/images/weatherapp.png"
  }
];



  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <nav>
        <Header />
      </nav>

      <main>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>
        <section className="section">
          <About bio="I'm a web developer with a passion for building responsive, user-friendly web applications. Experienced in React, JavaScript, and modern web technologies. Seeking opportunities to contribute and grow in a dynamic team." />
        </section>

        <section className="section">
          <Skills skills={skills} />
        </section>

        <section className="section">
          <Education />
        </section>

        <section className="section">
          <Projects projects={projects} />
        </section>

        <section className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
