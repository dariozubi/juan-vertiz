import React from "react"
import { navigate } from "gatsby"

import workStyles from "./work.module.css"

const Work = ({ text, year, image, link, side="right" }) => {
  if (side === "right")
    return (
      <div 
        className={workStyles.container}
        role="button"
        tabIndex={0}
        onClick={ e => {
          e.preventDefault(); 
          navigate(link);
        }}
        onKeyDown={ e => {
          e.preventDefault(); 
          if (e.keycode === 87){            
            navigate(link);
          }
        }}
      >
        <div className={workStyles.image}>
          {image}
        </div>
        <div className={workStyles.text}>
          <div className={workStyles.textContainer}>
              <h6>{text}<br/>{year}</h6>
          </div>
        </div>
      </div>
      )
  else
      return (
        <div 
          className={workStyles.container} 
          role="button"
          tabIndex={0}
          onClick={ e => {
            e.preventDefault(); 
            navigate(link);
          }}
          onKeyDown={ e => {
          e.preventDefault(); 
          if (e.keycode === 87){            
            navigate(link);
          }
        }}
        >
          <div className={workStyles.text}>
            <div className={workStyles.textContainer}>
                <h6>{text}<br/>{year}</h6>
            </div>
          </div>
          <div className={workStyles.image}>
            {image}
          </div>
        </div>
      )
}

export default Work;