const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const secondsEl = document.getElementById("segundos");

const limite = "31 Dec 2023";

function countdown() {

    const dataLimite = new Date(limite);
    const dataAtual = new Date();

    const totalSeconds = (dataLimite - dataAtual) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    diasEl.innerHTML = formatTime(days);
    horasEl.innerHTML = formatTime(hours);
    minutosEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();
setInterval(countdown,1000);