import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../Images/login.png'
import SocialLogin from './SocialLogin';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        <progress class="progress w-56"></progress>
    }
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
            navigate(from, { replace: true })
    };
    console.log(user);

    return (
        <div >
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img src={loginImg} alt='Register' class="max-w-sm " />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body">
                            <h2 className="text-center text-3xl font-bold text-blue-700">Please Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* ------Email------ */}
                                <div className="form-control w-full max-w-xs my-3">
                                    <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Provide your email'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })} />
                                    <label>
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                    </label>
                                </div>
                                {/* ------Password------ */}
                                <div className="form-control w-full max-w-xs my-3">
                                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Provide your password'
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Provide the 5 characters or longer password'
                                            }
                                        })} />
                                    <label>
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-outline border-blue-600 w-full max-w-xs my-2' type="submit" value='Log in' />
                            </form>

                            <p className='text-center font-semibold'><small>If you new ? <Link className='text-blue-600' to='/register'>Please Register</Link> </small></p>
                            <SocialLogin />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;