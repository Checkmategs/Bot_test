window.Telegram.WebApp.ready();

document.getElementById('getUserInfo').addEventListener('click', function() {
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        const avatar = document.getElementById('avatar');
        if (user.photo_url) {
            avatar.src = user.photo_url;
            avatar.classList.remove('hidden');
        }
        document.getElementById('firstName').textContent = user.first_name || 'Не указано';
        document.getElementById('lastName').textContent = user.last_name || 'Не указано';
        document.getElementById('username').textContent = user.username || 'Не указано';
        document.getElementById('userInfo').classList.remove('hidden');
    } else {
        alert('Не удалось получить информацию о пользователе.');
    }
});
