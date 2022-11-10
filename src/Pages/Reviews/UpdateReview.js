import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData()

    const [updateReview, setupdateReview] = useState(review);
    return (
        <div className='mt-5'>
            <h2 className="card-title underline">Update your review:</h2>
            <form className='mt-5'>
                <input name='userName' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mr-3" defaultValue={review?.displayName} />
                <input name='userPicture' type="text" placeholder="Your Picture URL" className="input input-bordered input-primary w-full max-w-xs" defaultValue={review?.photoURL} />
                <textarea name='review' type='text' className="textarea textarea-primary w-full my-5" placeholder="Type review here"></textarea>
                <input className='btn btn-primary' type="submit" value="Submit your review" />
            </form>
        </div>
    );
};

export default UpdateReview;