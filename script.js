async function startStream(options) {
  const devices = navigator.mediaDevices;
  const stream = await devices.getDisplayMedia(options);
  
  return stream;
}


async function stopStream(video) {
  const devices = navigator.mediaDevices;
  const srcObject = video.srcObject;
  
  if (!srcObject) return;
  
  const tracks = srcObject.getTracks(); 
  tracks.forEach(track => track.stop());
  video.srcObject = null;
}


(async () => {
  const streamVideo = document.querySelector('.main-stream-video');
  const startStreamButton = document.querySelector('.stream-start-button');
  const stopStreamButton = document.querySelector('.stream-stop-button');
  
  startStreamButton.onclick = async () => {
    const stream = await startStream();
    streamVideo.srcObject = stream;
  };
  
  stopStreamButton.onclick = () => stopStream(streamVideo);
})();