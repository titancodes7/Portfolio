const whatsappIcon = document.querySelector('.whatsapp-chat img');
const whatsappPopup = document.getElementById('whatsappPopup');

whatsappIcon.addEventListener('click', function () {
    whatsappPopup.style.display = 'block';
});

function closeChat() {
    whatsappPopup.style.display = 'none';
}
