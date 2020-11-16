import React, { useState, useEffect } from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import MenuDesktop from './../Menu/MenuDesktop'
import MenuMobile from './../Menu/MenuMobile'
import imgLogo from './../../assets/img/logo-elyssi.svg'
import imgSearch from './../../assets/img/icons/icon-search.svg'
import imgSearchHover from './../../assets/img/icons/icon-search-hover.svg'
import imgHeart from './../../assets/img/icons/icon-heart.svg'
import imgHeartHover from './../../assets/img/icons/icon-heart-hover.svg'
import imgUser from './../../assets/img/icons/icon-user.svg'
import imgUserHover from './../../assets/img/icons/icon-user-hover.svg'
import imgCart from './../../assets/img/icons/icon-cart.svg'
import imgCartHover from './../../assets/img/icons/icon-cart-hover.svg'

function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const data = useStaticQuery(
      graphql`
        query {
          magento{
            categories(filters : {
              ids: {
                eq: "2"
              }
            }

            ) {
              items {
                children {
                  id,
                  url_path,
                  name
                  children {
                    id,
                    name,
                    url_path
                  }
                }
              }
            }
          }
        }
      `
  );
   const {magento: {categories: {items}}} = data;
   console.log(items);
  const menus = items[0].children;

  return (
    <div className="container py-10 relative">
      <div className="flex justify-between items-center">
        <div className="hidden lg:block">
          <div className="flex items-center">
            <a
              href="/"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 mr-8 group">
              <img
                src={imgSearch}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon search"
              />
              <img
                src={imgSearchHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon search hover"
              />
            </a>
            <a
              href="/account/wishlist/"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
              <img
                src={imgHeart}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon heart"
              />
              <img
                src={imgHeartHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon heart hover"
              />
            </a>
          </div>
        </div>
        <Link to="/">
          <img src={imgLogo} className="w-48 h-auto" alt="logo" />
        </Link>
        <div className="hidden lg:block">
          <div className="flex items-center">
            <a
              href="/account/dashboard"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 group">
              <img
                src={imgUser}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon user"
              />
              <img
                src={imgUserHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon user hover"
              />
            </a>
            <Link
              to="/cart"
              className="border-2 transition-all border-transparent hover:border-primary rounded-full px-4 py-4 ml-8 group">
              <img
                src={imgCart}
                className="w-8 h-8 block group-hover:hidden"
                alt="icon cart"
              />
              <img
                src={imgCartHover}
                className="w-8 h-8 hidden group-hover:block"
                alt="icon cart hover"
              />
            </Link>
          </div>
        </div>
        <div className="block lg:hidden" onClick={() => setShowMenuMobile(true)}>
          <i className="bx bx-menu text-primary text-3xl"></i>
        </div>
      </div>
      <MenuDesktop menus={menus}/>
      <MenuMobile menus={menus} showMenuMobile={showMenuMobile} setShowMenuMobile={setShowMenuMobile}/>
    </div>
  );
}

export default Header;
