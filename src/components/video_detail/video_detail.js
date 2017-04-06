import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return (
      <div>Loading...</div>
    )
  }

  let description = video.snippet.description,
      title = video.snippet.title,
      videoId = video.id.videoId,
      url = `//www.youtube.com/embed/${videoId}`

  return (
    <div className="col-lg-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
