import { FC, FormEvent, useRef } from 'react'; 
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'
import './Form.css'; 
import { Button } from '../Button/Button';
export type FilterProps = {
  distinction: string | undefined, 
  location: string | undefined, 
  fullTime: boolean | undefined;
}

export type FunctionFilterProps = {
  onFilter : (e: FormEvent, obj: FilterProps) => void;
}
export const Form: FC<FunctionFilterProps> = ({onFilter} : FunctionFilterProps) => {

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    const filter = {
      distinction: inputTitleRef.current?.value,
      location: locationRef.current?.value,
      fullTime: fullTimeRef.current?.checked
      } 
      onFilter(e,filter)
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