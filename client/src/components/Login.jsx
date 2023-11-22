import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io5';
import { app } from '../config/firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import GoogleAuthProvider and signInWithPopup
//import { useNavigate } from 'react-router-dom';

const Login = (setAuth) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  //const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const userCred = await signInWithPopup(firebaseAuth, provider);
      if (userCred) {
        setAuth(true);
        localStorage.setItem("auth", "true");
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };
  

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
            className="flex items-center gap-4 flex-col mb-4 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all"
            onClick={loginWithGoogle}
          >
            <div className="flex items-center gap-2">
              <FcGoogle />
              <span>Sign in with Google</span>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all">
            <div className="flex items-center gap-2">
              <IoLogoGithub />
              <span>Sign in with Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
