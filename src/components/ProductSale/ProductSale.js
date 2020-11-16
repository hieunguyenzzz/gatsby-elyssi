import PropTypes from 'prop-types';
import ProductCarousel from './../../components/Carousel/ProductCarousel'
import React from "react"

const ProductSale = ({items}) => (
  <div className="pb-20 md:pb-24 lg:pb-32">
    <div className="text-center pb-12 md:pb-0">
      <h2 className="font-butlerregular text-secondary text-3xl md:text-4xl lg:text-7xl">
        On sale, only today
      </h2>
      <p className="font-hkregular text-secondary-lighter text-lg md:text-xl">
        Get it while they last!
      </p>
    </div>
    <ProductCarousel items={items} name="product-sale" />
  </div>
)

ProductSale.propTypes = {
  items: PropTypes.array
}

export default ProductSale
