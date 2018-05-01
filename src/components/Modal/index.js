import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class Modal extends Component {
  onClose = (event) => {
    if (event.target === this.container) {
      this.props.onClose();
    }
  };

  render() {
    return this.props.display ? (
      <div
        styleName="modal-container"
        ref={(el) => { this.container = el; }}
        onClick={this.onClose}>
        <div styleName="modal-window">
          <div styleName="modal-window-header">
            <h1 styleName="title">{this.props.title}</h1>
            <div styleName="close-modal" className="material-icons" onClick={this.props.onClose}>clear</div>
          </div>
          <div styleName="modal-window-body">
            {this.props.children}
          </div>
        </div>
      </div>
    ) : null;
  }
}

Modal.propTypes = {
  display: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CSSModules(Modal, styles);
