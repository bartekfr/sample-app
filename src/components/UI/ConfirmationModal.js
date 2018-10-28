import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class ConfirmationModal extends React.Component {
  static defaultProps = {
    entityName: '',
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    entityName: PropTypes.string,
    action: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  close() {
    this.setState({
      modal: false,
    });
  }

  confirmAction() {
    this.props.action();
    this.close();
  }

  render() {
    const { entityName } = this.props;
    return (
      <div className="confirmation">
        {React.cloneElement(this.props.children, { onClick: this.toggle })}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal--confirmation">
          <ModalBody>
            <h1 className="modal__title" >
              {I18n.t('doYouReallyWantToDelete')}
              <span>{entityName}?</span>
            </h1>
          </ModalBody>
          <ModalFooter className="modal-footer--buttons">
            <Button onClick={() => this.confirmAction()}>{I18n.t('yes')}</Button>
            <Button onClick={this.toggle} >{I18n.t('no')}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
