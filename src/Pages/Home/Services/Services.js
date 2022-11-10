import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://the-gardener-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='mb-4'>
                <div className='text-center'>
                    <h2 className="text-5xl font-semibold">The Services we provide</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                    {
                        services.map(service => <ServiceCard
                            key={service.name}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <div className='text-center my-12 '>
                <Link className='' to='/allServices'><button className='btn btn-active btn-accent'>See all Services</button></Link>
            </div>
        </div>
    );
};

export default Services;