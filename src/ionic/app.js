const app = document.querySelector('ion-app');
const langButtons = document.querySelectorAll('ion-button');
const contentTitle = document.querySelector('ion-card-title');
const contentBody = document.querySelector('ion-card-content p');
const btn = document.querySelector('ion-button');

let lang = 'zh';

function setLanguage(newLang) {
    lang = newLang;
    langButtons.forEach(button => button.hidden = button.textContent.includes(lang));
    if (lang === 'en') {
        app.classList.remove('ion-color-primary');
        app.classList.add('ion-color-secondary');
        contentTitle.textContent = 'Welcome to Fountain';
        contentBody.textContent = 'Here, you can play online games with players from all over the world. Please click the button below to enter the game.';
    } else if (lang === 'zh') {
        app.classList.remove('ion-color-secondary');
        app.classList.add('ion-color-primary');
        contentTitle.textContent = '欢迎来到旦曦甘泉';
        contentBody.textContent = '在这里，您可以和世界各地的玩家一起畅玩网络游戏。请点击下面的按钮进入游戏。';
    }
}

function enterGame() {
    window.location.href = window.location.href + "/play.html";
}