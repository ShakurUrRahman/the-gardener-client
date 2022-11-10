import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Service = () => {
    const { name, picture, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = user?.email || 'unregistered';
        const userPicture = form.userPicture.value;
        const review = form.review.value;

        const finalReview = {
            service: _id,
            name: userName,
            photo: userPicture,
            userReview: review,
            userEmail: email,
            serviceName: name
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('You have successfully reviewed')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="card lg:w-full mx-5 my-10">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title underline">{name}</h2>
                <p>{description}</p>
                <div className='mt-5'>
                    <h2 className="card-title underline">Add your review:</h2>
                    <form onSubmit={handlePlaceReview} className='mt-5'>
                        <input name='userName' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mr-3" defaultValue={user?.displayName} />
                        <input name='userPicture' type="text" placeholder="Your Picture URL" className="input input-bordered input-primary w-full max-w-xs" defaultValue={user?.photoURL} />
                        <textarea name='review' type='text' className="textarea textarea-primary w-full my-5" placeholder="Type review here"></textarea>
                        <input className='btn btn-primary' type="submit" value="Submit your review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Service;