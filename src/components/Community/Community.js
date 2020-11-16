import React from 'react';

import brand1 from './../../assets/img/brand-01.png'
import brand2 from './../../assets/img/brand-02.png'
import brand3 from './../../assets/img/brand-03.png'
import brand4 from './../../assets/img/brand-04.png'
import brand5 from './../../assets/img/brand-05.png'
import brand6 from './../../assets/img/brand-06.png'

const Communities = [brand1, brand2, brand3, brand4, brand5, brand6]

const Community = () => (
  <div className="pt-16 sm:pt-20 pb-5 sm:pb-12 border-b border-grey-dark">
    <h4 className="font-hkregular text-xl text-secondary uppercase text-center">
      Our community
    </h4>
    <div className="flex flex-wrap items-center justify-center pt-8 -mx-5">
      {Communities.map((brand, key) => (
        <div
          key={key}
          className="bg-center bg-no-repeat bg-cover w-1/2 sm:w-1/3 lg:w-1/6 h-24 mb-8 sm:mb-10 lg:mb-0"
          style={{backgroundImage: `url(${brand})`}}>
        </div>
      ))}
    </div>
  </div>
);

export default Community;
