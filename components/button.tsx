'use client'

import React from "react";

type Props = {
  onSubmit: () => void;
  children: React.ReactNode;
}

export default function Button({onSubmit, children}: Props) {
  return (
    <button onClick={onSubmit}>{children}</button>
  )
}