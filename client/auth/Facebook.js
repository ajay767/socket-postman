import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import Button from '../ui/Button';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function Facebook() {
  const response = (data) => {
    console.log(data);
  };
  return (
    <FacebookLogin
      appId="471532177281709"
      callback={response}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} className="flex-center">
          <FaFacebook size={24} className="text-gray-300" />
        </Button>
      )}
    />
  );
}

export default Facebook;
