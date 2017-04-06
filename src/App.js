import React, { Component } from 'react';
// import {debounce} from 'lodash';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar/search_bar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import YTSeach from 'youtube-api-search';
// import { createStore } from 'redux'


const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// console.log(createStore)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      term: 'surfboards',
      selectedVideo: null
    }

    this.videSearch(this.state.term)
  }

  videSearch(term) {
    YTSeach({ key: YOUTUBE_API_KEY, term }, videos => {
      // State changed re-render child-component
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    // const videoSearch = debounce(term => {this.videSearch(term)}, 0)
    const videoSearch = (term) => {this.videSearch(term)}
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">React Videos App</h1>
              <SearchBar onSearchTermChange={videoSearch} term={this.state.term}/>
            </div>
          </div>
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
