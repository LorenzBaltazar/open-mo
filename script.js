function openDoor() {
  // Open the doors
  document.querySelector('.left-door').style.transform = 'translateX(-100%)';
  document.querySelector('.right-door').style.transform = 'translateX(100%)';

  // Get the video
  const video = document.getElementById('secretVideo');

  // Show the video
  video.style.display = 'block';

  // Manually play the video
  video.play().catch(err => {
    console.error('Video play failed:', err);
  });
}
