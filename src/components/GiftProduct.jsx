import React from "react";
import { useState } from "react";
import giftData from "../data/giftdata";
import { Container, Row, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function GiftProduct() {
  let [gift, setGift] = useState(giftData);

  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  
  //가격순 정렬 함수
  const sortHandler = (case1) => {
    let tmpList = [];
    if (case1 === 'lower') {
        tmpList = gift.sort((a, b) => {
            if (a.sale_price > b.sale_price) return 1;
            if (a.sale_price< b.sale_price) return -1;
            return 0;
        });
        setColor1('black'); 
        setColor2('');
        setColor3('');
    }
    if (case1 === 'higher') {
        tmpList = gift.sort((a, b) => {
            if (a.sale_price > b.sale_price) return -1;
            if (a.sale_price< b.sale_price) return 1;
            return 0;
        });
        setColor1(''); 
        setColor2('black');
        setColor3('');
    }
    //state 복사하고 state 변경해야 정렬 됨.
    let copy = [...gift];
    setGift(copy);
};

//가나다순 정렬 함수
function Sort() {
  let Sorting = [...gift];  // state를 복사
  let Compare = (key) => (a, b) => { // 입력받은 값(key)을 a, b 로 전달 
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
  };
  Sorting.sort(Compare('title')); // title란 녀석들을 정렬시켜라
  setGift(Sorting);
  setColor1(''); 
  setColor2('');
  setColor3('black');
  
}

 

  return (
    <div>
      <section>
        <div id="product" className="container">
          <h1 className='sub_h1'>선물/기획세트</h1>
          <div className='sort'> 
            <span onClick={Sort} style={{ color: color3 }}>상품명</span>
            <span onClick={() => sortHandler('lower')} style={{ color: color1 }}>낮은가격</span>
            <span onClick={() => sortHandler('higher')} style={{ color: color2 }}>높은가격</span>
          </div>
          <Container>
            <Row>
              {gift.map((a, i) => {
                return <Gift gift={gift[i]} i={i + 1} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

function Gift(props) {
  let navigate = useNavigate();

  return (
    <div onClick={() => { navigate("/gift_explain/" +(props.i -1) + ""); }} className="product_list">
      <img src={props.gift.src} alt="" width="100%" />
      <p className='sale_logo'>{props.gift.sale}</p>
      <h5>{props.gift.title}</h5>
      <span className='discount'>{`${props.gift.discount}%`}</span>
      <span className='price_sale'>{`${props.gift.sale_price.toLocaleString('ko-KR')}원`}</span>
      <span className='price'>{props.gift.price}</span>
    </div>
  );
}

export default GiftProduct;
