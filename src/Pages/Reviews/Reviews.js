import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
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
    );
};

export default Reviews;