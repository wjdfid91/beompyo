import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css';



export default function Header() {
  let navigate = useNavigate();

  return (
    <div id='header'>
      <header>
        <div className="container">
          <ul className="info">
            <li onClick={() => { navigate("/buisness_only"); }}><a>로그인</a></li>
            <li onClick={() => { navigate("/buisness_only"); }}><a>회원가입</a></li>
            <li onClick={() => { navigate("/buisness_only"); }}><a>장바구니(0)</a></li>
            <li onClick={() => { navigate("/buisness_only"); }}><a>주문조회</a></li>
            <li onClick={() => { navigate("/buisness_only"); }}><a>마이페이지</a></li>
          </ul>
        </div>
      </header>
    </div>
  )
}
