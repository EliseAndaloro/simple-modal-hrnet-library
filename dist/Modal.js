import React from "react";
import "./modal.css";

/**
 * Composant Modal qui affiche une fenêtre modale avec un message et un bouton de fermeture.
 * @param {object} props - Les propriétés du composant.
 * @param {function} props.closeModal - Fonction qui ferme la fenêtre modale.
 * @param {string} props.message - Message à afficher dans la fenêtre modale.
 * @returns {JSX.Element} Composant Modal
 *
 */
function Modal({
  closeModal,
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: () => closeModal(false)
  }, " ", "X", " "), /*#__PURE__*/React.createElement("p", null, message))));
}
export default Modal;