import {useState, useEffect} from 'react'
import React from "react"
import queryString from 'query-string'
import HeroCarousel from './../components/Carousel/HeroCarousel'
import SubBanner from './../components/SubBanner/SubBanner'
import TrendingCollection from './../components/TrendingCollection/TrendingCollection'
import ProductTrends from './../components/ProductTrends/ProductTrends'
import Community from './../components/Community/Community'
import ProductSale from './../components/ProductSale/ProductSale'
import NewArrivals from './../components/NewArrivals/NewArrivals'

import {heroItems, subBanners} from '../utils/constant'
import {graphql} from "gatsby";

function Home({data: {magento}}) {
    const {products: {items}} = magento;
    console.log(items);
    return (
        <div className="container">
            <HeroCarousel items={heroItems} />
            <SubBanner items={subBanners} />
            <TrendingCollection />
        </div>
    )
}

Home.defaultProps = {}

Home.propTypes = {}


export const query = graphql`
    query {
        magento{
            products(
                filter: {
                    category_id: {
                        eq: "2"
                    }
                }
                pageSize: 10
                currentPage:1
            ) {
                items {
                    __typename
                    id
                    url_key
                    thumbnail {
                        label
                        url
                    }
                }
            }
        }
    }
`;

export default Home
