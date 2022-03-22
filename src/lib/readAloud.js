export const readAloud = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.rate = 0.4;
    // const modifiedText = text;
    const modifiedText = text.split('').join(' ');
    msg.text = modifiedText;
    window.speechSynthesis.speak(msg);
}