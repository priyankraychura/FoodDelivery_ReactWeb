import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisply/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

export default function Home() {
    const [category, setCategory] = useState("All");

    console.log(category);
    

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload />
        </div>
    )
}
