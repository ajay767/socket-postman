import React from 'react';
import Button from '../ui/Button';
import * as actions from '@actions/user';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa';

import GoogleLogin from 'react-google-login';

export default function Google() {
  const dispatch = useDispatch();
  const router = useRouter();

  const responseGoogle = ({ profileObj }) => {
    const user = {
      name: profileObj.name,
      email: profileObj.email,
      profile: profileObj.imageUrl,
    };
    dispatch(actions.setupUser(user));
    router.push('/signup');
  };
  return (
    <GoogleLogin
      clientId="733305215852-f4o2l7nivng9p8jhrb1rjl2lcc1l5v6k.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} className="flex-center">
          <FaGoogle size={24} className="text-gray-300" />
        </Button>
      )}
    />
  );
}
