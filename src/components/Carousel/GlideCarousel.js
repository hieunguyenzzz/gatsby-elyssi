import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

const GlideCarousel = ({
  element,
  options,
  childrens,
  dotStyle,
  showDot,
  glideSlideStyle,
  showControll,
  className,
}) => {
  const [slider] = useState(new Glide(`.${element}`, options))
  useEffect(() => {
    slider.mount()

    // // subscribe to an event 
    // slider.on('run.before', (event) => {
    //   // ... do something cool here
    // })

    // cleanup when unmounting component
    return () => slider.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className={`${element} relative ${className}`}>
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {childrens && childrens.map((item, key) => (
              <div className={`glide__slide ${glideSlideStyle}`} key={key}>
                {item}
              </div>
            ))}
          </div>
        </div>
        {showDot && (
          <div className="absolute bottom-0 inset-x-0 mb-6 z-30 text-center" data-glide-el="controls[nav]">
            {childrens && childrens.map((item, key) => (
              <span
                className={dotStyle}
                data-glide-dir={`=${key}`}
                key={key}
              ></span>
            ))}
          </div>
        )}
        {showControll && (
          <div data-glide-el="controls">
            <div className="transition-all shadow-md rounded-full absolute left-25 sm:left-35 md:left-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group" data-glide-dir="<">
              <i className="bx bx-chevron-left text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4" />
            </div>
            <div className="transition-all shadow-md rounded-full absolute right-25 sm:right-35 md:right-0 top-0 md:top-50 transform -translate-y-1/2 bg-grey hover:bg-primary border border-grey-dark z-30 cursor-pointer group" data-glide-dir=">">
              <i className="bx bx-chevron-right text-primary transition-colors group-hover:text-white text-2xl p-4 md:p-2 lg:p-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

GlideCarousel.defaultProps = {
  element: 'glide',
  options: {},
  childrens: [],
  showDot: false,
  glideSlideStyle: '',
  showControll: false,
  className: '',
}

GlideCarousel.propTypes = {
  options: PropTypes.object,
  childrens: PropTypes.array,
  dotStyle: PropTypes.string,
  showDot: PropTypes.bool,
  glideSlideStyle: PropTypes.string,
  showControll: PropTypes.bool,
  className: PropTypes.string,
};

export default GlideCarousel
