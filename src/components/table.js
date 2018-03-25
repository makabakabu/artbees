import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid';
import formatElapsedTime from 'formatElapsedTime';

const Table = ({ sequence }) => (
    <table border={1}>
        <tbody>
        {
            sequence.map((pieceData, index) => <TablePiece key={uuidv4()} pieceData={pieceData} index={index} />).reverse()
        }
        </tbody>
    </table>
);

const TablePiece = ({ pieceData, index }) => (
    <tr>
        <td>{ index.toString().padStart(2, '0')}</td>
        <td>{ formatElapsedTime({ elapsedMilliseconds: pieceData.get('start') }) }</td>
        <td>{ formatElapsedTime({ elapsedMilliseconds: pieceData.get('end') }) }</td>
    </tr>
);

const mapStateToProps = state => ({
    sequence: state.get('sequence'),
});

export default connect(mapStateToProps)(Table);
