import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import notFound from '../../public/assets/image/404/404.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);
  return (
    <div className='error'>
      <div className='error__container'>
        <img src={notFound} alt='Error' />
      </div>
    </div>
  );
};
export default ErrorPage;
