import { FC, FormEvent, useState } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { FilterProps, Form } from "../../components/Form/Form";
import { CardList, Job, JobListProps } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'

export const Home: FC = () => {
  const [jobs, setJobs] = useState<JobListProps["jobs"]>(data); 

  const normalizeJob = (job: Job) => ({
    position: job.position.toLowerCase().split(" "),
    location: job.location.toLowerCase(),
    contract: job.contract.toLowerCase(),
    company: job.company.toLowerCase(),
  });

  const isJobMatched = (job: ReturnType<typeof normalizeJob>, filters: FilterProps) => {
    const { title, location, fulltime } = filters;
    let matches = true;

    if (title) {
      const searchWords = title.toLowerCase().split(" ");
      matches = matches && searchWords.every(word => job.position.includes(word) || job.company.includes(word));
    }

    if (location) {
      matches = matches && job.location.includes(location.toLowerCase());
    }

    if (fulltime) {
      matches = matches && job.contract === "full time";
    }

    return matches;
  };

  const updateJobs = (filters: FilterProps, jobsArray: JobListProps["jobs"]) => {
    return jobsArray.filter(job => {
      const normalized = normalizeJob(job);
      return isJobMatched(normalized, filters);
    });
  };

  const handleFilterJobs = (e: FormEvent, extractedData: FilterProps) => {
    e.preventDefault();
    setJobs(updateJobs(extractedData, [...data]));
  };

  return (
    <>
      <Header />
      <Form onFilter={handleFilterJobs} >
        <div className='form-filter-title'>
          <img src={iconSearch} />
          <input type='text' name="title" placeholder="Filter by title, companies, expertise.." />
          <img className="hidden" src={iconFilter} />
        </div>
        <div className='form-filter-location'>
          <img src={iconLocation} alt=""/>
          <input type='text'  name="location" placeholder="Filter by location" />
        </div>
        <div className='form-filter-fulltime'>
          <input type="checkbox" name="fulltime" id="fulltime"/>
          <label htmlFor="fulltime">Full Time Only</label>
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
