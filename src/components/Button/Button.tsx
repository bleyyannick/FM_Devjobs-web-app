import { ComponentPropsWithoutRef } from "react";
import './Button.css'


type ButtonProps = ComponentPropsWithoutRef<'button'>;  

export const Button= ({children, ...props} : ButtonProps) => 
  <button className="btn" {...props}>
    <p>{children}</p>
  </button>; 
