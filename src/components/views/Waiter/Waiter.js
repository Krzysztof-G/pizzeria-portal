import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    changeStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){
    const { changeStatus } = this.props;
    const actionDescribe = ['free', 'thinking', 'ordered', 'prepared', 'delivered', 'paid'];
    const insertActionDescribe = (status) => {
      const nextIndex = actionDescribe.indexOf(status)+1;
      return nextIndex < actionDescribe.length
        ? actionDescribe[nextIndex]
        : actionDescribe[0];
    };

    switch (status) {
      case 'free':
        return (
          <Button onClick={() => changeStatus(id, 'thinking')}>
            {insertActionDescribe(status)}
          </Button>
        );
      case 'thinking':
        return (
          <Button onClick={() => changeStatus(id, 'ordered')}>
            {insertActionDescribe(status)}
          </Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => changeStatus(id, 'prepared')}>
            {insertActionDescribe(status)}
          </Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => changeStatus(id, 'delivered')}>
            {insertActionDescribe(status)}
          </Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => changeStatus(id, 'paid')}>
            {insertActionDescribe(status)}
          </Button>
        );
      case 'paid':
        return (
          <Button onClick={() => changeStatus(id, 'free')}>
            {insertActionDescribe(status)}
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
