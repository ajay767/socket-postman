import React from 'react';
import * as actions from '@actions/user';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../layout/Container';
import Button from '@ui/Button';
import FacebookAuth from '../auth/Facebook';
import GoogleAuth from '../auth/Google';
import router from 'next/router';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return { user: state.user };
  });

  function handleLogin(e) {
    e.preventDefault();

    const payload = {
      userid: e.target.userid.value,
      password: e.target.password.value,
      router,
    };

    dispatch(actions.loginRequest(payload));
  }

  return (
    <Container className="w-full mx-10 md:w-6/12 lg:w-4/12 xl:w-3/12">
      <div className="p-4 text-white ">
        <img src="/images/logo.png" className="w-12 h-12 mx-auto mb-2" />
        <h2 className="text-center  text-xl font-bold text-gray-300  mb-10">
          Login
        </h2>
        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="mb-2">
            <label
              className="text-gray-300 text-base mb-px block"
              htmlFor="userID"
            >
              User Id
            </label>
            <input
              id="userID"
              name="userid"
              autoComplete="false"
              className="text-gray-100 border-2 border-all rounded-md bg-transparent w-full outline-none p-2 mb-2"
            />
          </div>
          <div className="mb-2">
            <label
              className="text-gray-300 text-base mb-px block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              className="text-gray-100 border-2 border-all rounded-md bg-transparent w-full outline-none p-2 mb-2"
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
        <div className="flex-center mt-5">
          <hr className="border-b border-gray-400 flex-grow" />
          <p className="text-center text-gray-400 mx-2">signup using </p>
          <hr className="border-b border-gray-400 flex-grow" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <GoogleAuth />
          <FacebookAuth />
        </div>
      </div>
    </Container>
  );
}

export default Login;
