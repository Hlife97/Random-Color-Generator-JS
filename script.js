const btnElement = document.querySelector('#btn');
const resultElement = document.querySelector('#result')
const copyBtnElement = document.querySelector('#copyBtn')

const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    resultElement.innerHTML = randomColor
    document.body.style.backgroundColor = randomColor
}

const copyClipBoard = () => {
    navigator.clipboard.writeText(resultElement.innerHTML)
}

btnElement.addEventListener('click', generateColor)
copyBtnElement.addEventListener('click', copyClipBoard)