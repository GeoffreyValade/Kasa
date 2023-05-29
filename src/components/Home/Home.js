import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import DataLogement from "../../datas/logements.json"
import HomeBanner from "../../assets/Image/home-banner.webp"
import "./Home.css"


export default function Home() {

    return (
        <div className="home-container">
            <Banner bannerImg={HomeBanner}
            bannerSpan="Chez vous, partout et ailleurs" />

            <div className='card-grid'>
                {DataLogement.map(logement => <Card key={logement.id} imgSrc={logement.cover} title={logement.title} link={"/logement/"+logement.id}/>)}
            </div>
        </div>
    )
}