import React from "react";
import "./Problems.css";

function Problems() {
  return (
    <section className="problems">
        <h2 className="problems__title">КАКИЕ ПРОБЛЕМЫ МЫ РЕШАЕМ ?</h2>
        <div className="problems__grid">
          <div className="problems__block">
            <div className="problems__icon"></div>
            <p className="problems__text">Купили некачественную бытовую или любую другую технику и не возвращают деньги?</p>
          </div>
          <div className="problems__block">
            <div className="problems__icon"></div>
            <p className="problems__text">Плохо оказали медицинскую, торговую, бытовую или любую другую услугу и отказываются возвращать деньги?</p>
          </div>
          <div className="problems__block">
            <div className="problems__icon"></div>
            <p className="problems__text">Получили не тот товар,который был заявлен и тоже не возвращают деньги?</p>
          </div>
          <div className="problems__block">
            <div className="problems__icon"></div>
            <p className="problems__text">Продали дефектный товар и тоже отказываются от выплаты денежных средств?</p>
          </div>
        </div>
      </section>
  );
}

export default Problems;
