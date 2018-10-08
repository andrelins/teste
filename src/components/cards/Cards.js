import React, { Component } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
    //const { data } = this.props;
    return (
      <Link to="/ibook">
        <div className="box-cards-vitrine">
          <div className="box-card-vitrine active">
            <img src="assets/images/bradesco-multiprotecao-fullscreen.jpg" />
            <div className="box-title-card">
              <img className="icon-cards" src={dental} />
              <div className="block-card"></div>
              <p className="title-card">VIDA</p>
              <p className="subtitle-card">Proteção Familiar</p>
            </div>
            <div className="mask-active" >
              <img className="icon-cards" src={dental} />
              <div className="block-mask-card"></div>
              <p className="title-mask-card">Classic</p>
              <p className="subtitle-mask-card">Título do Ibook</p>
              <p className="description-mask-card">Descrição do Ibook</p>
              <p className="count-pages-mask-cards">20 <span>Páginas</span></p>
              <img className="icon-file-mask-cards" src={file_classic} />
              <p className="size-file-mask-cards">20 <span>MB</span> <FaChevronRight className="arrow-right-mask-cards" /></p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Cards;
