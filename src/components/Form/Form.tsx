import { FC } from 'react'; 
//import iconCheck from '/desktop/icon-check.svg';
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'
import './Form.css'; 
import { Button } from '../Button/Button';



export const Form: FC = ()=> {
    return (
         <form>
            <div className='form-filter-title'>
              <img src={iconSearch} />
              <input type='text' placeholder="Filter by title,companies,expertise.." />
              <img className="hidden" src={iconFilter} />
            </div>
            <div className='form-filter-location'>
              <img src={iconLocation} alt="" />
              <input type='text' placeholder="Filter by title" />
            
            </div>
            <div className='form-filter-fullTime'>
               <input type="checkbox"  id="full-time"/>
               <label htmlFor="full-time">Full Time Only</label>
            </div>
            <div className='form-btn'>
              <Button btnText="Search" />
            </div>
         </form>
    )
}