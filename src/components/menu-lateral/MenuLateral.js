import React, { Component } from 'react';
import './MenuLateral.css';

//icons
import busca from '../../assets/icons/busca.svg';
import auto from '../../assets/icons/auto.svg';
import residencial from '../../assets/icons/residencial.svg';
import vida from '../../assets/icons/vida.svg';
import dental from '../../assets/icons/dental.svg';
import mic from '../../assets/icons/mic.svg';
import catalogo from '../../assets/icons/catologo.svg';
import saude from '../../assets/icons/saude.svg';

class MenuLateral extends Component {

  render() {
    return (
      <div className="menu-lateral">
        <div className="box-busca">
          <img className="icon-busca" src={busca} />
        </div>
        <ul className="box-menu-lateral">
          <li>
            <div className="border-active active"></div>
            <img className="icon-menu-lateral active" src={catalogo} />
          </li>
          <li>
            <div className="border-active"></div>
            <img className="icon-menu-lateral" src={dental} />
          </li>
          <li>
            <div className="border-active"></div>
            <img className="icon-menu-lateral" src={residencial} />
          </li>
          <li>
            <div className="border-active"></div>
            <img className="icon-menu-lateral" src={saude} />
          </li>
          <li>
            <div className="border-active"></div>
            <img className="icon-menu-lateral" src={auto} />
          </li>
          <li>
            <div className="border-active"></div>
            <img className="icon-menu-lateral" src={vida} />
          </li>
        </ul>
        <div className="box-busca-audio">
          <img className="icon-mic" src={mic} />
        </div>
      </div>
    );
  }
}

export default MenuLateral;
