import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Service = () => {
    const { name, picture, description, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://the-gardener-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

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

        fetch(`https://the-gardener-server.vercel.app/reviews/${_id}`, {
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
        <div><div className="card lg:w-full mx-5 my-10">
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
            <div className='m-10'>
                {
                    reviews.map(review => <div className="card card-side bg-base-100 shadow-xl mt-5 p-5">
                        <figure><img className='w-10 h-10 rounded-full' src={review.photo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{review.name}</h2>
                            <p><small>Review of <span className='font-semibold font-serif'>{review.serviceName}</span></small></p>
                            <p>{review.userReview}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/reviews/${review._id}`}><button className="btn btn-primary">Update Review</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;