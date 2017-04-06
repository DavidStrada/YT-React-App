import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  let image = video.snippet.thumbnails.default.url,
      title = video.snippet.title

  return (
    <li onClick={ () => onVideoSelect(video) }>
      <div className="media mb-3">
        <img className="d-flex mr-3" src={image} alt=""/>
        <div className="media-body">
          <h5 className="mt-0">{title}</h5>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
