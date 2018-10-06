import React, { Component } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Cards.css';

//icons
import catalogo_classic from '../../assets/icons/catalogo_classic.svg';
import file_classic from '../../assets/icons/file_classic.svg';
import auto from '../../assets/icons/auto.svg';
import residencial from '../../assets/icons/residencial.svg';
import vida from '../../assets/icons/vida.svg';
import dental from '../../assets/icons/dental.svg';
import saude from '../../assets/icons/saude.svg';

class Cards extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="box-cards-vitrine">
        <div className="box-card-vitrine active">
          <img src="assets/images/abs-senior-fullscreen.jpg" />
          <div className="box-title-card">
            
            <div className="block-card"></div>
            <p className="title-card">VIDA</p>
            <p className="subtitle-card">Proteção Familiar</p>
          </div>
        <div className="mask-active" >
            <div className="block-mask-card"></div>
            <p className="title-mask-card">VIDA</p>
            <p className="subtitle-mask-card">Proteção Familiar</p>
            <p className="description-mask-card">Lorem Ipsum é simplesmente uma simulação de texto da indústria simplesmente uma simulação de texto da indústria</p>
            <p className="count-pages-mask-cards">50 <span>Páginas</span></p>
            <img className="icon-file-mask-cards" src={file_classic} />
            <p className="size-file-mask-cards">20 <span>MB</span> <FaChevronRight className="arrow-right-mask-cards" /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
