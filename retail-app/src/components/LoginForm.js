import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const schema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/retail');
    } else {
      alert('Invalid email or password');
    }
  };

  const goToSignUp = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="formGroup">
          <label className="label">Email</label>
          <input {...register('email')} className="input" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="formGroup">
          <label className="label">Password</label>
          <input type="password" {...register('password')} className="input" />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <button onClick={goToSignUp} className="button" style={{ marginTop: '10px', backgroundColor: '#28a745' }}>
        Go to Sign Up
      </button>
    </div>
  );
};

export default LoginForm;