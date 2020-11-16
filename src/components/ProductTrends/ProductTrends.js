import PropTypes from 'prop-types';
import ProductCarousel from './../../components/Carousel/ProductCarousel'
import React from "react"

const ProductTrends = ({items}) => (
  <div className="pb-20 md:pb-24 lg:pb-32">
    <div className="flex flex-col sm:flex-row justify-between items-center sm:pb-4 lg:pb-0 mb-12 sm:mb-10 md:mb-0">
      <div className="text-center sm:text-left">
        <h2 className="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
          Elyssi’s trends
        </h2>
        <p className="font-hkregular text-secondary-lighter text-lg md:text-xl pt-2">
          Be styling, no matter the season!
        </p>
      </div>
      <a href="/collection-grid" className="flex items-center group pt-8 sm:pt-0 border-b border-primary transition-colors hover:border-primary-light pb-2 font-hkregular text-xl text-primary">
        Show more
        <i className="bx bx-chevron-right text-primary transition-colors group-hover:text-primary-light pl-3 pt-2 text-xl"></i>
      </a>
    </div>
    <ProductCarousel items={items} name="product-trend" />
  </div>
)

ProductTrends.propTypes = {
  items: PropTypes.array
}

export default ProductTrends
