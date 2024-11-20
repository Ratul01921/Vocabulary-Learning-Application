import React from 'react';

const DayliChallange = () => {
    return (
        <section className="bg-base-200 py-16 mt-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">🌟 Daily Word Challenge</h2>
                <p className="text-gray-600 mb-8">
                    Boost your vocabulary with our daily word challenge. Learn a new word and test your knowledge!
                </p>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">今日の言葉 (Word of the Day)</h3>
                    <p className="text-lg text-gray-700"><strong>Word:</strong> 勉強 (べんきょう)</p>
                    <p className="text-lg text-gray-700"><strong>Meaning:</strong> Study</p>
                    <p className="text-lg text-gray-700"><strong>When to use:</strong> When talking about learning or studying.</p>
                    <button className="mt-6 px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600">
                        Try Quiz
                    </button>
                </div>
            </div>
        </section>

    );
};

export default DayliChallange;