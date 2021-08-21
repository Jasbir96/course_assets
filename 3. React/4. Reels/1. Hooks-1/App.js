import React, { Component } from 'react';
import Video from './pep_pop/src/Components/Video';
import "../node_modules/video-react/dist/video-react.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import vid1 from './Components/fashion.mp4';
import vid2 from './Components/frog.mp4';
import vid3 from './Components/tree.mp4';
import vid4 from './Components/water.mp4';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sources:[
        {url:vid1,
         id:'a'},
         {url:vid2,
         id:'b'},
         {url:vid3,
         id:'c'},
         {url:vid4,
         id:'d'}
      ],  
    }
    const callback =  entries => {
     console.log(entries);
      entries.forEach(element => {
        let child = element.target.childNodes[0];
        let id = child.getAttribute("id");
       let el= document.getElementById(`${id}`);   
        el.play().then(()=>{
          if( !el.paused && element.isIntersecting!=true ){
            el.pause();
          }
        })
      });
    };
    this.observer = new IntersectionObserver(callback, {
      threshold: 0.9,
    });
  }
  componentDidMount()
  {
    if(typeof window == 'object')
    {
      console.log(this.observer.root)
      let elements = document.querySelectorAll('.videos')
      // console.log(elements)
      elements.forEach(el=>{
        // console.log(el);
        this.observer.observe(el)
      })
  }
  }
render()
{
  return (
   <div>
     <div  className='video-container'>
       <div  className="videos">
       <Video  source={this.state.sources[0].url} id={this.state.sources[0].id}/>
       </div>

       <div className="videos">
       <Video  source={this.state.sources[1].url} id={this.state.sources[1].id}/>
   
       </div>

       <div className="videos">
       <Video source={this.state.sources[2].url} id={this.state.sources[2].id}/>
      
       </div>

       <div  className="videos">
       <Video  source={this.state.sources[3].url} id={this.state.sources[3].id}/>
       </div>
       </div>
     </div>
  );
    }

  }
export default App;
