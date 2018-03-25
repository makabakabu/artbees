const formatElapsedTime = ({ elapsedMilliseconds }) => {
    const formatTime = ({ time, format }) => time >= 60 ?
    formatTime({ time: Math.floor(time / 60), format: `${Math.floor(time % 60).toString().padStart(2, '0')}:${format}` }) :
    `${Math.floor(time % 60).toString().padStart(2, '0')}:${format}`;

    if (Number.isInteger(elapsedMilliseconds)) {
        elapsedMilliseconds %= 60 * 60 * 60 * 1000;
        return formatTime({ time: Math.floor(elapsedMilliseconds / (1000 * 60)), format: `${(Math.floor(elapsedMilliseconds / 1000) % 60).toString().padStart(2, '0')}.${Math.floor((elapsedMilliseconds / 10) % 100).toString().padStart(2, '0')}` });
    }
    return '00:00.00';
}

export default formatElapsedTime;
