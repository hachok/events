import Messages from './component';
import {connect} from 'react-redux';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Messages);