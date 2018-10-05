import React, { Component } from 'react';
import './ContentNews.css';

//icons
import file_classic from '../../../assets/icons/file_classic.svg';

const ContentNews = () => {
  return (
    <div className="content-news">
      <div className="box-thumb-news">
        <img src="assets/images/abs-senior-fullscreen.jpg" />
      </div>
      <div className="box-title-news">
        <div className="block-news-title"></div>
        <p>Prime</p>
        <span>Proteção Familiar</span>
      </div>
      <div className="box-count-news">
        <p className="tempo-news">2 Semanas Atrás</p>
        <hr />
        <img src={file_classic} />
        <p className="count-pages-news">54 <span>Páginas</span></p>
      </div>
    </div>
  )
}

export default ContentNews;
