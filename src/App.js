import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Swiper from 'react-id-swiper';
import './App.css';

//Components
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Catalogo from './components/catalogo/Catalogo';
import Classic from './components/classic/Classic';
import MenuLateral from './components/menu-lateral/MenuLateral';

class App extends Component {

  state = {
    slide: [
      {
        image: 'assets/images/abs-senior-fullscreen.jpg ',
        position: 0
      },
      {
        image: 'assets/images/residencial-classic-fullscreen.jpg',
        position: 1
      },
      {
        image: 'assets/images/seguro-mais-bradesco-exclusive-protecao-familiar-fullscreen.jpg',
        position: 2
      },
      {
        image: 'assets/images/bradesco-dental-ideal-mercado-fullscreen.jpg',
        position: 3
      },
      {
        image: 'assets/images/bradesco-multiprotecao-fullscreen.jpg',
        position: 4
      },
    ]
  }

  updateCategorySlides = (category) => {
    const {slide} = this.state;

    let newSlide = [
      {
        image: 'assets/images/seguro-mais-bradesco-exclusive-protecao-familiar-fullscreen.jpg',
        position: 0
      },
      {
        image: 'assets/images/abs-senior-fullscreen.jpg',
        position: 1
      },
      {
        image: 'assets/images/bradesco-multiprotecao-fullscreen.jpg',
        position: 2
      },
      {
        image: 'assets/images/bradesco-dental-ideal-mercado-fullscreen.jpg',
        position: 3
      },
      {
        image: 'assets/images/residencial-classic-fullscreen.jpg',
        position: 4
      },
    ]

    let updateSlide = newSlide.map((data, i) => {
      if(typeof slide[i] !== 'undefined'){
        data.position = slide[i].position;
      }
      return data;
    });

    if(category == 'exclusive') {
      console.log({slide: updateSlide})
      this.setState({
        slide: updateSlide
      });
    }
  }

  pudateSlide = (dados) => {
    this.setState(dados);
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/' render={(props) => (
              <section class="content">
                <div className="content-home">
                  <Slider slide={this.state.slide} pudateSlide={this.pudateSlide} />
                  <Catalogo updateCategorySlides={ this.updateCategorySlides } />
                </div>
              </section>
            )}/>
            <Route exact path='/classic' render={(props) => (
                <div>
                  <MenuLateral />
                  <section class="content">
                    <div className="content-home">
                      <Classic />
                    </div>
                  </section>
                </div>
            )}/>
          </Switch>
      </div>
    );
  }
}

export default App;
