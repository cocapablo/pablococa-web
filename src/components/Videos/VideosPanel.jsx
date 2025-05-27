import React from 'react';
import { Video } from './Video.jsx';
import { useVideos } from './hooks/useVideos.js';

export function VideosPanel() {
  const { videos, error } = useVideos();
      
      //Error
      if (error) {
          return (
              <section className="videos-panel">   
                  <h2>Error al cargar los videos</h2>
              </section>
          )
      }   
      
      console.log(videos);
  
      return (
        <section className="videos-panel">
        {
            videos.map(video => {
                return <Video key={video.id} id={video.id} titulo={video.titulo} descripcion={video.descripcion} src={video.src}></Video>
            })
        }

        </section>
      )
}
