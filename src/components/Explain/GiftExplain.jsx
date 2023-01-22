import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import giftData from '../../constants/giftdata';
import './style.css';


function GiftExplain(props) {
  let [gift] = useState(giftData)

  let { id } = useParams();
  let choice = gift.find(function (a) {
    return a.id == id;
  });

  return (
    <div id="product" className="container">
      <h1 className="sub_h1">상세페이지</h1>
      <div id="product_explain">
        <div className="explain_left">
          <img src={gift[id].src} alt="" width="100%" />
        </div>
        <div className="explain_right">
          <div className="top_ex">
            <h4>{choice.title}</h4>
            <p className="price">{choice.price}</p>
            <span className='discount'>{`${choice.discount}%`}</span>
            <p className="price_sale" style={{display:'inline-block'}}>{`${choice.sale_price.toLocaleString('ko-KR')}원`}</p>
            <div className="heart">
              <img src="/images/icon_wish.png" alt="하트모양" />
            </div>
          </div>
          <div className="middle_ex">
            <p>
              <span className="first_txt">배송법</span>
              <span>택배</span>
            </p>
            <span className="first_txt">배송비</span>
            <span>{choice.deliveryFee}</span>
            <p>
              <span className="first_txt">제조사</span>
              <span>자체제작</span>
            </p>
            <p>
              <span className="first_txt">원산지</span>
              <span>국내</span>
            </p>
            <div className="middle_box">
              <span>{choice.title}</span>
              <span id='quantity'>
                <input className='quantity' type="text" value='1' />
                <div className='up_quantity'>
                  <img src="/images/btn_count_up.gif" alt="" />
                </div>
                <div className='down_quantity' href="">
                  <img src="/images/btn_count_down.gif" alt="" />
                </div>
              </span>
              <strong>{`${choice.sale_price.toLocaleString('ko-KR')}원`}</strong>
            </div>
          </div>
          <div className="bottom_ex">
            <div className="total">
              <span>TOTAL:</span>
              <strong>{`${choice.sale_price.toLocaleString('ko-KR')}원`}</strong>
              <span>(1개)</span>
            </div>
            <div className="bottom_button">
              <div>
                <button className="purchase">구매하기</button>
              </div>
              <div>
                <button className="basket">장바구니</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='explain_img'>
          <img src="/images/explain.jpg" alt=""  />
        </div>
      </div>
    </div>
  );
}

export default GiftExplain;
