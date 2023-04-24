import { DeleteButtonStyled } from "./DeleteButton.style"
import Trash from '../../assets/Trash.svg'
import React from "react";

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick : () => void;
}


export const DeleteButton = ({onClick}: DeleteButtonProps) => {
  return (
    <DeleteButtonStyled type="button">
      <img src={Trash} alt="" />
    </DeleteButtonStyled>
  )
}