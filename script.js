function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const doors = document.querySelectorAll('.door');

doors.forEach((door, index) => {
  door.addEventListener('mouseenter', () => {
    if (index % 2 === 0) {
      changeBackground('#D1E7E0');
    } else {
      changeBackground('#E4EFCB');
    }
  });

  door.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = '';
  });
});

window.onload = function() {
  alert('Happy birthday ya 7abibti, I am the happiest person in the world because I have you. You are my heart, my soul and my life and I am very lucky to have you in my life, ktkotty\n \nLove you ya 8mr ❤️');
};
