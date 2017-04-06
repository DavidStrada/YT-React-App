import React from 'react'
import VideoListItem from '../video_list_item/vieo_list_item'

const VideoList = (props) => {
  return (
    <div className="col-lg-4">
      <ul className="list-unstyled">
        {props.videos.map(video => (
          <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
        ))}
      </ul>
    </div>
  )
}

export default VideoList
