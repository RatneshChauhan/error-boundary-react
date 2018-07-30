import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



export default class ErrorDialogComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true, actions: [''] };
	this.handleClose = this.handleClose.bind(this)
  }
  
  handleClose () {
    this.setState({ open: false });
  }

  handleClose  ()  {

    if (this.props.closeOnClick) {
      this.setState({ open: false });
    }

  }

  render() {

    this.props.buttonType.map((item, i) => {
      
      if (item === 'default') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} onClick={this.props.onClick} onClickCapture={this.handleClose}/>]);
      }
      if (item === 'primary') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} primary={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
      if (item === 'secondary') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} secondary={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
      if (item === 'disabled') {
        this.state.actions.push(
          [<FlatButton key="" label={this.props.buttonLabel[i]} disabled={true} onClick={this.props.onClick} onClickCapture={this.handleClose} />]);
      }
    });

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={this.state.actions}
          modal={this.props.modal}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={this.props.autoScrollBodyContent}
          contentStyle={this.props.customContentStyle}
        >
          {<p>{this.props.body}</p>}
        </Dialog>
      </div>
    );
  }

}