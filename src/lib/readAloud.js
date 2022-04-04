export const readAloud = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.rate = 0.7;
    const modifiedText = text.split('').join(' ');
    msg.text = modifiedText;
    window.speechSynthesis.speak(msg);
}