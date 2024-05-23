import React, {Component} from 'react';
import mainHero from '../Images/main.jpg';

const Hero = ()=> {

        return (
            <section className="float-start me-3 w-25">
                <img className="w-100" src={mainHero} alt="hero"/>
            </section>
        );

}

export default Hero;