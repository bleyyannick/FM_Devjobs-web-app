import { FC, FormEvent, useRef } from 'react'; 
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'
import './Form.css'; 
import { Button } from '../Button/Button';
export type FilterProps = {
  title: string, 
  location: string, 
  fullTime: string | boolean;
}

export type FunctionFilterProps = {
  onFilter : (e: FormEvent, obj: FilterProps) => void;
}
export const Form: FC<FunctionFilterProps> = ({onFilter} : FunctionFilterProps) => {

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {

    const filters = {
      title: inputTitleRef.current ? inputTitleRef.current.value.toLocaleLowerCase() : '',
      location: locationRef.current ? locationRef.current.value.toLocaleLowerCase() : '',
      fullTime: fullTimeRef.current ? fullTimeRef.current.checked : '',
      }
      onFilter(e,filters)
  }

    return (
         <form onSubmit={handleSubmit}>
            <div className='form-filter-title'>
              <img src={iconSearch} />
              <input type='text' ref={inputTitleRef} placeholder="Filter by title, companies, expertise.." />
              <img className="hidden" src={iconFilter} />
            </div>
            <div className='form-filter-location'>
              <img src={iconLocation} alt="" />
              <input type='text' ref={locationRef} placeholder="Filter by location" />
            </div>
            <div className='form-filter-fullTime'>
               <input type="checkbox" ref={fullTimeRef}  id="full-time"/>
               <label htmlFor="full-time">Full Time Only</label>
            </div>
            <div className='form-btn'>
              <Button btnText="Search" />
            </div>
         </form>
    )
}