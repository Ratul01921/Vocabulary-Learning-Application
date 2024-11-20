import React from 'react';
import image1 from '../assets/images (15).jpg'
import image2 from '../assets/1685722725676.jpg'
import image3 from '../assets/38307975.jpg'

const Features = () => {
    return (
        <div>
            <section className="py-16 bg-base-200 mt-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8"> Our Users Review</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={image1} alt="User 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 italic">"This app has changed the way I learn languages! The vocabulary is vast, and the lessons are fun."</p>
                            <div className="mt-4">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star defaultChecked " />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">Jhanker Mahbub</h3>
                            <p className="text-gray-500">Intermediate Japanese Learner</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={image2} alt="User 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 italic">"The interactive tutorials and quizzes really helped me retain new words and phrases."</p>
                            <div className="mt-4">

                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star defaultChecked " />
                                </div>

                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">Gias Uddin</h3>
                            <p className="text-gray-500">Beginner Japanese Learner</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={image3} alt="User 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <p className="text-gray-600 italic">"I love how the app tracks my progress and reminds me to practice daily. It's motivating!"</p>
                            <div className="mt-4">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" />
                                    <input type="radio" name="rating-1" className="mask mask-star defaultChecked " />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-2">Ferdous Zihad</h3>
                            <p className="text-gray-500">Advanced Japanese Learner</p>
                        </div>
                    </div>
                </div>
            </section>

            

        </div>
    );
};

export default Features;