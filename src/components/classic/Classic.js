import React, { Component } from 'react';
import { FaChevronDown, FaRegListAlt } from "react-icons/fa";
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

  state = {
    dataClassic: []
  }

  async componentDidMount() {
    const response = await fetch(`https://ibooks.mybluemix.net/ebooks?token=dbe62952defb9bb128e0aeadfed3d247&category=Classic`)
    const responseJson = await response.json();
    console.log(responseJson);
    this.setState({dataClassic: responseJson});
  }

  render() {

    const { dataClassic } = this.state;

    return (
      <div className="header-vitrine">
        <div className="block-header-vitrine"></div>
        <div className="box-header-lateral">
          <img className="icon-catalogo" src={catalogo_classic} />
          <p className="item-drop-vitrine">Vitrine Bradesco Classic</p>
          <FaChevronDown className="arrow-down" />
          <img className="icon-file" src={file_classic} />
          <p className="count-text"> <span>Ibooks</span></p>
        </div>
        <div className="box-title-vitrine">
          <h1 className="title">CLASSIC</h1>
          <p className="description">Lorem Ipsum é simplesmente uma simulação de texto da indústria simplesmente uma simulação de texto da indústria simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado</p>
          <div className="box-icons-vitrine">
            <img className="icon-lista" src={file_classic} />
            <img className="icon-cards" src={file_classic} />
          </div>
        </div>
        {dataClassic.map((data) => (
          <Cards data={data} />
        ))}
      </div>
    );
  }
}

export default Classic;
