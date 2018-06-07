<template>
  <div ref="video" id="video">
    <video id="my-player" class="video-js">
      <source src="static/cndns-banner-video-1.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import videojs from 'video.js/dist/video.es'
import 'video.js/dist/video-js.css'

export default {
  name: 'Video',
  mounted () {
    videojs('my-player', {
      controls: true,
      autoplay: true,
      preload: 'auto'
    })
  }
}
</script>

<style>
#video {
  height: 70vh;
}
#my-player{
  width: auto;
  height: 100%;
}
</style>
