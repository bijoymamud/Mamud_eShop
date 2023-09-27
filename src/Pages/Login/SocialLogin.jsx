import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  return (
    <div>
      <div>
        <button onClick={() => handleGoogleLogin()}>
          <img src='https://i.ibb.co/KjQdbSD/image.png' alt='' className='w-6' />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;