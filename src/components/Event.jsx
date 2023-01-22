import React from 'react';
import { useState } from 'react';
import { Container, Row, } from "react-bootstrap";
import eventData from '../constants/eventdata';

function EventList(){
  let [event] = useState(eventData);

  return (
    <div>
      <section>
        <div id="product" className="container">
          <h1 className='sub_h1'>이벤트</h1>
          <Container>
            <Row>
              {event.map((a, i) => {
                return <Event event={event[i]} i={i + 1} key={i} />;
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
    <div className='product_list'>
      <img src={props.event.src} alt="" width="100%" />
      <p>{props.event.title}</p>
      <p>{props.event.date}</p>
    </div>
  );
}

export default EventList;