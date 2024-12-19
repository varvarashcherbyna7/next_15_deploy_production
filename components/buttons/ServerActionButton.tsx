import React from 'react';

interface ServerActionButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const ServerActionButton: React.FC<ServerActionButtonProps> = ({ handleClick, children }) => {
  return (
    <form action={handleClick}>
      <button type="submit">
        {children}
      </button>
    </form>
  )
};
