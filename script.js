document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const dynamicText = document.getElementById('dynamicText');

    let messageIndex = 0;
    const messages = [
        "ここは最初のメッセージです。",
        "ボタンがクリックされました！",
        "新しいメッセージが表示されました。",
        "ウェブサイトへようこそ！"
    ];

    changeTextButton.addEventListener('click', () => {
        messageIndex = (messageIndex + 1) % messages.length;
        dynamicText.textContent = messages[messageIndex];
    });
});
