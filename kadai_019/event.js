const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  const text2 = document.createElement('h2');
  text2.textContent = 'ボタンをクリックしました';
  button_area.appendChild(text2);
  text.style.display = 'none';  
});
