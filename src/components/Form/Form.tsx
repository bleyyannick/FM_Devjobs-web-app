import {  ComponentPropsWithoutRef, FormEvent } from 'react'; 
import './Form.css'; 
export type FilterProps = {
  title: string, 
  location: string, 
  fulltime: string | boolean;
};


export type FormProps = ComponentPropsWithoutRef<'form'> & {
  onFilter : (e: FormEvent, value: FilterProps) => void;
};


export const Form = ({onFilter, children }: {
  onFilter: (e: FormEvent, value: FilterProps) => void;
  children: React.ReactNode;
}) => {

  const formatData = (data: FormData) => {
    return {
      title: data.get('title')?.toString().toLowerCase() || '',
      location: data.get('location')?.toString().toLowerCase() || '',
      fulltime: data.get('fulltime') ? true : false
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filters = formatData(formData)
    onFilter(e,filters);
    e.currentTarget.reset();
  }

    return (
         <form onSubmit={handleSubmit}>
          {children}
         </form>
    )
};