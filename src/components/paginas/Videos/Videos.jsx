import React from 'react'
import "./Videos.css";
import { VideosPanel } from '../../Videos/VideosPanel';

export function Videos() {
  return (
    <main className="videos">
        <h1>
            Divertite con mis videos 
        </h1>
        <p>En la tele, en eventos, en clubes de comedia. Mirá lo que hago y si te gusta compartilo</p>

        <VideosPanel></VideosPanel>


    </main>
  )
}


<iframe className="videos" width="560" height="315" src="https://www.youtube.com/embed/-s4AJjLWAZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>