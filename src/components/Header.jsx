import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Initialization for ES Users
import { Collapse, initTE } from "tw-elements";

const Header = ({ config }) => {
  useEffect(() => {
    initTE({ Collapse });
  }, []);

  if (config)
    return (
      <nav
        className={`relative flex w-full flex-nowrap items-center justify-between bg-[${config[0]?.value}] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:flex-wrap lg:justify-start lg:py-4`}
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ml-2">
            {config[3]?.value?.map((item,index)=>{
              return  <a key={index}
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                src={item?.preview}
                // src={URL.createObjectURL(item?.originFileObj) }
                style={{ height: "15px" }}
                alt="Logo"
                loading="lazy"
              />
            </a>
            })}
           
          </div>
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  // fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  // clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {config[2]?.value?.map((item, index) => {
                // return item?.map((item2,index2)=>{
                  return <li
                  key={index}
                  className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                  data-te-nav-item-ref
                >
                  <a
                    className={`font-semibold p-0 text-[${config[1]?.value}]-500 transition duration-200 hover:text-[${config[1]?.value}]-700 hover:ease-in-out focus:text-[${config[1]?.value}]-700 disabled:text-black/30 motion-reduce:transition-none -[${config[1]?.value}]-400 lg:px-2 [&.active]:text-black/90 text-[${config[1]?.value}]`}
                    href={item[1].value}
                    data-te-nav-link-ref
                  >
                    {item[0]?.value}
                  </a>
                </li>
                // })
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;
