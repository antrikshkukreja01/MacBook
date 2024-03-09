import React from "react";

const CuetPrepration = () => {
  return (
    <>
      <section className="py-5">
        <div className="container my-4">
          <div className="outer-border">
            <h2 className="ff_space fs-50 fw-700 text-Primary mt-3 mb-0 text-center">
              CUET Preparation program
            </h2>
            <p className="fw-500 ff_inter mb-1 mt-2 text-center fs-35 text-lightgray">
              Get started by simply selecting your target year and the choice of
              program
            </p>
            <div className="row my-4 ">
              <div className=" col-lg-6 col-xxl-4 mb-4 mb-xxl-0 ">
                <div className="box">
                  <p className="heading-text ff_inter fw-500 text-black fs-22 ">
                    I am appearing/ appeared for CUET in{" "}
                  </p>
                  <div className="ps-40">
                    <form action="#">
                      <p>
                        <input name="group1" type="radio" id="test1" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test1"
                        >
                          2024
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test2" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test2"
                        >
                          {" "}
                          2025
                        </label>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-xxl-4 mb-4 mb-xxl-0">
                <div className="box">
                  <p className="heading-text ff_inter fw-500 text-black fs-22 ">
                    I want this program to be
                  </p>
                  <div className="ps-40">
                    <form action="#">
                      <p>
                        <input name="group1" type="radio" id="test1" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test1"
                        >
                          Live online
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test2" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test2"
                        >
                          {" "}
                          Classroom- Offline
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test3" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test3"
                        >
                          {" "}
                          Self paced program
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test4" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test4"
                        >
                          {" "}
                          Test Series
                        </label>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-xxl-4">
                <div className="box">
                  <p className="heading-text ff_inter fw-500 text-black fs-22 ">
                    I am keen on
                  </p>
                  <div className="ps-40">
                    <form action="#">
                      <p>
                        <input name="group1" type="radio" id="test1" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test1"
                        >
                          Humanities
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test2" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test2"
                        >
                          {" "}
                          Commerce
                        </label>
                      </p>
                      <p>
                        <input name="group1" type="radio" id="test3" />
                        <label
                          className="mb-0 ms-2 ff_inter fw-500 text-black fs-15"
                          for="test3"
                        >
                          {" "}
                          Sciences
                        </label>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#" className="btn_view ">
                View Program
              </a>
            </div>
            {/* Subjects covered */}
            <div className="mt-5">
              <h2 className=" ff_space fw-700 fs-50 text-black text-center mb-4">
                Subjects{" "}
                <span className=" ff_caladia text-orange">covered</span>
              </h2>
              <div className="d-flex justify-content-between flex-column flex-md-row ">
                <div className="w_20 mx-2">
                  <p className=" fw-500 text-black ff_inter fs-18 mb-2">
                    Section 1: Language
                  </p>
                  <div className="box2">
                    <div className=" d-flex align-items-center gap-1">
                      <span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                            fill="#F2994A"
                          />
                        </svg>
                      </span>
                      <p className="mb-0 text-black ff_inter fw-500 fs-15">
                        English
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w_60  d-inline-xxl px-3 ">
                  <p className=" fw-500 text-black ff_inter fs-18 mb-2 text-center">
                    Section 2: Domain Subjects
                  </p>
                  <div className="row ">
                    <div className=" col-lg-4">
                      <div className="box_2">
                        <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                          Commerce
                        </p>
                        <div className="ps-40">
                          <div className=" d-flex align-items-center gap-1 mb-2 ">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Accountancy
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Economics
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Business Studies
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Maths/ Applied Maths
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box_2">
                        <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                          Humanities
                        </p>
                        <div className="ps-40">
                          <div className=" d-flex align-items-center gap-1 mb-2 ">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Political Science
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              History
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Psychology
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Sociology
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Geography
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="box_2">
                        <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                          Sciences
                        </p>
                        <div className="ps-40">
                          <div className=" d-flex align-items-center gap-1 mb-2 ">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Physics
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Chemistry
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Biology
                            </p>
                          </div>
                          <div className=" d-flex align-items-center gap-1 mt-1">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                  fill="#F2994A"
                                />
                              </svg>
                            </span>
                            <p className="mb-0 text-black ff_inter fw-500 fs-15">
                              Maths
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w_20 mx-2 mt-4 mt-md-0">
                  <p className=" fw-500 text-black ff_inter fs-18 mb-2">
                    Section 3: General Test
                  </p>
                  <div className="box2">
                    <div className=" d-flex align-items-center gap-1">
                      <span>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                            fill="#F2994A"
                          />
                        </svg>
                      </span>
                      <p className="mb-0 text-black ff_inter fw-500 fs-15">
                        General test
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-4 d-none-xxl ">
                <p className=" fw-500 text-black ff_inter fs-18 mb-2 text-center">
                  Section 2: Domain Subjects
                </p>
                <div className="row justify-content-center">
                  <div className=" col-md-6 col-lg-4 mt-4">
                    <div className="box_2">
                      <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                        Commerce
                      </p>
                      <div className="ps-40">
                        <div className=" d-flex align-items-center gap-1 mb-2 ">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Accountancy
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Economics
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Business Studies
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Maths/ Applied Maths
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-6 col-lg-4 mt-4">
                    <div className="box_2">
                      <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                        Humanities
                      </p>
                      <div className="ps-40">
                        <div className=" d-flex align-items-center gap-1 mb-2 ">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Political Science
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            History
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Psychology
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Sociology
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Geography
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-6 col-lg-4 mt-4">
                    <div className="box_2">
                      <p className="heading-text-2 ff_inter fw-600 text-black fs-15 ">
                        Sciences
                      </p>
                      <div className="ps-40">
                        <div className=" d-flex align-items-center gap-1 mb-2 ">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Physics
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Chemistry
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mb-2 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Biology
                          </p>
                        </div>
                        <div className=" d-flex align-items-center gap-1 mt-1">
                          <span>
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.54052 13.9785L3.62177 10.0598L4.74118 8.94036L7.5417 11.7377L7.54052 11.7389L14.2578 5.02161L15.3772 6.14102L8.65993 12.8591L7.54131 13.9777L7.54052 13.9785Z"
                                fill="#F2994A"
                              />
                            </svg>
                          </span>
                          <p className="mb-0 text-black ff_inter fw-500 fs-15">
                            Maths
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CuetPrepration;
