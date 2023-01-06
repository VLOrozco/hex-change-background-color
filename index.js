const hexValue = document.getElementById('hex-value');
const btn = document.getElementById('btn');
const body = document.body;

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2,8);
  document.body.style.backgroundColor = "#" + randomColor;
  hexValue.innerHTML = "#" + randomColor;
};

btn.addEventListener('click', generateColor);
