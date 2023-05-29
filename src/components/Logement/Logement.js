import React from 'react'
import './Logement.css'
import Carousel from "../Carousel/Carousel"
import AccomodationsData from "../../datas/logements.json"
import { useParams } from 'react-router-dom'
import NotFound from "../Error/NotFound"
import Collapsible from '../Collapsible/Collapsible'
import Rating from '../Rating/Rating'


//      Il faut que le clic sur les cards renvoie une id => la page Logement le récupère
//      pour pouvoir l'appliquer sur le carousel et les autres composants à venir
//      Grâce à la boucle for, on fait le tour des objets de notre json
//      Grâce à la condition if, on sélectionne l'objet qui contient le même id que celui indiqué dans l'URL (useParams)

export default function Logement() {

    const { id } = useParams();

    for (var index = 0; index < AccomodationsData.length; index++) {
        if (AccomodationsData[index].id === id) {
            return (
                <div className="page-container-logement">
                    <div className="carousel-container">
                        <Carousel slides={AccomodationsData[index].pictures} />
                    </div>

                    <div className="container-info-logement">

                        <div className="left-info-logement">

                            <h1 className="logement-title">{AccomodationsData[index].title}</h1>
                            <h2 className="logement-location">{AccomodationsData[index].location}</h2>
                            <div className="logement-tags-container">
                                {AccomodationsData[index].tags.map((tag) => (
                                    <li key={tag} className="logement-tags">{tag}</li>))}
                            </div>
                        </div>
                        <div className="right-info-logement">
                            <div className="host-info">
                                <span className="host-name">{AccomodationsData[index].host.name}</span>
                                <img src={AccomodationsData[index].host.picture} alt="" className="host-picture"></img>
                            </div>
                            <Rating rateValue={AccomodationsData[index].rating} />
                        </div>

                    </div>

                    <div className='collapsible-logement-container'>
                        <div className="unit-collapsible-logement">
                            <Collapsible label="Description">
                                <p className="collapse-content-logement">
                                    {AccomodationsData[index].description}
                                </p>
                            </Collapsible>
                        </div>

                        <div className="unit-collapsible-logement">
                            <Collapsible label="Equipements">
                                {AccomodationsData[index].equipments.map((eqp) => (
                                    <li key={eqp} className="collapse-content-logement">{eqp}</li>))}
                            </Collapsible>
                        </div>
                    </div>
                </div>
            );
        };
    };

    return (<NotFound />)
};