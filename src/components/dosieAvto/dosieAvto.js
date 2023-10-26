import "./dosieAvto.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchService } from "../../Services/SearchService";

const isEmpty = (data) => {
  return data ? data : "—";
};

// const onSubmit=(lastname,firstname,fname) => {

//     console.log('click')

//     const navigate = useNavigate()

//     SearchService.getPersone(lastname,firstname,fname)
//         .then((response) => response.json())
//         .then((data) => {
//         if (data.length > 1) {
//             alert(
//             "Найдено более одной записи, измените условия поиска."
//             );
//         } else if (data.length == 1 && data[0].cars.length > 0) {
//             navigate("/main/dosiePeople", {
//             replace: true,
//             state: { personData: data[0] },
//             });
//         } else {
//             alert("Не найдено записи, измените условия поиска.");
//         }
//         });
// };

const DosieAvto = () => {
  const navigate = useNavigate();

  const onSubmit = (personId) => {
    SearchService.getPersone(personId)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          navigate("/main/dosiePeople", {
            replace: true,
            state: { personData: data },
          });
        } else return;
      });
  };

  const { state } = useLocation();
  const { personData } = state;
  console.log(state);

  return (
    <div>
      <div>
        <div>
          <div className="simple-notification-wrapper top right">
            <div className="ng-tns-c3-85 ng-star-inserted">
              <div
                className="simple-notification p-b-0 success has-icon ng-trigger ng-trigger-enterLeave"
                style={{ opacity: "1", transform: "translateX(0px)" }}
              >
                <div className="ng-tns-c3-85 ng-star-inserted">
                  <div className="sn-content ng-tns-c3-85 ng-star-inserted">
                    <div className="custom-notification error">
                      <img
                        src="./icon-close-notify.svg"
                        alt=""
                        id="-removeNotifiers"
                      />
                      <p>
                        <span>
                          <img
                            className="m-r-10"
                            src="./icon-warning.svg"
                            alt=""
                          />
                        </span>
                        <span>Сервис получения данных о страховке.</span>
                      </p>
                      <div className="buttons"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <vehicle className="ng-star-inserted">
          <div className="entity-wrapper">
            <div className="left-side">
              <div style={{ position: "static" }} className="ps ps--active-y">
                <div className="ps-content">
                  <gai-preloader className="m-t-10">
                    <div className="wrapper">
                      <vehicle-preview-card
                        className="ng-star-inserted"
                        style={{}}
                      >
                        <div
                          className="preview-card ng-star-inserted active"
                          routerlinkactive="active"
                          tabindex="0"
                        >
                          <div className="fl fl-sp-b title-box">
                            <h3 className="title">
                              {personData.car_model.car_mark.car_mark}{" "}
                              {personData.car_model.car_model}
                            </h3>
                            <div className="badges">
                              <div className="points points-active ng-star-inserted">
                                НА УЧЕТЕ
                              </div>

                              <div className="points points-numbers">
                                {isEmpty(personData.number)}
                              </div>
                            </div>
                          </div>
                          <div className="fl last-box">
                            <div>
                              <div className="item ng-star-inserted">
                                <div className="key">Номер кузова</div>
                                <div className="value">
                                  {isEmpty(personData.body_number)}
                                </div>
                              </div>

                              <div className="item">
                                <div className="key">Год выпуска</div>
                                <div className="value">
                                  {isEmpty(personData.year_of_issue)}
                                </div>
                              </div>
                              <div className="item">
                                <div className="key">Цвет</div>
                                <div className="value">
                                  {isEmpty(personData.car_color.color)}
                                </div>
                              </div>
                              <div className="item">
                                <div className="key">Тип ТС</div>
                                <div className="value">
                                  {isEmpty(personData.car_type.car_type)}{" "}
                                  АВТОМОБИЛЬ
                                </div>
                              </div>
                              <div className="item">
                                <div className="key">Тип кузова ТС</div>
                                <div className="value">
                                  {isEmpty(personData.body_type.body_type)}
                                </div>
                              </div>
                              <div className="item">
                                <div className="key">Масса соб./макс.</div>
                                <div className="value">
                                  {isEmpty(personData.max_mass)}
                                </div>
                              </div>

                              <div className="item">
                                <div className="key">Собственник</div>
                                <div className="value">
                                  {isEmpty(personData.owner.lastname_rus)}{" "}
                                  {isEmpty(personData.owner.firstname_rus)}{" "}
                                  {isEmpty(personData.owner.patronymic_rus)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </vehicle-preview-card>
                      <div className="ng-star-inserted">
                        <div
                          className="addition ng-star-inserted"
                          routerlinkactive="active"
                          tabindex="0"
                        >
                          <div className="inner">
                            <div className="title">
                              <span>НАРУШЕНИЯ</span>
                            </div>
                            <div className="details">
                              {" "}
                              Всего нарушений:{" "}
                              {isEmpty(personData.all_violation)}
                            </div>
                          </div>
                        </div>

                        <div
                          className="addition ng-star-inserted"
                          routerlinkactive="active"
                          tabindex="0"
                        >
                          <div className="inner">
                            <div className="title">
                              <span>ДОРОЖНО-ТРАНСПОРТНЫЕ ПРОИСШЕСТВИЯ</span>
                            </div>
                            <div className="details">
                              {" "}
                              Всего ДТП: {isEmpty(personData.all_accident)}
                            </div>
                          </div>
                        </div>
                        <req-message-box>
                          <div className="wanted-box green">
                            <div className="icon">
                              <img
                                alt=""
                                src="./icon-wanted-vehicle.svg"
                                className="ng-star-inserted"
                              />
                            </div>
                            <div className="text-block">
                              <span className="ng-star-inserted">
                                РОЗЫСК: Транспортное средство с VIN, номером
                                кузова или шасси [WVWZZZ3CZFE518441] в розыске
                                не значится.
                              </span>
                            </div>
                            {/* <div className="refresh-box">
                                    <button className="refresh mat-icon-button ng-star-inserted"
                                    mat-icon-button=""><span className="mat-button-wrapper">
                                        <mat-icon className="mat-icon material-icons mat-icon-no-color" role="img"
                                        aria-hidden="true">refresh</mat-icon>
                                    </span>
                                    <div className="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div>
                                    <div className="mat-button-focus-overlay"></div>
                                    </button></div> */}
                          </div>
                        </req-message-box>
                        <req-message-box>
                          <div className="wanted-box green">
                            <div className="icon">
                              <img
                                alt=""
                                src="./icon-vehicle-TO.svg"
                                className="ng-star-inserted"
                              />
                            </div>
                            <div className="text-block">
                              ГОСТЕХОСМОТР: Допущен к участию в дорожном
                              движении. Например: Разрешение № AE1658587, кол.
                              мес. (с 20.09.2023 по 20.09.2024).
                            </div>
                            {/* <div className="refresh-box">
                                    <button className="refresh mat-icon-button ng-star-inserted"
                                    mat-icon-button=""><span className="mat-button-wrapper">
                                        <mat-icon className="mat-icon material-icons mat-icon-no-color" role="img"
                                        aria-hidden="true">refresh</mat-icon>
                                    </span>
                                    <div className="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div>
                                    <div className="mat-button-focus-overlay"></div>
                                    </button></div> */}
                          </div>
                        </req-message-box>
                        <req-message-box>
                          <div className="wanted-box yellow">
                            <div className="icon">
                              <img
                                alt=""
                                src="./icon-insurance-vehicle.svg"
                                className="ng-star-inserted"
                              />
                            </div>
                            <div className="text-block">
                              СТРАХОВАНИЕ: НЕ УДАЛОСЬ ВЫПОЛНИТЬ ЗАПРОС.
                            </div>
                            {/* <div className="refresh-box">
                                    <button className="refresh mat-icon-button ng-star-inserted"
                                    mat-icon-button=""><span className="mat-button-wrapper">
                                        <mat-icon className="mat-icon material-icons mat-icon-no-color" role="img"
                                        aria-hidden="true">refresh</mat-icon>
                                    </span>
                                    <div className="mat-button-ripple mat-ripple mat-button-ripple-round" matripple=""></div>
                                    <div className="mat-button-focus-overlay"></div>
                                    </button></div> */}
                          </div>
                        </req-message-box>
                      </div>
                    </div>
                  </gai-preloader>
                </div>

                <div
                  className="ps__rail-x"
                  style={{ left: "0px", bottom: "0px" }}
                >
                  <div
                    className="ps__thumb-x"
                    tabindex="0"
                    style={{ left: "0px", width: "0px" }}
                  ></div>
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: "0px", right: "0px", height: "725px" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabindex="0"
                    style={{ top: "0px", height: "719px" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="slide-arrow d-lg-none d-xl-none">
              <mat-icon
                className="mat-icon material-icons mat-icon-no-color"
                role="img"
                aria-hidden="true"
              >
                arrow_left
              </mat-icon>
            </div>
            <div className="right-side">
              <div className="ng-star-inserted">
                <gai-preloader>
                  <div className="wrapper">
                    <div className="ng-star-inserted">
                      <header>
                        <div className="tabs">
                          <div
                            routerlinkactive="active"
                            tabindex="0"
                            className="ng-star-inserted active"
                          >
                            Сведения о регистрации
                          </div>
                          <div
                            routerlinkactive="active"
                            tabindex="0"
                            className="ng-star-inserted"
                          >
                            Ограничения на ТС
                          </div>
                          <div
                            routerlinkactive="active"
                            tabindex="0"
                            className="ng-star-inserted"
                          >
                            Осмотр ТС
                          </div>
                        </div>
                      </header>
                      <section>
                        <vehicle-person className="ng-star-inserted">
                          <gai-preloader>
                            <div className="wrapper">
                              <person-card className="ng-star-inserted">
                                <div className="box box-default box-shadow ng-star-inserted">
                                  <div className="box-header">
                                    <div className="fl">
                                      <span className="m-r-10 name">
                                        Свидетельство о регистрации №5TA0009199
                                      </span>
                                      <div className="status active">
                                        ДЕЙСТВУЮЩЕЕ
                                      </div>
                                    </div>
                                    <action-menu className="actions">
                                      <mat-menu
                                        className=""
                                        classNamelist="mat-menu-position"
                                        xposition="before"
                                      ></mat-menu>
                                    </action-menu>
                                  </div>
                                  <div className="info">
                                    <div className="part">
                                      <div className="item">
                                        <div className="key">Рег. знак</div>
                                        <div className="value">
                                          {isEmpty(personData.number)}
                                        </div>
                                      </div>
                                      <div className="item">
                                        <div className="key">
                                          Период регистрации
                                        </div>
                                        <div className="value ng-star-inserted">
                                          {" "}
                                          настоящее время{" "}
                                        </div>
                                      </div>
                                      <div className="item">
                                        <div className="key">
                                          СР действительно до
                                        </div>
                                        <div className="value">
                                          {isEmpty(personData.period_SR)}
                                        </div>
                                      </div>
                                      <div className="item">
                                        <div className="key">Тип лица</div>
                                        <div className="value">ФИЗИЧЕСКОЕ</div>
                                      </div>

                                      <div className="item ng-star-inserted">
                                        <div className="key">
                                          ФИО собственника
                                        </div>
                                        <div className="value">
                                          <span
                                            className="pseudo-link"
                                            onClick={() => {
                                              onSubmit(personData.owner.id);
                                            }}
                                          >
                                            {personData.owner.lastname_rus}{" "}
                                            {personData.owner.firstname_rus}{" "}
                                            {personData.owner.patronymic_rus}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="item">
                                        <div className="key">
                                          Доп инфо из регистрации / внесении
                                          изменений
                                        </div>
                                        <div className="value">
                                          {isEmpty(
                                            personData.dop_info_for_registration
                                          )}
                                        </div>
                                      </div>
                                      <div className="item">
                                        <div className="key">
                                          Доп инфо из снятии с учета
                                        </div>
                                        <div className="value">
                                          {isEmpty(
                                            personData.dop_info_for_unregistration
                                          )}
                                        </div>
                                      </div>
                                      <div className="item">
                                        <div className="key">
                                          Особые отметки
                                        </div>
                                        <div className="value">
                                          ДОГОВОР КУПЛИ-ПРОДАЖИ{" "}
                                        </div>
                                      </div>
                                      <div className="expand">
                                        <span className="pseudo-link ng-star-inserted">
                                          Развернуть
                                        </span>
                                      </div>
                                    </div>
                                    <div className="images">
                                      <div className="photo ng-star-inserted">
                                        <img
                                          alt=""
                                          aria-describedby="cdk-describedby-message-14"
                                          cdk-describedby-host=""
                                          src={personData.owner.photo}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </person-card>
                              <button
                                className="default m-t-15 mat-button mat-primary ng-star-inserted"
                                color="primary"
                                mat-button=""
                              >
                                <span className="mat-button-wrapper">
                                  Показать все СР
                                </span>
                                <div
                                  className="mat-button-ripple mat-ripple"
                                  matripple=""
                                ></div>
                                <div className="mat-button-focus-overlay"></div>
                              </button>
                            </div>
                          </gai-preloader>
                        </vehicle-person>
                      </section>
                    </div>
                  </div>
                </gai-preloader>
              </div>
            </div>
          </div>
        </vehicle>
      </div>
      <div
        className="cdk-live-announcer-element cdk-visually-hidden"
        aria-atomic="true"
        aria-live="polite"
      ></div>
      <div className="cdk-overlay-container"></div>
      <div
        id="cdk-describedby-message-container"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div id="cdk-describedby-message-14">Собственник</div>
      </div>
    </div>
  );
};

export default DosieAvto;
