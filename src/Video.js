import React, {Component} from 'react';
import queryString from 'query-string';
import VideoList from './VideoList';

class Video extends Component{
    
    constructor(props){
        super(props);
        const {SEARCH_URL, API_KEY } = this.props;
        this.state = { param: {   part: 'snippet',
                type: 'video',
                q: null,
                key: this.props.API_KEY,
                regionCode: 'US'
            },
            videos: [ ]
        }
    }

    fetchApi(){
        console.log( this.props.SEARCH_URL);
        fetch(this.getApiUrl())
            .then( resp => resp.json() )
            .then( resp => {
                const videos = resp.items.map(createVideo)
                    this.setState({ videos })
                console.log(this.state.videos);
            } )
            .catch( err => (
                console.log('an error occured' + err )
                )
            )
        
    }

    getApiUrl(){
        const {search} = this.props;
        console.log(this.props.SEARCH_URL + '?' + queryString.stringify(this.state.param));
        return this.props.SEARCH_URL + '?' + queryString.stringify(this.state.param) ;
    }

    getSearch(evt){
    this.setState ( { param: {   part: 'snippet',
            type: 'video',
            q: evt.target.value,
            key: this.props.API_KEY,
            regionCode: 'US'
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.fetchApi();
    }

    render(){
        return(
            <form className="video" onSubmit={this.handleSubmit.bind(this)}>
                <input onChange={this.getSearch.bind(this)} placeholder="search" />
                {/*<button onClick={this.fetchApi.bind(this)}> Go </button> */}
                <input type='submit' value='Go.' />
                {
                    this.state.videos.map( video => 
                        <VideoList video={video} key={video.id} title={video.title}/>
                     )
                }
            </form>
        )
    }
}


function createVideo(item) {
    return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.default.url
    }
}

export default Video;
