import {  ComponentPropsWithRef, FormEvent } from 'react'; 
import './Form.css'; 
export type FilterProps = {
  title: string, 
  location: string, 
  fulltime:  boolean;
};


export type FormProps = ComponentPropsWithRef<'form'> & {
  onFilter : (e: FormEvent, value: unknown) => void;
};

export const Form = ({onFilter, children, ref}: {
  onFilter: (e: FormEvent, value: FilterProps) => void;
  children: React.ReactNode;
  ref?: React.Ref<HTMLFormElement>;
}) => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(formData.entries())
    const filters = {
      title: formatedData.title.toString().toLocaleLowerCase(),
      location: formatedData.location.toString().toLocaleLowerCase(),
      fulltime: formatedData.fulltime ? true : false
    }
    onFilter(e,filters);
 
  }

    return (
         <form onSubmit={handleSubmit} ref={ref}>
          {children}
         </form>
    )
};