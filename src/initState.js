import { Map, List } from 'immutable';

const initState = Map({
    stopTime: 0,
    activeTime: 0,
    sequence: List([]),
    viewMode: 'start',
});

export default initState;
