import { FC } from 'react';

interface ActionButtonsProps {
  onClick?: () => void;
  buttonText?: string;
  bgColor?: string;
  className?: string;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  onClick,
  buttonText,
  bgColor,
  className,
}) => {
  return (
    <div>
      <button className={className}>
        <span>{buttonText}</span>
      </button>
    </div>
  );
};

export default ActionButtons;
