import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LearningPage from '../Pages/LearningPage';

const StartLearning = () => {
    const lesson = useLoaderData();
    // console.log(lesson)
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center my-8'>Choose Your Lesson</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    lesson.map(lesson => <LearningPage key={lesson.id} lesson={lesson}></LearningPage>)
                }
            </div>
            <div className='my-10'>
                <h2 className="text-5xl font-bold text-center mb-4">Tutorial: learning the alphabet</h2>

                <iframe width="100%" height="800" src="https://www.youtube.com/embed/bdK4xBJpox0?si=gaGdQ4btA8O48U1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div className="mt-6 text-center">
                    <Link to='/tutorials'
                       
                        className="px-8 text-xl font-semibold py-3 bg-[#E7C1D3]  rounded hover:bg-[#de7eab]"
                    >
                        View More
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default StartLearning;