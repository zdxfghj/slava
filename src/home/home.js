import "./home.css";
import logo from "./logo.png";
import person from "./person.png";
import personeSerch from "./person_search.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="background">
      <div className="main">
        <div className="gai-logo">
          <img alt="Logo" className="gai-logo-img" src={logo} />
          <span className="gai-logo-title">
            АИС Государственной автомобильной инспекции МВД Республики Беларусь
          </span>
        </div>

        <div className="ng-star-inserted">
          <div className="ng-star-inserted">
            <perfect-scrollbar>
              <div className="ps">
                <div className="ps-content">
                  <app-start-links className="link-wrap">
                    <div className="main-block">
                      <div className="start-links one-role">
                        <h3 className="links-title">
                          Нарушения Лишения / Заявления ВУ
                        </h3>
                        <div
                          className="links-content"
                          data-keyboard-block="none"
                        >
                          <div
                            className="link ng-star-inserted"
                            data-keyboard-element="none"
                            tabIndex="0"
                           
                          >
                            <Link  to ="/main/global-search/searchFL">
                              <img
                                alt=""
                                className="link-img"
                                src={personeSerch}
                              />
                              <p className="link-name">
                                Глобальный поиск / Досье ФЛ ЮЛ ТС
                              </p>
                            </Link>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </app-start-links>
                </div>

                <div className="ps__rail-x"></div>
                <div className="ps__rail-y"></div>
              </div>
            </perfect-scrollbar>
          </div>
          <div className="one-roles">
            <span className="one-role-title">Доступные роли: </span>
            <span className="one-role-value">admproc.Поисковик</span>
          </div>
          <div class="footer" data-keyboard-block="none">
            <div class="footer-person" tabindex="0">
              <div class="footer-person-photo">
                <img alt="" src={person} class="ng-star-inserted" />
              </div>
              <div>
                <span class="footer-person-name">Долганов </span>
                <span class="footer-person-position"></span>
              </div>
            </div>
            <div class="footer-out-button">
              <i class="gi gi-logout"></i>
              <span data-keyboard-element="none">Выйти из системы</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
