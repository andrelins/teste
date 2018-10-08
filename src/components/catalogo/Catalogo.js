import React, { Component } from 'react';
import { FaChevronRight } from "react-icons/fa";
import './Catalogo.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Catalogo extends Component {

  static propTypes = {
    updateCategorySlides: PropTypes.func.isRequired,
  }

  state = {
    intervalCicle: '',
    classic: {
      classes: 'active'
    },
    exclusive: {
      classes: ''
    },
    prime: {
      classes: ''
    },
    classBlockCatalogo: 'classic',
    classSubtituloCatalogo: 'classic',
    classBlockSugeridos: 'classic',
    classSetaSugeridos: 'classic'

  }

  reset() {
    console.log('reset');
  }

  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount() {
    clearInterval(this.state.intervalCicle);
    this.setState({intervalCicle: ''});
    this.timerCicle();
  }

  componentWillUnmount() {
    this.destroy();
  }

  selectCatalogo(value) {
    console.log('value', value);
    document.body.classList.remove('catalogo-classic');
    document.body.classList.remove('catalogo-exclusive');
    document.body.classList.remove('catalogo-prime');
    document.body.classList.add(value);

    if(value == 'catalogo-classic'){
      this.setState({
        classic: {
          classes: 'active'
        },
        exclusive: {
          classes: ''
        },
        prime: {
          classes: ''
        },
        classBlockCatalogo: 'classic',
        classSubtituloCatalogo: 'classic',
        classBlockSugeridos: 'classic',
        classSetaSugeridos: 'classic'
      });
    }else if(value == 'catalogo-exclusive'){
      this.setState({
        classic: {
          classes: ''
        },
        exclusive: {
          classes: 'active'
        },
        prime: {
          classes: ''
        },
        classBlockCatalogo: 'exclusive',
        classSubtituloCatalogo: 'exclusive',
        classBlockSugeridos: 'exclusive',
        classSetaSugeridos: 'exclusive'
      });
      this.props.updateCategorySlides('exclusive');
    }else{
      this.setState({
        classic: {
          classes: ''
        },
        exclusive: {
          classes: ''
        },
        prime: {
          classes: 'active'
        },
        classBlockCatalogo: 'prime',
        classSubtituloCatalogo: 'prime',
        classBlockSugeridos: 'prime',
        classSetaSugeridos: 'prime'
      });
    }
  }

  timerCicle = () => {
    let categories = [
      'classic',
      'exclusive',
      'prime'
    ]
    let countCicle = 1;
    let intervalCicle = setInterval(() => {
      if(countCicle == 3){
        countCicle = 0;
      }
      this.updateCicle('catalogo-'+categories[countCicle]);
      countCicle++;
    }, 9000);
    this.setState({intervalCicle: intervalCicle});
  }

  updateCicle = (categories, action = 'default') => {
    const {intervalCicle} = this.state
    this.selectCatalogo(categories);

    if(action != 'default') {
      clearInterval(intervalCicle);
      this.timerCicle();
    }
  }

  destroy = () => {
    clearInterval(this.state.intervalCicle);
    this.setState({intervalCicle: ''});
    console.log('destroyed!', this.state);
  }

  render() {
    const { classic, exclusive, prime, classBlockCatalogo, classSubtituloCatalogo, classBlockSugeridos, classSetaSugeridos } = this.state;
    return (
      <div className="box-catalogo">
        <div className={`block-catalogo ${classBlockCatalogo}`}></div>
        <h1 className="title-catalogo">CATALOGO</h1>
        <div className="box-subtitulo">
          <span className={`catalogo-subtitulo ${classSubtituloCatalogo}`}>Ibooks Bradesco Seguros</span>
          <div className="box-count-ibooks">
            <p className="count-text">50 <span>Ibooks</span></p>
          </div>
        </div>
        <div className="box-descricao-catalogo">
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado</p>
        </div>
        <div
          className={`box-sugeridos ${classic.classes}`}
          onClick={() => this.updateCicle('catalogo-classic', 'onMouseOver')}
          onMouseOver={() => this.updateCicle('catalogo-classic', 'onMouseOver')}
        >
          <Link to="/classic">
            <div className={`block-sugeridos ${classBlockSugeridos}`}></div>
            <p>Sugeridos Classic</p>
            <FaChevronRight className={`seta-direita ${classSetaSugeridos}`} />
          </Link>
        </div>
        <div
          className={`box-sugeridos ${exclusive.classes}`}
          onClick={() => this.updateCicle('catalogo-exclusive', 'onMouseOver')}
          onMouseOver={() => this.updateCicle('catalogo-exclusive', 'onMouseOver')}
        >
          <Link to="/exclusive">
            <div className={`block-sugeridos ${classBlockSugeridos}`}></div>
            <p>Sugeridos Exclusive</p>
            <FaChevronRight className={`seta-direita ${classSetaSugeridos}`} />
          </Link>
        </div>
        <div
          className={`box-sugeridos ${prime.classes}`}
          onClick={() => this.updateCicle('catalogo-prime', 'onMouseOver')}
          onMouseOver={() => this.updateCicle('catalogo-prime', 'onMouseOver')}
        >
          <Link to="/prime">
            <div className={`block-sugeridos ${classBlockSugeridos}`}></div>
            <p>Sugeridos Prime</p>
            <FaChevronRight className={`seta-direita ${classSetaSugeridos}`} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Catalogo;
