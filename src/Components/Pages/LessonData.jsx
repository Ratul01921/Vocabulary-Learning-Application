import React, { useState } from 'react';

const LessonData = ({ lesson }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    console.log(lesson);
    return (
        <div className="bg-base-200 shadow-lg rounded-md p-4 w-full max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-2">
                {lesson.word} ({lesson.pronunciation}){" "}

            </h2>
            <p>
                <strong>Meaning:</strong> {lesson.meaning}
            </p>
            <p>
                <strong>Difficulty:</strong> {lesson.difficulty}
            </p>
            <p>
                <strong>Part of Speech:</strong> {lesson.part_of_speech}
            </p>
            <button
                className="mt-4 bg-black text-white py-2 px-4 rounded"
                onClick={() => setModalOpen(true)}
            >
                When to say?
            </button>

          
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-md shadow-lg p-6 max-w-md w-full">
                        <h3 className="text-lg font-bold mb-2">{lesson.word} ({lesson.pronunciation})</h3>
                        <p>
                            <strong>Meaning:</strong> {lesson.meaning}
                        </p>
                        <p>
                            <strong>When to say:</strong> {lesson.when_to_say}
                        </p>
                        <p>
                            <strong>Example:</strong> {lesson.example}
                        </p>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                            onClick={() => setModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default LessonData;