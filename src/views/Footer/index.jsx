import React from 'react';
import './style.css';

function Footer(){
  return(
    <div>
      <footer>
        <div className="container">
          <ul className="footer_top">
            <li>
              <a href="">회사소개</a>
            </li>
            <li>
              <a href="">이용약관</a>
            </li>
            <li>
              <a style={{ color: "gray" }} href="">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="">이용안내</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <ul className="footer_mid">
            <li>
              <p>Customer Center</p>
              <p>
                051-245-5082 <br />
                카카오톡 범표어묵 <br /> 평일 오전10시 ~ 오후5시 <br /> 점심
                오후 12시 ~ 1시 <br /> 주말/공휴일 휴무!
              </p>
            </li>
            <li>
              <p>Bank Account</p>
              <p>
                농협 352-1955-9581-13 <br /> 예금주: 범표몰
              </p>
            </li>
            <li>
              <p>구매안전 서비스 </p>
              <p>
                고객님은 안전거래를 위해 현금 등으로 결제 시 <br /> 저희
                쇼핑몰에서 가입한 PG사의 <br /> 구매안전서비스를 이용하실 수
                있습니다.
              </p>
              <button>서비스가입사실확인</button>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="footer_bottom">
            <p>
              상호 : 범표몰 대표 : 박송희 전화 : 051-245-5082 <br />
              사업자등록번호 : 438-18-01591 통신판매신고번호 :
              제2022-부산중구-0050호 <br /> 주소 : 48984 부산광역시 중구
              자갈치해안로 73-3 (남포동4가) <br /> 개인정보관리책임자 : 김현희
              (tigeramuk2@naver.com) <br />
              <br /> Copyright © All right reserved. Hosting by 카페24(주)
            </p>
            <div className="sns">
              <a href="">
                <img src="/images/sns_insta.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/sns_facebook.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/sns_blog.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/sns_cafe.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/sns_kakao_ch.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/sns_youtube.svg" alt="" />
              </a>
              <a href="">
                <img src="/images/icon_company.png" alt="" />
              </a>
            </div>
            <div className="footer_logo">
              <img src="/images/logo.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;