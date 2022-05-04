import React from "react";
import "./Last.css";
import Form from '../Form/Form';

function Last(props) {
  return (
    <section className="last-container" id="contacts">
      <div className="last">
        <h2 className="last__title">Остались вопросы ?</h2>
        <Form
        changeCheckboxState={props.changeCheckboxState}
        isCheckboxActive={props.isCheckboxActive}></Form>
      </div>
    </section>
  );
}

export default Last;
