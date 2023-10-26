import search from "../search.gif";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SearchService } from "../../Services/SearchService";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFL = () => {
  const navigate = useNavigate();
  return (
    <div className="mat-tab-body-wrapper">
      <mat-tab-body
        className="mat-tab-body ng-tns-c13-0 mat-tab-body-active ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-0"
        aria-labelledby="mat-tab-label-0-0"
      >
        <div
          className="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <search-person-global _nghost-c6="" className="ng-star-inserted">
            <div className="adm-search">
              <Formik
                initialValues={{
                  fio: "",
                  date_of_birth: "",
                  personal_number: "",
                  addres: "",
                  fio_checkbox: false,
                }}
                validationSchema={Yup.object({
                  fio: Yup.string(),
                  date_of_birth: Yup.date(),
                  personal_number: Yup.string().min(
                    14,
                    "Минимальное количество 14 символов"
                  ),
                  addres: Yup.string(),
                  fio_checkbox: Yup.boolean(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  SearchService.getPassportsList(values)
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.length > 1) {
                        alert(
                          "Найдено более одной записи, измените условия поиска."
                        );
                      } else if (data.length == 1 && data[0].cars.length > 0) {
                        navigate("/main/dosiePeople", {
                          replace: true,
                          state: { personData: data[0] },
                        });
                      } else {
                        alert("Не найдено записи, измените условия поиска.");
                      }
                    });
                  // console.log('result', result)
                  // navigate("/main/dosiePeople", { replace: true, state: { personData: result }})

                  // setTimeout(()=>{
                  //  const result = await SearchService.getPassportsList(values);
                  //   alert(JSON.stringify(values,null,2));
                  //   setSubmitting(false);
                  // },400);
                }}
              >
                <Form
                  className="lwoForm ng-pristine ng-valid ng-star-inserted ng-touched"
                  novalidate=""
                >
                  <fieldset className="row">
                    <mat-form-field
                      appearance="outline"
                      class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                      floatlabel="always"
                    >
                      <div className="mat-form-field-wrapper">
                        <div className="mat-form-field-flex">
                          <div className="mat-form-field-outline ng-tns-c14-8 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "32.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>
                          <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-8 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "32.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>

                          <div className="mat-form-field-infix">
                            <Field
                              name="fio"
                              type="text"
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                            />
                            {/* <input
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              value={this.state.fio}
                              onChange={this.handleChange}
                              id="mat-input-3"
                              
                            /> */}
                            <span className="mat-form-field-label-wrapper">
                              <label
                                className="mat-form-field-label ng-tns-c14-8 ng-star-inserted"
                                id="mat-form-field-label-7"
                                for="mat-input-3"
                                aria-owns="mat-input-3"
                              >
                                <mat-label class="ng-star-inserted">
                                  ФИО
                                </mat-label>
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="mat-form-field-subscript-wrapper">
                          <div
                            className="mat-form-field-hint-wrapper ng-tns-c14-8 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{
                              transform: "translateY(0%)",
                              opacity: "1",
                            }}
                          >
                            <ErrorMessage
                              name="fio"
                              component="div"
                              className="error_messange"
                            />
                            <div className="mat-form-field-hint-spacer"></div>
                          </div>
                        </div>
                      </div>
                    </mat-form-field>
                    <mat-form-field
                      appearance="outline"
                      class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                      floatlabel="always"
                    >
                      <div className="mat-form-field-wrapper">
                        <div className="mat-form-field-flex">
                          <div className="mat-form-field-outline ng-tns-c14-5 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: " 5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "86.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>
                          <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-5 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: " 5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "86.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>

                          <div className="mat-form-field-infix">
                            <Field
                              name="date_of_birth"
                              type="date"
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                            />
                            {/* <input
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="BDATE"
                              matinput="" 
                              value={this.state.date_of_birth}
                              aria-haspopup="true"
                              id="mat-input-0"
                              aria-invalid="false"
                              aria-required="false"
                            /> */}
                            <span className="mat-form-field-label-wrapper">
                              <label
                                className="mat-form-field-label ng-tns-c14-5 ng-star-inserted"
                                id="mat-form-field-label-1"
                                for="mat-input-0"
                                aria-owns="mat-input-0"
                              >
                                <mat-label className="ng-star-inserted">
                                  Дата рождения
                                </mat-label>
                              </label>
                            </span>
                          </div>

                          <div className="mat-form-field-suffix ng-tns-c14-5 ng-star-inserted"></div>
                        </div>

                        <div className="mat-form-field-subscript-wrapper">
                          <div
                            className="mat-form-field-hint-wrapper ng-tns-c14-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{
                              transform: "translateY(0%)",
                              opacity: "1",
                            }}
                          >
                            <ErrorMessage
                              name="date_of_birth"
                              component="div"
                              className="error_messange"
                            />
                            <div className="mat-form-field-hint-spacer"></div>
                          </div>
                        </div>
                      </div>
                    </mat-form-field>

                    <mat-form-field
                      appearance="outline"
                      class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                      floatlabel="always"
                    >
                      <div className="mat-form-field-wrapper">
                        <div className="mat-form-field-flex">
                          <div className="mat-form-field-outline ng-tns-c14-6 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "83.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>
                          <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-6 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49716px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "83.5px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>

                          <div className="mat-form-field-infix">
                            <Field
                              name="personal_number"
                              type="text"
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                            />
                            {/* <input
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="IDENTIF"
                              matinput=""
                              transform="uppercase"
                              value={this.state.number}
                              id="mat-input-1"
                              aria-invalid="false"
                              aria-required="false"
                            /> */}
                            <span className="mat-form-field-label-wrapper">
                              <label
                                className="mat-form-field-label ng-tns-c14-6 ng-star-inserted"
                                id="mat-form-field-label-3"
                                for="mat-input-1"
                                aria-owns="mat-input-1"
                              >
                                <mat-label className="ng-star-inserted">
                                  Личный номер
                                </mat-label>
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="mat-form-field-subscript-wrapper">
                          <div
                            className="mat-form-field-hint-wrapper ng-tns-c14-6 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{
                              opacity: "1",
                              transform: "translateY(0%)",
                            }}
                          >
                            <ErrorMessage
                              name="personal_number"
                              component="div"
                              className="error_messange"
                            />
                            <div className="mat-form-field-hint-spacer"></div>
                          </div>
                        </div>
                      </div>
                    </mat-form-field>
                    <mat-form-field
                      appearance="outline"
                      class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                      floatlabel="always"
                    >
                      <div className="mat-form-field-wrapper">
                        <div className="mat-form-field-flex">
                          <div className="mat-form-field-outline ng-tns-c14-7 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49713px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "40px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>
                          <div className="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-7 ng-star-inserted">
                            <div
                              className="mat-form-field-outline-start"
                              style={{ width: "5.49713px" }}
                            ></div>
                            <div
                              className="mat-form-field-outline-gap"
                              style={{ width: "40px" }}
                            ></div>
                            <div className="mat-form-field-outline-end"></div>
                          </div>

                          <div className="mat-form-field-infix">
                            <Field
                              name="addres"
                              type="text"
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                            />
                            {/* <input
                              className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="ADDRESS"
                              matinput=""
                              id="mat-input-2"
                              aria-invalid="false"
                              aria-required="false"
                            /> */}
                            <span className="mat-form-field-label-wrapper">
                              <label
                                className="mat-form-field-label ng-tns-c14-7 ng-star-inserted"
                                id="mat-form-field-label-5"
                                for="mat-input-2"
                                aria-owns="mat-input-2"
                              >
                                <mat-label className="ng-star-inserted">
                                  Адрес
                                </mat-label>
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="mat-form-field-subscript-wrapper">
                          <div
                            className="mat-form-field-hint-wrapper ng-tns-c14-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{
                              opacity: "1",
                              transform: "translateY(0%)",
                            }}
                          >
                            <ErrorMessage
                              name="addres"
                              component="div"
                              className="error_messange"
                            />
                            <div className="mat-form-field-hint-spacer"></div>
                          </div>
                        </div>
                      </div>
                    </mat-form-field>
                  </fieldset>

                  <div className="row m-b-10 col-12 ">
                    <mat-checkbox
                      className="fio-split mat-checkbox mat-primary ng-untouched ng-pristine ng-valid"
                      color="primary"
                      formcontrolname="FIO_SPLIT"
                      id="mat-checkbox-1"
                    >
                      <label
                        className="mat-checkbox-layout"
                        for="mat-checkbox-1-input"
                      >
                        <Field
                          type="checkbox"
                          name="fio_checkbox"
                          value="Three"
                        />

                        <span className="mat-checkbox-label">
                          <span style={{ display: "none" }}>&nbsp;</span>
                          ФИО раздельно
                        </span>
                      </label>
                    </mat-checkbox>
                  </div>
                  <div className="hints">
                    <div className="row">
                      <div className="col-6">
                        <p className="f-s-14 m-b-0 ng-star-inserted">
                          Для поиска используйте: связку полей ФИО и дата
                          рождения и/или адрес, личный номер
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="buttons m-b-20 "
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <div className="row">
                      <div className="col-6 fl bases ">
                        <div className="p">База данных «АИС-ГАИ»</div>
                        <button
                          className="f-s-13 f-w-700 ucase m-l-15 mat-button mat-primary"
                          color="primary"
                          mat-button=""
                          type="submit"
                        >
                          <span className="mat-button-wrapper">
                            <img
                              className="mat-icon material-icons mat-icon-no-color"
                              role="img"
                              src={search}
                            />
                            Выполнить поиск
                          </span>
                          <div
                            classNameName="mat-button-ripple mat-ripple"
                            matripple=""
                          ></div>
                          <div classNameName="mat-button-focus-overlay"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
              <div classNameName="fl">
                <div classNameName="col-6"></div>
                <div classNameName="col-6 p-l-0"></div>
              </div>
            </div>
          </search-person-global>
        </div>
      </mat-tab-body>
    </div>
  );
};

export default SearchFL;
