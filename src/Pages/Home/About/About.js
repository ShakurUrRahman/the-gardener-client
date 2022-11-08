import React from 'react';

const About = () => {
    return (
        <div>
            <div className="lg:min-h-screen flex flex-col items-center lg:flex-row my-16">
                <div className='lg:w-1/2 mx-10 mb-5 lg:mb-0'>
                    <img alt='' src="https://i.ibb.co/55QTckv/markus-spiske-4-PG6w-Ll-Vag4-unsplash.jpg" className=" rounded-lg shadow-2xl " />
                </div>
                <div className='lg:w-1/2 mx-10'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;