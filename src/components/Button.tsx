import React from "react";

type Props = {
  handleClickAction: () => void;
  children: React.ReactNode;
}

export default function Button({handleClickAction, children}: Props) {
  return (
    <button onClick={handleClickAction}>{children}</button>
  )
}