import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaBook, FaClipboardList, FaRegAddressBook } from 'react-icons/fa';

const SuccessSection = () => {
    return (
        <div className="py-16 bg-base-200 mt-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Achievements</h2>
                <p className="text-lg text-gray-600 mb-8 text-center sm:text-xl md:text-2xl">
                    We've reached significant milestones in language learning, with thousands of users, numerous <br /> lessons, 
                    and a growing library of vocabulary and tutorials.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                        <div className="text-4xl flex items-center justify-center text-blue-600 mb-2">
                            <FaUsers />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-600">
                            <CountUp start={0} end={500} duration={2.5} separator="," />
                        </h3>
                        <p className="text-gray-500">Users Registered</p>
                    </div>

                    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                        <div className="text-4xl text-green-600 flex items-center justify-center mb-2">
                            <FaBook />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-600">
                            <CountUp start={0} end={80} duration={2.5} separator="," />
                        </h3>
                        <p className="text-gray-500">Lessons Available</p>
                    </div>

                  
                    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                        <div className="text-4xl text-yellow-600 flex items-center justify-center mb-2">
                            <FaClipboardList />
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-600">
                            <CountUp start={0} end={200} duration={3} separator="," />
                        </h3>
                        <p className="text-gray-500">Vocabulary Words</p>
                    </div>

                
                    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                        <div className="text-4xl text-purple-600 flex items-center justify-center mb-2">
                            <FaRegAddressBook />
                        </div>
                        <h3 className="text-2xl font-semibold text-purple-600">
                            <CountUp start={0} end={50} duration={2.5} separator="," />
                        </h3>
                        <p className="text-gray-500">Tutorials Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;