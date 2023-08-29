import {ModalProps} from "../interfaces/Modal";

export default function Modal({children, isOpen, modalTitle, onClose, saveButton, onSave}: ModalProps) {

    return (
        <>
            {isOpen &&
              <div className="modal-overlay" onClick={onClose}>
                <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-content">
                      <div className="modal-header d-flex flex-row align-items-center">
                        {modalTitle && <div className="modal-title h4">{modalTitle}</div>}
                        <button type="button" onClick={onClose} className="close-modal btn btn-link"><i className="fa fa-close fa-2x text-danger"></i></button>
                      </div>
                      <div className="modal-body">
                          {children}
                      </div>
                      {saveButton &&
                        <div className="modal-footer">
                          <button onClick={onSave} type="button" className="btn btn-primary btn-lg text-white">{saveButton}</button>
                        </div>
                      }
                  </div>
                </div>
              </div>
            }
        </>
    )
}