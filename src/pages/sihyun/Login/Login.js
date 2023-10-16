import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = e => {
    setEmail(e.target.value);
  };

  const saveUserPassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isValid()) navigate('/signup');
  };

  const validLogin = (email, password) => {
    if (!email.includes('@')) return false;
    if (password.length < 5) return false;
    return true;
  };

  const isValid = () => {
    return validLogin(email, password);
  };

  return (
    <div>
      <div>
        <input placeholder="이메일" onChange={saveUserId}></input>
        <input placeholder="비밀번호" onChange={saveUserPassword}></input>
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
