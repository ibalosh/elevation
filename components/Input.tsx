import React, {ChangeEvent} from "react";

import style from "./input.module.css"

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
        className={style.coordinate}
        id={name}
        {...props}
        value={location}
        onChange={onChangeInput}
      />
    </>
  )
}