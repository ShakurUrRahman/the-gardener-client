import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, description, picture, price, _id } = service;
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
            <figure><img className='h-44 w-64 mt-10' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 100) + '...'}</p>
                <h2 className='text-xl font-semibold text-green-700'>Price: ${price}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;