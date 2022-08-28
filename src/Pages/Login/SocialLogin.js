import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser) {
        navigate(from, { replace: true })
    }
    if (googleLoading || githubLoading) {
        <progress class="progress w-56"></progress>
    }
    console.log(googleUser);

    return (

        <div>
            <div className="divider my-2">Or Sign In With</div>
            <div className="flex w-full justify-center space-x-4">
                <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline rounded-full border-orange-600 m-2 p-2">
                        <img src="https://i.ibb.co/JqhBJYJ/google.png" alt="" />
                </button>
                </div>
                <div>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-outline rounded-full border-orange-600 m-2 p-2">
                        <img src="https://i.ibb.co/3Wjh3wv/github.png" alt="" />
                </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;