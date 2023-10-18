import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const birthday = {
    year: [],
    month: [],
    day: [],
  };

  const makeBirthday = () => {
    for (let i = 0; i < 12; i++) {
      birthday.month.push(i + 1);
    }
    for (let j = 0; j < 31; j++) {
      birthday.day.push(j + 1);
    }
    const tmp = new Date();
    for (let k = 1900; k <= tmp.getFullYear(); k++) {
      birthday.year.push(k);
    }
  };
  makeBirthday();

  const updateForm = e => {
    const nextForm = { ...user, [e.target.name]: e.target.value };
    setUser(nextForm);
  };

  const handleSignup = () => {
    fetch('http://10.58.52.161:8000/users/signup', {
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
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      });
  };

  const isValid =
    emailRegEx.test(user.email) &&
    user.password.length >= 10 &&
    user.password === confirmPassword &&
    user.nickname;

  return (
    <>
      <div className="container">
        <h3>회원가입</h3>
        <p>기본 정보</p>
        <input name="email" placeholder="이메일" onChange={updateForm} />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={updateForm}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <p>닉네임과 프로필 이미지</p>
        <input name="nickname" placeholder="닉네임" onChange={updateForm} />
        <p>전화번호</p>
        <input placeholder="- 없이 숫자만 입력해주세요" />
        <p>생일</p>
        <select className="select" name="year">
          {birthday.year.map(y => {
            return <option key={y}>{y}년</option>;
          })}
        </select>
        <select className="select" name="month">
          {birthday.month.map(m => {
            return <option key={m}>{m}월</option>;
          })}
        </select>
        <select className="select" name="day">
          {birthday.day.map(d => {
            return <option key={d}>{d}일</option>;
          })}
        </select>
      </div>
      <button className="signupBtn" disabled={!isValid} onClick={handleSignup}>
        회원 가입
      </button>
    </>
  );
};

export default Signup;
