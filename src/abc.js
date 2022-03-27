export const Abc = () => {
    // console.log('abc');

    const handleClick = (e) => {
        const a = e.clipboardData.getData('text/plain');
        console.log(a);

    }
    return <button onClick={(e)=> handleClick(e)}>xxx</button>
}