import React, { useState, useEffect } from 'react'
import './App.css';
import vid1 from './Components/fashion.mp4';
import vid2 from './Components/frog.mp4';
import vid3 from './Components/tree.mp4';
import vid4 from './Components/water.mp4';

let observer;
function App() {
    let [videos, setVideos] = useState([{
        url: vid1,
        id: 'a'
    },
    {
        url: vid2,
        id: 'b'
    },
    {
        url: vid3,
        id: 'c'
    },
    {
        url: vid4,
        id: 'd'
    }]);
    const callback = entries => {
        // console.log(entries);
        entries.forEach(element => {
            let child = element.target.childNodes[0];
            console.log(child.id)
            child.play().then(() => {
                if (!child.paused && element.isIntersecting != true) {
                    child.pause();
                }
            })
        })
    }
    useEffect(function () {
        observer = new IntersectionObserver(callback, {
            
            root: null,
            threshold: 0.9,
        });
        let elements = document.querySelectorAll('.videos')
        elements.forEach(el => {
            observer.observe(el);
        })
    }, [])
    return (
        <div>
            <div className="container"></div>
            <div className='video-container'>
                <div className="videos">
                    <Video source={videos[0].url} id={videos[0].id} />
                </div>
                <div className="videos">
                    <Video source={videos[1].url} id={videos[1].id} />
                </div>
                <div className="videos">
                    <Video source={videos[2].url} id={videos[2].id} />
                </div>
                <div className="videos">
                    <Video source={videos[3].url} id={videos[3].id} />
                </div>
            </div>
        </div>
    );
}
function Video(props) {
    const handleMute = (e) => {
        e.preventDefault()
        e.target.muted = !e.target.muted
    }
    return (
        <>
            <video className='video-styles'
                onClick={(e) => handleMute(e)} controls
                id={props.id} muted="muted" type="video/mp4" >
                <source src={props.source}
                    type="video/webm" />
            </video>
        </>
    )
}
export default App;