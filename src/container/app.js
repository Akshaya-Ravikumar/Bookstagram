import React, { PureComponent } from 'React';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';

export class AppComponent extends PureComponent {
  componentWillMount() {
      this.props.loadName('Akshaya');
      this.props.loadMessage('Welcome');
  }
  render() {
    const { name, message } = this.props;
    return (
      <React.Fragment>
        <div> Hi {name} </div>
        <div> {message} </div>
      </React.Fragment>
    );
  }
}

AppComponent.propTypes = {
  name: propTypes.string,
  message: propTypes.string,
  loadName: propTypes.func.isRequired,
  loadMessage: propTypes.func.isRequired,
}

AppComponent.defaultProps = {
  name: '',
  message: '',
}

export default AppComponent;
