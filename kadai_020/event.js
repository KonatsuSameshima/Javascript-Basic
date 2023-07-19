const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text_clicked = document.getElementById('text_clicked');

btn.addEventListener('click', () => {
  setTimeout(()=> {
    text.style.display = 'none';
    text_clicked.style.display = 'block';
  }, 2000);
});

