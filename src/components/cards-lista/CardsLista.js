import React, { Component } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './CardsLista.css';

//icons
import catalogo_classic from '../../assets/icons/catalogo_classic.svg';
import file_classic from '../../assets/icons/file_classic.svg';
import auto from '../../assets/icons/auto.svg';
import residencial from '../../assets/icons/residencial.svg';
import vida from '../../assets/icons/vida.svg';
import dental from '../../assets/icons/dental.svg';
import saude from '../../assets/icons/saude.svg';

class CardsLista extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      
    <div className="cards-lista">
        <div className="box-thumb-lista">
            <img src="assets/images/abs-senior-fullscreen.jpg" />
        </div>
        <div className="box-title-lista">
            <div className="block-lista-title"></div>
            <p>Prime</p>
            <span>Proteção Familiar</span>
        </div>
        <div className="box-desc-lista">
            <p>hsfkshfksd dsfsdhfksdhfsdk kjjdfhkjsdhfskddhfksdhfsdk kjjdfhkjsdhfskd kshfjsdk hsfkshfksd dsfsdhfksdhfsdk kjjdfhkjsdhfskddhfksdhfsdk kjjdfhkjsdhfskd kshfjsdk</p>
        </div>
        <div className="box-count-lista">
            <p className="tempo-lista">2 Semanas Atrás</p>
            <hr />
            <img src={file_classic} />
            <p className="count-pages-lista">54 <span>Páginas</span></p>
        </div>
    </div>
      
    );
  }
}

export default CardsLista;