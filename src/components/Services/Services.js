import React from "react";
import "./Services.css";
import {Collapse} from 'react-collapse';

function Services(props) {
  const height = 'auto';

  return (
    <section className="services" id="services">
      <div className="services__header">
        <h2 className="services__title">Наши услуги</h2>
        <p className="services__subtitle">Большинство работ мы выполняем по комплексному продвижению: делаем сайт и продвигаем его на различных площадках.
          Но также мы создаем дизайны для проектов или сайтов. Можем разработать логотип компании или запустить рекламу на уже существующий сайт.</p>
      </div>
      <div className="services__content">
        <div className="services__service service">
          <button type="button" className={`service__more-btn ${props.isDevOpen ? `service__close-btn` : ``}`} onClick={props.changeDevState}></button>
          <h3 className="service__title">Разработка сайтов</h3>
          
          <Collapse isOpened={props.isDevOpen} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="service__stages">
              <p className="service__description">Разработка сайта подразумевает под собой разработку дизайна и верстку сайта.
                Для каждого сайта мы разрабатываем индивидуальную концепцию, проводим заранее анализ ниши и конкурентов. 
                В начале проекта и после завершения каждого из этапов мы созваниваемся с Вами и проводим презентацию работы в онлайн формате.</p>
              <div className="service__stage stage">
                <p className="stage__title">Брифинг</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Разработка ТЗ</p>
                <p className="stage__time">4 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">прототипирование</p>
                <p className="stage__time">3 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Дизайн всех страниц</p>
                <p className="stage__time">4 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Адаптивы</p>
                <p className="stage__time">3 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Верстка сайта</p>
                <p className="stage__time">7 дней</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__last">
                <p className="service___time">22 дня</p>
                <button type="button" className="service__order-btn">Заказать</button>
              </div>
            </div>
          </Collapse>
          
        </div>

        <div className="services__service service">
          <button type="button" className={`service__more-btn ${props.isLayoutOpen ? `service__close-btn` : ``}`} onClick={props.changeLayoutState}></button>
          <h3 className="service__title">верстка</h3>
          
          <Collapse isOpened={props.isLayoutOpen} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="service__stages">
              <p className="service__description">Если у Вас есть готовый макет сайта, то верстку сайта можете поручить нам.
                Мы гарантируем качество, сервис и соблюдение обговорённых сроков.</p>
              <div className="service__stage stage">
                <p className="stage__title">Изучение макета</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Верстка</p>
                <p className="stage__time">4 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Тестирование</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Установка на хостинг / CMS</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Подключение сервисов</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__last">
                <p className="service___time">8 дней</p>
                <button type="button" className="service__order-btn">Заказать</button>
              </div>
            </div>
          </Collapse>
          
        </div>

        <div className="services__service service">
          <button type="button" className={`service__more-btn ${props.isDesignOpen ? `service__close-btn` : ``}`} onClick={props.changeDesignState}></button>
          <h3 className="service__title">Дизайн</h3>
          
          <Collapse isOpened={props.isDesignOpen} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="service__stages">
              <p className="service__description">Если Вам нужен продающий и современный дизайн сайта, проекта или презентации,то мы готовы удовлетворить Вашу потребность.
                Наши дизайнеры найдут подход к любой задаче и креативно решат любую проблему.</p>
              <div className="service__stage stage">
                <p className="stage__title">Брифинг</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Анализ Целевой аудитории</p>
                <p className="stage__time">2 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">подбор референсов</p>
                <p className="stage__time">2 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Прототипирование</p>
                <p className="stage__time">3 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Дизайн всех страниц</p>
                <p className="stage__time">4 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Дизайн адаптивов</p>
                <p className="stage__time">3 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__last">
                <p className="service___time">15 дней</p>
                <button type="button" className="service__order-btn">Заказать</button>
              </div>
            </div>
          </Collapse>
          
        </div>

        <div className="services__service service">
          <button type="button" className={`service__more-btn ${props.isAdOpen ? `service__close-btn` : ``}`} onClick={props.changeAdState}></button>
          <h3 className="service__title">Реклама</h3>
          
          <Collapse isOpened={props.isAdOpen} initialStyle={{height: 0, overflow: 'hidden'}}>
            <div style={{height}} className="service__stages">
              <p className="service__description">Оказываем услуги рекламного агентства. У Вас есть сайт, а Вы его не продвигаете?
                Маркетологи нашей компании имеют большой опыт в разных сферах рекламы, поэтому нам так легко подобрать индивидуальный подход к продвижению Вашего бизнеса.</p>
              <div className="service__stage stage">
                <p className="stage__title">Брифинг</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Анализ Целевой аудитории</p>
                <p className="stage__time">2 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Настройка рекламы</p>
                <p className="stage__time">2 дня</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__stage stage">
                <p className="stage__title">Подключение сервисов</p>
                <p className="stage__time">1 день</p>
                <button type="button" className="stage__more-btn"></button>
              </div>
              <div className="service__last">
                <p className="service___time">6 дней</p>
                <button type="button" className="service__order-btn">Заказать</button>
              </div>
            </div>
          </Collapse>
          
        </div>
      </div>
    </section>
  );
}

export default Services;
