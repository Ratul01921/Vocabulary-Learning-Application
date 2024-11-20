import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LessonData from './LessonData';

const Lesson = () => {
    const lessonData = useLoaderData();
    // console.log(lessonData);
    return (
        <div>
            <p className='text-2xl font-semibold text-center my-8'>Total Lesson: {lessonData.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    lessonData.map(lesson => <LessonData key={lesson.id} lesson={lesson}></LessonData>)
                }
            </div>

            <div className="mt-6 text-center">
                    <Link to='/startLearning'
                       
                        className="px-8 text-xl font-semibold py-3 bg-[#E7C1D3]  rounded hover:bg-[#de7eab]"
                    >
                        Back to Learning
                    </Link>
                </div>
        </div>
    );
};

export default Lesson;