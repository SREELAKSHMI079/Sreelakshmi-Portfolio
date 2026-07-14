import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";


const projects = [
    {
        title: "AI Portfolio Investment Simulator",
        category: "Deep Reinforcement Learning",
        tech: "Python • PyTorch • DQN • Gymnasium • yfinance",
        description:
            "Developed a custom trading environment and Deep Q-Network agent for portfolio optimization. Backtested the trained agent on unseen stock data and benchmarked performance against a Buy-and-Hold strategy using Total Return, Sharpe Ratio, and Maximum Drawdown."
    },

    {
        title: "YOLOv8 Road Damage Detection",
        category: "Computer Vision",
        tech: "Python • PyTorch • YOLOv8 • OpenCV",
        description:
            "Fine-tuned YOLOv8m on the RDD2022 dataset containing over 47,000 annotated road images and built an end-to-end pipeline for training, evaluation, real-time inference, and road damage severity estimation."
    },

    {
        title: "Fraud Detection System",
        category: "Applied Machine Learning",
        tech: "Python • Scikit-learn • Pandas • NumPy",
        description:
            "Developed a supervised machine learning pipeline for financial fraud detection covering data preprocessing, exploratory data analysis, feature engineering, model training, and performance evaluation."
    }
];


const skills = [
    "Python",
    "Java",
    "C++",
    "SQL",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "YOLOv8",
    "OpenCV",
    "Pandas",
    "NumPy",
    "Git & GitHub"
];


function App() {

    return (

        <>

            {/* =========================
                NAVBAR
            ========================= */}

            <nav>

                <b className="logo">
                    SA.
                </b>


                <div className="nav-links">

                    <a href="#skills">
                        Skills
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#experience">
                        Experience
                    </a>

                    <a href="#education">
                        Education
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>

            </nav>



            {/* =========================
                HERO
            ========================= */}


            <header>

                <small>
                    AI & BACKEND ENGINEER
                </small>


                <h1>

                    Hi, I'm

                    <em>
                        {" "}Sreelakshmi.A
                    </em>

                    <br />

                    I build intelligent systems.

                </h1>


                <p>

                    Computer Science undergraduate specializing in
                    Artificial Intelligence and Machine Learning with
                    interests in machine learning, computer vision,
                    deep reinforcement learning, and backend development.

                </p>


                <div className="hero-buttons">


                    <a
                        className="primary-button"
                        href="#projects"
                    >

                        View My Projects →

                    </a>


                    <a
                        className="secondary-button"
                        href="https://github.com/SREELAKSHMI079"
                        target="_blank"
                        rel="noreferrer"
                    >

                        GitHub

                    </a>


                </div>

            </header>



            {/* =========================
                SKILLS
            ========================= */}


            <section id="skills">

                <small>
                    01 / SKILLS
                </small>


                <h2>
                    Technical Skills
                </h2>


                <div className="skills">

                    {skills.map((skill) => (

                        <span key={skill}>

                            {skill}

                        </span>

                    ))}

                </div>

            </section>



            {/* =========================
                PROJECTS
            ========================= */}


            <section id="projects">

                <small>
                    02 / PROJECTS
                </small>


                <h2>
                    Selected Projects
                </h2>


                <div className="projects">


                    {projects.map((project, index) => (

                        <article key={project.title}>


                            <i>

                                0{index + 1}

                            </i>


                            <label>

                                {project.category}

                            </label>


                            <h3>

                                {project.title}

                            </h3>


                            <p>

                                {project.description}

                            </p>


                            <b>

                                {project.tech}

                            </b>


                        </article>

                    ))}


                </div>

            </section>



            {/* =========================
                EXPERIENCE
            ========================= */}


            <section id="experience">

                <small>
                    03 / EXPERIENCE
                </small>


                <h2>
                    Experience
                </h2>


                <div className="job">


                    <h3>

                        Machine Learning Intern

                    </h3>


                    <label>

                        Unified Mentor · Sep 2025 – Nov 2025

                    </label>


                    <p>

                        Developed and evaluated machine learning models
                        using Python and Scikit-learn on real-world
                        datasets.

                    </p>


                    <p>

                        Performed data preprocessing, feature engineering,
                        model validation, and performance analysis.

                    </p>


                </div>



                <div className="job">


                    <h3>

                        Machine Learning Intern

                    </h3>


                    <label>

                        Placify Technologies · Sep 2024 – Nov 2024

                    </label>


                    <p>

                        Worked on predictive machine learning workflows
                        involving data preprocessing, feature selection,
                        model training, and validation.

                    </p>


                    <p>

                        Improved model performance through experimentation,
                        comparative evaluation, and feature engineering.

                    </p>


                </div>


            </section>



            {/* =========================
                EDUCATION
            ========================= */}


            <section id="education">

                <small>
                    04 / EDUCATION
                </small>


                <h2>
                    Education
                </h2>


                <div className="education">


                    <div className="education-top">


                        <div>


                            <h3>

                                Vellore Institute of Technology, Bhopal

                            </h3>


                            <h4>

                                Bachelor of Technology in Computer Science
                                and Engineering

                            </h4>


                        </div>


                        <span className="graduation">

                            Expected Graduation: 2027

                        </span>


                    </div>


                    <p>

                        Specialization in Artificial Intelligence
                        & Machine Learning

                    </p>


                    <div className="cgpa">

                        CGPA

                        <strong>

                            8.75 / 10.00

                        </strong>

                    </div>


                </div>


            </section>



            {/* =========================
                CONTACT
            ========================= */}


            <section
                id="contact"
                className="contact"
            >


                <small>

                    05 / CONTACT

                </small>


                <h2>

                    Get in Touch

                </h2>


                <p>

                    I'm interested in opportunities in AI/ML,
                    backend engineering, and software development.

                </p>


                <div className="links">


                    <a
                        href="mailto:sreelakshmia2005@gmail.com"
                    >

                        Email

                    </a>


                    <a
                        href="https://linkedin.com/in/sreelakshshmi-a-69100b296"
                        target="_blank"
                        rel="noreferrer"
                    >

                        LinkedIn

                    </a>


                    <a
                        href="https://github.com/SREELAKSHMI079"
                        target="_blank"
                        rel="noreferrer"
                    >

                        GitHub

                    </a>


                    <a
                        href="https://leetcode.com/u/SREELAKSHMI_leetcode/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        LeetCode

                    </a>


                </div>


            </section>



            {/* =========================
                FOOTER
            ========================= */}


            <footer>


                <span>

                    © 2026 Sreelakshmi A

                </span>


                <span>

                    Built with React

                </span>


            </footer>


        </>

    );

}


createRoot(document.getElementById("root")).render(<App />);