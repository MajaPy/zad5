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

    // Użycie funkcji diff podanej w zadaniu
    const daysSinceBirth = today.diff(birthDate, 'days');

    if (daysSinceBirth < 0) {
        alert("Data urodzenia nie może być w przyszłości!");
        return;
    }

    // Sprawdzenie czy urodziny są dzisiaj
    const isBirthdayToday = today.format('MM-DD') === birthDate.format('MM-DD');

    if (isBirthdayToday) {
        alert("wszystkiego najlepszego!");
    }

    // Wrzucenie tekstu do elementu dialog
    dialogContent.innerHTML = '<p>Od Twojej daty urodzenia minęło już <strong>' + daysSinceBirth + '</strong> dni.</p>';
    
    // Otwarcie dialogu
    dialog.showModal();
});

// Zamykanie przyciskiem x
closeBtn.addEventListener('click', function() {
    dialog.close();
});