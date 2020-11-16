import PropTypes from 'prop-types';
import { Link } from "gatsby";
import React from "react"

const HeroItem = ({item}) => (
  <div
    className="bg-left sm:bg-center bg-no-repeat bg-cover"
    style={{backgroundImage: `url(${item.image})`}}
   >
    <div className="py-36 px-5 sm:px-10 md:px-12 xl:px-24 text-center sm:text-left sm:w-5/6 lg:w-3/4 xl:w-2/3 ">
      <h3 className="font-butlermedium text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <div dangerouslySetInnerHTML={{ __html: item.title }}></div>
      </h3>
      <Link to={item.url} className="btn btn-primary btn-lg mt-8">
        Know more
      </Link>
    </div>
  </div>
)

HeroItem.defaultProps = {
}

HeroItem.propTypes = {
  item: PropTypes.object
};

export default HeroItem
