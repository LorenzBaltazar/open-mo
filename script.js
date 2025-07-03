function openDoor() {
  // Animate doors
  document.querySelector('.left-door').style.transform = 'translateX(-100%)';
  document.querySelector('.right-door').style.transform = 'translateX(100%)';

   document.querySelector('.top-text').textContent = "Araaaayyy Koooo!";

  // Show video and play
  const video = document.getElementById('secretVideo');
  const wrapper = document.getElementById('videoWrapper');

  wrapper.style.display = 'block';

  video.play().catch(err => {
    console.error('Video play failed:', err);
  });
}
