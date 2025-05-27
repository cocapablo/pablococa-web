import React from 'react'

export function Video({id, titulo, descripcion, src}) {
  return (
    <iframe width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  )
}
// Note: This component is a simple wrapper for embedding YouTube videos.
// It does not include any additional styling or structure.