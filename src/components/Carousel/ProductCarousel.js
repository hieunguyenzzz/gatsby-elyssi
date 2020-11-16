import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import GlideCarousel from './GlideCarousel';
import ProductGridItem from './../Product/ProductGridItem';

const options = {
  type: "carousel",
  startAt: 1,
  perView: 4,
  gap: 0,
  peek: {
    before: 50,
    after: 50,
  },
  breakpoints: {
    1024: {
      perView: 3,
      peek: {
        before: 20,
        after: 20,
      },
    },
    768: {
      perView: 2,
      peek: {
        before: 10,
        after: 10,
      },
    },
    600: {
      perView: 1,
      peek: {
        before: 0,
        after: 0,
      },
    },
  },
}

const ProductCarousel = ({items, name}) => {
  const [carouselItems, setCarouselItems] = useState([])
  useEffect(() => {
    let a = items.map((product, key) => (
      <React.Fragment key={key}>
        <ProductGridItem product={product} />
      </React.Fragment>
    ))

    setCarouselItems(a)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (carouselItems.length === 0) return null

  return (
    <GlideCarousel
      element={name}
      options={options}
      childrens={carouselItems}
      glideSlideStyle="relative group"
      showControll
      className="mt-10"
    />
  )
}

ProductCarousel.defaultProps = {
  items: [],
  name: 'product-carousel'
}

ProductCarousel.propTypes = {
  items: PropTypes.array,
  name: PropTypes.string,
};

export default ProductCarousel
