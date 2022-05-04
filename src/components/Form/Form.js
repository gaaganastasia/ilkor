import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <div className={`form ${props.isOpen ? `form_opened` : ``}`}>
      <div className="form__overlay"></div>
      <div className="form__container">
        <div className="form__header">
          <p className="form__title">Начать проект</p>
          <button
            className="form__close-btn"
            type="reset"
            onClick={props.changeState}
          ></button>
        </div>

        <form
          method="post"
          action="index.html"
          name="sign-up"
          className="form__form"
          noValidate
          autocomplete="off"
        >
          <label className="form__field" htmlFor="name">
            <input
              name="name"
              type="text"
              minLength="2"
              id="name"
              placeholder='ФИО'
              className="form__input form__input-name"
              required
            ></input>
            <span></span>
          </label>
          <label className="form__field" htmlFor="phone">
            <input
              name="phone"
              type="text"
              id="phone"
              placeholder='Телефон'
              minLength="2"
              className="form__input form__input-phone"
              required
            ></input>
            <span></span>
          </label>
          <label className="form__field" htmlFor="mail">
          <input
              name="mail"
              type="text"
              minLength="2"
              id="mail"
              placeholder='Почта'
              className="form__input form__input-mail"
              required
            ></input>
            <span></span>
          </label>
          <label className="form__field" htmlFor="description">
          <input
              name="description"
              type="text"
              minLength="2"
              id="description"
              placeholder='Описание задачи'
              className="form__input form__input-description"
              required
            ></input>
            <span></span>
          </label>

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
            className={`form__submit ${props.isCheckboxActive ? `form__submit_active` : ``}`}
          >
            Отправить заявку
          </button>
        </form>
        


        {/* <div className="form">
          <p className="form__text">Начать проект</p>
          <button
            className="nav__close-btn"
            type="reset"
            onClick={props.changeState}
          ></button>
          <form
            method="post"
            action="index.html"
            name="sign-up"
            className="form__container"
            noValidate
            autocomplete="off"
          >
            <label className="form__field" htmlFor="name">
              <input
                name="name"
                type="text"
                minLength="2"
                id="name"
                placeholder='ФИО'
                className="form__input form__input-name"
                required
              ></input>
              <span></span>
            </label>
            <label className="form__field" htmlFor="phone">
              <input
                name="phone"
                type="text"
                id="phone"
                placeholder='Телефон'
                minLength="2"
                className="form__input form__input-phone"
                required
              ></input>
              <span></span>
            </label>
            <label className="form__field" htmlFor="mail">
              <textarea 
                name="mail"
                type="text"
                id="mail"
                placeholder='Почта'
                className="form__input form__input-mail"
                required
              ></textarea >
              <span></span>
            </label>
            <label className="form__field" htmlFor="description">
              <textarea 
                name="description"
                type="text"
                id="description"
                placeholder='Описание задачи'
                className="form__input form__input-description"
                required
              ></textarea >
              <span></span>
            </label>

            <span></span>
            <button
              type="submit"
              className="form__submit"
            >
            Отправить заявку
            </button>

            <div className="form__checkbox checkbox">
              <label className={`checkbox__label ${props.isCheckboxActive ? `checkbox__label_active` : ``}`} onClick={props.changeCheckboxState}>
                <input
                  type="checkbox"
                  className="checkbox__container"
                ></input>
              </label>
              <p className="checkbox__text">Я даю согласие на обработку персональных данных</p>
            </div>
          </form>
        </div> */}
      </div>
    </div>




    // <div className="form">
    //   <p className="form__text">Начать проект</p>
    //   <button
    //       className="nav__close-btn"
    //       type="reset"
    //       onClick={props.changeState}
    //     ></button>
    // <form
    //     method="post"
    //     action="index.html"
    //     name="sign-up"
    //     className="form__container"
    //     noValidate
    //     autocomplete="off"
    //   >
    //     <label className="form__field" htmlFor="name">
    //       <input
    //         name="name"
    //         type="text"
    //         minLength="2"
    //         id="name"
    //         placeholder='ФИО'
    //         className="form__input form__input-name"
    //         required
    //       ></input>
    //       <span></span>
    //     </label>
    //     <label className="form__field" htmlFor="phone">
    //       <input
    //         name="phone"
    //         type="text"
    //         id="phone"
    //         placeholder='Телефон'
    //         minLength="2"
    //         className="form__input form__input-phone"
    //         required
    //       ></input>
    //       <span></span>
    //     </label>
    //     <label className="form__field" htmlFor="mail">
    //       <textarea 
    //         name="mail"
    //         type="text"
    //         id="mail"
    //         placeholder='Почта'
    //         className="form__input form__input-mail"
    //         required
    //       ></textarea >
    //       <span></span>
    //     </label>
    //     <label className="form__field" htmlFor="description">
    //       <textarea 
    //         name="description"
    //         type="text"
    //         id="description"
    //         placeholder='Описание задачи'
    //         className="form__input form__input-description"
    //         required
    //       ></textarea >
    //       <span></span>
    //     </label>

    //     <span></span>
    //     <button
    //       type="submit"
    //       className="form__submit"
    //     >
    //     Отправить заявку
    //     </button>

    //     <div className="form__checkbox checkbox">
    //       <label className={`checkbox__label ${props.isCheckboxActive ? `checkbox__label_active` : ``}`} onClick={props.changeCheckboxState}>
    //         <input
    //           type="checkbox"
    //           className="checkbox__container"
    //         ></input>
    //       </label>
    //       <p className="checkbox__text">Я даю согласие на обработку персональных данных</p>
    //     </div>
    //   </form>
    //   </div>
  );
}

export default Form;
