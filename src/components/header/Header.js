import React, { Component } from 'react';
import logo from '../../assets/icons/logo.svg';
import alerta from '../../assets/icons/alerta.svg';
import { Link } from "react-router-dom";
import './Header.css';

//components
import Novidades from '../novidades/Novidades';

class Header extends Component {

  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const {isHidden} = this.state;

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="header-nav">
          <li className="nav-active"><a href="/"><div className="cube-nav cube-active"></div>Catalogo</a></li>
          <li><Link to="/classic"><div className="cube-nav"></div>Classic</Link></li>
          <li><Link to="/exclusive"><div className="cube-nav"></div>Exclusive</Link></li>
          <li><Link to="/prime"><div className="cube-nav"></div>Prime</Link></li>
          <li><Link to="/pessoa-juridica"><div className="cube-nav"></div>Pessoa Jurídica</Link></li>
          <li><Link to="/outros"><div className="cube-nav"></div>Outros</Link></li>
        </ul>
        <div className="box-alerta-header">
          <div className="count-alerts"><span>10</span></div>
          <img onClick={() => this.toggleHidden()} className="alerta-header" src={alerta} />
        </div>
        {!isHidden && <Novidades />}
      </header>
    )
  }
}

export default Header;
