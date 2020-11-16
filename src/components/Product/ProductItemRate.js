import PropTypes from 'prop-types';
import React from "react"

const ProductItemRate = ({product, className}) => (
  <div className={`flex items-center ${className}`}>
    <div className="flex items-center">
      {[...Array(product.rate).keys()].map((index, key) => (
        <i className="bx bxs-star text-primary" key={key}></i>
      ))}
    </div>
    <div>
      <p className="font-hkregular text-sm text-secondary ml-2">
        ({product.rateCount})
      </p>
    </div>
  </div>
)

ProductItemRate.defaultProps = {
}

ProductItemRate.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default ProductItemRate
