import React from 'react';
import "animate.css";
import img1 from '../../assets/KB-MERN-Featured.jpg'
import img2 from '../../assets/pngtree-isolated-mountain-mockup-in-3d-rendering-with-responsive-web-design-for-image_3756223.jpg'
import img3 from '../../assets/javascript.jpg'
import img4 from '../../assets/project.jpg'
import img5 from '../../assets/ux.jpg'
import img6 from '../../assets/git.png'
import img7 from '../../assets/api.png'
import img8 from '../../assets/database.jpg'

const About = () => {
    return (
        <div className="p-6 bg-base-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
                Welcome to Md. Shahriar Ratul World of Innovation!
            </h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                As an aspiring MERN stack developer, I am passionate about crafting responsive, dynamic, and user-centric web applications.
                From building seamless e-commerce experiences to designing tailored solutions that meet the demands of modern digital landscapes,
                I strive to deliver clean, efficient, and impactful code. Let's transform your ideas into reality with creativity, precision, and innovation!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Full-Stack Web Development Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img1}
                            alt="Full-Stack Development"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            MERN-Stack Web Development
                        </h2>
                        <p className="text-sm text-gray-600">
                            Expertise in creating full-stack web applications using React, Node.js, Express, and MongoDB,
                            focusing on efficient back-end and engaging front-end experiences.
                        </p>
                    </div>
                </div>

                {/* Responsive Web Design Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img2}
                            alt="Responsive Design"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            Responsive Web Design
                        </h2>
                        <p className="text-sm text-gray-600">
                            Specialized in building responsive, mobile-first designs using Tailwind CSS, ensuring seamless
                            experiences across devices.
                        </p>
                    </div>
                </div>

                {/* JavaScript Expertise Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img3}
                            alt="JavaScript Expertise"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            JavaScript Mastery
                        </h2>
                        <p className="text-sm text-gray-600">
                            Proficient in modern JavaScript techniques including ES6+, asynchronous programming,
                            and creating dynamic web applications with React.
                        </p>
                    </div>
                </div>

                {/* Agile Project Management Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img4}
                            alt="Project Management"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            Agile Project Management
                        </h2>
                        <p className="text-sm text-gray-600">
                            Experienced in managing projects with Agile methodologies, ensuring timely delivery and continuous
                            iteration for better product development.
                        </p>
                    </div>
                </div>

                {/* UI/UX Design Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img5}
                            alt="UI/UX Design"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            UI/UX Design
                        </h2>
                        <p className="text-sm text-gray-600">
                            Focused on creating intuitive, user-centered designs using Figma and Adobe XD to ensure an optimal user experience.
                        </p>
                    </div>
                </div>

                {/* Version Control Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img6}
                            alt="Version Control"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            Version Control (Git)
                        </h2>
                        <p className="text-sm text-gray-600">
                            Proficient in using Git and GitHub for version control, ensuring efficient collaboration and project management.
                        </p>
                    </div>
                </div>

                {/* API Integration Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img7}
                            alt="API Integration"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            API Integration
                        </h2>
                        <p className="text-sm text-gray-600">
                            Skilled in integrating third-party APIs (RESTful, GraphQL) into web applications to add dynamic functionality.
                        </p>
                    </div>
                </div>

                {/* Database Management Card */}
                <div className="card shadow-lg border animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                            src={img8}
                            alt="Database Management"
                            className="rounded-xl h-56"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg font-semibold">
                            Database Management
                        </h2>
                        <p className="text-sm text-gray-600">
                            Expertise in designing and managing databases using MongoDB, SQL, and NoSQL, ensuring smooth database operations in applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default About;