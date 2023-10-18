import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const saveUserId = event => {
    setInputId(event.target.value);
  };

  const saveUserPwd = event => {
    setInputPwd(event.target.value);
  };

  const isInputValid = inputId.includes('@') && inputPwd.length >= 5;

  const goToMain = () => {
    fetch('http://10.58.52.162:8000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPwd,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === '로그인 성공') {
          localStorage.setItem('jwtToken', data.jwtToken);
        } else if (data.message === '비밀번호가 틀렸습니다.') {
          alert('사용자의 아이디 혹은 비밀번호가 틀렸습니다');
        } else if (data.message === '존재하지 않는 이메일입니다.') {
          alert('존재하지 않는 사용자입니다.');
        }
      });
  };

  return (
    <>
      <div className="logoImage">
        <img
          className="firstLogo"
          src="./images/Logo.png"
          alt="logo of wecode"
        />
        <img
          className="second"
          src="./images/logo_wecode.png"
          alt="title logo of wecode"
        />
      </div>

      <div className="userInfo">
        <input
          value={inputId}
          onChange={saveUserId}
          className="emailInfo"
          type="text"
          placeholder="이메일"
        />
        <input
          value={inputPwd}
          onChange={saveUserPwd}
          className="passworInfo"
          type="password"
          placeholder="비밀번호"
        />

        <button
          type="button"
          onClick={goToMain}
          className={
            isInputValid ? 'buttonLoginActivated' : 'buttonLoginInactivated'
          }
          disabled={isInputValid ? false : true}
        >
          로그인
        </button>

        <div className="loginOption">
          <div className="signIn">회원가입</div>
          <div className="middleLine">
            <hr />
          </div>
          <div className="passWordFinder">비밀번호 찾기</div>
        </div>
      </div>
    </>
  );
};

export default Login;
