import { FC } from 'react'; 
//import iconCheck from '/desktop/icon-check.svg';
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'
import './Form.css'; 



export const Form: FC = ()=> {
    return (
         <form>
            <div>
              <img src={iconSearch} />
              <input type='text' placeholder="Filter by title" />
              <img className="hidden" src={iconFilter} />
            </div>
            <div>
              <img src={iconLocation} alt="" />
              <input type='text' placeholder="Filter by title" />
            
            </div>
            <div>
               <input type="checkbox"  id="full-time"/>
               <label htmlFor="full-time">Full Time</label>
            </div>
            <div><button type='submit'>Search</button></div>
         </form>
    )
}