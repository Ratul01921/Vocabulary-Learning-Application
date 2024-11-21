import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const Register = () => {
    const {createUser, setUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const name= e.target.name.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(email, password, name, photo);
        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            
            setUser(user)

            updateUserProfile({displayName: name, photoURL: photo})
            .then(() => {
                navigate('/')
            })
            .catch((error)=> {
                console.log(error);
            })
        })
        .catch((error) => console.log('ERROR', error.message))
    }
    return (
        <div className="min-h-screen hero bg-base-200 my-7 flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="photo-url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Don't Have An Account? Please {' '}
                    <Link className="text-red-500" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;