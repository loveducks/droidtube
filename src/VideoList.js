import React, {Component} from 'react';

const VideoList = (props) => {
    const {video, title} = props;
    {/*return <div> { 'https://youtube.com/watch?=' + video.id } </div>;*/} 
    return <div className="videolist">
            <span>{title}</span>
            <iframe id="ytplayer" type="text/html" 
            src={ 'https://www.youtube.com/embed/' + video.id + '?autoplay=0&showinfo=0'}
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
        </div>;
}

export default VideoList; 

