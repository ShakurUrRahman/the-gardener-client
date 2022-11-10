import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddService = () => {
    const { name, picture, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePicture = form.servicePicture.value;
        const description = form.description.value;
        const price = form.price.value;

        const newService = {
            service: _id,
            serviceName,
            servicePicture,
            description,
            price
        }

        fetch('https://the-gardener-server.vercel.app/allServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('You have successfully added a service')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='m-5'>
            <h2 className="card-title underline">Add your service:</h2>
            <form onSubmit={handleAddService} className='mt-5'>
                <input name='serviceName' type="text" placeholder="Service Name" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                <input name='servicePicture' type="text" placeholder="Service Picture URL" className="input input-bordered input-primary w-full max-w-xs" />
                <textarea name='description' type='text' className="textarea textarea-primary w-full my-5" placeholder="Description"></textarea>
                <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs" />
                <input className='btn btn-primary' type="submit" value="Submit your service" />
            </form>
        </div>
    );
};

export default AddService;