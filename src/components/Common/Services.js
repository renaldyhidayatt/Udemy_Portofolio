import React, {Component} from 'react'
import SingleService from './SingleService'
//import image from '../assets/img/about/8250.jpg';
const services = [
    {'title': 'E-Commerce','description':'Google LLC adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. Produk-produk tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak, dan periklanan daring. Sebagian besar labanya berasal dari AdWords', 'icon': 'fas fa-shopping-cart'},
    {'title': 'Responsive Design','description':'Google LLC adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. Produk-produk tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak, dan periklanan daring. Sebagian besar labanya berasal dari AdWords', 'icon': 'fas fa-laptop'},
    {'title': 'Web Security','description':'Google LLC adalah sebuah perusahaan multinasional Amerika Serikat yang berkekhususan pada jasa dan produk Internet. Produk-produk tersebut meliputi teknologi pencarian, komputasi web, perangkat lunak, dan periklanan daring. Sebagian besar labanya berasal dari AdWords', 'icon': 'fas fa-lock'}
];

export default class Services extends Component{
    render(){
        return(
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                <div className="row text-center">
                    {services.map((services, index) => {
                        return <SingleService {...services} key={index} />
                    })}
                </div>
                </div>
            </section>
        )
    }
}