import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // react 기본 파일
import React, {useEffect} from "react";

import "./styles.css";

//test

// components 및 router 파일
import ScrollTop from "./components/ScrollToTop";
import Home from "./router/Home";
import Select from "./router/Select";
import NavBar from "./components/NavBar";
import Login from "./router/Login";

//

function App() {
  useEffect(() => {
    // Initialize KakaoTalk SDK with your API key
    Kakao.init("4a0465204124cb18162eedbb5ffd63a3");
  }, []);
  return (
    <Router>
      <NavBar /> {/* 상단 메뉴바 components*/}
      <ScrollTop /> {/*페이지 이동시 스크롤 맨 위로 올라오게 하는 components*/}
      <Switch>
        <Route exact path="/onSang/"> {/*메인 페이지*/}
          <Home />
        </Route>
        <Route exact path="/onSang/select"> {/*상담사 메뉴 페이지*/}
          <Select />
        </Route>
        <Route exact path="/onSang/Login"> {/*로그인 페이지 (삭제예정)*/}
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
