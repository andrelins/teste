import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import './App.css';

//Components
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Catalogo from './components/catalogo/Catalogo';
import Classic from './components/classic/Classic';
import MenuLateral from './components/menu-lateral/MenuLateral';
import Ibook from './components/ibook/Ibook';

//providers
import * as API from './providers/Ibooks';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    slide: [
      {
        image: '/vendamais-ibooks/assets/images/abs-senior-fullscreen.jpg ',
        position: 0
      },
      {
        image: '/vendamais-ibooks/assets/images/residencial-classic-fullscreen.jpg',
        position: 1
      },
      {
        image: '/vendamais-ibooks/assets/images/seguro-mais-bradesco-exclusive-protecao-familiar-fullscreen.jpg',
        position: 2
      },
      {
        image: '/vendamais-ibooks/assets/images/bradesco-dental-ideal-mercado-fullscreen.jpg',
        position: 3
      },
      {
        image: '/vendamais-ibooks/assets/images/bradesco-multiprotecao-fullscreen.jpg',
        position: 4
      },
    ]
  }

  componentDidMount() {
    //this.getIbooks();
    console.log(this.props)
  }

  getIbooks = () => {
    API.getIbooks().then((data) => {
      console.log(data);
      this.setState({slide: data});
    });
  }

  updateCategorySlides = (category) => {
    const {slide} = this.state;

    //let newSlide = slide.filter((data) => data.category.toLowerCase() == category)

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
    console.log(this.props);
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' render={(props) => (
              <div>
                <Header {...props} />
                <section class="content">
                  <div className="content-home">
                    <Slider slide={this.state.slide} pudateSlide={this.pudateSlide} />
                    <Catalogo {...props} updateCategorySlides={ this.updateCategorySlides } />
                  </div>
                </section>
              </div>
            )}/>
            <Route exact path='/classic' render={(props) => (
                <div>
                  <Header {...props} />
                  <MenuLateral />
                  <section class="content">
                    <div className="content-home">
                      <Classic {...props} />
                    </div>
                  </section>
                </div>
            )}/>
          <Route exact path='/exclusive' render={(props) => (
              <div>
                <Header {...props} />
                <MenuLateral />
                <section class="content">
                  <div className="content-home">
                    <Classic />
                  </div>
                </section>
              </div>
          )}/>
          <Route exact path='/prime' render={(props) => (
              <div>
                <Header {...props} />
                <MenuLateral />
                <section class="content">
                  <div className="content-home">
                    <Classic />
                  </div>
                </section>
              </div>
          )}/>
        <Route exact path='/pessoa-juridica' render={(props) => (
            <div>
              <Header {...props} />
              <MenuLateral />
                <section class="content content-ibook">
                  <div className="content-home">
                    <Classic />
                  </div>
                </section>
            </div>
          )}/>
        <Route exact path='/outros' render={(props) => (
            <div>
              <Header {...props} />
              <MenuLateral />
                <section class="content content-ibook">
                  <div className="content-home">
                    <Classic />
                  </div>
                </section>
            </div>
          )}/>
          <Route exact path='/ibook' render={(props) => (
            <div>
              <Header {...props} />
              <MenuLateral />
                <section class="content content-ibook">
                  <div className="content-home">
                    <Ibook />
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
