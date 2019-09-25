import React, {Component} from 'react';
import image from '../assets/img/header-bg.jpg';

import Header from '../Common/Header';

//Common folder
import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import TimeLine from '../Common/TimeLine';
import Team from '../Common/Team';

class Home extends Component {
    render(){
        return(
        <div>
            <Header 
                title="Welcome To Our Studio!"
                subtitle="IT'S NICE TO MEET YOU"
                ButtonText="Tell Me More"
                link="/services"
                showButton={true}
                image={image}
            />
            <Services />
            <Portofolio />
            <TimeLine />
            <Team />
        </div>
        )
    }
}
export default Home;