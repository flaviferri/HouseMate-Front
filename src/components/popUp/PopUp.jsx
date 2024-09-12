import { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../buttons/Buttons"
import ReactDOM from "react-dom";

const Popup = ({ isPopupOpen, closePopup, message, onConfirm, showCancel = true }) => {
    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    }, [isPopupOpen]);

    if (!isPopupOpen) return null;

    const popupContent = (
        <div className="absolute w-full h-screen bg-[#000000a8] top-0 left-0 z-[150000]">
            <div className="ventana-Popup">
                <div className="bg-yellow h-[10.5rem] w-[21.6875rem] lg:w-[29.375rem] lg:h-[12.5rem] text-center rounded-[2rem] fixed inset-0 m-auto flex flex-col align-middle justify-center ">
                    <p className="text-blue pt-[1.30rem] text-[1.25rem]">
                        {message}
                    </p>
                    <div className="flex justify-center gap-[0.625rem] mt-[1.25rem] pb-4">
                        <Button
                            text="Aceptar"
                            type="button"
                            className="bg-green"
                            onClick={(e) => {
                                if (onConfirm) onConfirm(e);
                                closePopup();
                            }}
                        />
                        {showCancel && (
                            <Button
                                text="Cancelar"
                                className="bg-pink"
                                onClick={closePopup}
                                type="button"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(popupContent, document.body);
};

Popup.propTypes = {
    isPopupOpen: PropTypes.bool,
    closePopup: PropTypes.func,
    onConfirm: PropTypes.func,
    message: PropTypes.string,
    showCancel: PropTypes.bool
};

export default Popup;
