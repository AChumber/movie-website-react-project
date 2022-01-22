import React, { useEffect, useMemo } from 'react';
import ReactDom from 'react-dom';

const Toast = ({ children }) => {
    const toastsContainerRoot = document.getElementById('toast-container');
    const container = useMemo(() => document.createElement('div'), []);  //prevent re-creation every re-render
    
    useEffect(() => {
        //append empty div
        toastsContainerRoot.appendChild(container);
    
        //cleanup - remove toast container
        return () => {
            container.remove();
        };
    });
    

    return ReactDom.createPortal(children, toastsContainerRoot);
};

export const PositiveFeedbackToast = ({ children }) => {
    return(
        <Toast>
            <div className="toast">
                <p><span className='toast-icon-span'><i className="bi bi-check"></i></span>{children}</p>
            </div>
        </Toast>
    )
}

export default Toast;
