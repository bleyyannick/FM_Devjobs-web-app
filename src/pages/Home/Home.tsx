import { FC, FormEvent, useRef, useState } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { FilterProps, Form, FormHandle } from "../../components/Form/Form";
import { CardList, JobListProps } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'


export const Home :FC = () => {
  const [jobs, setJobs] = useState<JobListProps["jobs"]>(data); 
  const customForm = useRef<FormHandle>(null);

  const getValuesFromUserInputs = (filters: FilterProps) => {
    const filterValues = Object.values(filters);
    filterValues[2] = filterValues[2] ? "full time" : "part time";
    return filterValues;
}
  const updateJobs = (filterArray: FilterProps, jobsArray: JobListProps["jobs"]) => {
     const filterValues =  getValuesFromUserInputs(filterArray); 
      const filteredJobs = jobsArray.filter( job =>  
       filterValues.every(filterValue  => {
            // Convert job properties to lowercase and split the position name into an array when arrays
            const positionName = job.position.toLowerCase().split(' ');
            const locationName = job.location.toLowerCase();
            const contractTime = job.contract.toLowerCase()
            const companyName = job.company.toLowerCase();

            // Check if any part of the job matches the filter value
            return (
                positionName.includes(filterValue.toString()) ||
                locationName.includes(filterValue.toString()) ||
                companyName.includes(filterValue.toString()) ||
                contractTime === filterValue.toString()
            );
          }
       ));
      
      return filteredJobs;
    }
  const handleFilterJobs = (e: FormEvent, value: unknown ) :void  => {
    e.preventDefault();
    const extractedData = value as FilterProps;
    setJobs(() => updateJobs(extractedData, [...data]));
    customForm.current?.clear();
  }

    return( 
           <>
            <Header />
              <Form onFilter={handleFilterJobs} ref={customForm}>
                  <div className='form-filter-title'>
                    <img src={iconSearch} />
                    <input type='text' name="title" placeholder="Filter by title, companies, expertise.." />
                    <img className="hidden" src={iconFilter} />
                  </div>
                  <div className='form-filter-location'>
                    <img src={iconLocation} alt=""/>
                    <input type='text'  name="location" placeholder="Filter by location" />
                  </div>
                  <div className='form-filter-fullTime'>
                    <input type="checkbox" name="fulltime"  id="fulltime"/>
                    <label htmlFor="full-time">Full Time Only</label>
                  </div>
                  <div className='form-btn'>
                    <Button type="submit"> Search</Button>
                  </div> 
              </Form>
            <CardList jobs={jobs} />
            <div className="container-btn">
                  <Button type="button">Load more</Button>
            </div>
          </>
    )
}