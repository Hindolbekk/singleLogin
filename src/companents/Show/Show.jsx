import React from 'react'
import showImg from '../../assets/img/showImg.png'
import './Show.scss'
function Show() {
  return (
      <div className="Show">
        <div className="Show__inner">
            <img className='show__img' src={showImg} alt="" />
            <h2 className='show__title'>
              Better place to find your 
              interior needs. 
            </h2>
        </div>
    </div>
  )
}
export default Show