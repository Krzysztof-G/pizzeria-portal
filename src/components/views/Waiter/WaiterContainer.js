import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeStatusInApi } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (id, status) => dispatch(changeStatusInApi(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
