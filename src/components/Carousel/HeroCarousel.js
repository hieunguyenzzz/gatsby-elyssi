import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import GlideCarousel from './GlideCarousel';
import HeroItem from './HeroItem';

const autoplayTimer = 3000;

const HeroCarousel = ({items}) => {
  const [carouselItems, setCarouselItems] = useState([])
  useEffect(() => {
    let a = items.map((item, key) => (
      <React.Fragment  key={key}>
        <HeroItem item={item} />
      </React.Fragment>
    ))

    setCarouselItems(a)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (carouselItems.length === 0) return null

  return (
    <GlideCarousel
      element="hero-slider"
      options={{ autoplay: autoplayTimer, type: 'carousel' }}
      childrens={carouselItems}
      dotStyle="inline-block border border-primary transition-colors hover:bg-secondary-lighter p-1 rounded-full mr-1 focus:outline-none cursor-pointer"
      showDot
    />
  )
}

HeroCarousel.defaultProps = {
  items: []
}

HeroCarousel.propTypes = {
  items: PropTypes.array
};

export default HeroCarousel
