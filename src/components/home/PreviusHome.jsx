import React from "react";
import "./PreviousNextIcons.css"; // Asegúrate de importar el archivo CSS

const PreviousNextIcons = ({ page, onClick, totalPages }) => {

  const handlePrevious = () => {
    if (page > 1) {
      onClick(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      onClick(page + 1);
    }
  };

  return (
    <div className="navigation-container">
      <div
        onClick={handlePrevious}
        className="icon-container previous"
      >
        <img src="/Assets/Arrows-icon.svg" alt="Página anterior" className="icon-image previous" />
      </div>
      <p className="page-number">{page}</p>
      <div
        onClick={handleNext}
        className="icon-container next"
      >
        <img src="/Assets/Arrows-icon.svg" alt="Página siguiente" className="icon-image next" />
      </div>
    </div>
  );
};

export default PreviousNextIcons;