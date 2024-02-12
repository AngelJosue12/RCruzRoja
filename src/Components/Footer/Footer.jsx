import React from 'react'

import './Footer.css'

import { Link } from 'react-router-dom'

import { FootersLinksData } from '../../Data/Data'

import CopyRight from '../CopyRight/CopyRight'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/*.......................About Params................. */}
          <div>
            <h4>Conocenos</h4>
            <ul className="about-params param-links">
                {
                  FootersLinksData.Nosotros.map(({link, linkname}, index)=>{
                    return(
                        <li key={index}><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
            </ul>
          </div>
          {/*.......................Discover Params................. */}
          <div>
            <h4>Contenido</h4>
            <ul className="about-params param-links">
                {
                  FootersLinksData.Contenido.map(({link, linkname}, index)=>{
                    return(
                        <li key={index}><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
            </ul>
          </div>
      
          {/*.......................Help Params................. */}
          <div>
            <h4>Ayuda</h4>
            <ul className="Help-params param-links">
                {
                  FootersLinksData.Help.map(({link, linkname}, index)=>{
                    return(
                        <li key={index}><Link to={link}>{linkname}</Link></li>
                    )
                  })
                }
            </ul>
          </div>
      </div>
      <CopyRight/>
    </footer>
  )
}
