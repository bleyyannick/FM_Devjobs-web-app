import { FC } from "react";
import './Button.css'


type ButtonProps = {btnText: string}; 

export const Button :FC<ButtonProps> = ({btnText}) => <button className="btn"> <p>{btnText}</p></button>; 
