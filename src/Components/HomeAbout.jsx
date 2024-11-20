import React from 'react';
import { FcReading } from 'react-icons/fc';
import { MdQuiz } from 'react-icons/md';
import { TbVaccine, TbVocabulary } from "react-icons/tb";
import challenge from '../assets/icons8-development-64.png'
import { RiCommunityLine } from 'react-icons/ri';
import { GiProgression } from 'react-icons/gi';

const HomeAbout = () => {
    return (
        <div className="py-12 bg-gray-200">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    How You Can Learn Vocabulary with Us
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Learning new vocabulary should be fun, interactive, and rewarding. Here’s how you can start building your vocabulary:
                </p>

                <div className="space-y-6 grid grid-cols-3 gap-6 justify-between items-center h-full">
                    <div className="flex flex-col gap-2 items-start space-x-4 p-6 bg-[#E7C1D3]">
                        <div className="w-12 h-12 bg-blue-500 rounded-full text-white flex items-center justify-center">
                        <TbVocabulary></TbVocabulary>
                        
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Explore Curated Vocabulary Lists</h3>
                            <p className="text-gray-600">
                                Browse through topic-based and difficulty-based vocabulary lists to kickstart your learning journey. Whether you're a beginner or advanced learner, we've got you covered.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#EFDA6E] p-6 items-start space-x-4 item-center h-full">
                        <div className="w-12 h-12 bg-green-500 rounded-full text-white flex  items-center justify-center">
                        <FcReading />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Practice with Flashcards</h3>
                            <p className="text-gray-600">
                                Use our flashcards to test your memory and help you recall words more easily. Flip the cards and learn at your own pace.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#A4DAC3] p-6  items-start space-x-4 h-full">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full text-white flex items-center justify-center">
                        <MdQuiz />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Take Quizzes & Tests</h3>
                            <p className="text-gray-600">
                                Test your knowledge with fun quizzes. Monitor your performance and focus on areas that need improvement.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#77AAEA] p-6  items-start space-x-4 h-full">
                        <div className="w-12 h-12 bg-[#c4dbf7] rounded-full text-white flex items-center justify-center">
                            <img src={challenge} alt="" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Engage with Daily Word Challenges</h3>
                            <p className="text-gray-600">
                                Receive daily notifications with new words. Challenge yourself to learn a new word each day and build your vocabulary consistently.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#efe6b6] p-6  items-start space-x-4 h-full">
                        <div className="w-12 h-12 bg-purple-500 rounded-full text-white flex items-center justify-center">
                        <RiCommunityLine />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Engage with the Community</h3>
                            <p className="text-gray-600">
                                Participate in challenges and discussions with other learners. Learning becomes more exciting when you share knowledge and compete with others.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#6eefe2] p-6  items-start space-x-4 h-full">
                        <div className="w-12 h-12 bg-indigo-500 rounded-full text-white flex items-center justify-center">
                        <GiProgression />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="text-xl font-semibold text-gray-700">Track Your Progress</h3>
                            <p className="text-gray-600">
                                Keep track of your learning progress with our easy-to-use interface. Set goals, monitor your vocabulary growth, and stay motivated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;