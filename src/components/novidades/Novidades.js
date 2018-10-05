import React, { Component } from 'react';
import './Novidades.css';

//components
import ContentNews from './content-news/ContentNews';

const Novidades = () => {
  return (
    <section className="box-news">
      <div className="box-header-news">
        <p>Adicionados Recentemente</p>
        <span>( 10 Ibooks )</span>
      </div>
      <ContentNews />
      <ContentNews />
      <ContentNews />
      <ContentNews />
    </section>
  )
}

export default Novidades;
