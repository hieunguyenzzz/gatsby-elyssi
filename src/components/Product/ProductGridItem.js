import PropTypes from 'prop-types';
import ProductListItemHover from './ProductListItemHover'
import ProductItemRate from './ProductItemRate'
import React from "react"

const ProductGridItem = ({product}) => (
  <div className="sm:px-5 lg:px-4">
    <div className="relative rounded flex justify-center items-center">
      <div
        className="w-68 h-68 bg-center bg-no-repeat bg-cover"
        style={{backgroundImage: `url(${(product.images && product.images.length) > 0 ? product.images[0] : ''})`}}>
      </div>
      <div className="absolute top-0 right-0 bg-white px-5 py-1 my-4 mx-4 rounded-full">
        <p className="text-v-green font-hkbold text-sm uppercase tracking-wide">
          New
        </p>
      </div>
      <div className="absolute top-0 bottom-0 inset-x-0 bg-secondary opacity-0 group-hover:opacity-85 pointer-events-none group-hover:pointer-events-auto transition-all overflow-hidden rounded">
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100 flex justify-center items-center">
        <ProductListItemHover product={product}/>
      </div>
    </div>
    <a href="/product" className="flex justify-between items-center pt-6">
      <div>
        <h3 className="font-hkregular text-base text-secondary">
          {product.name}
        </h3>
        <ProductItemRate product={product}/>
      </div>
      <div>
        <span className="font-hkbold text-primary text-xl">${product.price}</span>
      </div>
    </a>
  </div>
)

ProductGridItem.defaultProps = {
}

ProductGridItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductGridItem
