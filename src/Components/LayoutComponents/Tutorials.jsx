import React from 'react';
import { Link } from 'react-router-dom';

const Tutorials = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-8'>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/muoDQoxWpCY?si=qLFkAbNnvJllhIhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/LCivlKCEQ0g?si=c8G4STPJXkAM8iBB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/8844bTBckfI?si=9ee0myidkt7Q9tC2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/IHfdlVUH4Ik?si=GqDEqj51vopLiP92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/1E77TSny5Mc?si=kJIIaDPCThn7jJUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/8BSgXGO8yCM?si=8w4pe12Z4q4Vs9jL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/cEpFoy2Gdec?si=1ojoXjKXurEa_Ltg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="430" height="315" src="https://www.youtube.com/embed/Q85qCuh7blQ?si=aLFUS3M5XMqvPJGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="my-6 text-center">
                <Link to='/startLearning'

                    className="px-8 text-xl font-semibold py-3 bg-[#E7C1D3]  rounded hover:bg-[#de7eab]"
                >
                    Start Lesson
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;