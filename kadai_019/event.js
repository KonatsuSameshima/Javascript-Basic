const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {  //btnをクリックするとコンソールへ表示
  const text2 = document.createElement('h4');  //h4要素を新しく作成する
  text2.textContent = 'ボタンをクリックしました';  //h4要素に'ボタンをクリックしました'とテキストを追加する
  text.appendChild(text2);  //text要素の子要素としてh4(text2)要素を末尾に追加する
});

