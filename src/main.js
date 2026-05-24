import './style.css';
import dayjs from 'dayjs';

const form = document.getElementById('birthdayForm');
const dialog = document.getElementById('resultDialog');
const dialogContent = document.getElementById('dialogContent');
const closeBtn = document.getElementById('closeDialog');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDateVal = document.getElementById('birthDate').value;
    if (!inputDateVal) return;
    const today = dayjs().startOf('day');
    const birthDate = dayjs(inputDateVal).startOf('day');
    const daysSinceBirth = today.diff(birthDate, 'days');

    if (daysSinceBirth < 0) {
        alert("Data urodzenia nie może być w przyszłości!");
        return;
    }
    const isBirthdayToday = today.format('MM-DD') === birthDate.format('MM-DD');

    if (isBirthdayToday) {
        alert("wszystkiego najlepszego!");
    }
    dialogContent.innerHTML = '<p>Od Twojej daty urodzenia minęło już <strong>' + daysSinceBirth + '</strong> dni.</p>';

    dialog.showModal();
});

closeBtn.addEventListener('click', function() {
    dialog.close();
});