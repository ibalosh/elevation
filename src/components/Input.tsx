import React, {ChangeEvent} from "react";

type Props = {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  location: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({location, onChangeInput, ...props}: Props) {
  return (
    <input
      {...props}
      value={location}
      onChange={onChangeInput}
    />
  )
}