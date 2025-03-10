import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered Successfully!');
    navigate('/login');
  };

  const goToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="container">
      <h2 className="heading">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="formGroup">
          <label className="label">Username</label>
          <input {...register('username')} className="input" />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
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
        <div className="formGroup">
          <label className="label">Confirm Password</label>
          <input type="password" {...register('confirmPassword')} className="input" />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
      <button onClick={goToLogin} className="button" style={{ marginTop: '10px', backgroundColor: '#28a745' }}>
        Go to Login
      </button>
    </div>
  );
};

export default SignUpForm;