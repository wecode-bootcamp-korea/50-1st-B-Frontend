import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import Logo from '../../../assets/Logo.png';
import wecodeLogo from '../../../assets/logo_wecode.png';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const updateForm = e => {
    const { name, value } = e.target;
    const updateUser = { ...user, [name]: value };
    setUser(updateUser);
  };

  const handleLogin = () => {
    // fetch('http://10.58.52.161:8000/users/signin', {
    fetch('http://10.58.52.85:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/thread');
      });
  };

  const isValid = emailRegEx.test(user.email) && user.password.length >= 5;

  return (
    <div className="Login">
      <div className="splash">
        <img src={Logo} className="logo" />
        <img src={wecodeLogo} className="wecodeLogo" />
      </div>
      <div className="container">
        <div className="input">
          <input
            className="loginInput"
            name="email"
            placeholder="이메일"
            onChange={updateForm}
          />
          <input
            className="loginInput"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={updateForm}
          />
        </div>
        <button className="loginBtn" disabled={!isValid} onClick={handleLogin}>
          로그인
        </button>
        <div className="loginOpt">
          <Link to="/signup" className="optText">
            회원 가입
          </Link>
          <div className="optLine" />
          <p className="optText">비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
