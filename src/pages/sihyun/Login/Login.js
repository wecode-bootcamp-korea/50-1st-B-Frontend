import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const updateForm = e => {
    const updateUser = { ...user, [e.target.name]: e.target.value };
    setUser(updateUser);
  };

  const handleLogin = () => {
    fetch('http://10.58.52.161:8000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/thread');
      });
  };

  const isValid = emailRegEx.test(user.email) && user.password.length >= 5;

  return (
    <div>
      <div>
        <input name="email" placeholder="이메일" onChange={updateForm} />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={updateForm}
        />
      </div>
      <button disabled={!isValid} onClick={handleLogin}>
        로그인
      </button>
      <div>
        <Link to="/signup">회원 가입</Link>
        <div>비밀번호 찾기</div>
      </div>
    </div>
  );
};

export default Login;
