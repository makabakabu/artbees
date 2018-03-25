import React from 'react';
import formatElapsedTime from 'formatElapsedTime';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './components/table';
import Operations from './components/operations';

const App = ({ activeTime, stopTime, sequence  }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div id="App" style={ styles.main }>
            <div id='activeTime' style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '20px' }}>{ formatElapsedTime({ elapsedMilliseconds: activeTime }) }</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '20px' }}>{ formatElapsedTime({ elapsedMilliseconds: stopTime }) }</div>
            <div style={{ marginTop: sequence.size === 0 ? '0px' : '20px' }}>
                { sequence.size === 0 ? <div/> : <Table /> }
            </div>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Operations />
            </div>
        </div>
    </div>
);

App.propTypes = {
    activeTime: PropTypes.number.isRequired,
    stopTime: PropTypes.number.isRequired,
};

const styles = {
    main: {
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px dashed black'
    }
}

const mapStateToProps = state => ({
    activeTime: state.get('activeTime'),
    stopTime: state.get('stopTime'),
    sequence: state.get('sequence'),
});

export default connect(mapStateToProps)(App);
