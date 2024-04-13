import { FC, FormEvent, useState } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { FilterProps, Form } from "../../components/Form/Form";
import { CardList, JobListProps } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";

export const Home :FC = () => {
  const [jobs, setJobs] = useState<JobListProps["jobs"]>(data); 

  const getValuesFromUserInputs = (filterArray: FilterProps)  => {
    const filterArrayValues = Object.values(filterArray);
    if(filterArrayValues[2]) {
     filterArrayValues[2] = "full time"; 
    } else {
     filterArrayValues[2] = "part time";
    }
    return filterArrayValues;
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
  //  const resetJobs = ()  => setJobs(data); 
  const handleFilterJobs = (e: FormEvent, filter: FilterProps) :void  => {
    e.preventDefault();
    setJobs(() => updateJobs(filter, [...data]));
  }
  
    return( 
           <>
            <Header />
            <Form onFilter={handleFilterJobs}/>
            <CardList jobs={jobs} />
            <div className="container-btn">
                  <Button btnText="Load more" />
            </div>
          </>
    )
}