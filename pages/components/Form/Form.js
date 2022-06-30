import React from "react";
//import validator from "../Validator/Validator";


function Form(props) {
  function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
  
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValues({ ...values, [name]: value });
      setIsValid(target.closest("form").checkValidity());
      
    };
  
    const resetForm = React.useCallback(
      (newValues = {}, newIsValid = false) => {
        setValues(newValues);
        setIsValid(newIsValid);
      },
      [setValues, setIsValid]
    );
  
    return { values, handleChange, isValid, resetForm };
  }
  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.name || !values.phone || !values.email || !values.task) {
      return;
    }
    
    props.onSendRequest(values.name, values.phone, values.email, values.task, e, resetForm);
  }


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

            <span className={`form__message form__message_ok ${(props.message && props.message.length !== 0) ? `form__message_visible` : ``}`}>{props.message}</span>
            <span className={`form__message form__message_err ${(props.message && props.message.length !== 0) ? `form__message_visible` : ``}`}>{props.error}</span>
          </form>
      
    </div>
  );
}

export default Form;
