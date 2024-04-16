import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";

function ViewPost() {
    const { postId } = useParams();
    const [post, setPost] = useState({ name: '', company: '', expiry_date: '' });
    const [error, setError] = useState(null);
    var user = useSelector(store => store.auth.user);

    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: { 'Authorization': "Bearer " + user.token }
        })
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            });
    }, [postId, user.token]);
    

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {error ? (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        ) : (
                            <div className="card">
                                <div className="card-header"><h3>{post.name}</h3></div>
                                <div className="card-body">{post.company}</div>
                                <div className="card-body">{post.expiry_date}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(ViewPost);
