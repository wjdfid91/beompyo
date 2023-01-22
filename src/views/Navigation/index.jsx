import React from 'react'
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import './style.css';


export default function Navigation() {
  let navigate = useNavigate();


  return (
    <div id="navbar">
      <section>
        <div className='bgColor' >
          <nav  className="container">
            <Navbar bg=""  expand="lg">
              <Container fluid>
              <FontAwesomeIcon id='home' onClick={() => { navigate("/"); }} icon={faHouse} />
                <Navbar.Brand className="category" href="#">
                  카테고리
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll>
                    <Nav.Link onClick={() => { navigate("/brand"); }} href="#action1">브랜드</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/best"); }} href="#action2">범표BEST</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/new"); }} href="#action2">신상품</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/gift"); }} href="#action2">선물/기획세트</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/event"); }} href="#action2">이벤트</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/review"); }} href="#action2">구매후기</Nav.Link>
                    <Nav.Link onClick={() => { navigate("/buisness_only"); }} href="#action2">사업자전용</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="검색어를 입력하세요"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </nav>
        </div>
      </section>
    </div>
  )
}
