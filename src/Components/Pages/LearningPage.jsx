import React from 'react';
import { Link } from 'react-router-dom';

const LearningPage = ({ lesson }) => {
    const { lesson_no, category, word } = lesson;
    console.log(lesson);
    return (

        <Link to={`/lesson/${lesson_no}`}>
            <div className=" bg-[#E7C1D3]  rounded-lg shadow-lg mb-4">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold">
                        Lesson {lesson_no}: {category} ({word})
                    </h2>
                </div>
            </div>
        </Link>



    );
};

export default LearningPage;