import React, {ChangeEvent} from "react";

type Props = {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  location: number;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({location, onChangeInput, name, ...props}: Props) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        {...props}
        value={location}
        onChange={onChangeInput}
      />
    </>
  )
}