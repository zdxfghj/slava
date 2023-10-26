import search from "../search.gif";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchUL = () =>{
  let navigate = useNavigate();
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
                initialValues={{name:"", upn:""}}
                validationSchema={Yup.object({
                        name: Yup.string()
                                .min(3,"Минимальное количество 3 символов"),
                        upn: Yup.string()
                                .min(9,"Минимальное количество 9 символов")     
                })}
                onSubmit={(values,{setSubmitting })=>{
                  setTimeout(()=>{
                    navigate("/main/global-search/searchUL");
                    alert(JSON.stringify(values,null,2));
                    setSubmitting(false);
                  },400);
                }}
              >
                {formik=>(
                    <Form
                    className="lwoForm ng-pristine ng-valid ng-star-inserted ng-touched"
                    onSubmit={formik.handleSubmit}
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
                              <Field name="name" type="text" className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched" />
                                {/* <input
                                  class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-touched"
                                  formcontrolname="FIO"
                                 
                                /> */}
                               
                                <span class="mat-form-field-label-wrapper">
                                  <label
                                    class="mat-form-field-label ng-tns-c14-8 ng-star-inserted"
                                    id="mat-form-field-label-7"
                                    for="mat-input-3"
                                    aria-owns="mat-input-3"
                                  >
                                    <mat-label class="ng-star-inserted">
                                      Наименование
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
                              > <ErrorMessage name="name"  component="div" className="error_messange"/>
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
                                <Field name="upn" type="text" className="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-valid"/>
                                {/* <input
                                  class=""
                                  formcontrolname="ADDRESS"
                                  value={paramsUL.UPN}
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
                                      УПН
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
                                 <ErrorMessage name="upn" component="div" className="error_messange" />
                                <div class="mat-form-field-hint-spacer"></div>
                              </div>
                            </div>
                          </div>
                         
                        </mat-form-field>
                      </fieldset>
                    
    
                    <div class="hints">
                      <div class="row">
                        <div class="col-6">
                          <p class="f-s-14 m-b-0 ng-star-inserted">
                            Для поиска введите наименование и/или УПН
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="buttons m-b-20 "
                      style={{ padding: "0px", margin: "0px" }}
                    >
                      <div class="row">
                        <div class="col-6 fl bases">
                          <div class="p">База данных «АИС-ГАИ»</div>
                          <button
                            class="f-s-13 f-w-700 ucase m-l-15 mat-button mat-primary"
                            color="primary"
                            // onClick={handleSubmit}
                            type="submit"
                            
                          >
                            <span class="mat-button-wrapper">
                              <img
                                class="mat-icon material-icons mat-icon-no-color"
                                src={search}
                                alt=""
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
              </Formik>
              
            </div>
          </search-person-global>
        </div>
      </mat-tab-body>
    </div>
  );
}
export default SearchUL;
