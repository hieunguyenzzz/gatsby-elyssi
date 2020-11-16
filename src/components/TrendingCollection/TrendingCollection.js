import PropTypes from 'prop-types';
import React from "react"

const TrendingCollection = ({items}) => (
  <div className="pb-20 md:pb-24 lg:pb-32 flex flex-wrap justify-between">
    <div className="lg:w-1/2 px-10 mx-auto lg:mx-0 text-center lg:text-left">
      <div className="lg:w-3/4 xl:w-2/3 lg:pt-10 pb-4 md:pb-10">
        <h1 className="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
          Trending Elyssi Collections
        </h1>
        <p className="font-hkregular text-secondary-lighter text-lg pt-4">
          Checkout our newest trends this coming season
        </p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 mt-6 sm:mt-10 lg:mt-0">
      <div className="px-10 h-56 sm:h-76 bg-left sm:bg-center bg-no-repeat bg-cover relative" style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?-01)"}}>
        <div className="w-2/3 absolute inset-0 px-6 md:px-10 py-14 ">
          <h3 className="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
            Passion Pearl <br /> Collection
          </h3>
          <a href="/collection-list" className="flex items-center pt-5 group">
            <div className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
              <i className="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors" />
            </div>
            <span>
              <p className="font-hksemibold transition-colors text-primary group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
                Get it now</p>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:px-10 mt-8 sm:mt-10">
      <div className="bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68" style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?-02)"}}>
        <div className="md:w-2/3 absolute inset-0 px-6 md:px-10 py-14">
          <h3 className="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
            Hoodie your way! For Men
          </h3>
          <a href="/collection-list" className="flex items-center pt-5 group">
            <div className="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
              <i className="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors" />
            </div>
            <p className="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
              Get it now</p>
          </a>
        </div>
      </div>
      <div className="bg-left sm:bg-center bg-no-repeat bg-cover relative h-56 sm:h-76 lg:h-68 mt-8 sm:mt-10" style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?-03)"}}>
        <div className="w-2/3 absolute inset-0 px-6 md:px-10 py-14">
          <h3 className="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
            Anabelle Purses by Elyssi
          </h3>
          <a href="/collection-list" className="flex items-center pt-5 group">
            <div className="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
              <i className="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors" />
            </div>
            <p className="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
              Get it now</p>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-10 h-82 sm:h-94 lg:h-96 bg-left sm:bg-center bg-no-repeat bg-cover relative mt-8 sm:mt-10" style={{backgroundImage: "url(https://source.unsplash.com/1000x640/?oes)"}}>
      <div className="w-2/3 absolute inset-0 px-6 md:px-10 py-14 sm:py-16">
        <h3 className="font-hksemibold text-secondary text-xl sm:text-2xl md:text-3xl">
          W.W. Shoes <br /> by Elyssi
        </h3>
        <a href="/collection-list" className="flex items-center pt-5 group">
          <div className="bg-white rounded-full p-2 h-8 w-8 flex items-center justify-center">
            <i className="bx bx-chevron-right text-xl text-primary group-hover:text-v-red transition-colors" />
          </div>
          <p className="font-hksemibold text-primary transition-colors group-hover:text-v-red sm:text-lg pl-3 sm:pl-5 leading-none -mt-1">
            Get it now</p>
        </a>
      </div>
    </div>
  </div>
)

TrendingCollection.propTypes = {
  items: PropTypes.array
}

export default TrendingCollection
