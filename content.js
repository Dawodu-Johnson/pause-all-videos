function pauseAllVideos() {
  const videos = document.querySelectorAll("video");

  for (const video of videos) {
    if (!video.paused && !video.ended && video.readyState > 2) {
      video.pause();
    }
  }
}

pauseAllVideos();
