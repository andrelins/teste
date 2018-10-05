import React, { Component } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Classic.css';

//components
import CardsLista from '../cards-lista/CardsLista';

//icons
import catalogo_classic from '../../assets/icons/catalogo_classic.svg';
import file_classic from '../../assets/icons/file_classic.svg';
import lista_1 from '../../assets/icons/lista_1.svg';
import lista_2 from '../../assets/icons/lista_2.svg';

class Classic extends Component {

  render() {
    return (
      <div className="header-vitrine">
        <div className="block-header-vitrine"></div>
        <div className="box-header-lateral">
          <img className="icon-catalogo" src={catalogo_classic} />
          <p className="item-drop-vitrine">Vitrine Bradesco Classic</p>
          <FaChevronDown className="arrow-down" />
          <img className="icon-file" src={file_classic} />
          <p className="count-text">50 <span>Ibooks</span></p>
        </div>
        <div className="box-title-vitrine">
          <h1 className="title">CLASSIC</h1>
          <p className="description">Lorem Ipsum é simplesmente uma simulação de texto da indústria simplesmente uma simulação de texto da indústria simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado</p>
          <div className="box-icons-vitrine">
            <img className="icon-lista" src={lista_1} />
            <img className="icon-cards" src={lista_2} />
          </div>
        </div>
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
        <CardsLista />
      </div>
    );
  }
}

export default Classic;
