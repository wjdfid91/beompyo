import "./App.css";
import { Routes, Route, useNavigate, } from "react-router-dom";


import MainPage from "./Main";
// views import
import Header from './views/Header';
import Navigation from './views/Navigation/index';
import Footer from './views/Footer'
// components import
import Brand from "./components/Brand";
import EventList from './components/Event';
import ReviewList from './components/Review';
import Login from "./components/Login";
import ScrollToTopButton from './components/ScrollToTop';
// ProductCard import
import BestProduct from "./components/ProductCard/BestProduct";
import NewProduct from "./components/ProductCard/NewProduct";
import GiftProduct from "./components/ProductCard/GiftProduct";
// Explain import
import BestExplain from './components/Explain/BestExplain';
import NewExplain from './components/Explain/NewExplain';
import GiftExplain from './components/Explain/GiftExplain';




function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      {/* 헤더 영역 */}
      <Header />
      {/* 메인 로고 */}
      <div className="main_logo">
          <img onClick={() => { navigate("/"); }} src={process.env.PUBLIC_URL + '/images/logo.png'} style={{cursor : 'pointer'}}/>
      </div>
      {/* 네비게이션 */}
      <Navigation />
      {/* 라우트 페이지 */}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/brand" element={<Brand />}></Route>
        <Route path="/best" element={<BestProduct />}></Route>
        <Route path="/new" element={<NewProduct />}></Route>
        <Route path="/gift" element={<GiftProduct />}></Route>
        <Route path="/event" element={<EventList />}></Route>
        <Route path="/review" element={<ReviewList />}></Route>
        <Route path="/buisness_only" element={<Login />}></Route>
        <Route path="/best_explain/:id" element={<BestExplain />}></Route>
        <Route path="/new_explain/:id" element={<NewExplain />}></Route>
        <Route path="/gift_explain/:id" element={<GiftExplain />}></Route>
      </Routes>
      <ScrollToTopButton />
      {/* 푸터 영역 */}
      <Footer />
    </div>
  );
}

export default App;
