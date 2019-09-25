import React, {Component} from 'react'
import Header from '../Common/Header'
import image from '../assets/img/about/8250.jpg';

import TimeLine from '../Common/TimeLine';
import Team from '../Common/Team';
export default class About extends Component{
    render(){
        return(
            <div>
                <Header 
                title="About Us"
                subtitle="Really Is Story My Life"
                ButtonText="Tell Me More"
                showButton={false}
                image={image}
            />
                <TimeLine />
                <Team />
            </div>
        )
    }
}