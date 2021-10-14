import React, { useState, useEffect } from 'react';
import router from 'next/router';
import * as actions from '@actions/user';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Container from '@layout/Container';
import Button from '@ui/Button';
import Input from '@ui/Input';

function SetupUsername({ onSubmit }) {
  const [userName, setUsername] = useState('');
  const [error, setError] = useState('');
  const handleForm = () => {
    if (userName === '') {
      setError('Invalid user name!');
    } else {
      setError('');
      onSubmit(userName);
    }
  };
  return (
    <div>
      <Input
        value={userName}
        error={error}
        setValue={setUsername}
        label="User name"
      />
      <Button onClick={() => handleForm(userName)}>Next</Button>
    </div>
  );
}

function SetupPassword({ onSubmit }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setPasswordError('Invalid Password');
      return;
    }

    if (password !== confirmPassword) {
      setconfirmPasswordError('Password Mismatch');
      return;
    }

    onSubmit(password, confirmPassword);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        error={passwordError}
        value={password}
        setValue={setPassword}
        label="Password"
      />
      <Input
        error={confirmPasswordError}
        value={confirmPassword}
        setValue={setConfirmPassword}
        label="Confirm Password"
      />
      <Button type="submit">Finish</Button>
    </form>
  );
}

function singup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleSignup = (data) => {
    console.log({ ...user, ...data, chat_id: nanoid(), router });
    dispatch(
      actions.signupRequest({ ...user, ...data, chat_id: nanoid(), router })
    );
  };

  useEffect(() => {
    if (!user.email) {
      router.push('/login');
    }
  });
  return (
    <Container className="w-full mx-10 md:w-6/12 lg:w-4/12 xl:w-3/12 p-4 text-white">
      <div>
        <img src="/images/logo.png" className="w-12 h-12 mx-auto mb-2" />
        <h2 className="text-center  text-xl font-bold text-gray-300  mb-10">
          {formStep === 1 ? 'Choose User Name' : 'Setup Password'}
        </h2>
        {formStep === 1 ? (
          <SetupUsername
            onSubmit={(userName) => {
              setFormData({ ...formData, user_id: userName });
              setFormStep(2);
            }}
          />
        ) : (
          <SetupPassword
            onSubmit={(password, confirmPassword) => {
              handleSignup({
                user_id: formData.user_id,
                password,
                confirmPassword,
              });
            }}
          />
        )}
      </div>
    </Container>
  );
}

export default singup;
