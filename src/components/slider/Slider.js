import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Slider.css';

class Slider extends Component {

  static propTypes = {
    pudateSlide: PropTypes.func.isRequired,
  }

  constructor(slide){
    super();
  }

  componentDidMount() {
    this.timerSlide();
  }

  timerSlide = () => {
    setInterval(() => {
      this.orderSlide();
    }, 3000);
  }

  orderSlide = () => {
    const {slide} = this.props;

    const newSlide = slide.map((data, i) => {
      if(data.position == 0){
        data.position = (slide.length - 1);
      }else{
        data.position = (data.position - 1) ;
      }
      return data;
    });

    this.props.pudateSlide({slide})
  }

  render() {

    const {slide} = this.props;

    return (
      <div id="slider">
        <div class="dp-wrap">
          <div id="dp-slider">
            { slide.map((data, i) => (
              <div key={i} class="dp_item" data-position={data.position} >
                <div class="dp-img">
                    <img class="img-fluid" src={data.image} alt="investing" />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
