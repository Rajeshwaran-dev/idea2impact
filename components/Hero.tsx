import React from 'react';
import { Icon } from '@iconify/react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }:HeroProps) => {
    return (
        <>
            <section className="hero">
                <div className="hero-grid"></div>
                <div className="hero-container">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span>National Hackathon 2026</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="gradient-text">Idea2Impact</span>
                    </h1>

                    <p className="hero-organizers">
                        Presented by <strong>Askeva Communications</strong>
                        <span className="separator"> × </span>
                        <strong>GenieBox</strong>
                        <span className="separator"> × </span>
                        <strong>Adhiyamaan College of Engineering</strong>
                    </p>

                    <h2 className="hero-tagline">
                        Three forces. One mission. Not just a hackathon. A proving ground.
                    </h2>

                    <p className="hero-description">
                        A hands-on hackathon where students move from ideas to real, working
                        impact. Build solutions that matter, showcase your innovation, and
                        prove your potential on a national platform.
                    </p>

                    <div className="hero-cta-group">
                        <button className="btn btn-primary" onClick={onOpenModal}>
                            <span>Register for Free</span>
                        </button>
                        <a href="#about" className="btn btn-secondary">
                            <span>Learn More</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">About Idea2Impact</div>
                        <h2 className="section-title">Transform Ideas into Reality</h2>
                        <p className="section-description">
                           {` Idea2Impact is more than just a hackathon. It's a platform where
                            innovation meets execution, where students transform their creative
                            concepts into working prototypes that solve real-world problems.`}
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:target" />
                            </div>
                            <h3 className="feature-title">Hands-On Learning Experience</h3>
                            <p className="feature-description">
                                Work on real-world challenges under expert mentorship. Learn
                                industry-standard development practices, collaborative workflows,
                                and agile methodologies while building your solution.
                            </p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:trophy" />
                            </div>
                            <h3 className="feature-title">Win Amazing Prizes</h3>
                            <p className="feature-description">
                                Compete for exciting cash prizes, internship opportunities, and
                                exclusive merchandise. Top teams receive recognition certificates
                                from our organizing partners.
                            </p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:handshake" />
                            </div>
                            <h3 className="feature-title">Network with Industry Leaders</h3>
                            <p className="feature-description">
                                Connect with tech professionals, successful entrepreneurs, and
                                fellow innovators. Build relationships that could shape your
                                career trajectory.
                            </p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:lightbulb" />
                            </div>
                            <h3 className="feature-title">Create Real-World Impact</h3>
                            <p className="feature-description">
                                Build solutions that address actual problems faced by communities,
                                businesses, or society. Your project could be the next big
                                innovation.
                            </p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:scroll" />
                            </div>
                            <h3 className="feature-title">Solve Real-World Problems</h3>
                            <p className="feature-description">
                                Create impactful projects that address real challenges faced by businesses and society. Your idea could become the next breakthrough solution.
                            </p>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:rocket" />
                            </div>
                            <h3 className="feature-title">Launch Your Tech Career</h3>
                            <p className="feature-description">
                                Stand out to recruiters with tangible proof of work. Top
                                performers may receive direct internship offers and job placement
                                assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner">
                <div className="cta-banner-content">
                    <h2>Ready to Build Something Amazing?</h2>
                    <p>
                        Join hundreds of innovators in this national-level hackathon.
                        Transform your ideas into working solutions that create real impact.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={onOpenModal}
                        style={{ background: 'white', color: 'var(--primary-dark)' }}
                    >
                        <span>{`Register Now - It's Free!`}</span>
                    </button>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--gray-100)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Event Timeline</div>
                        <h2 className="section-title">Your Journey to Impact</h2>
                        <p className="section-description">
                            {`From registration to final showcase — here's the complete roadmap of
                            your Idea2Impact hackathon experience.`}
                        </p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item fade-in">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">Phase 1</div>
                                <h3 className="timeline-title">Registration & Team Formation</h3>
                                <p className="timeline-description">
                                    Register individually or as a team (2-4 members). Complete your
                                    profile, select your problem statement, and get ready for the
                                    kickoff session.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item fade-in">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">Phase 2</div>
                                <h3 className="timeline-title">Ideation & Planning Workshop</h3>
                                <p className="timeline-description">
                                    Attend our exclusive workshop with industry experts. Learn
                                    ideation techniques, project planning, and receive guidance on
                                    transforming ideas into actionable solutions.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item fade-in">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">Phase 3</div>
                                <h3 className="timeline-title">24-Hour Build Sprint</h3>
                                <p className="timeline-description">
                                    The main event! Code, design, and build your solution in an
                                    intensive 24-hour hackathon. Access to mentors, resources, and
                                    technical support throughout.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item fade-in">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">Phase 4</div>
                                <h3 className="timeline-title">Presentation & Judging</h3>
                                <p className="timeline-description">
                                    Present your working prototype to our expert panel. Showcase
                                    your innovation, technical execution, and the real-world impact
                                    of your solution.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item fade-in">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">Phase 5</div>
                                <h3 className="timeline-title">Awards & Recognition</h3>
                                <p className="timeline-description">
                                    Celebrate with the community! Winners announced, prizes
                                    distributed, and networking session with judges, mentors, and
                                    fellow participants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge section-badge-light">By The Numbers</div>
                        <h2 className="section-title">Idea2Impact at a Glance</h2>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card fade-in">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Expected Participants</div>
                        </div>
                        <div className="stat-card fade-in">
                            <div className="stat-number">24hrs</div>
                            <div className="stat-label">Non-Stop Building</div>
                        </div>
                        <div className="stat-card fade-in">
                            <div className="stat-number">₹3L+</div>
                            <div className="stat-label">Prize Pool</div>
                        </div>
                        <div className="stat-card fade-in">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Expert Mentors</div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button className="btn btn-primary" onClick={onOpenModal}>
                            <span>Claim Your Spot Now</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Open to All</div>
                        <h2 className="section-title">Who Can Participate?</h2>
                        <p className="section-description">
                            Idea2Impact welcomes students, tech enthusiasts, and problem solvers
                            from all backgrounds and skill levels.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:graduation-cap" />
                            </div>
                            <h3 className="feature-title">College Students</h3>
                            <p className="feature-description">
                                Any student currently enrolled in undergraduate or postgraduate
                                programs across all engineering and technology streams.
                            </p>
                            <button className="feature-cta" onClick={onOpenModal}>
                                Register as Student <Icon icon="lucide:arrow-right" />
                            </button>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:laptop" />
                            </div>
                            <h3 className="feature-title">Tech Enthusiasts</h3>
                            <p className="feature-description">
                                Self-taught developers, designers, and makers passionate about
                                building innovative tech solutions regardless of formal education.
                            </p>
                            <button className="feature-cta" onClick={onOpenModal}>
                                Join as Enthusiast <Icon icon="lucide:arrow-right" />
                            </button>
                        </div>

                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <Icon icon="lucide:rocket" />
                            </div>
                            <h3 className="feature-title">First-Time Hackers</h3>
                            <p className="feature-description">
                                Never been to a hackathon? Perfect! We provide workshops,
                                mentorship, and support to help beginners get started and succeed.
                            </p>
                            <button className="feature-cta" onClick={onOpenModal}>
                                Start Your Journey <Icon icon="lucide:arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-banner" style={{ background: 'var(--gradient-hero)' }}>
                <div className="cta-banner-content">
                    <h2>{`Don't Miss This Opportunity`}</h2>
                    <p>
                        {`Spots are limited! Secure your place in India's most exciting
                        hackathon and start building solutions that create real impact.`}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={onOpenModal}
                        style={{ background: 'var(--gradient-accent)' }}
                    >
                        <span>Register Before Spots Fill Up</span>
                    </button>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--gray-100)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-badge">Have Questions?</div>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-list">
                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>What is Idea2Impact hackathon?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    {`Idea2Impact is a 24-hour hands-on hackathon organized by Askeva
                                    Communications, GenieBox, and Adhiyamaan College of Engineering.
                                    It's designed to help students and tech enthusiasts transform
                                    their innovative ideas into working prototypes that solve
                                    real-world problems.`}
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>Who can participate in this hackathon?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    The hackathon is open to college students, recent graduates, and
                                    tech enthusiasts of all skill levels. You can participate
                                    individually or form teams of 2-4 members. No prior hackathon
                                    experience is required!
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>Is there any registration fee?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    No! Participation in Idea2Impact is completely free. We believe
                                    in making innovation accessible to everyone, regardless of
                                    financial constraints.
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>What should I bring to the hackathon?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    {`Bring your laptop, chargers, any hardware you plan to use, and
                                    your creativity! We'll provide Wi-Fi, workspace, meals, and
                                    refreshments throughout the event. Don't forget to bring your
                                    student ID for verification.`}
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>What kind of projects can we build?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    {`You can build software applications, mobile apps, web platforms,
                                    IoT solutions, AI/ML projects, or any tech-based solution that
                                    addresses real-world problems. We'll provide problem statements,
                                    but you're also welcome to work on your own innovative ideas.`}
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>Will there be mentors available?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    {`Yes! We'll have experienced mentors from Askeva Communications,
                                    GenieBox, and the tech industry available throughout the
                                    hackathon to guide you, answer questions, and help overcome
                                    technical challenges.`}
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>What are the prizes?</span>
                                <span className="faq-icon">
                                    <Icon icon="lucide:plus" className="plus-icon" />
                                    <Icon icon="lucide:minus" className="minus-icon" />
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    Winners will receive cash prizes totaling ₹1,00,000+,
                                    certificates co-branded by all organizing partners, exclusive
                                    merchandise, and potential internship opportunities. All
                                    participants receive participation certificates.
                                </p>
                            </div>
                        </div>

                        <div className="faq-item fade-in">
                            <div className="faq-question">
                                <span>How do I register?</span>
                                <span className="faq-icon">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>
                                    {`Simply click the "Register Now" button anywhere on this page,
                                    fill out the registration form with your details, and you're in!
                                    We'll get in touch with you soon with further instructions
                                    and event details.`}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--gray-600)',
                            marginBottom: '1.5rem'
                        }}>
                            Still have questions?
                        </p>
                        <button className="btn btn-primary" onClick={onOpenModal}>
                            <span>Register Now & Ask Your Questions</span>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">Idea2Impact</div>
                    <p className="footer-organizers">
                        A joint initiative by Askeva Communications, GenieBox, and Adhiyamaan College of Engineering
                    </p>
                    <p className="footer-text">&copy; 2026 Idea2Impact. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Hero;