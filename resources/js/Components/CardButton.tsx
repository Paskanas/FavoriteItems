import React from "react";
import { CardButtonProps } from "@/types/index";

const CardButton: React.FC<CardButtonProps> = ({
  item,
  handleButtonClick,
  buttonId
}) => {

  const getButtonColor = (buttonId: number) => {
    if (buttonId === 1) {
      return 'red';
    }
    else if (buttonId === 2) {
      return 'blue';
    }
    else if (buttonId === 3) {
      return 'yellow';
    }
    else if (buttonId === 4) {
      return 'green';
    }
    return '';
  }

  const getButtonText = (buttonId: number) => {
    if (buttonId === 1) {
      return 'Remove from favorites';
    }
    else if (buttonId === 2) {
      return 'Add to favorites';
    }
    else if (buttonId === 3) {
      return 'Renew image';
    }
    else if (buttonId === 4) {
      return 'Save';
    }
    return '';
  }

  return (
    <button
      className={`bg-${getButtonColor(buttonId)}-600 hover:bg-${getButtonColor(buttonId)}-500 text-white font-bold mt-2 py-2 px-4 rounded }`}
      onClick={() => handleButtonClick({ id: item.id, title: item.title })}
    >
      {getButtonText(buttonId)}
    </button>
  );
};

export default CardButton;
