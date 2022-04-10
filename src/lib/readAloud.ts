export const readAloud = (text: string) => {
    const msg = new SpeechSynthesisUtterance();
    msg.rate = 0.6;
    const modifiedText = text.split('').join(' ');
    msg.text = modifiedText;
    window.speechSynthesis.speak(msg);
}