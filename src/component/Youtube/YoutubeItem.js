import React from 'react'

export default function Youtube(props) {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.img} alt="" />
      </div>
      <div className='youtube-footer'>
        <div className="avatar">
          <img src={props.avatar} alt="" className='youtube-avatar'/>
        </div>
        <div className="youtube-info">
        <h3 className="youtube-title">{props.title}</h3>
        <p className="youtube-author">{props.text}</p>
        </div>
      </div>
    </div>
  )
}
