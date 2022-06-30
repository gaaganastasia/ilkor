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

import emailjs from '@emailjs/browser';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

function App() {
  const [error, setError] = React.useState("");

  const [isFormDisabled, setIsFormDisabled] = React.useState(false);

  const [message, setMessage] = React.useState('');

  const [checkboxState, setCheckboxState] = React.useState(false);

  function handleCheckboxState() {
    setCheckboxState(!checkboxState);
  }


  function handleSendRequest(name, phone, email, task, e, resetForm) {
    setError("");
    setMessage('');
    setIsFormDisabled(true);

    if (!isMobilePhone(phone)) {
      setError("Ошибка: некорректный номер телефона.")
      e.target.reset();
      resetForm();
      handleCheckboxState()

    } else if (!isEmail(email)) {
      setError("Ошибка: некорректный адрес электронной почты.")
      e.target.reset();
      resetForm();
      handleCheckboxState()
    } else {
      //setMessage('Данные отправлены успешно!');
      // resetForm();
      // handleCheckboxState()

      emailjs.send("service_w4t946h", "template_q1u48ep", {name: name,
        phone: phone,
        email: email,
        task: task,}, "rx91W3rrGPqIyRlSn")
         .then((result) => {
            setMessage('Данные отправлены успешно!');
         }, (error) => {
           console.log(error)
         })
         .catch((err) => {
          console.log(err)
         })
         .finally(() => {
            setIsFormDisabled(false);
            resetForm();
            handleCheckboxState()
         })
         ;
    }
      
    

    /*mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push("/movies");
          setError("");
          setIsErrorVisible(false);
        }
        return res;
      })
      .catch((err) => {
        setError("Вы ввели неправильный логин или пароль.");
        setIsErrorVisible(true);
        return err;
      })
      .finally(() => {
        setIsFormDisabled(false);
      })*/
  }





  /////////////////////////////////////////////////////////////////

  const [isNavOpen, setNavState] = React.useState(false);
  const changeNavState = () => {
  setNavState(!isNavOpen);
  };

  const [isFormOpen, setFormState] = React.useState(false);
  const changeFormState = () => {
  setFormState(!isFormOpen);
  };

  // const [isCheckboxActive, setCheckboxState] = React.useState(false);
  // const changeCheckboxState = () => {
  //   setCheckboxState(!isCheckboxActive);
  // };

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
          changeAdState={changeAdState}
          changeFormState={changeFormState}>
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
        error={error}
        message={message}
        isFormDisabled={isFormDisabled}
        onSendRequest={handleSendRequest}
        checkboxState={checkboxState}
        onSendCheckboxState={handleCheckboxState}
        setError={setError}
        setMessage={setMessage}
      ></Form>
    </div>
  );
}

export default App;
