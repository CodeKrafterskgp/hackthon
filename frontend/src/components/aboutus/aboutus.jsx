import './aboutus.css';
import i1 from './aboutusimages/adarsh.jpg';
import i2 from './aboutusimages/prince.jpg';
import i3 from './aboutusimages/sumit.jpg';
import i4 from './aboutusimages/aman.jpg';

const Aboutus = () => {
    return (
        <div className="Aboutus"><header>
            <h1>About Us</h1>
        </header>
            <main>
                <section class="cardau">
                    <h2>Welcome to Our Smart Classroom Management System!</h2>
                    <br /><br />
                    <p>In modern educational settings, there is a lack of a comprehensive digital platform or mobile application integrating essential classroom management tools. Educators and students currently use disjointed systems for note-taking, attendance tracking, and instant doubt resolution, which hampers classroom organization and undermines student engagement.</p>
                    <br />
                    <p>The implementation of the Smart Classroom Management System is expected to lead to improved efficiency in classroom organization and increased student engagement. It has the potential to transform the educational experience by providing a seamless and integrated platform for both educators and students.</p>
                    <br />
                    <p>Our aim is to develop a Smart Classroom Management System—a website that revolutionizes classroom dynamics by consolidating functionalities such as note-taking, attendance monitoring, and AI-powered instant doubt resolution tools. The platform seeks to streamline administrative tasks for educators and foster a more interactive and engaging learning environment for students.</p>
                    <br />
                    <p>Through innovative features and intuitive interface design, our solution aims to enhance classroom management practices. It also aims to boost student participation and enrich the overall educational experience.</p>
                </section>

                <section class="cardau">
                    <h2>Solution Overview</h2>
                    <p>Our platform, powered by Chat GPT, offers a comprehensive array of features aimed at enhancing the learning experience and supporting student success.</p>
                    <ol>
                        <li>
                            <h3>Instant Doubt Resolution</h3>
                            <p>With Chat GPT, students can quickly access information on any topic, ensuring prompt assistance whenever they encounter difficulties with their studies.</p>
                        </li>
                        <li>
                            <h3>Attendance Monitoring</h3>
                            <p>Our platform monitors student attendance and issues warnings to those falling below a specified threshold, promoting regular attendance and helping students stay on track with their studies.</p>
                        </li>
                        <li>
                            <h3>Quizzes and Assessments</h3>
                            <p>Teachers can organize quizzes within a dedicated section, enabling students to test their knowledge and understanding of various subjects. Quizzes serve as assessment tools to gauge student comprehension and progress.</p>
                        </li>
                        <li>
                            <h3>Leaderboard</h3>
                            <p>The leaderboard showcases top-performing students, fostering healthy competition and motivating others to excel. It recognizes and rewards academic achievements, encouraging students to strive for excellence.</p>
                        </li>
                        <li>
                            <h3>Assignment Submission</h3>
                            <p>Our platform enables seamless assignment submission in various formats, streamlining the workflow for both students and teachers.</p>
                        </li>
                        <li>
                            <h3>Comprehensive Notes Repository</h3>
                            <p>Students have access to a dedicated page featuring a wide range of organized and high-quality notes covering various subjects and topics. This resource enhances learning by providing valuable reinforcement of key concepts.</p>
                        </li>
                        <li>
                            <h3>Chat Forums</h3>
                            <p>Foster collaborative learning through chat forums where students can engage in discussions, ask questions, share ideas, and connect with peers. These forums create a supportive online community, encouraging active participation among students.</p>
                        </li>
                        <li>
                            <h3>YouTube Recommendations</h3>
                            <p>Integrated YouTube video recommendations for topics where students have doubts. Leveraging ChatGPT, our system suggests relevant videos to supplement learning and deepen understanding, providing tailored resources to meet students' needs.</p>
                        </li>
                    </ol>
                </section>

                <section class="team-card">
                    <h2>Our Team</h2>
                    <div class="team-member">
                        <img src={i1} alt="Team Member 1" />
                    </div>
                    <div class="team-member">
                        <img src={i2} alt="Team Member 2" />
                    </div>
                    <div class="team-member">
                        <img src={i3} alt="Team Member 3" />
                    </div>
                    <div class="team-member">
                        <img src={i4} alt="Team Member 4" />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Aboutus;