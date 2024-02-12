import React from 'react'

import './CopyRight.css'

import { FootersLinksData } from '../../Data/Data'

export default function CopyRight() {
  return (
    <div className='footer-copyright'>
        <div className="container copyright-container">
            <div className='copy'>CopyRight ©  Cruz Roja Huejutla de Reyes 2024 </div>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item,index)=>{
                       return(
                        <a href={item.link} key={index}>
                        <img className='redes-sociales' src={item.icon} />
                        </a>
                       )
                    })
                }
            </div>
        </div>
    </div>
  )
}
