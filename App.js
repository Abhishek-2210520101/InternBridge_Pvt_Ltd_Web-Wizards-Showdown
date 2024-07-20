import React, { useState } from 'react';
import './styles.css';

const courses = {
    MPC: {
        description: 'MPC (Maths, Physics, Chemistry) can lead to careers in Engineering and Technology.',
        options: [
            'Engineering (AI, ML, Cybersecurity, etc.)',
            'Architecture',
            'Merchant Navy',
            'B.Sc. in various science fields'
        ]
    },
    BiPC: {
        description: 'BiPC (Biology, Physics, Chemistry) can lead to careers in Medical and Biological Sciences.',
        options: [
            'MBBS (Doctor)',
            'BDS (Dentist)',
            'B.Sc. Nursing',
            'B.Sc. Biotechnology'
        ]
    },
    CEC: {
        description: 'CEC (Commerce, Economics, Civics) can lead to careers in Commerce and Administration.',
        options: [
            'B.Com (Bachelor of Commerce)',
            'CA (Chartered Accountant)',
            'CS (Company Secretary)',
            'BBA (Bachelor of Business Administration)'
        ]
    },
    MEC: {
        description: 'MEC (Maths, Economics, Commerce) can lead to careers in Finance and Economics.',
        options: [
            'B.Com',
            'BBA',
            'Economics Honors',
            'Actuarial Science'
        ]
    },
    HEC: {
        description: 'HEC (History, Economics, Civics) can lead to careers in Arts and Humanities.',
        options: [
            'BA (Bachelor of Arts)',
            'Law',
            'Journalism',
            'Civil Services'
        ]
    },
    HPC: {
        description: 'HPC (History, Political Science, Civics) can lead to careers in Political Science and History.',
        options: [
            'BA (Political Science)',
            'History Honors',
            'Civil Services',
            'Journalism'
        ]
    },
    HPE: {
        description: 'HPE (History, Psychology, Economics) can lead to careers in Psychology, History, and Economics.',
        options: [
            'BA (Psychology)',
            'BA (History)',
            'BA (Economics)',
            'Counseling'
        ]
    },
    'Information Technology': {
        description: 'Information Technology can lead to careers in IT and Computer Science.',
        options: [
            'B.Tech (Computer Science)',
            'B.Sc. (IT)',
            'Software Development',
            'Networking'
        ]
    },
    'Travel and Tourism': {
        description: 'Travel and Tourism can lead to careers in the travel and tourism industry.',
        options: [
            'BBA (Travel and Tourism)',
            'Tourism Management',
            'Travel Consultant',
            'Event Management'
        ]
    },
    'Hospitality Management': {
        description: 'Hospitality Management can lead to careers in the hospitality industry.',
        options: [
            'BHM (Bachelor of Hotel Management)',
            'Event Management',
            'Restaurant Management',
            'Catering Services'
        ]
    },
    'Retail Management': {
        description: 'Retail Management can lead to careers in retail and business management.',
        options: [
            'BBA (Retail Management)',
            'Store Manager',
            'Retail Operations',
            'Merchandising'
        ]
    },
    'Integrated Engineering': {
        description: 'Integrated Engineering Programs prepare students for engineering entrance exams.',
        options: [
            'B.Tech (Various Specializations)',
            'Integrated M.Tech',
            'Engineering Research',
            'Industrial Engineering'
        ]
    },
    'Integrated Medical': {
        description: 'Integrated Medical Programs prepare students for medical entrance exams.',
        options: [
            'MBBS',
            'BDS',
            'BAMS',
            'BHMS'
        ]
    },
    'Fashion Designing': {
        description: 'Fashion Designing can lead to careers in fashion and textile design.',
        options: [
            'B.Des (Fashion Design)',
            'Textile Designer',
            'Fashion Stylist',
            'Fashion Marketing'
        ]
    },
    'Fine Arts': {
        description: 'Fine Arts can lead to careers in visual arts such as painting, sculpture, and graphic design.',
        options: [
            'BFA (Bachelor of Fine Arts)',
            'Graphic Designer',
            'Art Teacher',
            'Illustrator'
        ]
    },
    'Home Science': {
        description: 'Home Science can lead to careers in nutrition, family welfare, and home management.',
        options: [
            'B.Sc. (Home Science)',
            'Nutritionist',
            'Family Counselor',
            'Interior Designer'
        ]
    },
    'Physical Education': {
        description: 'Physical Education can lead to careers in sports, physical fitness, and related fields.',
        options: [
            'B.P.Ed (Bachelor of Physical Education)',
            'Sports Coach',
            'Fitness Trainer',
            'Physical Education Teacher'
        ]
    }
};

function App() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <div className="container">
            <h1>Career Counseling after 10th Class</h1>
            <div className="course-list">
                <h2>Select a Course</h2>
                <ul>
                    {Object.keys(courses).map(course => (
                        <li key={course} onClick={() => setSelectedCourse(course)}>
                            {course}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedCourse && (
                <div className="career-list">
                    <h2>Career Options for {selectedCourse}</h2>
                    <p>{courses[selectedCourse].description}</p>
                    <ul>
                        {courses[selectedCourse].options.map(option => (
                            <li key={option}>{option}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
