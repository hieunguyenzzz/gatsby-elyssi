import PropTypes from 'prop-types';
import React from "react"

const SubBanner = ({items}) => (
  <div className="flex flex-col md:flex-row py-20 md:py-24">
    {items.map((item, key) => (
      <div
        className="sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-center justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0"
        key={key}>
        <div>
          <img src={item.icon} className="w-auto h-12" alt="icon" />
        </div>
        <div className="ml-6 mt-3 lg:mt-0">
          <h3 className="font-hksemibold text-primary text-xl tracking-wide">
            {item.title}
          </h3>
          <p className="font-hkregular text-secondary-lighter text-base tracking-wide">
            {item.detail}
          </p>
        </div>
      </div>
    ))}
  </div>
)

SubBanner.propTypes = {
  items: PropTypes.array
}

export default SubBanner
