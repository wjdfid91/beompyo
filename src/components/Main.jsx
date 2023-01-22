import React from "react";
import { useState } from "react";
import bestData from "../data/bestdata";
import newData from "../data/newdata";
import giftData from "../data/giftdata";
import { Container, Row, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function MainPage() {
  let [show] = useState([0, 0, 0, 0]);
  let [best] = useState(bestData);
  let [newOne] = useState(newData);
  let [gift] = useState(giftData);
  let navigate = useNavigate();


  return (
    <div>
      <section>
        <div id="product" className="container">
          <h1 onClick={() => { navigate("/best"); }}>범표BEST</h1>
          <p className="more" onClick={() => { navigate("/best"); }}>
            <a href=''>MORE</a>
          </p>
          <Container>
            <Row>
              {show.map((a, i) => {
                return <Best best={best[i]} i={i + 1} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div id="product" className="container">
          <h1 onClick={() => { navigate("/new"); }}>신상품</h1>
          <p className="more" onClick={() => { navigate("/new"); }}>
            <a href=''>MORE</a>
          </p>
          <Container>
            <Row>
              {show.map((a, i) => {
                return <New newOne={newOne[i]} i={i + 1} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </section>
      <article className="banner">
        <div>
          <img src="/images/banner7.gif" alt="" />
        </div>
        <div>
          <img src="/images/banner6.jpg" alt="" />
        </div>
      </article>
      <section>
        <div id="product" className="container">
          <h1 onClick={() => { navigate("/gift"); }}>선물/기획세트</h1>
          <p className="more" onClick={() => { navigate("/gift"); }}>
            <a href=''>MORE</a>
          </p>
          <Container>
            <Row>
              {show.map((a, i) => {
                return <Gift gift={gift[i]} i={i + 1} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </section>
      <article className="banner">
        <div>
          <img src="/images/banner9.gif" alt="" />
        </div>
        <div>
          <img src="/images/banner8.gif" alt="" />
        </div>
      </article>
      <article>
        <div id="product" className="container">
          <h1>"범표어묵은 신선한 재료로 만듭니다"</h1>
          <h2>범표어묵만의 특별함을 만나보세요!</h2>
          <div className='ad'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/K_4KJFyYsKs?autoplay=1&amp;playlist=K_4KJFyYsKs&loop=1&controls=0&mute=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </article>  
    </div>
  );
}

function Best(props) {
  let navigate = useNavigate();


  return (
    <div className='product_list'>
      <img onClick={() => { navigate("/best_explain/" +(props.i -1) + ""); }} 
         src={props.best.src} alt="" width="100%"
       />
      <div className='best_logo'>
        <p>{props.best.best}</p>
      </div>
      <h5>{props.best.title}</h5>
      <span className='discount'>{`${props.best.discount}%`}</span>
      <span className='price_sale'>{`${props.best.sale_price.toLocaleString('ko-KR')}원`}</span>
      <span className='price'>{props.best.price}</span>   
    </div>
  );
}
function New(props) {
  let navigate = useNavigate();

  return (
    <div className='product_list'>
      <img onClick={() => { navigate("/new_explain/" +(props.i -1) + ""); }}  
        src={props.newOne.src} alt="" width="100%" 
      />
      <p className='new_logo'>{props.newOne.new}</p>
      <h5>{props.newOne.title}</h5>
      <span className='discount'>{`${props.newOne.discount}%`}</span>
      <span className='price_sale'>{`${props.newOne.sale_price.toLocaleString('ko-KR')}원`}</span>
      <span className='price'>{props.newOne.price}</span>     
    </div>
  );
}
function Gift(props) {
  let navigate = useNavigate();

  return (
    <div className='product_list'>
      <img onClick={() => { navigate("/gift_explain/" +(props.i -1) + ""); }}  
        src={props.gift.src} alt="" width="100%" 
      />
      <p className='sale_logo'>{props.gift.sale}</p>
      <h5>{props.gift.title}</h5>
      <span className='discount'>{`${props.gift.discount}%`}</span>
      <span className='price_sale'>{`${props.gift.sale_price.toLocaleString('ko-KR')}원`}</span>
      <span className='price'>{props.gift.price}</span>
    </div>
  );
}

export default MainPage;
