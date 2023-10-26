import "./globalSearch.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function GlobalSearch() {
  let navigate = useNavigate();

  const [activeButton, setActiveButton] = useState("0px");

  const positionActiveButton = ["0px", "105px", "210px", "315px", "490px"];

  return (
    <div class="gai-table search">
      <div class="wrapper">
        <div class="header"></div>
        <div class="body">
          <h4>Глобальный поиск (Досье ФЛ, ЮЛ, ТС)</h4>

          <div class="box box-default box-shadow search-wrapper ng-star-inserted">
            <mat-tab-group
              class="mat-tab-group mat-primary ng-animate-disabled"
              color="primary"
            >
              <mat-tab-header class="mat-tab-header">
                <div
                  aria-hidden="true"
                  class="mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple mat-tab-header-pagination-disabled"
                  mat-ripple=""
                >
                  <div class="mat-tab-header-pagination-chevron"></div>
                </div>
                <div class="mat-tab-label-container">
                  <div
                    class="mat-tab-list"
                    role="tablist"
                    style={{ transform: " translateX(0px)" }}
                  >
                    <div class="mat-tab-labels">
                      <div
                        cdkmonitorelementfocus=""
                        class="mat-tab-label mat-ripple  ng-star-inserted"
                        mat-ripple=""
                        mattablabelwrapper=""
                        role="tab"
                        id="mat-tab-label-0-0"
                        tabIndex="0"
                        aria-posinset="1"
                        aria-setsize="5"
                        aria-controls="mat-tab-content-0-0"
                        aria-selected="true"
                        aria-disabled="false"
                      >
                        <div
                          class="mat-tab-label-content"
                          onClick={() => {
                            setActiveButton(positionActiveButton[0]);
                            navigate("/main/global-search/searchFL");
                          }}
                        >
                          Поиск ФЛ
                        </div>
                      </div>
                      <div
                        cdkmonitorelementfocus=""
                        class="mat-tab-label mat-ripple ng-star-inserted"
                        mat-ripple=""
                        mattablabelwrapper=""
                        role="tab"
                        id="mat-tab-label-0-1"
                        tabIndex="-1"
                        aria-posinset="2"
                        aria-setsize="5"
                        aria-controls="mat-tab-content-0-1"
                        aria-selected="false"
                        aria-disabled="false"
                      >
                        <div
                          class="mat-tab-label-content"
                          onClick={() => {
                            setActiveButton(positionActiveButton[1]);
                            navigate("/main/global-search/searchTC");
                          }}
                        >
                          Поиск ТС
                        </div>
                      </div>
                      <div
                        cdkmonitorelementfocus=""
                        class="mat-tab-label mat-ripple ng-star-inserted"
                        mat-ripple=""
                        mattablabelwrapper=""
                        role="tab"
                        id="mat-tab-label-0-2"
                        tabIndex="-1"
                        aria-posinset="3"
                        aria-setsize="5"
                        aria-controls="mat-tab-content-0-2"
                        aria-selected="false"
                        aria-disabled="false"
                      >
                        <div 
                          class="mat-tab-label-content"
                          // onClick={() => {
                          //   setActiveButton(positionActiveButton[2]);
                          //   navigate("/main/global-search/searchUL");
                          // }}
                        >
                          Поиск ЮЛ
                        </div>
                      </div>
                      <div
                        cdkmonitorelementfocus=""
                        class="mat-tab-label mat-ripple ng-star-inserted"
                        mat-ripple=""
                        mattablabelwrapper=""
                        role="tab"
                        id="mat-tab-label-0-3"
                        tabIndex="-1"
                        aria-posinset="4"
                        aria-setsize="5"
                        aria-controls="mat-tab-content-0-3"
                        aria-selected="false"
                        aria-disabled="false"
                      >
                        <div
                          class="mat-tab-label-content"
                          // onClick={() => {
                          //   setActiveButton(positionActiveButton[3]);
                          //   navigate("/main/global-search/searchViolation");
                          // }}
                        >
                          Поиск нарушения
                        </div>
                      </div>
                      <div
                        cdkmonitorelementfocus=""
                        class="mat-tab-label mat-ripple ng-star-inserted"
                        mat-ripple=""
                        mattablabelwrapper=""
                        role="tab"
                        id="mat-tab-label-0-4"
                        tabIndex="-1"
                        aria-posinset="5"
                        aria-setsize="5"
                        aria-controls="mat-tab-content-0-4"
                        aria-selected="false"
                        aria-disabled="false"
                      >
                        <div
                          class="mat-tab-label-content"
                          // onClick={() => {
                          //   setActiveButton(positionActiveButton[4]);
                          //   navigate("/main/global-search/searchBY");
                          // }}
                        >
                          Поиск по ВУ
                        </div>
                      </div>
                    </div>
                    <mat-ink-bar
                      class="mat-ink-bar"
                      style={{
                        visibility: "visible",
                        left: activeButton,
                        width: "67px",
                      }}
                    ></mat-ink-bar>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  class="mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple mat-tab-header-pagination-disabled"
                  mat-ripple=""
                >
                  <div class="mat-tab-header-pagination-chevron"></div>
                </div>
              </mat-tab-header>
              <Outlet />
            </mat-tab-group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalSearch;
