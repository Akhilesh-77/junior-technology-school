
import React, { useState } from 'react';

const PageHeader: React.FC<{title:string}> = ({title}) => (
    <div className="bg-school-light-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-school-blue text-center">{title}</h1>
        </div>
    </div>
);

const AccordionItem: React.FC<{title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void;}> = ({ title, children, isOpen, onClick }) => (
    <div className="border-b">
        <h2>
            <button type="button" className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-100" onClick={onClick}>
                <span className="text-xl text-school-blue">{title}</span>
                <svg className={`w-6 h-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </h2>
        {isOpen && (
            <div className="p-5 border-t">
                <div className="text-gray-600 space-y-2">{children}</div>
            </div>
        )}
    </div>
);


const AcademicsPage: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('courses');
    
    const handleAccordionClick = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div>
            <PageHeader title="Our Academics" />
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-lg text-gray-700 mb-12">
                    Our curriculum is designed to be comprehensive, challenging, and forward-thinking, integrating technology at every level of learning.
                </p>

                <div className="bg-white shadow-md rounded-lg">
                    <AccordionItem title="Core Courses" isOpen={openAccordion === 'courses'} onClick={() => handleAccordionClick('courses')}>
                        <p>We provide a strong foundation in core subjects, enhanced with a technology-first approach.</p>
                        <ul className="list-disc list-inside mt-2 pl-4">
                            <li><strong>Mathematics:</strong> From algebra to calculus, with a focus on problem-solving and computational thinking.</li>
                            <li><strong>Science:</strong> Physics, Chemistry, and Biology taught through hands-on experiments and digital simulations.</li>
                            <li><strong>Computer Science:</strong> Foundational programming, data structures, and algorithms.</li>
                            <li><strong>English & Communication:</strong> Developing strong written and verbal skills for the digital age.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Technology Labs" isOpen={openAccordion === 'labs'} onClick={() => handleAccordionClick('labs')}>
                        <p>Our state-of-the-art labs provide students with practical experience using the latest technology.</p>
                        <ul className="list-disc list-inside mt-2 pl-4">
                            <li><strong>Robotics Lab:</strong> Design, build, and program robots to perform complex tasks.</li>
                            <li><strong>AI & Machine Learning Hub:</strong> Explore the fundamentals of artificial intelligence and its real-world applications.</li>
                            <li><strong>Digital Fabrication Lab:</strong> Access to 3D printers, laser cutters, and CNC machines for rapid prototyping.</li>
                            <li><strong>VR/AR Development Center:</strong> Create immersive virtual and augmented reality experiences.</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem title="Extracurricular Activities" isOpen={openAccordion === 'extracurricular'} onClick={() => handleAccordionClick('extracurricular')}>
                        <p>We believe in holistic development, offering a range of clubs and activities to nurture diverse talents.</p>
                        <ul className="list-disc list-inside mt-2 pl-4">
                            <li><strong>Coding Club:</strong> For enthusiasts to work on collaborative projects and prepare for competitions.</li>
                            <li><strong>Esports Team:</strong> Compete in popular strategic games, fostering teamwork and quick thinking.</li>
                            <li><strong>Digital Arts Society:</strong> Explore graphic design, animation, and video production.</li>
                            <li><strong>Innovation Club:</strong> A space for students to develop their own tech-based startup ideas.</li>
                        </ul>
                    </AccordionItem>
                </div>
            </div>
        </div>
    );
};

export default AcademicsPage;
