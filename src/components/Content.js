import React from 'react';
import Advice from './Advice';
import Pic from '../img/monster-lg.png';

const Content = () => {
  return (
    <section className="content">
      <Advice />
      <img src={Pic} alt="purple monster" className="content__image" />
    </section>
  )
}

export default Content;
