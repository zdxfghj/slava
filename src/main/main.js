import "./main.css";
import logo from "./logo.png";
import { Outlet } from "react-router-dom";
import left from "./left.png";
import home from "./home.gif";
import file from "./file.png";
import personeLog from "./iconsUser.png";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <app-root ng-version="7.2.0">
        <div class="preloaderbar hide" mypreloader="">
          <span class="bar"></span>
          <div class="preloader-content" hidden="">
            <>
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                style={{ width: "100px", height: "100px" }}
              >
                <circle cx="50%" cy="50%" r="45"></circle>
              </svg>
            </>
          </div>
        </div>
        <div class="app-main full-height fixed-header nav-behind" id="app-main">
          <my-app-layout class="ng-star-inserted">
            <section class="app-page-container" id="page-container">
              <my-app-header>
                <section class="app-header">
                  <div class="app-header-inner bg-color-dark">
                    <div class="work-progress">
                      <div class="mode"></div>
                    </div>
                    <div class="d-lg-none d-xl-none float-left">
                      <button
                        class="mat-button header-icon toggle-sidebar-btn"
                        mat-button=""
                        mytoggleoffcanvasnav=""
                      >
                        <span class="mat-button-wrapper">
                          <i class="material-icons">menu</i>
                        </span>
                        <div
                          class="mat-button-ripple mat-ripple"
                          matripple=""
                        ></div>
                        <div class="mat-button-focus-overlay"></div>
                      </button>
                    </div>
                    <div class="brand d-none d-lg-inline-block d-xl-inline-block">
                      <h2>
                        <a href="http://181.8.1.103:9200/start">
                          <img alt="logo" class="logo-img" src={logo} />
                        </a>
                      </h2>
                    </div>
                    <div class="header-content">
                      <div class="header-content-title">
                        АИС ГАИ МВД РЕСПУБЛИКИ БЕЛАРУСЬ
                      </div>
                      <div class="fl fl-a-cr fl-end header-person">
                        <div class="header-person-photo">
                          <img
                            alt=""
                            src="./АИС _ГАИ_ГЛОБАЛЬНЫЙ ПОИСК_files/person_default_img.svg"
                            class="ng-star-inserted"
                          />
                        </div>
                        <div class="m-r-30 header-person-info">
                          <div class="fl fl-a-cr f-s-13 b-500">
                            Лабейко Денис Сергеевич
                            <img
                              src={personeLog}
                              alt=""
                              style={{
                                width: "25px",
                                height: "25px",
                                margin: "10px",
                              }}
                            />
                          </div>
                          <div class="f-s-12 ellipsis"></div>
                          <mat-menu class=""></mat-menu>
                        </div>
                        <i class="gi gi-logout header-logout-btn"></i>
                      </div>
                    </div>
                  </div>
                </section>
              </my-app-header>

              <app-app-page _nghost-c14="" class="ng-star-inserted">
                <div _ngcontent-c14="" class="app-content-wrapper">
                  <my-app-sidenav _ngcontent-c14="">
                    <nav
                      class="app-sidebar bg-color-light app-sidebar-none"
                      id="sidebar"
                      myautoclosemobilenav=""
                    >
                      <section class="sidebar-header bg-color-dark">
                        <img alt="logo" class="logo-img" src={logo} />
                        <a class="brand" href="http://181.8.1.103:9200/">
                          ГАИ
                        </a>
                        <a class="collapsednav-toggler" href="/">
                          <i class="material-icons ng-star-inserted">
                            radio_button_checked
                          </i>
                        </a>
                      </section>
                      <section
                        class="sidebar-content"
                        data-menu-keyboard="true"
                      >
                        <my-app-sidenav-menu _nghost-c15="">
                          <div class="title-wrap">
                            <h1 class="title">
                              Нарушения, Лишения / Заявления ВУ
                            </h1>
                          </div>
                          <perfect-scrollbar
                            tabIndex
                            style={{ height: "calc(100% - 77px)" }}
                          >
                            <div style={{ position: "static" }} class="ps">
                              <div class="ps-content">
                                <ul
                                  class="nav"
                                  data-keyboard-block="default"
                                  myaccordionnav=""
                                  myappendsubmenuicon=""
                                  myhighlightactiveitems=""
                                >
                                  <li class="menu-item regular ng-star-inserted">
                                    <a class="inner " href="/">
                                      <i class="gi gi-time-note ng-star-inserted">
                                        <img src={file} alt="" />
                                      </i>
                                      <span tabIndex class="title">
                                        Глобальный поиск / Досье ФЛ ЮЛ ТС
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div
                                class="ps__rail-x"
                                style={{ left: "0px", bottom: "0px" }}
                              >
                                <div
                                  class="ps__thumb-x"
                                  tabindex="0"
                                  style={{ left: "0px", width: "0px" }}
                                ></div>
                              </div>
                              <div
                                class="ps__rail-y"
                                style={{ top: "0px", right: "0px" }}
                              >
                                <div
                                  class="ps__thumb-y"
                                  tabindex="0"
                                  style={{ top: "0px", height: "0px" }}
                                ></div>
                              </div>
                            </div>
                          </perfect-scrollbar>
                          <div class="logout-wrap">
                            <div class="menu-item">
                              <a
                                class="inner"
                                data-keyboard="true"
                                href="http://181.8.1.103:9200/start"
                              >
                                <i
                                  class="gi gi-home"
                                  style={{
                                    display: "flex",
                                    marginBottom: "5px",
                                    marginLeft: "7px",
                                  }}
                                >
                                  <img
                                    src={home}
                                    alt=""
                                    style={{
                                      height: "20px",
                                    }}
                                  />
                                </i>
                                <span
                                  class="title"
                                  onClick={() => {
                                    navigate("/");
                                  }}
                                >
                                  Вернуться на главную
                                </span>
                              </a>
                            </div>
                          </div>
                        </my-app-sidenav-menu>
                      </section>
                      <section class="sidebar-footer">
                        <a class="collapsednav-toggler fl fl-a-cr" href="/">
                          <i class="material-icons m-r-10 ng-star-inserted">
                            <img src={left} alt="" />
                          </i>
                          <span class="ng-star-inserted">Свернуть меню</span>
                        </a>
                      </section>
                    </nav>
                  </my-app-sidenav>
                  <div _ngcontent-c14="" class="app-content">
                    <div _ngcontent-c14="" class="full-height">
                      <router-outlet _ngcontent-c14=""></router-outlet>
                      <app-window class="ng-star-inserted">
                        <Outlet />
                        {/* Верстка подраздела  */}
                      </app-window>
                    </div>
                  </div>
                </div>
              </app-app-page>
              <my-app-footer class="my-app-footer">
                <section class="app-footer">
                  <div class="container-fluid fl p-l-20 p-r-20">
                    <div class="fl-1">
                      <span>
                        ©
                        <a class="brand" href="/" target="_blank">
                          LWO
                        </a>
                        2022
                      </span>
                      <span class="m-l-15 ng-star-inserted">
                        Версия: <span class="brand">1.3.0.7.529</span>
                      </span>
                    </div>
                    <div class="fl-2 f-s-14">
                      Техническая поддержка пн.-пт. с 9.00 до 18.00 по тел. 8
                      (017) 218-52-46 (Левенко Е.Ю.)
                    </div>
                  </div>
                </section>
              </my-app-footer>
            </section>
          </my-app-layout>
        </div>
      </app-root>
    </>
  );
}

export default Main;
