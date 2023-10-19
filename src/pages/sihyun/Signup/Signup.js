import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Signup.scss';

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
    // fetch('http://10.58.52.161:8000/users/signup', {
    fetch('http://10.58.52.85:8000/signup', {
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
    <div className="join">
      <div className="header">
        <p>뒤로</p>
      </div>
      <div className="container">
        <p className="joinTitle">회원가입</p>
        <div className="basicInfo">
          <div className="basicLabel">
            <p className="basicText">기본 정보</p>
            <p className="basicRequired">필수 사항</p>
          </div>
          <div className="basicInput">
            <input
              className="inputbox"
              name="email"
              placeholder="이메일"
              onChange={updateForm}
            />
            <input
              className="inputbox"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={updateForm}
            />
            <input
              className="inputbox"
              type="password"
              placeholder="비밀번호 확인"
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="nickname">
          <div className="nickLabel">
            <p className="nickText">닉네임과 프로필 이미지</p>
            <p className="nickRequired">선택 사항</p>
          </div>
          <input
            className="inputbox"
            name="nickname"
            placeholder="닉네임"
            onChange={updateForm}
          />
        </div>
        <div className="phone">
          <div>
            <p className="phoneText">전화번호</p>
            <p className="phoneRequired">선택 사항</p>
          </div>
          <input
            className="inputbox"
            type="number"
            placeholder="- 없이 숫자만 입력해주세요"
          />
        </div>

        <div className="birthday">
          <div className="birthLabel">
            <p className="birthdayText">생일</p>
            <p className="birthdayRequired">선택 사항</p>
          </div>
          <div className="birth">
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
        </div>
      </div>
      <button className="signupBtn" disabled={!isValid} onClick={handleSignup}>
        회원 가입
      </button>
    </div>
  );
};

export default Signup;
