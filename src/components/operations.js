import React from 'react';
import { connect } from 'react-redux';
import formatElapsedTime from 'formatElapsedTime';

let interval;
let peroid = 0;
const Operations = ({ viewMode, activeTime, start, stop, resume, reset, lap }) => {
    switch (viewMode) {
        case 'start':
            return <button onClick={start}>Start</button>;

        case 'stop_lap':
            return (
                <div>
                    <button onClick={stop}>Stop</button>
                    <button onClick={lap}>Lap</button>
                </div>
            );

        case 'resume_reset':
            return (
                <div>
                    <button onClick={resume({ activeTime })}>Resume</button>
                    <button onClick={reset}>Reset</button>
                </div>
            );

        default:
            return <div />

    }
}

const mapStateToProps = state => ({
    viewMode: state.get('viewMode'),
    activeTime: state.get('activeTime'),
});

const mapDispatch = dispatch => ({
    start: () => {
        dispatch({
            type: 'START',
        });
        let time = (new Date()).getTime();
        interval = setInterval(() => {
            peroid = (new Date()).getTime() - time;
            document.getElementById('activeTime').innerText = formatElapsedTime({ elapsedMilliseconds: peroid });
        }, 1);
    },
    stop: () => {
        clearInterval(interval);
        dispatch({
            type: 'STOP',
            activeTime: peroid,
        });
    },
    lap: () =>
        dispatch({
            type: 'LAP',
            stopTime: peroid
        }),
    resume: ({ activeTime }) => () => {
        dispatch({
            type: 'RESUME',
        });
        let time = (new Date()).getTime();
        interval = setInterval(() => {
            peroid = activeTime + (new Date()).getTime() - time;
            document.getElementById('activeTime').innerText = formatElapsedTime({ elapsedMilliseconds: activeTime + (new Date()).getTime() - time });
        }, 1);
    },
    reset: () =>
        dispatch({
            type: 'RESET',
        }),
});

export default connect(mapStateToProps, mapDispatch)(Operations);
