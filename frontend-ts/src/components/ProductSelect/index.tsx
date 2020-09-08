import React, { useState, FormEvent } from "react";

interface IProductSelectProps {
  name: string;
  onSubmit: (product: string) => void;
}

export default function ProductSelect(props: IProductSelectProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(props.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{props.name}</button>
    </form>
  );
}
