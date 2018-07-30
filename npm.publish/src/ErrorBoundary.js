import * as React from 'react';
import Dialog from './ErrorDialogComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class ErrorBoundary extends React.Component{

  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDescription: '', open: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorDescription: error, open: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={this.style}>
          <MuiThemeProvider>
            <Dialog title={<div style={this.style}>{this.props.errorTitle}</div>} body={this.props.errorText} buttonType={this.props.buttonType} buttonLabel={this.props.buttonLabel} onClick={this.props.onClick} closeOnClick={this.props.closeOnClick} modal={this.props.modal} autoScrollBodyContent={this.props.autoScrollBodyContent} customContentStyle={this.props.customContentStyle} />
          </MuiThemeProvider>
        </div>);
    } else {
      return this.props.children;

    }
  }
}