import search from "../search.gif";
import React from "react";
import { Formik, Field, Form, ErrorMessage, useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { SearchService } from "../../Services/SearchService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";


const MyField = (props) => {
  const {values: {mark} } = useFormikContext();
  const [modelChange,setModelChange] = useState([]);
  const [field, meta] = useField(props);
  

  React.useEffect(() => {
    if (mark  !== ''){
      SearchService.getModel(mark)
      .then((res) => res.json())
      .then((data) => setModelChange(data));
  
    }
    
  }, [mark, props.name]);

  return (
    <>
      <input {...props} {...field } list="model" />
      <datalist id="model">
         {modelChange.map(item =><option value={item.car_model}>{item.car_model}</option> )}
      </datalist>
    </>
  );
};



const SearchTC = () => {
  const navigate = useNavigate();

  const [colors, setColors] = useState([]);
  const [mark, setMark] = useState([]);
  
  const [model, setModel] = useState([]);

  useEffect(() => {
    SearchService.getColors()
      .then((res) => res.json())
      .then((data) => setColors(data));
    SearchService.getMark()
      .then((res) => res.json())
      .then((data) => setMark(data));

  }, []);

  return (
    <div class="mat-tab-body-wrapper">
      <mat-tab-body
        class="mat-tab-body ng-tns-c13-0 mat-tab-body-active ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-0"
        aria-labelledby="mat-tab-label-0-0"
      >
        <div
          class="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <search-person-global _nghost-c6="" class="ng-star-inserted">
            <div class="adm-search">
              <Formik
                initialValues={{
                  gos_number: "",
                  number_of_body: "",
                  mark: "",
                  model: "",
                  color: "",
                  seria_and_number: "",
                  checkbox: false,
                  year: "",
                  type_of_TC: "",
                }}
                validationSchema={Yup.object({
                  gos_number: Yup.string(),
                  number_of_body: Yup.string(),
                  mark: Yup.string(),
                  model: Yup.string(),
                  color: Yup.string(),
                  seria_and_number: Yup.string(),
                  checkbox: Yup.boolean(),
                  year: Yup.string(),
                  type_of_TC: Yup.string(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  SearchService.getCarsList(values)
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.length > 1) {
                        alert(
                          "Найдено более одной записи, измените условия поиска."
                        );
                      } else if (data.length === 1) {
                        console.log(data);
                        navigate("/main/dosieAvto", {
                          replace: true,
                          state: { personData: data[0] },
                        });
                      } else {
                        alert("Не найдено записи, измените условия поиска.");
                      }
                    });
                }}
                render={({ resetForm }) => (
                  <Form
                    class="lwoForm ng-pristine ng-valid ng-star-inserted ng-touched"
                    novalidate=""
                  >
                    <fieldset class="row">
                      <mat-form-field
                        appearance="outline"
                        class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-8 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "32.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-8 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "32.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="gos_number"
                                type="text"
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              formcontrolname="FIO"
                              name="gos_number"
                              value={paramsCar.gos_number}
                              onChange={handleInputChange}
                             
                            /> */}
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-8 ng-star-inserted"
                                  id="mat-form-field-label-7"
                                  for="mat-input-3"
                                  aria-owns="mat-input-3"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Гос. номер
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-8 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                transform: "translateY(0%)",
                                opacity: "1",
                              }}
                            >
                              <ErrorMessage
                                name="gos_number"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>

                      <mat-form-field
                        appearance="outline"
                        class=" mat-form-field ng-tns-c14-5 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-5 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: " 5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "86.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-5 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: " 5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "86.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="number_of_body"
                                type="text"
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="BDATE"
                              name="number_kuzov"
                              value={paramsCar.number_kuzov}
                              onChange={handleInputChange}
                            /> */}
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-5 ng-star-inserted"
                                  id="mat-form-field-label-1"
                                  for="mat-input-0"
                                  aria-owns="mat-input-0"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Номер кузова шасси
                                  </mat-label>
                                </label>
                              </span>
                            </div>

                            <div class="mat-form-field-suffix ng-tns-c14-5 ng-star-inserted">
                              <mat-datepicker-toggle
                                class="mat-datepicker-toggle"
                                matsuffix=""
                                tabIndex="-1"
                              >
                                <button
                                  aria-haspopup="true"
                                  mat-icon-button=""
                                  type="button"
                                  class="mat-icon-button"
                                  aria-label="Open calendar"
                                  tabIndex="-1"
                                >
                                  <span class="mat-button-wrapper">
                                    <svg
                                      class="mat-datepicker-toggle-default-icon ng-star-inserted"
                                      fill="currentColor"
                                      focusable="false"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      width="24px"
                                    >
                                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                                    </svg>
                                  </span>
                                  <div
                                    class="mat-button-ripple mat-ripple mat-button-ripple-round"
                                    matripple=""
                                  ></div>
                                  <div class="mat-button-focus-overlay"></div>
                                </button>
                              </mat-datepicker-toggle>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                transform: "translateY(0%)",
                                opacity: "1",
                              }}
                            >
                              <ErrorMessage
                                name="number_of_body"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                      <mat-datepicker></mat-datepicker>
                      <div
                        class="hints fl-1"
                        style={{
                          padding: "0px 0px 0px 1rem",
                        }}
                      >
                        <p className="f-s-10 m-b-0 ng-star-inserted ">
                          Дополнительные фильтры:
                        </p>
                      </div>
                      <mat-form-field
                        appearance="outline"
                        class="bdate mat-form-field ng-tns-c14-6 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-6 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "83.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-6 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "83.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="mark"
                                type="text"
                                list ="mark"
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"

                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                                                     
                              transform="uppercase"
                              name="brand"
                              value={paramsCar.brand}
                              onChange={handleInputChange}
                              
                            /> */}
                            <datalist id="mark">
                                {mark.map(item =><option value={item.car_mark}>{item.car_mark}</option> )}
                              </datalist>
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-6 ng-star-inserted"
                                  id="mat-form-field-label-3"
                                  for="mat-input-1"
                                  aria-owns="mat-input-1"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Марка
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-6 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                opacity: "1",
                                transform: "translateY(0%)",
                              }}
                            >
                              <ErrorMessage
                                name="brand"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                      <mat-form-field
                        appearance="outline"
                        class="bdate mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <MyField
                                name="model"
                                type="text"
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              
                              
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-7 ng-star-inserted"
                                  id="mat-form-field-label-5"
                                  for="mat-input-2"
                                  aria-owns="mat-input-2"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Модель
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                opacity: "1",
                                transform: "translateY(0%)",
                              }}
                            >
                              <ErrorMessage
                                name="model"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                      <mat-form-field
                        appearance="outline"
                        class="mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="color"
                                type="text"
                                list="color"
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="ADDRESS"
                              name="color_car"
                              value={paramsCar.color_car}
                              onChange={handleInputChange}
                            /> */}
                      
                              <datalist id="color">
                                {colors.map(item =><option value={item.color}>{item.color}</option> )}
                              </datalist>
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-7 ng-star-inserted"
                                  id="mat-form-field-label-5"
                                  for="mat-input-2"
                                  aria-owns="mat-input-2"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Цвет ТС
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                opacity: "1",
                                transform: "translateY(0%)",
                              }}
                            >
                              <ErrorMessage
                                name="color"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                    </fieldset>
                    <fieldset class="row">
                      <mat-form-field
                        appearance="outline"
                        class="mat-form-field ng-tns-c14-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-valid ng-star-inserted ng-touched"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-8 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "32.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-8 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49716px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "32.5px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="seria_and_number"
                                type="text"
                                disabled
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              formcontrolname="FIO"
                              name="seria_and_number_SR"
                              value={paramsCar.seria_and_number_SR}
                              onChange={handleInputChange}
                            /> */}
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-8 ng-star-inserted"
                                  id="mat-form-field-label-7"
                                  for="mat-input-3"
                                  aria-owns="mat-input-3"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Серия и номер СР
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-8 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                transform: "translateY(0%)",
                                opacity: "1",
                              }}
                            >
                              <ErrorMessage
                                name="seria_and_number"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>

                      <mat-checkbox
                        class="fio-split mat-checkbox mat-primary ng-untouched ng-pristine ng-valid"
                        color="primary"
                        formcontrolname="FIO_SPLIT"
                        id="mat-checkbox-1"
                        style={{ margin: "15px" }}
                      >
                        <label
                          class="mat-checkbox-layout"
                          for="mat-checkbox-1-input"
                        >
                          <div class="mat-checkbox-inner-container">
                            <input
                              class="mat-checkbox-input cdk-visually-hidden"
                              type="checkbox"
                              id="mat-checkbox-1-input"
                              name="isTake"
                            />
                            <div
                              class="mat-checkbox-ripple mat-ripple"
                              matripple=""
                            >
                              <div class="mat-ripple-element mat-checkbox-persistent-ripple"></div>
                            </div>
                            <div class="mat-checkbox-frame"></div>
                            <div class="mat-checkbox-background">
                              <svg
                                class="mat-checkbox-checkmark"
                                focusable="false"
                                version="1.1"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  class="mat-checkbox-checkmark-path"
                                  d="M4.1,12.7 9,17.6 20.3,6.3"
                                  fill="none"
                                  stroke="white"
                                ></path>
                              </svg>
                              <div class="mat-checkbox-mixedmark"></div>
                            </div>
                          </div>
                          <span class="mat-checkbox-label">
                            <span style={{ display: "none" }}>&nbsp;</span>
                            Только на учете
                          </span>
                        </label>
                      </mat-checkbox>

                      <div class="mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"></div>
                      <mat-form-field
                        appearance="outline"
                        class="mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="year"
                                type="text"
                                disabled
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="ADDRESS"
                              name="year_car"
                              value={paramsCar.year_car}
                              onChange={handleInputChange}
                              
                            /> */}
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-7 ng-star-inserted"
                                  id="mat-form-field-label-5"
                                  for="mat-input-2"
                                  aria-owns="mat-input-2"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Год выпуска
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                opacity: "1",
                                transform: "translateY(0%)",
                              }}
                            >
                              <ErrorMessage
                                name="year"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                      <mat-form-field
                        appearance="outline"
                        class="mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid"
                        floatlabel="always"
                      >
                        <div class="mat-form-field-wrapper">
                          <div class="mat-form-field-flex">
                            <div class="mat-form-field-outline ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>
                            <div class="mat-form-field-outline mat-form-field-outline-thick ng-tns-c14-7 ng-star-inserted">
                              <div
                                class="mat-form-field-outline-start"
                                style={{ width: "5.49713px" }}
                              ></div>
                              <div
                                class="mat-form-field-outline-gap"
                                style={{ width: "40px" }}
                              ></div>
                              <div class="mat-form-field-outline-end"></div>
                            </div>

                            <div class="mat-form-field-infix">
                              <Field
                                name="type_of_TC"
                                type="text"
                                disabled
                                className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                              />
                              {/* <input
                              class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"
                              formcontrolname="ADDRESS"
                              name="type_of_car"
                              value={paramsCar.type_of_car}
                              onChange={handleInputChange}
                            /> */}
                              <span class="mat-form-field-label-wrapper">
                                <label
                                  class="mat-form-field-label ng-tns-c14-7 ng-star-inserted"
                                  id="mat-form-field-label-5"
                                  for="mat-input-2"
                                  aria-owns="mat-input-2"
                                >
                                  <mat-label class="ng-star-inserted">
                                    Тип ТС
                                  </mat-label>
                                </label>
                              </span>
                            </div>
                          </div>

                          <div class="mat-form-field-subscript-wrapper">
                            <div
                              class="mat-form-field-hint-wrapper ng-tns-c14-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                              style={{
                                opacity: "1",
                                transform: "translateY(0%)",
                              }}
                            >
                              <ErrorMessage
                                name="type_of_TC"
                                component="div"
                                className="error_messange"
                              />
                              <div class="mat-form-field-hint-spacer"></div>
                            </div>
                          </div>
                        </div>
                      </mat-form-field>
                      <div class="mat-form-field ng-tns-c14-7 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-valid">
                        <button
                          class="btn btn-primary"
                          style={{ margin: "15px" }}
                          type="reset"
                          onClick={() => resetForm()}
                        >
                          Очистить поля
                        </button>
                      </div>
                    </fieldset>

                    <div class="hints">
                      <div class="row">
                        <div class="col-6">
                          <p class="f-s-14 m-b-0 ng-star-inserted">
                            Для поиска введите: гос. номер или номер кузова
                            шасси
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="buttons m-b-20 "
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      <div class="row">
                        <div class="col-6 fl bases ">
                          <div class="p">База данных «АИС-ГАИ»</div>
                          <button
                            class="f-s-13 f-w-700 ucase m-l-15 mat-button mat-primary"
                            color="primary"
                            type="submit"
                          >
                            <span class="mat-button-wrapper">
                              <img
                                class="mat-icon material-icons mat-icon-no-color"
                                role="img"
                                aria-hidden="true"
                                src={search}
                              />
                              Выполнить поиск
                            </span>
                            <div
                              class="mat-button-ripple mat-ripple"
                              matripple=""
                            ></div>
                            <div class="mat-button-focus-overlay"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              />

              <div class="fl">
                <div class="col-6"></div>
                <div class="col-6 p-l-0"></div>
              </div>
            </div>
          </search-person-global>
        </div>
      </mat-tab-body>
      <mat-tab-body
        class="mat-tab-body ng-tns-c13-1 ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-1"
        aria-labelledby="mat-tab-label-0-1"
      >
        <div
          class="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{
            transform: "translate3d(100%, 0px, 0px)",
            min_height: "1px",
          }}
        ></div>
      </mat-tab-body>
      <mat-tab-body
        class="mat-tab-body ng-tns-c13-2 ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-2"
        aria-labelledby="mat-tab-label-0-2"
      >
        <div
          class="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{
            transform: "translate3d(100%, 0px, 0px)",
            min_height: "1px",
          }}
        ></div>
      </mat-tab-body>
      <mat-tab-body
        class="mat-tab-body ng-tns-c13-3 ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-3"
        aria-labelledby="mat-tab-label-0-3"
      >
        <div
          class="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{
            transform: "translate3d(100%, 0px, 0px)",
            min_height: "1px",
          }}
        ></div>
      </mat-tab-body>
      <mat-tab-body
        class="mat-tab-body ng-tns-c13-4 ng-star-inserted"
        role="tabpanel"
        id="mat-tab-content-0-4"
        aria-labelledby="mat-tab-label-0-4"
      >
        <div
          class="mat-tab-body-content ng-trigger ng-trigger-translateTab"
          style={{
            transform: "translate3d(100%, 0px, 0px)",
            min_height: "1px",
          }}
        ></div>
      </mat-tab-body>
    </div>
  );
};

export default SearchTC;
