import { ComponentPropsWithoutRef } from "react";
import './Button.css'


type ButtonProps = ComponentPropsWithoutRef<'button'>;  

export const Button= ({children} : ButtonProps) => 
  <button className="btn">
    <p>{children}</p>
  </button>; 
