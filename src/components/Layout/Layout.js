import React from "react"
import '../../assets/styles/main.min.css'
import Header from '../Header/Header';
export default function Layout({children}) {
    return <>
        <Header />
        {children}
    </>
}