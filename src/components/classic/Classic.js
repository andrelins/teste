import React, { Component } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Classic.css';

//components
import Cards from '../cards/Cards';

//icons
import catalogo_classic from '../../assets/icons/catalogo_classic.svg';
import file_classic from '../../assets/icons/file_classic.svg';
import auto from '../../assets/icons/auto.svg';
import residencial from '../../assets/icons/residencial.svg';
import vida from '../../assets/icons/vida.svg';
import dental from '../../assets/icons/dental.svg';
import saude from '../../assets/icons/saude.svg';


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
            <img className="icon-lista" src={file_classic} />
            <img className="icon-cards" src={file_classic} />
          </div>
        </div>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    );
  }
}

export default Classic;
