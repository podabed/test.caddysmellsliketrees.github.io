import React from "react";

const About = () => (
  <div className="main">
    <section>
      <header className="title">Эта группа — наш деревянный сруб</header>
      <p>
        В феврале 2015-го упали наши зёрна в неведомую землю, а к октябрю
        появились первые ростки. Плодами мы зацветаем медленно, но наши ветви
        крепнут и наливаются соком всё гуще и пряней!
      </p>
      <p>
        Мы играем душеполезные песни на каждый день. Они у нас срастаются в леса
        так, что их тяжело отделить друг от друга, а между ними бликуют смелыми
        оленями стихи.
      </p>
    </section>
    <section>
      <header className="title">Состав:</header>
      <ul className="list">
        <li className="list_margin-top">
          Андрей Швецов<br />(ударные, вейв-драм, перкуссия)
        </li>
        <li className="list_margin-top">
          Владислав Луцык<br />(аккордеон, духовые, вокал, бэк-вокал)
        </li>
        <li className="list_margin-top">
          Дмитрий Вавилов<br />(укулеле, перкуссия, декламация стихов)
        </li>
        <li className="list_margin-top">
          Светлана Подабед<br />(духовые, гитара, вокал, бэк-вокал, декламация
          стихов, перкуссия)
        </li>
        <li className="list_margin-top">
          Сергей Нефедьев<br />(гитара, вокал, бэк-вокал, перкуссия)
        </li>
        <li className="list_margin-top">
          Сергей Цветков<br />(бас-гитара, декламация стихов)
        </li>
      </ul>
    </section>
  </div>
);

export default About;
