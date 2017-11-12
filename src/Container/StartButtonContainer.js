import {connect} from 'react-redux';
import StartButton from '../Component/StartButton'

const mapStateToProps = state => { //get State disable for the Button to use
  return {disable: state.disable, counter:state.counter}
}
const StartButtonContainer=connect(mapStateToProps)(StartButton)

export default StartButtonContainer