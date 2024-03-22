import { FC } from 'react'; 
import iconFilter from '/mobile/icon-filter.svg'; 
import './Form.css'; 



export const Form: FC = ()=> {
    return (
        <form>
            <div>
                <input type='text' placeholder="Filter by title" />
                <img src={iconFilter} />
                <button type='submit'> Search</button>
            </div>
        </form>
    )
}