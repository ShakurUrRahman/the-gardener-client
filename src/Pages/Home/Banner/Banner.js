import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/87xNv2G/cover.jpg")` }}>
            <div className="hero-content text-center bg-black/50">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-green-300">Hello Nature Lover</h1>
                    <p className="mb-5 text-green-500">If you are interested in our green wall design services, our experts will work with you to produce the right design. We can use many varieties and colors of plants to create specific designs. In vertical gardening, use structures or columnar trees to create garden rooms or define hidden spaces ready for discovery.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;