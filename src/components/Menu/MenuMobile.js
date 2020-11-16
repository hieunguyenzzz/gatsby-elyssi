import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const MenuMobile = ({menus, showMenuMobile, setShowMenuMobile}) => {
  const [showCategory, setShowCategory] = useState(false)
  const [showCategoryChildren, setShowCategoryChildren] = useState(-1)

  const clickSetShowCategoryChildren = (key) => {
    if (key === showCategoryChildren) {
      key = -1
    }
    setShowCategoryChildren(key)
  } 

  return (
    <div className={`
        fixed inset-0 flex z-50 justify-end opacity-0 pointer-events-none transition-all 
        ${showMenuMobile ? 'opacity-100 pointer-events-auto' : ''}
      `}>
      <div
        className="bg-black opacity-50 absolute inset-0 z-10"
        onClick={() => setShowMenuMobile(false)}
      ></div>
      <div className="w-2/3 md:w-1/2 z-20 h-full absolute shadow bg-primary-lightest overflow-auto flex flex-col">
        <span
          className=" ml-auto p-2"
          onClick={() => setShowMenuMobile(false)}>
          <i className="bx bx-x text-secondary text-3xl"></i>
        </span>
        <ul>
          <li>
            <Link to="/" className="p-3 uppercase text-secondary border-t border-grey-darker block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="p-3 uppercase text-secondary border-t border-grey-darker block">
              About
            </Link>
          </li>
          <li className="flex justify-between flex-col">
            <div className="flex justify-between border-t border-grey-darker">
              <span className="p-3 uppercase text-secondary block">
                Categories
              </span>
              <span
                className="p-3 border-l border-grey-darker"
                onClick={() => setShowCategory(!showCategory)}>
                <i className={`mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none ${showCategory ? 'bxs-up-arrow' : ''}`}>
                </i>
              </span>
            </div>
            <div className={`bg-primary-lighter overflow-hidden transition-all item-height ${showCategory ? 'active' : ''}`}>
              {menus.map((menu, key) => (
                <div key={key}>
                  <div className="flex justify-between border-t border-grey-darker">
                    <span className="p-3 uppercase text-secondary  block">
                      {menu.name}
                    </span>
                    <span className="p-3 border-l border-grey-darker" onClick={() => clickSetShowCategoryChildren(key)}>
                      <i className="mt-1 bx bxs-down-arrow text-secondary text-sm pointer-events-none"></i>
                    </span>
                  </div>
                  <div className={`
                      mobile-menu-categories bg-v-v-pink max-h-0 overflow-hidden transition-all item-height
                      ${showCategoryChildren === key ? 'active' : ''}
                    `}>
                    {(menu.childrens || []).length > 0 && <ul>
                      {menu.childrens.map((chilMenu, childKey) => (
                        <li key={`${key}-${childKey}`}>
                          <Link
                            to={chilMenu.url_path}
                            className="p-3 uppercase text-secondary border-t border-grey-darker block">
                            {chilMenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>}
                  </div>
                </div>
              ))}
            </div>
          </li>
          <li>
            <a href="/blog" className="p-3 uppercase text-secondary border-t border-grey-darker block">Blog</a>
          </li>
          <li>
            <a href="/contact#faq" className="p-3 uppercase text-secondary border-t border-grey-darker block">FAQ</a>
          </li>
          <li>
            <a href="/contact" className="p-3 uppercase text-secondary border-t border-grey-darker block">Contact</a>
          </li>
          <li>
            <a href="/account/dashboard" className="p-3 uppercase text-secondary border-t border-grey-darker block">Account</a>
          </li>
          <li>
            <Link to="/cart" className="p-3 uppercase text-secondary border-t border-b border-grey-darker block">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

MenuMobile.propTypes = {
  menus: PropTypes.array,
  showMenuMobile: PropTypes.bool,
  setShowMenuMobile: PropTypes.func,
}

export default MenuMobile;
