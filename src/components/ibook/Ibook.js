import React, { Component } from 'react';
import { FaChevronRight, FaTimes, FaAngleDown } from "react-icons/fa";
import './Ibook.css';

//icons
import busca from '../../assets/icons/busca.svg';
import auto from '../../assets/icons/auto.svg';
import residencial from '../../assets/icons/residencial.svg';
import vida from '../../assets/icons/vida.svg';
import dental from '../../assets/icons/dental.svg';
import mic from '../../assets/icons/mic.svg';
import catalogo from '../../assets/icons/catologo.svg';
import saude from '../../assets/icons/saude.svg';
import file_classic from '../../assets/icons/file_classic_2.svg';

class Ibook extends Component {

  componentDidMount() {
    this.changeBg();
  }

  back = () => {
    window.history.back();
  }

  changeBg = () => {
    document.body.classList.remove('catalogo-classic');
    document.body.classList.remove('catalogo-exclusive');
    document.body.classList.remove('catalogo-prime');
    document.body.classList.add('black');
    //document.querySelector(".content-ibook").classList.add('black');
  }

  render() {
    return (
      <div class="container container-ibook">
        <div class="mask-bg-ibook">
          <img src="assets/images/mask-bg-detalhes.png" />
        </div>
        <div class="group border-bottom">
          <div class="breadcrumb">
            <ul>
              <li>
                Cassic
              </li>
              <li>
                <FaChevronRight className="arrow-right icon" />
                Vida
              </li>
              <li class="active">
                <FaChevronRight className="arrow-right icon" />
                Proteção Familiar
              </li>
            </ul>
          </div>
          <div class="close" onClick={() => this.back()}>
            <ul>
                <li>
                  Fechar
                </li>
                <li>
                  <FaTimes className="icon" />
                </li>
            </ul>
          </div>
        </div>

        <div class="dot-blue"></div>

        <div class="ibook-box-info">
          <h1>VIDA</h1>
          <h2>
            Seguro Mais Bradesco <br></br>
            Classic Proteção Familiar
          </h2>

          <div class="border-bottom line"></div>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <div class="border-bottom line"></div>

          <div class="footer">
            <ul>
              <li class="icon">
                <img className="icon-lista" src={file_classic} />
              </li>
              <li class="download border-none">
                Download
              </li>
              <li class="size">
                200<span>MB</span>
              </li>
              <li class="pages">
                <span>54</span> Páginas
              </li>
              <li class="arrow border-none">
                <FaAngleDown className="icon" />
              </li>
            </ul>
          </div>
        </div>

        <div class="close">
          <ul>
              <li>
                <a href="#">Preview</a>
              </li>
              <li>
                <FaChevronRight className="arrow-right icon" />
              </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Ibook;
