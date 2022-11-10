import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-5'>
            {
                services.map(service =>
                    <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={service.picture}>
                                    <img className='h-44 w-64 mt-10' src={service.picture} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.description.slice(0, 100) + '...'}</p>
                            <h2 className='text-xl font-semibold text-green-700'>Price: ${service.price}</h2>
                            <div className="card-actions justify-end">
                                <Link to={`/services/${service._id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllServices;