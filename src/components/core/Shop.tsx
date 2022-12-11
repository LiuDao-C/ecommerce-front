import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const Shop = () => {
    const state = useSelector(state => state)
    return <Layout title="六道商城" subTitle="挑选你喜欢的商品吧">Shop  {JSON.stringify(state)}</Layout>
}

export default Shop