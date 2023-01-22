import React from "react";
import { useState } from "react";
import bestData from "../../constants/bestdata";
import { Container, Row, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




function BestProduct() {
  let [best, setBest] = useState(bestData);
  const [sort, setSort] = useState(0);
  
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  
  //가격순 정렬 함수
  const sortHandler = (case1) => {
    let tmpList = [];
    if (case1 === 'lower') {
        tmpList = best.sort((a, b) => {
            if (a.sale_price > b.sale_price) return 1;
            if (a.sale_price< b.sale_price) return -1;
            return 0;
        });
        setColor1('black'); 
        setColor2('');
        setColor3('');
    }
    if (case1 === 'higher') {
        tmpList = best.sort((a, b) => {
            if (a.sale_price > b.sale_price) return -1;
            if (a.sale_price< b.sale_price) return 1;
            return 0;
        });
        setColor1(''); 
        setColor2('black');
        setColor3('');
    }
    if (case1 === 0) {
      setColor1(''); 
      setColor2('');
      setColor3('');
    }
  
    //state 복사하고 state 변경해야 정렬 됨.
    let copy = [...best];
    setBest(copy);
    
};

//가나다순 정렬 함수
function Sort() {
  let Sorting = [...best];  // state를 복사
  let Compare = (key) => (a, b) => { // 입력받은 값(key)을 a, b 로 전달 
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
  };
  Sorting.sort(Compare('title')); // title란 녀석들을 정렬시켜라
  setBest(Sorting);
  setColor1(''); 
  setColor2('');
  setColor3('black');
  
}

  return (
    <div>
      <section>
        <div id="product" className="container">
          <h1 onClick={() => sortHandler(0)} className='sub_h1'>범표BEST</h1>
          <div className='sort'> 
            <span onClick={Sort} style={{ color: color3 }}>상품명</span>
            <span onClick={() => sortHandler('lower')} style={{ color: color1 }}>낮은가격</span>
            <span onClick={() => sortHandler('higher')} style={{ color: color2 }}>높은가격</span>
          </div>
          <Container>
            <Row>
              {best.map((a, i) => {
                return <Best best={best[i]} i={i + 1} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

function Best(props) {
  let navigate = useNavigate();
  
  return (
    <div onClick={() => { navigate("/best_explain/" +(props.i -1) + ""); }} className='product_list'>
      <img src={props.best.src} alt="" width="100%" />
      <p className='best_logo'>{props.best.best}</p>
      <h5>{props.best.title}</h5>
      <span className='discount'>{`${props.best.discount}%`}</span>
      <span className='price_sale'>{`${props.best.sale_price.toLocaleString('ko-KR')}원`}</span>
      <span className='price'>{props.best.price}</span>
    </div>
  );
}

export default BestProduct;
