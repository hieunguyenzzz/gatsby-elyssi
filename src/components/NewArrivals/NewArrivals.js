import PropTypes from 'prop-types';
import bgCoupon from './../../assets/img/bg-coupon.png'
import React from "react"

const NewArrivals = ({items}) => (
  <div className="py-5 sm:py-16 mt-10 md:mt-16 mb-12 sm:mb-6 md:mb-12 lg:mb-28 relative w-full">
    <div
      className="bg-left bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 h-76 sm:h-82 md:h-86 lg:h-90 z-20 relative"
      style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?age)"}}>
    </div>
    <div
      className="lg:absolute right-0 bottom-0 bg-right bg-no-repeat bg-cover lg:w-6/11 xl:w-3/5 ml-auto h-76 sm:h-82 md:h-86 lg:h-90"
      style={{backgroundImage: `url(${bgCoupon})`}}>
      <div className="py-14 sm:py-20 xl:py-24 lg:pr-8 lg:pl-40 xl:pl-76 w-5/6 sm:w-3/5 lg:w-full mx-auto text-center lg:text-left">
        <span className="font-hkmedium text-white text-lg md:text-xl uppercase">New Arrivals</span>
        <h2 className="font-butlermedium text-white text-3xl sm:text-4xl md:text-7xl xl:text-5xl pt-5 leading-tight">
            Blouses & Jeans Up to 70% Off
        </h2>
        <a href="/" className="btn btn-primary btn-lg mt-8 md:mt-10">Get it now</a>
      </div>
    </div>
  </div>
)

NewArrivals.propTypes = {
  items: PropTypes.array
}

export default NewArrivals
