import React from "react";
// import "./Form.module.css";
import emailjs from '@emailjs/browser';


function Form(props) {

  const [name, setName] = React.useState("");

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
  };

  const resetForm = (e) => {
    props.changeState();
    // e.target.reset();
    resetValues();
  } 

  return (
    <div className={`form ${props.isOpen ? `form_opened` : ``}`}>
      <div className="form__overlay"></div>
      <div className="form__layer">
        <div className="form__container">
          <div className="form__header">
            <p className="form__title">Начать проект</p>
            <button
              className="form__close-btn"
              type="reset"
              onClick={resetForm}

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
              id="name"
              placeholder='ФИО'
              className="form__input form__input-name"
              required
              onChange={handleChangeName}
            ></input>
              
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder='Телефон'
              minLength="2"
              className="form__input form__input-phone"
              required
              onChange={handleChangePhone}
            ></input>

            <input
                name="email"
                type="text"
                minLength="2"
                id="email"
                placeholder='Почта'
                className="form__input form__input-email"
                required
                onChange={handleChangeEmail}
              ></input>

              <input
                name="task"
                type="text"
                minLength="2"
                id="task"
                placeholder='Описание задачи'
                className="form__input form__input-task"
                required
                onChange={handleChangeTask}
              ></input>

            <span></span>
            
            <div className="form__checkbox checkbox">
              <label className={`checkbox__label ${props.isCheckboxActive ? `checkbox__label_active` : ``}`} onClick={props.changeCheckboxState}>
                <input
                  type="checkbox"
                  className="checkbox__container"
                ></input>
              </label>
              <p className="checkbox__text">Я даю согласие на обработку персональных данных</p>
            </div>
            
            <button
              type="submit"
              className={`form__submit ${(props.isCheckboxActive && name && phone && email && task) ? `form__submit_active` : ``}`}
              disabled={!props.isCheckboxActive || !name || !phone || !email || !task}
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default Form;
