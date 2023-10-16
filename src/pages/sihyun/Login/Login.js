import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const updateForm = e => {
    const nextForm = { ...user, [e.target.name]: e.target.value };
    setUser(nextForm);
  };

  const handleLogin = () => {
    if (!isValid()) navigate('/signup');
  };

  const validLogin = user => {
    if (!user.email.includes('@')) return false;
    if (user.password.length < 5) return false;
    return true;
  };

  const isValid = () => {
    return validLogin(user);
  };

  return (
    <div>
      <div>
        <input placeholder="이메일" onChange={updateForm}></input>
        <input placeholder="비밀번호" onChange={updateForm}></input>
      </div>
      <button disabled={!isValid} onClick={handleLogin}>
        로그인
      </button>
      <div>
        <div>회원 가입</div>
        <div
          style={{
            width: 16,
            height: 0,
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            border: '1px #E0E0E0 solid',
          }}
        ></div>
        <div>비밀번호 찾기</div>
      </div>
    </div>
  );
};

export default Login;
