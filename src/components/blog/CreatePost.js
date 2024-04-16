import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth"

function CreatePost() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    var navigate = useNavigate();
    var user = useSelector(store => store.auth.user);
    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine',{
            name: name,
            company: company,
            expiry_date: expiry_date
        },{
            headers: { 'Authorization': "bearer " + user.token }
          }).then(response=>{
            navigate('/blog/posts')
        })
    }
    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create Post</h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <textarea 
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiry Date:</label>
                        <input type="date"
                        className="form-control" 
                        value={expiry_date} 
                        onChange={(event)=>{setExpiry_date(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default checkAuth(CreatePost);