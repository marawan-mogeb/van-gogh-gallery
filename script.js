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
  alert('By Marawan');
};
