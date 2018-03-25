import { Map } from 'immutable';

const app = (state, action) => {
    switch (action.type) {
        case 'START':
            return state.set('viewMode', 'stop_lap');

        case 'STOP':
            state = state.set('activeTime', action.activeTime);
            return state.set('viewMode', 'resume_reset');

        case 'RESUME':
            return state.set('viewMode', 'stop_lap');

        case 'RESET':
            state = state.set('viewMode', 'start');
            state = state.set('stopTime', 0);
            return state.set('activeTime', 0);

        case 'LAP':
            state = state.update('sequence', sequence => sequence.push(Map({
                start: state.get('stopTime'),
                end: action.stopTime,
            })));
            return state.set('stopTime', action.stopTime);

        default:
            return state;
    }
}

export default app;
