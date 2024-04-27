import {  ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react'; 
import './Form.css'; 
export type FilterProps = {
  title: string, 
  location: string, 
  fulltime: string | boolean;
}
export type FormHandle = {
  clear: () => void;
}
export type FormProps = ComponentPropsWithoutRef<'form'> & {
  onFilter : (e: FormEvent, value: unknown) => void;
}
export const Form = forwardRef<FormHandle, FormProps>(({onFilter, children, ...props}, ref) => {
  const form = useRef<HTMLFormElement>(null); // Create a reference to the form element

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        form.current?.reset();
      }
    }
  }); // Create a clear function that resets the form
      

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(formData.entries())
    const filters = {
      title: formatedData.title.toString().toLocaleLowerCase(),
      location: formatedData.location.toString().toLocaleLowerCase(),
      fullTime: formatedData.fulltime
    }
    onFilter(e,filters);// Call the onFilter function with the event and the filters object
  }

    return (
         <form onSubmit={handleSubmit} {...props}>
          {children}
         </form>
    )
});