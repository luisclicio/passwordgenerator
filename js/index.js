const areaToGenerate = document.querySelector('form#areaToGenerate');
const inputResult = document.querySelector('input#inputResult');
const btnCopy = document.querySelector('button#btnCopy');
const rangeSize = document.querySelector('input#rangeSize');
const sizeValue = document.querySelector('span#sizeValue');
const copyAlert = document.querySelector('div#copyAlert');

const generateRandomPassword = size => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+×=%_!@#$/()&*?-\\';
  let password = '';

  for (let i = 0; i < size; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }

  return password;
}

const copyToClipboard = valueToCopy => {
  const fakeInput = document.createElement('input');
  fakeInput.value = valueToCopy;
  document.body.appendChild(fakeInput);
  fakeInput.select();
  document.execCommand('copy');
  fakeInput.remove();
}

const showCurrentSize = () => sizeValue.textContent = rangeSize.value;

showCurrentSize();

rangeSize.addEventListener('input', showCurrentSize);

areaToGenerate.addEventListener('submit', event => {
  const size = rangeSize.value;
  inputResult.value = generateRandomPassword(size);
  event.preventDefault();
});

btnCopy.addEventListener('click', () => {
  const password = inputResult.value;
  if (!password) return;
  copyToClipboard(password);
  copyAlert.classList.add('visible');
  setTimeout(() => copyAlert.classList.remove('visible'), 2000);
});