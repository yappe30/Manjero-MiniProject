import React from 'react';
import "./About.css";
import Background from "../../../images/Background.avif"
const About = () => {
    return (
<div>
    <div style={{textAlign: 'center', backgroundColor: 'black'}}>
    <img src={Background} style={{width: '70%', height: '400px'}}/>
    </div>

            <br></br>
           
            <div className="col s12 m2" style={{ width: '70%', margin: 'auto', height: '50%' }}>
                <div className="z-depth-4" style={{padding: '20px'}}>
                    <div style={{textAlign: 'center'}}>
                    <h3 id="aboutTitle">ABOUT US</h3>
                    <br></br>
                    <h4 id="aboutSubTitle">Vision</h4>
                    </div>
                    <br />
                    <br />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    agna aliqua. Sapien et ligula ullamcorper malesuada
                    proin libero nunc. Pretium lectus quam id leo in vitae
                    turpis massa sed. Id cursus metus aliquam eleifend.
                    Habitant morbi tristique senectus et. Consequat mauris
                    nunc congue nisi vitae suscipit tellus mauris a. Sem
                    integer vitae justo eget magna fermentum iaculis eu non.
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    Id faucibus nisl tincidunt eget nullam non. Vitae elementum
                    curabitur vitae nunc sed. Eget sit amet tellus cras adipiscing.
                    Est ante in nibh mauris cursus mattis. Eu ultrices vitae auctor eua.
                    </p>
                    <div>
                        <br></br>
                        <h4 id="aboutSubTitle">Mission</h4>
                    </div>
                    <br />
                    <br />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    agna aliqua. Sapien et ligula ullamcorper malesuada
                    proin libero nunc. Pretium lectus quam id leo in vitae
                    turpis massa sed. Id cursus metus aliquam eleifend.
                    Habitant morbi tristique senectus et. Consequat mauris
                    nunc congue nisi vitae suscipit tellus mauris a. Sem
                    integer vitae justo eget magna fermentum iaculis eu non.
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    Id faucibus nisl tincidunt eget nullam non. Vitae elementum
                    curabitur vitae nunc sed. Eget sit amet tellus cras adipiscing.
                    Est ante in nibh mauris cursus mattis. Eu ultrices vitae auctor eua.
                    </p>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;