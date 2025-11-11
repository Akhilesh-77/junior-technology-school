
import React from 'react';
import { MOCK_STAFF } from '../constants';
import type { StaffMember } from '../types';

const PageHeader: React.FC<{title:string}> = ({title}) => (
    <div className="bg-school-light-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-school-blue text-center">{title}</h1>
        </div>
    </div>
);

const Section: React.FC<{title:string; children:React.ReactNode}> = ({title, children}) => (
    <div className="mb-12">
        <h2 className="text-3xl font-bold text-school-blue mb-4">{title}</h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

const StaffCard: React.FC<{staff: StaffMember}> = ({staff}) => (
    <div className="text-center">
        <img className="mx-auto h-40 w-40 rounded-full object-cover" src={staff.imageUrl} alt={staff.name} />
        <h3 className="mt-6 text-lg font-semibold text-school-blue">{staff.name}</h3>
        <p className="text-school-accent">{staff.role}</p>
        <p className="mt-2 text-sm text-gray-600">{staff.bio}</p>
    </div>
)

const AboutPage: React.FC = () => {
  return (
    <div>
        <PageHeader title="About Us" />
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <Section title="Our Mission">
                <p>To empower students with the knowledge, skills, and mindset to become leaders and innovators in a technology-driven world. We are committed to providing a dynamic learning environment that fosters creativity, critical thinking, and collaboration.</p>
            </Section>

            <Section title="Our Vision">
                <p>To be a leading educational institution recognized for its excellence in technology-integrated learning, preparing students to solve complex global challenges and contribute positively to society.</p>
            </Section>

            <Section title="Principal's Message">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img src={MOCK_STAFF[0].imageUrl} alt={MOCK_STAFF[0].name} className="w-32 h-32 rounded-full object-cover flex-shrink-0"/>
                    <div>
                        <p className="italic">"Welcome to Junior Technology School! We believe that every student has the potential to be an innovator. Our dedicated faculty and state-of-the-art facilities are here to guide them on their journey of discovery. We are not just teaching subjects; we are shaping the future."</p>
                        <p className="mt-4 font-semibold text-school-blue">- Dr. Evelyn Reed, Principal</p>
                    </div>
                </div>
            </Section>
        </div>
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-school-blue text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MOCK_STAFF.map(staff => <StaffCard key={staff.id} staff={staff} />)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;
