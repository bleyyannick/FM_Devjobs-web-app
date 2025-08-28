import { FormEvent, useRef } from "react";  
import './Home.css';
import { Header } from "../../components/Header/Header";
import { FilterProps, Form } from "../../components/Form/Form";
import { CardList } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";
import iconLocation from '/desktop/icon-location.svg';
import iconSearch from '/desktop/icon-search.svg';
import iconFilter from '/mobile/icon-filter.svg'
import { useJobs } from "../../hooks/useJobs";


export const Home = () => {
  const formRef =  useRef<HTMLFormElement>(null);
  const { jobs, setJobs, updateJobs } = useJobs();

  const handleSubmit = (e: FormEvent, extractedData: FilterProps) => {
    e.preventDefault();
    setJobs(updateJobs(extractedData));
    formRef.current?.reset(); 
  };

  return (
    <>
      <Header />
      <Form onFilter={handleSubmit} ref={formRef}>
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
