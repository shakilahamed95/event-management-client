import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../Firebase/firebase.init';
import registerImg from './register.png'
import SocialLogin from './SocialLogin';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            navigate(from, { replace: true })

        if (user) {
            /* swal("User create successfully", "You clicked the button!", "success");
            reset(); */
            swal("User create fail. Please try again", "You clicked the button!", "error");
        }
        else {
            swal("User create successfully", "You clicked the button!", "success");
            reset();
            // swal("User create fail. Please try again", "You clicked the button!", "error");
        }
    };
    console.log(user);

    if (loading || updating) {
        <progress class="progress w-56"></progress>
    }

    return (
        <div >
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <img src={registerImg} alt='Register' class="max-w-sm " />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body">
                            <h2 className="text-center text-3xl font-bold text-blue-700">Please Register</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* ------Name------ */}
                                <div className="form-control w-full max-w-xs my-3">
                                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Provide your name'
                                            }
                                        })} />
                                    <label>
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                                    </label>
                                </div>
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
                                {/* ------Contact Number------ */}
                                <div className="form-control w-full max-w-xs my-3">
                                    <input type="number" placeholder="Contact Number" className="input input-bordered w-full max-w-xs"
                                        {...register("number", {
                                            pattern: {
                                                value: {minLength: 11, maxLength: 15},
                                                message: 'Provide the correct number '
                                            }
                                        })} />
                                    <label>
                                        {errors.confirmPassword?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.confirmPassword.message}</span>}
                                    </label>
                                </div>
                                <input className='btn btn-outline border-blue-600 w-full max-w-xs my-2' type="submit" value='Register' />
                            </form>

                            <p className='text-center font-semibold'><small>If you have an account ? <Link className='text-blue-600' to='/login'>Please Login</Link> </small></p>
                            <SocialLogin />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;