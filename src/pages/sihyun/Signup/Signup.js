import React from 'react';

const Signup = () => {
  return (
    <>
      <div className="container">
        <h3>회원가입</h3>
        <p>기본 정보</p>
        <input placeholder="이메일" />
        <input placeholder="비밀번호" />
        <input placeholder="비밀번호 확인" />
        <p>닉네임과 프로필 이미지</p>
        <input placeholder="닉네임" />
        <p>전화번호</p>
        <input placeholder="전화번호" />
        <p>생일</p>
        <input placeholder="생일" />
      </div>
      <button className="signupBtn">회원 가입</button>
    </>
  );
};

export default Signup;
