import "./dosiePeople.css";
import { useLocation } from "react-router-dom";

    const carsView = (cars) => {
        return cars.map((car,index) => (
          <div className="details ng-star-inserted" key={car.id}>
            <span className="cars-count">
              {index+1}
              <img alt="" src="./icon-auto.svg" className="ng-star-inserted" />
            </span>
            <span className="m-r-10 ng-star-inserted">{car.number}</span>
          </div>
        ));
      };

    const carsList =(cars) => {
      return cars.map((car,index) => (
                <div className="wrapper">
                  <div className="box box-default box-shadow ng-star-inserted">
                        <div className="fl  title-box" >
                          <h3 className="title" style={{ color: "black", fontSize: "1.6em", }}>
                            {car.car_model.car_mark.car_mark} {car.car_model.car_model}
                          </h3>
                          <div className="badges">
                            <div className="points points-active ng-star-inserted" style={{ margin: "0 10px 10px 10px" }}>
                              действующий
                            </div>

                            
                          </div>
                        </div>
                        <div style={{ display: "flex",  flexDirection: "row" }}>
                            <div className="fl last-box" >
                              
                              <div>
                                <div className="item ng-star-inserted">
                                  <div className="key">Номер кузова</div>
                                  <div className="value">
                                  {car.body_number}
                                  </div>
                                </div>

                                <div className="item ng-star-inserted">
                                  <div className="key">Номер шасии</div>
                                  <div className="value">
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="key">Год выпуска</div>
                                  <div className="value">
                                  {car.year_of_issue}
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="key">Двигатель</div>
                                  <div className="value">
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="key">Трансмисия</div>
                                  <div className="value">
                                  </div>
                                </div>
                                                          
                              </div>
                            </div>
                            <div className="fl last-box"style={{ marginLeft:"20px" }}>
                              
                              <div>
                                
                                <div className="item">
                                  <div className="key">Цвет</div>
                                  <div className="value">
                                    {car.car_color.color}
                                  </div>
                                </div>
                                <div className="item ng-star-inserted">
                                  <div className="key">Рег.знак</div>
                                  <div className="value">
                                  {car.number}
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="key">Тип ТС</div>
                                  <div className="value">
                                  {car.car_type.car_type} автомобиль
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="key">Тип кузова ТС</div>
                                  <div className="value">
                                    
                                  </div>
                                </div>
                                
                              </div>
                            </div>
                        </div>
                        
                  </div>
                </div>
        ));
      };

   
    const isEmpty= (dataObj, field) => {
    if (dataObj) {
      if (typeof dataObj === 'object') {
        return dataObj[field]
      } else return dataObj
    } else return ''

    }



const DosiePeople = () => {


 
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <person className="ng-star-inserted">
        <div className="entity-wrapper">
          <div className="left-side">
            <div style={{ position: "static" }} className="ps ps--active-y">
              <div className="ps-content">
                <div className="m-t-10">
                  <div className="wrapper">
                    <div className="ng-star-inserted">
                      <div
                        className="preview-card ng-star-inserted active"
                        routerlinkactive="active"
                        tabIndex="0"
                      >
                        <div className="fl justify-content-between title-box ng-star-inserted">
                          <h3 className="title">
                          {isEmpty(state.personData.lastname_rus)}{" "}
                            {isEmpty(state.personData.firstname_rus)}{" "}
                            {isEmpty(state.personData.patronymic_rus)}
                          </h3>

                          <div className="badges"></div>
                        </div>
                        <div className="fl align-items-start last-box ng-star-inserted">
                          <div className="photo">
                            <img
                              alt=""
                              className="pointer ng-star-inserted"
                              src={isEmpty(state.personData.photo)}
                            />
                          </div>
                          <div>
                            <div className="item">
                              <div className="key">Личный номер</div>
                              <div className="value">
                                {isEmpty(state.personData.personal_number)}
                              </div>
                            </div>
                            <div className="item">
                              <div className="key">Гражданство</div>
                              <div className="value">
                                {isEmpty(
                                  state.personData.place_of_residence_country
                                    .country_rus)
                                }
                              </div>
                            </div>
                            <div className="item">
                              <div className="key">Пол</div>
                              <div className="value">
                                {isEmpty(state.personData.sex.sex)}
                              </div>
                            </div>
                            <div className="item">
                              <div className="key">Дата рождения</div>
                              <div className="value">
                                {isEmpty(state.personData.date_of_birth)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ng-star-inserted">
                  <div
                    className="addition passport ng-star-inserted"
                    routerlinkactive="active"
                    tabIndex="0"
                  >
                    <div className="inner">
                      <div className="title">
                        <span>ПАСПОРТ ГРАЖДАНИНА РБ</span>
                      </div>

                      <div className="details ng-star-inserted">
                        {isEmpty(state.personData.series.series)}
                        {isEmpty(state.personData.passport_number)} от{" "}
                        {isEmpty(state.personData.date_of_issue)}.
                      </div>
                    </div>
                  </div>

                  <div
                    className="addition ng-star-inserted"
                    routerlinkactive="active"
                    tabIndex="0"
                  >
                    <div className="inner">
                      <div className="title">
                        <span>ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ</span>
                      </div>
                        {/* <span className="dl-category ng-star-inserted">AM</span> */}
                        {/* <span className="dl-category ng-star-inserted">B</span> */}
                      <div className="details ng-star-inserted">
            
                        Категория серия номер действует до  
                      </div>
                    </div>
                  </div>

                  <div
                    className="addition ng-star-inserted"
                    routerlinkactive="active"
                    tabIndex="0"
                  >
                    <div className="inner">
                      <div className="title">
                        <span>ТРАНСПОРТНЫЕ СРЕДСТВА</span>
                      </div>

                      {state.personData.cars.length > 0 ? carsView(state.personData.cars):(<p>Нет авто</p>)}
                      
                    </div>
                  </div>

                  <div
                    className="addition ng-star-inserted"
                    routerlinkactive="active"
                    tabIndex="0"
                  >
                    <div className="inner">
                      <div className="title">
                        <span>НАРУШЕНИЯ / ПРЕДПИСАНИЯ</span>
                      </div>
                      <div className="details">Всего: 0/0</div>
                    </div>
                  </div>

                  <div
                    className="addition ng-star-inserted"
                    routerlinkactive="active"
                    tabIndex="0"
                  >
                    <div className="inner">
                      <div className="title">
                        <span>ДОРОЖНО-ТРАНСПОРТНЫЕ ПРОИСШЕСТВИЯ</span>
                      </div>
                      <div className="details">Всего ДТП: 0</div>
                    </div>
                  </div>

                  <req-message-box className="ng-star-inserted">
                    <div className="wanted-box green">
                      <div className="icon">
                        <img
                          alt=""
                          src="./icon-wanted-person.svg"
                          className="ng-star-inserted"
                        />
                      </div>
                      <div className="text-block">
                        <ul className="p-l-20 ng-star-inserted">
                          <li className="m-t-10 ng-star-inserted">
                            <span>Физическое лицо в розыске не значится. </span>
                          </li>
                        </ul>
                      </div>
                      <div className="refresh-box">
                       
                      </div>
                    </div>
                  </req-message-box>
                </div>
              </div>

              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div
                className="ps__rail-y"
                style={{ top: "0px", right: "0px", height: "725px" }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  style={{ top: "0px", height: "655px" }}
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
            <div style={{ position: "static", overflowY:"scroll",overflowX:"hidden" }} className="">





              <div className="ps-content">
                <div className="ng-star-inserted">
                    <div className="wrapper">
                      <div className="box box-default box-shadow ng-star-inserted">
                        <div className="box-header">
                          <span className="m-r-10 name">Досье лица</span>

                          <img
                            alt=""
                            aria-haspopup="true"
                            className="pointer ng-star-inserted"
                            src="./icon-context.svg"
                          />
                        </div>
                        <div className="m-b-30 ng-star-inserted">
                          <p className="title">ОБЩАЯ ИНФОРМАЦИЯ</p>
                          <div className="item">
                            <div className="key">Место рождения</div>
                            <div className="value">
                            {isEmpty(state.personData.place_of_birth_region.region_rus)} ОБЛ.,  {isEmpty(state.personData.place_of_birth_city.city_rus)} 
                            </div>
                          </div>
                          <div className="item">
                            <div className="key">Место регистрации</div>
                            <div className="value">
                            {isEmpty(state.personData.place_of_residence_region.region_rus)} ОБЛ.,{isEmpty(state.personData.place_of_residence_city.city_rus)}, {isEmpty(state.personData.place_of_residence_district, "district_rus")},
                            {isEmpty(state.personData.place_of_residence_street_prefix,"street_prefix")} {isEmpty(state.personData.place_of_residence_street, 'street_rus')}, Д. {isEmpty(state.personData.place_of_residence_house)},{isEmpty(state.personData.place_of_residence_apartment)}
                            
                            </div>
                          </div>
                          <div className="item">
                            <div className="key">Место жительства</div>
                            <div className="value">
                            {isEmpty(state.personData.place_of_residence_region.region_rus)} ОБЛ.,  {isEmpty(state.personData.place_of_residence_city.city_rus)}, {isEmpty(state.personData.place_of_residence_district, "district_rus")},
                            {isEmpty(state.personData.place_of_residence_street_prefix,"street_prefix")}  {isEmpty(state.personData.place_of_residence_street, 'street_rus')}, Д. {isEmpty(state.personData.place_of_residence_house)},  {isEmpty(state.personData.place_of_residence_apartment)}
                            
                            </div>
                          </div>
                        </div>
                        <div className="m-b-30 ng-star-inserted">
                          <p className="title">МЕСТО РАБОТЫ / УЧЕБЫ</p>
                          <div className="item">
                            <div className="key">Образование</div>
                            <div className="value">-</div>
                          </div>
                          <div className="item">
                            <div className="key">
                              Наименование юридического лица
                            </div>
                            <div className="value"></div>
                          </div>
                          <div className="item">
                            <div className="key">Должность</div>
                            <div className="value"></div>
                          </div>
                        </div>
                        <div className="ng-star-inserted">
                          <p className="title">Дополнительная информация</p>
                          <div className="item">
                            <div className="key">Рабочий телефон</div>
                            <div className="value"></div>
                          </div>
                          <div className="item">
                            <div className="key">Домашний телефон</div>
                            <div className="value"></div>
                          </div>
                          <div className="item">
                            <div className="key">Мобильный телефон</div>
                           <div className="value">{state.personData.cars[0].phone_number? state.personData.cars[0].phone_number : ""}</div>
                          </div>
                          <div className="item">
                            <div className="key">Адрес электронной почты</div>
                            <div className="value"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {carsList(state.personData.cars)}
                  
                  <mat-menu className="" xposition="before"></mat-menu>
                  <mat-menu
                    xposition="before"
                    className="ng-tns-c29-32"
                  ></mat-menu>
                </div>
              </div>

              <div
                className="ps__rail-x"
                style={{ left: "0px", bottom: "0px" }}
              >
                <div
                  className="ps__thumb-x"
                  tabIndex="0"
                  style={{ left: "0px", width: "0px" }}
                ></div>
              </div>
              <div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
                <div
                  className="ps__thumb-y"
                  tabIndex="0"
                  style={{ top: "0px", height: "0px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </person>
    </div>
  );
};

export default DosiePeople;
