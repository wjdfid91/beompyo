import React from 'react';
import { useState } from 'react';
import { Container, Row, } from "react-bootstrap";
import reviewData from '../constants/reviewdata';


function ReviewList(){
  let [review] = useState(reviewData);


  return(
    <div>
    <section>
      <div id="product" className="container">
        <h1 className='sub_h1'>구매후기</h1>
        <Container>
          <Row>
            {review.map((a, i) => {
              return <Event review={review[i]} i={i + 1}  key={i} />;
            })}
          </Row>
        </Container>
      </div>
    </section>
  </div>
  )
}

function Event(props) {
 
  return (
    <div id='review_list' className='product_list'>
      <span>{props.review.num}</span>
      <img src={props.review.src} alt="" width="15%" />
      <span className='review_title'>{props.review.title}</span>
      <div className='name_date'>
        <span className='name'>{props.review.name}</span>
        <span>{props.review.date}</span>
      </div>  
    </div>
  );
}

export default ReviewList;