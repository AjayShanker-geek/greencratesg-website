import { useColorMode } from "@docusaurus/theme-common";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import React from "react";

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    if (colorMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [colorMode]);

  // function Header() {
  //   return (
  //     <Hero
  //       id="hero"
  //       title={
  //         <>
  //           <DocSearchLogo width="100%" />
  //           <span className="hero-title text-3xl leading-9 font-extrabold md:text-3xl lg:text-3xl md:leading-10 max-w-xxs inline-block">
  //             Free Algolia Search For Developer Docs
  //           </span>
  //         </>
  //       }
  //       background="curves"
  //       cta={[
  //         <Button
  //           key="get-started"
  //           href={withBaseUrl('docs/what-is-docsearch')}
  //         >
  //           Get started
  //         </Button>,
  //         <Button
  //           key="apply"
  //           href={withBaseUrl('apply')}
  //           background="blue"
  //           color="white"
  //           className="apply-button"
  //         >
  //           Apply
  //         </Button>,
  //       ]}
  //     />
  //   );
  // }

  function Description() {
    return (
      <>
        {/* Description */}
        <div className="py-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                🌱 Hydroponic System made by NUS students
              </h3>
              {/* <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
                coming soon...
              </p> */}
            </div>
            <div className="pt-2 items-center justify-center flex">
              <img
                className="w-full max-w-fullxl image-rendering-pixel"
                src={withBaseUrl("img/poster.png")}
                alt="preview"
              />
            </div>

            <div className="pt-16">
              <ul className="lg:grid lg:grid-cols-3 lg:col-gap-8 lg:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="search w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Made for Developer and Innovators
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Welcome students and engineers that would like to learn
                        more about hydroponic system and contribute to the
                        project.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="user-group w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Open Source
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        We are open source and welcome contributions from the
                        community.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="device-mobile w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Automation & Cloud Logging
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Automating the system with flexibility.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Powered by Algolia */}
        <div className="py-16 bg-green-800 overflow-hidden lg:py-24">
          <div className="text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-4xl md:leading-10">
              The Problem
            </h3>
          </div>
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center">
                <img
                  className=" relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(`img/90_10.png`)}
                  alt="iphone preview"
                />
              </div>
              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chip w-6 h-6"
                          >
                            {/* <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            ></path> */}
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        {/* <h5 className="text-lg leading-6 font-medium text-white">
                          Raspiberry Pi 4 & Arduino Mega
                        </h5> */}
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          In Singapore, our food supply is heavily
                          import-dependent, with more than 90% of our food
                          sourced overseas.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chat w-6 h-6"
                          >
                            {/* <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            ></path> */}
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        {/* <h5 className="text-lg leading-6 font-medium text-white">
                          Notificatons, Live Sensor Data and Wiki tips
                        </h5> */}
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          This makes us extremely vulnerable in terms of food
                          security as international crises can cause food supply
                          chain disruptions and cripple our food supply.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className=" w-6 h-6"
                          >
                            {/* <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M 6 3 C 4.2777778 3 2.6835938 3.5507812 2.6835938 3.5507812 L 1.1894531 4.0488281 L 2.2753906 5.1894531 C 2.9451269 5.8924545 3.3208957 7.1134803 3.8164062 8.3339844 C 4.0641616 8.9442364 4.3478147 9.5640738 4.8515625 10.091797 C 5.3553103 10.61952 6.1319495 10.99459 6.9960938 10.998047 C 7.5820856 11.000347 7.9923791 10.809171 8.4472656 10.582031 C 8.7722773 10.419742 9.0771741 10.215352 9.3652344 9.9863281 C 10.244277 10.558845 11 11.12229 11 13 L 5 13 L 5 15 L 6 15 L 6 15.099609 L 6.859375 19.392578 C 7.0457293 20.320385 7.8737108 21 8.8203125 21 L 15.179688 21 C 16.126289 21 16.954271 20.320385 17.140625 19.392578 L 18 15.099609 L 18 15 L 19 15 L 19 13 L 13 13 C 13 11.789345 13.888193 10.915808 14.773438 10.101562 C 15.021665 10.282631 15.280773 10.446232 15.552734 10.582031 C 16.007621 10.809171 16.417914 11.000391 17.003906 10.998047 C 17.86805 10.994547 18.64469 10.61952 19.148438 10.091797 C 19.652185 9.5640738 19.935838 8.9442364 20.183594 8.3339844 C 20.679104 7.1134803 21.054873 5.8924545 21.724609 5.1894531 L 22.810547 4.0488281 L 21.316406 3.5507812 C 21.316406 3.5507812 19.722222 3 18 3 C 16.833333 3 15.658659 3.2757379 14.695312 3.9179688 C 13.731967 4.5601996 13 5.6666667 13 7 C 13 7.6170652 13.172258 8.1318553 13.404297 8.5605469 C 12.99348 8.9175351 12.521324 9.3829977 12.09375 9.9550781 C 11.645945 9.2842628 11.117427 8.7973927 10.654297 8.4433594 C 10.854946 8.0380784 11 7.5623648 11 7 C 11 5.6666667 10.268034 4.5601996 9.3046875 3.9179688 C 8.3413413 3.2757379 7.1666667 3 6 3 z"
                            ></path> */}
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        {/* <h5 className="text-lg leading-6 font-medium text-white">
                          Detailed and straightforward analytics
                        </h5> */}
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Hence, land-scarce Singapore has to find innovative
                          and sustainable new ways to grow our own food so as to
                          strengthen our food resilience and appeal to future
                          generations of food producers in Singapore...
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="relative">
                <ul className="mt-10"> */}
              {/* <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className=" w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M 6 3 C 4.2777778 3 2.6835938 3.5507812 2.6835938 3.5507812 L 1.1894531 4.0488281 L 2.2753906 5.1894531 C 2.9451269 5.8924545 3.3208957 7.1134803 3.8164062 8.3339844 C 4.0641616 8.9442364 4.3478147 9.5640738 4.8515625 10.091797 C 5.3553103 10.61952 6.1319495 10.99459 6.9960938 10.998047 C 7.5820856 11.000347 7.9923791 10.809171 8.4472656 10.582031 C 8.7722773 10.419742 9.0771741 10.215352 9.3652344 9.9863281 C 10.244277 10.558845 11 11.12229 11 13 L 5 13 L 5 15 L 6 15 L 6 15.099609 L 6.859375 19.392578 C 7.0457293 20.320385 7.8737108 21 8.8203125 21 L 15.179688 21 C 16.126289 21 16.954271 20.320385 17.140625 19.392578 L 18 15.099609 L 18 15 L 19 15 L 19 13 L 13 13 C 13 11.789345 13.888193 10.915808 14.773438 10.101562 C 15.021665 10.282631 15.280773 10.446232 15.552734 10.582031 C 16.007621 10.809171 16.417914 11.000391 17.003906 10.998047 C 17.86805 10.994547 18.64469 10.61952 19.148438 10.091797 C 19.652185 9.5640738 19.935838 8.9442364 20.183594 8.3339844 C 20.679104 7.1134803 21.054873 5.8924545 21.724609 5.1894531 L 22.810547 4.0488281 L 21.316406 3.5507812 C 21.316406 3.5507812 19.722222 3 18 3 C 16.833333 3 15.658659 3.2757379 14.695312 3.9179688 C 13.731967 4.5601996 13 5.6666667 13 7 C 13 7.6170652 13.172258 8.1318553 13.404297 8.5605469 C 12.99348 8.9175351 12.521324 9.3829977 12.09375 9.9550781 C 11.645945 9.2842628 11.117427 8.7973927 10.654297 8.4433594 C 10.854946 8.0380784 11 7.5623648 11 7 C 11 5.6666667 10.268034 4.5601996 9.3046875 3.9179688 C 8.3413413 3.2757379 7.1666667 3 6 3 z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        {/* <h5 className="text-lg leading-6 font-medium text-white">
                          Detailed and straightforward analytics
                        </h5> }
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Hence, land-scarce Singapore has to find innovative
                          and sustainable new ways to grow our own food so as to
                          strengthen our food resilience and appeal to future
                          generations of food producers in Singapore...
                        </p>
                      </div>
                    </div>
                  </li> */}
              {/* <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chart-bar w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          GSM, Firebase and MQTT
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Algolia knows what your users mean to search for right
                          out-of-the-box, so they won't be spending time
                          correcting typos.
                        </p>
                      </div>
                    </div>
                  </li> */}
              {/* </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Anatomy of DocSearch */}
        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                  Our Solution
                </h4>
                <p className="mt-3 text-lg leading-7 text-description">
                  Hydroponics is an <b>alternative way</b> to grow plants using
                  <b> nutrient-rich solution</b> as a substitute for soil.
                </p>
                <p className="mt-3 text-lg leading-7 text-description">
                  This method of farming shortens the growth process of plants,
                  requires less water and allows for the convenience of
                  automation through minute control over environmental
                  conditions like temperature, mitigating the risk factors
                  presented in traditional outdoors farming such as extreme
                  weathers, and pests reducing crop yields.
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="sparkles w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                          Social Farming
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          Farm with your local community and bond over a shared
                          experiences on the GreenCrateSG App! Learn about
                          plants, contribute to the knowledge base and grow the
                          future of farming.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="menu-alt2 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                          10x more yield PER unit area
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          Higher growth efficiency of vertical setup within the
                          same amount of space compared to traditional method
                          makes hydroponics well-suited as a food resilience
                          solution to Singapore's geographical limitations.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="menu-alt2 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                          Easy Farming FOR ALL
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          Hydroponics has been shown to significantly decrease
                          the amount of labor needed when compared to
                          traditional farming methods. With the addition of IoT,
                          this can be particularly attractive to the busy
                          Singaporean population as an accessible and non
                          time-consuming way to engage with urban farming.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center">
                <img
                  className=" relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(`img/system_info.png`)}
                  alt="iphone preview"
                />
              </div>
            </div>
            <div>
              <div>
                {/* <div className="pt-2 items-center justify-center flex"> */}
                  <img
                    className="w-full max-w-fullxl image-rendering-pixel"
                    src={withBaseUrl("img/growth.png")}
                    alt="preview"
                  />
                {/* </div> */}
              </div>
            </div>
            <div className="relative mt-12 md:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="lightning-bolt w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            Automation
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            Fully automated system that allows you to monitor
                            and control your system remotely.
                          </p>
                        </div>
                      </div>
                    </li>
                    {/* <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="arrows-expand w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            Who Benefits?
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            Anybody and Everybody!
                          </p>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 uil-ta-center">
                  <img
                    className="relative mx-auto"
                    width="490"
                    src={withBaseUrl("img/dosing.png")}
                    alt="anatomy-of-docsearch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Powered by Algolia */}
        <div className="py-16 bg-green-800 overflow-hidden lg:py-24">
          <div className="text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-4xl md:leading-10">
              Powered by 🤖
            </h3>
          </div>
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chip w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Raspiberry Pi 4 & Arduino Mega
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Using docker to run NodeRed, InfluxDB, Grafana,
                          Mosquitto, and more.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chat w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Notificatons, Live Sensor Data and Wiki tips
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Instantly magnify relevant content to your users from
                          the first keystroke, thanks to Algolia speed.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className=" w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M 6 3 C 4.2777778 3 2.6835938 3.5507812 2.6835938 3.5507812 L 1.1894531 4.0488281 L 2.2753906 5.1894531 C 2.9451269 5.8924545 3.3208957 7.1134803 3.8164062 8.3339844 C 4.0641616 8.9442364 4.3478147 9.5640738 4.8515625 10.091797 C 5.3553103 10.61952 6.1319495 10.99459 6.9960938 10.998047 C 7.5820856 11.000347 7.9923791 10.809171 8.4472656 10.582031 C 8.7722773 10.419742 9.0771741 10.215352 9.3652344 9.9863281 C 10.244277 10.558845 11 11.12229 11 13 L 5 13 L 5 15 L 6 15 L 6 15.099609 L 6.859375 19.392578 C 7.0457293 20.320385 7.8737108 21 8.8203125 21 L 15.179688 21 C 16.126289 21 16.954271 20.320385 17.140625 19.392578 L 18 15.099609 L 18 15 L 19 15 L 19 13 L 13 13 C 13 11.789345 13.888193 10.915808 14.773438 10.101562 C 15.021665 10.282631 15.280773 10.446232 15.552734 10.582031 C 16.007621 10.809171 16.417914 11.000391 17.003906 10.998047 C 17.86805 10.994547 18.64469 10.61952 19.148438 10.091797 C 19.652185 9.5640738 19.935838 8.9442364 20.183594 8.3339844 C 20.679104 7.1134803 21.054873 5.8924545 21.724609 5.1894531 L 22.810547 4.0488281 L 21.316406 3.5507812 C 21.316406 3.5507812 19.722222 3 18 3 C 16.833333 3 15.658659 3.2757379 14.695312 3.9179688 C 13.731967 4.5601996 13 5.6666667 13 7 C 13 7.6170652 13.172258 8.1318553 13.404297 8.5605469 C 12.99348 8.9175351 12.521324 9.3829977 12.09375 9.9550781 C 11.645945 9.2842628 11.117427 8.7973927 10.654297 8.4433594 C 10.854946 8.0380784 11 7.5623648 11 7 C 11 5.6666667 10.268034 4.5601996 9.3046875 3.9179688 C 8.3413413 3.2757379 7.1666667 3 6 3 z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Detailed and straightforward analytics
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use our analytics to keep an eye on your search
                          performance and to make sure that your users are
                          finding what they're searching for.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-green-700">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="chart-bar w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          GSM, Firebase and MQTT
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Algolia knows what your users mean to search for right
                          out-of-the-box, so they won't be spending time
                          correcting typos.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="tailwind">
      {/* <Header /> */}
      <Description />
    </div>
  );
}

export default Home;
