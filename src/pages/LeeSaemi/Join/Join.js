import React, { useState } from 'react';
import './Join.scss';

const Join = () => {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const saveNewUserId = event => {
    setInputId(event.target.value);
  };

  const saveNewUserPwd = event => {
    setInputPwd(event.target.value);
  };

  const isInputValid = inputId.includes('@' && '.') && inputPwd.length >= 10;

  // const navigate = useNavigate();

  const goToMain = () => {
    // 범석님 컴 서버 주소
    fetch('http://10.58.52.162:8000/signup', {
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
          alert(
            '존재하지 않는 사용자입니다. 사용자의 아이디 혹은 비밀번호가 틀렸습니다',
          );
        }
      });
  };

  return (
    <>
      <div className="header">
        <img src="./images/arrow-left.png" alt="left arrow to back" />
        <div className="headerBackText">뒤로</div>
      </div>
      <div className="container">
        <div className="basicInfo">
          <div className="basicInfoIntro">
            <h1>회원가입</h1>
          </div>
          <div className="basicInfo">
            <div className="basicInfoText">
              <span className="basicText">기본 정보</span>
              <span className="alertText">필수 사항</span>
            </div>

            <div className="inputInfo">
              <input
                value={inputId}
                onChange={saveNewUserId}
                className="emailInfo"
                type="text"
                placeholder="이메일"
              />
              <input
                value={inputPwd}
                onChange={saveNewUserPwd}
                className="passwordInfo"
                type="password"
                placeholder="비밀번호"
              />
              <input
                className="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>

          <div className="nickName">
            <div className="nickNameText">
              <span className="nickNameInfo">닉네임</span>
              <span className="alertText-option">선택 사항</span>
            </div>
            <input className="nickNameInput" type="text" placeholder="닉네임" />
          </div>
        </div>
        <button
          type="button"
          onClick={goToMain}
          className={
            isInputValid ? 'buttonLoginActivated' : 'buttonLoginInactivated'
          }
          disabled={isInputValid ? false : true}
        >
          회원 가입
        </button>
      </div>
    </>
  );
};

export default Join;
