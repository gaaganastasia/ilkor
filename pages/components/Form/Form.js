import React from "react";
// import "./Form.module.css";
//import emailjs from '@emailjs/browser';
import validator from "../Validator/Validator";
// import isEmail from 'validator/lib/isEmail';
// import isMobilePhone from 'validator/lib/isMobilePhone';


function Form(props) {
  const { values, handleChange, isValid, resetForm } = validator();

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.name || !values.phone || !values.email || !values.task) {
      return;
    }
    
    props.onSendRequest(values.name, values.phone, values.email, values.task, e, resetForm);
  }

  // function resetForm(e) {
  //   console.log(e.target.closest("form"))
  // }

  /*const [name, setName] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const [phone, setPhone] = React.useState("");

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  const [email, setEmail] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  const [task, setTask] = React.useState("");

  function handleChangeTask(e) {
    setTask(e.target.value);
  }

  const resetValues = () => {
    setName('');
    setPhone('');
    setEmail('');
    setTask('');
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs.send("service_w4t946h", "template_q1u48ep", {name: name,
      phone: phone,
      email: email,
      task: task,}, "rx91W3rrGPqIyRlSn")
       .then((result) => {
         console.log("Message Sent, We will get back to you shortly", result.text);
         resetForm(e);
         props.changeCheckboxState();
       }, (error) => {
         console.log("An error occurred, Please try again", error.text);
       });
  };*/

  // const resetForm = (e) => {
  //   props.changeState();
  //   // e.target.reset();
  //   resetValues();
  // } 

  const reset = (e) => {
    props.changeState();
    e.target.closest(".form").querySelector(".form__form").reset();
    resetForm();
    props.setError('');
    props.setMessage('');
  }

  return (
    <div className={`form ${props.isOpen ? `form_opened` : ``}`}>
          <div className="form__header">
            <p className="form__title">Начать проект</p>
            <button
              className="form__close-btn"
              type="reset"
              onClick={reset}

            ></button>
          </div>

          <form
            method="post"
            action="index.html"
            name="application"
            className="form__form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              minLength="2"
              maxLength="100"
              id="name"
              placeholder='ФИО'
              className="form__input form__input-name"
              required
              onChange={handleChange}
            ></input>
              
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder='Телефон'
              minLength="2"
              maxLength="50"
              className="form__input form__input-phone"
              required
              onChange={handleChange}
            ></input>

            <input
                name="email"
                type="text"
                minLength="2"
                maxLength="100"
                id="email"
                placeholder='Почта'
                className="form__input form__input-email"
                required
                onChange={handleChange}
              ></input>

              <textarea
                name="task"
                type="text"
                minLength="2"
                maxLength="500"
                id="task"
                rows="5"
                placeholder='Описание задачи'
                className="form__input form__input-task"
                required
                onChange={handleChange}
              ></textarea>
            
            <div className="form__checkbox checkbox">
              <label className="checkbox__label">
                <input
                  type="checkbox"
                  className="checkbox__container"
                ></input>
                <span className={`visible-checkbox ${props.checkboxState ? `visible-checkbox_active` : ``}`} onClick={props.onSendCheckboxState}></span>
              </label>
              <p className="checkbox__text">Я даю согласие на обработку персональных данных</p>
            </div>
            
            <button
              type="submit"
              className={`form__submit ${(props.checkboxState && isValid) ? `form__submit_active` : ``}`}
              disabled={!props.checkboxState || !isValid}
            >
              Отправить заявку
            </button>

            <span className={`form__message form__message_ok ${(props.message.length !== 0) ? `form__message_visible` : ``}`}>{props.message}</span>
            <span className={`form__message form__message_err ${(props.message.length !== 0) ? `form__message_visible` : ``}`}>{props.error}</span>
          </form>
      
    </div>
  );
}

export default Form;
