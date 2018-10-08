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

  changeMenu = (categoria) => {
    document.querySelector(".border-catalogo").classList.remove('active');
    document.querySelector(".catalogo").classList.remove('active');
    document.querySelector(".border-dental").classList.remove('active');
    document.querySelector(".dental").classList.remove('active');
    document.querySelector(".border-residencial").classList.remove('active');
    document.querySelector(".residencial").classList.remove('active');
    document.querySelector(".border-saude").classList.remove('active');
    document.querySelector(".saude").classList.remove('active');
    document.querySelector(".border-auto").classList.remove('active');
    document.querySelector(".auto").classList.remove('active');
    document.querySelector(".border-vida").classList.remove('active');
    document.querySelector(".vida").classList.remove('active');


    document.querySelector(".border-"+categoria).classList.add('active');
    document.querySelector("."+categoria).classList.add('active');
  }

  render() {
    return (
      <div className="menu-lateral">
        <div className="box-busca">
          <img className="icon-busca" src={busca} />
        </div>
        <ul className="box-menu-lateral">
          <li onClick={() => this.changeMenu('catalogo')}>
            <div className="border-active active border-catalogo"></div>
            <img className="icon-menu-lateral active catalogo" src={catalogo} />
          </li>
          <li onClick={() => this.changeMenu('dental')}>
            <div className="border-active border-dental"></div>
            <img className="icon-menu-lateral dental" src={dental} />
          </li>
          <li onClick={() => this.changeMenu('residencial')}>
            <div className="border-active border-residencial"></div>
            <img className="icon-menu-lateral residencial" src={residencial} />
          </li>
          <li onClick={() => this.changeMenu('saude')}>
            <div className="border-active border-saude"></div>
            <img className="icon-menu-lateral saude" src={saude} />
          </li>
          <li onClick={() => this.changeMenu('auto')}>
            <div className="border-active border-auto"></div>
            <img className="icon-menu-lateral auto" src={auto} />
          </li>
          <li onClick={() => this.changeMenu('vida')}>
            <div className="border-active border-vida"></div>
            <img className="icon-menu-lateral vida" src={vida} />
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
