import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;
  const videoDesc = video.snippet.title;
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left video-item">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading"> {videoDesc} </div>
        </div>        
      </div>      
    </li>
  );
}

export default VideoListItem;