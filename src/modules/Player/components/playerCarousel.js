import React from 'react';
import Durant from '../../../images/Durant.jpg'
import Embiid from '../../../images/Embiid.jpg'
import Giannis from '../../../images/Giannis.jpg'
import Jokic from '../../../images/Jokic.jpg'
import StephCurry from "../../../images/StephCurry.jpg"
const playerCarousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={Giannis} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Giannis Antetokounmpo</h5>
                                <p>Antetokounmpo reached the NBA mountaintop in 2021 by winning a championship and Finals MVP award.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Durant} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Kevin Durant</h5>
                                <p>Durant had a claim as the best player in the world at the end of the 2021 season after going toe-to-toe with Giannis while James Harden and Kyrie Irving were hurt. </p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={StephCurry} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Stephen Curry</h5>
                                <p>You might have thought he was done, but Curry can still be the best player on a championship team. He secured his first Finals MVP award after carving up the best defense in basketball for six-straight games. </p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Jokic} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Nikola Jokic</h5>
                                <p>Jokic raised his game in 2021-22 to win a second-straight MVP award, this time playing almost all of the regular season without Jamal Murray and Michael Porter Jr.Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={Embiid} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Joel Embiid</h5>
                                <p>There's an argument that Embiid should've been MVP the last two seasons. It's hard to argue that given his production, but unfortunately Nikola Jokic still exists.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default playerCarousel;