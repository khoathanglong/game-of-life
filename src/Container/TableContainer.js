import Table from '../Component/Table';
import {connect} from 'react-redux';
import {addLive } from '../Action/Action';


const mapStateToProps = state => {
  return {coordinate: state.reducer}};
const mapDispatchToProps = dispatch =>{
  return {
    onClick: (x,y) => dispatch(addLive(x,y))
  }
}
const TableContainer= connect(mapStateToProps,mapDispatchToProps)(Table);

export default TableContainer