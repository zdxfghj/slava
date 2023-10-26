import "./main.css";
import logo from "./logo.png";
import Main from "../../main/main";

function mainTemplate() {
  return (
    <>
      <div class="app-header">
        <div class="header-content">
          <div class="brand d-none d-lg-inline-block d-xl-inline-block">
            <a href="http://181.8.1.103:9200/start">
              <img alt="logo" class="logo-img" src={logo} />
            </a>
          </div>
          <div class="header-content-title">
            АИС ГАИ МВД РЕСПУБЛИКИ БЕЛАРУСЬ
          </div>
        </div>
        <div class="menu-header">
          <div class="header-person-photo">
            <img alt="" src="" class="ng-star-inserted" />
          </div>
          <div class=" header-person-info">
            <div class="name-persone-header"> Долганов Владислав</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div class="sidebar-content">
          <div class="ps">
            <div class="title-wrap">
              <h1 class="title">Нарушения, Лишения / Заявления ВУ</h1>
            </div>
            <div class="ps-content">
              <ul
                class="nav"
                data-keyboard-block="default"
                myaccordionnav=""
                myappendsubmenuicon=""
                myhighlightactiveitems=""
              >
                <li class="menu-item regular ng-star-inserted">
                  <div class="inner active">
                    <i class="gi gi-time-note ng-star-inserted"></i>
                    <span class="title">Глобальный поиск / Досье ФЛ ЮЛ ТС</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="ps__rail-x">
              <div class="ps__thumb-x" tabIndex="0"></div>
            </div>
            <div class="ps__rail-y">
              <div class="ps__thumb-y" tabIndex="0"></div>
            </div>
          </div>
          <div class="logout-wrap">
            <div class="menu-item">
              <a
                class="inner"
                data-keyboard="true"
                href="http://181.8.1.103:9200/start"
              >
                <i class="gi gi-home"></i>
                <span class="title">Вернуться на главную</span>
              </a>
            </div>
          </div>
          <Main></Main>
        </div>
      </div>
    </>
  );
}

export default mainTemplate;
