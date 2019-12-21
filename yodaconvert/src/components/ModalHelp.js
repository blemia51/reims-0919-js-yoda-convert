import React from 'react';
import '../App.css';
import HelpSyntax from './HelpSyntax'

const ModalHelp = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(-136vh)' : 'translateY(0vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Markdown help</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <HelpSyntax />
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    
                </div>
            </div>
        </div>
    )
}

export default ModalHelp;