import { FC } from "react";
import './Button.css'


type ButtonProps = {btnText: string}; 

export const Button :FC<ButtonProps> = ({btnText}) => 
  <button className="btn" type='submit'>
    <p>{btnText}</p>
  </button>; 
