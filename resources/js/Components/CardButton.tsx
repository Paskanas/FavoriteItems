import React, { useEffect, useState } from "react";
import { CardButtonProps } from "@/types/index";

const CardButton: React.FC<CardButtonProps> = ({
  item,
  handleButtonClick,
  buttonId
}) => {

  const [buttonColor, setButtonColor] = useState('red');
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: buttonColor,
    opacity: '100%'
  });
  const getButtonColor = (buttonId: number) => {
    if (buttonId == 1) {
      setButtonColor('red');
    }
    else if (buttonId == 2) {
      setButtonColor('blue');
    }
    else if (buttonId == 3) {
      setButtonColor('blue');
    }
    else if (buttonId == 4) {
      setButtonColor('green');
    }
    else {
      setButtonColor('');
    }
  }

  useEffect(() => {
    getButtonColor(buttonId);
    setButtonStyle({
      backgroundColor: buttonColor,
      opacity: '100%'
    });
  }, [buttonId, buttonColor]);


  const handleMouseEnter = () => {
    setButtonStyle({
      backgroundColor: buttonColor,
      opacity: '80%'
    });
  }

  const handleMouseLeave = () => {
    setButtonStyle({
      backgroundColor: buttonColor,
      opacity: '100%'
    });
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
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={'text-white font-bold mt-2 py-2 px-4 rounded '}
      onClick={() => handleButtonClick({ id: item.id, title: item.title })}
    >
      {getButtonText(buttonId)}
    </button >
  );
};

export default CardButton;
