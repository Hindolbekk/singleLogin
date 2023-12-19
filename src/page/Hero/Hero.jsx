import React from 'react'
import './Hero.scss'
import myImg from '../../assets/img/my_img.jpg'
function Hero() {
  return (
    <div className='Hero'>
        <img src={myImg} alt="" />
    </div>
  )
}

export default Hero