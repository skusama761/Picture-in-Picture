const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select a media stream, pass to video element,  then play
const selectMediaScreen = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (error) {
    console.log("whoops, error at : ", error);
  }
};

// Event Listeners
button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;

  // Start Picture-in-Picture
  await videoElement.requestPictureInPicture();

  //   Button reset
  button.disabled = false;
});

// On Load
selectMediaScreen();
