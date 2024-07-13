window.Telegram.WebApp.ready();

document.getElementById('getUserInfo').addEventListener('click', function() {
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        document.getElementById('firstName').textContent = user.first_name || 'Не указано';
        document.getElementById('lastName').textContent = user.last_name || 'Не указано';
        document.getElementById('username').textContent = user.username || 'Не указано';
        document.getElementById('userInfo').classList.remove('hidden');
    } else {
        alert('Не удалось получить информацию о пользователе.');
    }
});
