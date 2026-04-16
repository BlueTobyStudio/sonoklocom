const RELEASE_DATE = new Date("2026-06-01");

function update_countdown() {
    const seconds = get_seconds_until(RELEASE_DATE);
    const minutes = get_minutes_until(RELEASE_DATE);
    const hours = get_hours_until(RELEASE_DATE);
    const days = get_days_until(RELEASE_DATE);

    const s = document.getElementById("sec");
    const m = document.getElementById("min");
    const h = document.getElementById("hours");
    const d = document.getElementById("days");

    if (s) {
        s.textContent = seconds;
    }
    if (m) {
        m.textContent = minutes;
    }
    if (h) {
        h.textContent = hours;
    }
    if (d) {
        d.textContent = days;
    }
}

function get_seconds_until(date) {
    const duration = (date - Date.now()) / 1000;
    const i = Math.floor(duration % 60);
    const s = String(i).padStart(2, '0');
    return s;
}

function get_minutes_until(date) {
    const duration = (date - Date.now()) / 1000;
    const i = Math.floor((duration % 3600) / 60);
    const s = String(i).padStart(2, '0');
    return s;
}

function get_hours_until(date) {
    const duration = (date - Date.now()) / 1000;
    const i = Math.floor((duration % (3600 * 24)) / 3600);
    const s = String(i).padStart(2, '0');
    return s;
}

function get_days_until(date) {
    const duration = (date - Date.now()) / 1000;
    const i = Math.floor(duration / (3600 * 24));
    const s = String(i).padStart(2, '0');
    return s;
}

update_countdown()
setInterval(update_countdown, 1000);