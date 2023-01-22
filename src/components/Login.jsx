import React from "react";
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Login() {
    let navigate = useNavigate();
  return (
    <div>
      <div id="login_wrap">
        <div>
          <div className="back" onClick={() => { navigate("/"); }}>
            <img src="/images/back.png" alt="" width="8px" /> 뒤로가기
          </div>
          <h1 onClick={() => { navigate("/"); }}>
            <img src="/images/logo.png" alt="" width="100%" />
          </h1>
        </div>
        <div className="login_top">
          <h2>로그인</h2>
          <p>
            아이디와 비밀번호 입력하기 귀찮으시죠? <br />
            카카오로 1초만에 로그인 하세요.
          </p>
          <div className="login_kakao">카카오 1초 로그인/회원가입</div>
        </div>
        <div>
          <img src="/images/login_benefit.jpg" alt="" />
        </div>
        <p className="or">또는</p>
        <Tabs
          defaultActiveKey="home"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="기존 회원이세요?">
            <input
              className="login_input id"
              type="text"
              placeholder="아이디"
            />
            <input
              className="login_input pw"
              type="text"
              placeholder="비밀번호"
            />
            <div className="existing_member">기존 회원 &nbsp; 로그인</div>
            <p className="find_id_pw">
              아이디찾기 &nbsp; | &nbsp; 비밀번호 찾기
            </p>
            <p className="join">가입하기</p>
            <p className="or">또는</p>
            <div className="btn_naver">
              <a href="">naver로 로그인</a>
            </div>
          </Tab>
          <Tab eventKey="profile" title="비회원 배송조회">
            <input className="login_input" type="text" placeholder="주문자명" />
            <input
              className="login_input"
              type="text"
              placeholder="주문번호 (-) 포함"
            />
            <input
              className="login_input"
              type="text"
              placeholder="비회원주문 비밀번호"
            />
            <div className="existing_member confirm">확인</div>
          </Tab>
        </Tabs>
        <div className="login_footer">
          <strong>
            카카오 1초 로그인/회원가입이란?
            <span>카카오 싱크를 활용한 간편 로그인/가입 기능입니다.</span>
          </strong>
          <p>tigeramuk X 카카오싱크 부스터</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
