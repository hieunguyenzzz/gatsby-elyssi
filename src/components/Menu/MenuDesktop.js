import PropTypes from 'prop-types';
import React from "react"
import { Link } from "gatsby";

const styleMenuLink= 'block text-lg font-hkregular hover:font-hkbold transition-all text-secondary hover:text-primary border-b-2 border-white hover:border-primary px-2'

const MenuDesktop = ({menus}) => {
  return (
    <div className="flex justify-center lg:pt-8">
      <ul className="list-reset flex items-center">
        <li className=" mr-10 hidden lg:block">
          <Link to="/" className={styleMenuLink}>
            Home
          </Link>
        </li>
        <li className=" mr-10 hidden lg:block">
          <Link to="/about" className={styleMenuLink}>
            About
          </Link>
        </li>
        <li className="mr-10 hidden lg:block group">
          <div
            className="border-b-2 border-white transition-colors group-hover:border-primary flex items-center">
            <span 
              className="cursor-pointer text-lg font-hkregular group-hover:font-hkbold text-secondary group-hover:text-primary px-2 transition-all">
              Collections
            </span>
            <i
              className="bx bx-chevron-down text-secondary group-hover:text-primary pl-2 px-2 transition-colors"
            ></i>
          </div>
          <div className="pt-10 absolute mt-40 top-0 left-0 right-0 -z-1 group-hover:z-50 w-2/3 mx-auto">
            <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all flex bg-white shadow-lg p-8 rounded-b relative">
              {menus.map((menu, key) => (
                <div className="flex-1 relative z-20" key={key}>
                  <h4 className="font-hkbold text-base text-secondary mb-2">
                    {menu.name}
                  </h4>
                  {(menu.childrens || []).length > 0 && <ul>
                    {menu.childrens.map((chilMenu, childKey) => (
                      <li key={`${key}-${childKey}`}>
                        <Link
                          to={chilMenu.url_path}
                          className="text-sm font-hkregular text-secondary-lighter leading-loose border-b border-transparent hover:border-secondary-lighter">
                          {chilMenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>}
                </div>
              ))}
              <div className="flex-1">
                <div
                  className="z-0 bg-contain bg-right-bottom bg-no-repeat absolute inset-0"
                  style={{backgroundImage: 'url(https://source.unsplash.com/1000x640/?enu)'}}>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/blog" className={styleMenuLink}>
            Blog
          </a>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/contact#faq" className={styleMenuLink}>
            FAQ
          </a>
        </li>
        <li className=" mr-10 hidden lg:block">
          <a href="/contact" className={styleMenuLink}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

MenuDesktop.propTypes = {
  menus: PropTypes.array
}

export default MenuDesktop;
