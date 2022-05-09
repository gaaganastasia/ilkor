import React from "react";
// import './App.css';
import Header from "../Header/Header";
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Projects from "../Projects/Projects";
import Line from "../Line/Line";
import Services from '../Services/Services';
import StartProject from "../StartProject/StartProject";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Form from "../Form/Form";
import Fade from 'react-reveal/Fade';

function App() {

  const [isNavOpen, setNavState] = React.useState(false);
  const changeNavState = () => {
  setNavState(!isNavOpen);
  };

  const [isFormOpen, setFormState] = React.useState(false);
  const changeFormState = () => {
  setFormState(!isFormOpen);
  };

  const [isCheckboxActive, setCheckboxState] = React.useState(false);
  const changeCheckboxState = () => {
    setCheckboxState(!isCheckboxActive);
  };

  const [isDevOpen, setDevState] = React.useState(false);
  const changeDevState = () => {
  setDevState(!isDevOpen);
  };

  const [isLayoutOpen, setLayoutState] = React.useState(false);
  const changeLayoutState = () => {
  setLayoutState(!isLayoutOpen);
  };

  const [isDesignOpen, setDesignState] = React.useState(false);
  const changeDesignState = () => {
  setDesignState(!isDesignOpen);
  };

  const [isAdOpen, setAdState] = React.useState(false);
  const changeAdState = () => {
  setAdState(!isAdOpen);
  };

  return (
    <div className="page">
      <div className="first">
        <div className="first__overlay"></div>
        <video className="first__video" src={require('../../images/timeline.mp4')}
            muted
            autoPlay={"autoplay"}
            preload="auto"
            loop>
        </video>
        <Header changeNavState={changeNavState}></Header>
        <Main changeFormState={changeFormState}></Main>
      </div>
      <Line></Line>
      <Fade bottom>
        <AboutUs></AboutUs>
      </Fade>

      <Fade bottom>
        <Line></Line>
        <Projects></Projects>
      </Fade>

      <Fade bottom>
        <Line></Line>
        <Services
          isDevOpen={isDevOpen}
          changeDevState={changeDevState}
          isLayoutOpen={isLayoutOpen}
          changeLayoutState={changeLayoutState}
          isDesignOpen={isDesignOpen}
          changeDesignState={changeDesignState}
          isAdOpen={isAdOpen}
          changeAdState={changeAdState}>
        </Services>
      </Fade>

      <Fade bottom>
        <Line></Line>
        <StartProject changeFormState={changeFormState}></StartProject>
        <Line></Line>
      </Fade>
      
      
      <Footer></Footer>
      <Navigation
        isOpen={isNavOpen}
        changeState={changeNavState}
      ></Navigation>
      <Form
        isOpen={isFormOpen}
        changeState={changeFormState}
        changeCheckboxState={changeCheckboxState}
        isCheckboxActive={isCheckboxActive}
      ></Form>
    </div>
  );
}

export default App;
