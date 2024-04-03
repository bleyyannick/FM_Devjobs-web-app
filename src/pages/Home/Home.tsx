import { FC, FormEvent, useState } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { FilterProps, Form } from "../../components/Form/Form";
import { CardList, Job } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";

export const Home :FC = () => {
  const [jobs, setJobs] = useState<Job[]>(data); 

  const handleFilterJobs = (e: FormEvent, filter: FilterProps)=> {
    e.preventDefault();
    console.log(filter)
  }
  
    return( 
          <main className="container">
              <Header />
              <Form onFilter={handleFilterJobs}/>
              <CardList jobs={jobs} />
              <div className="container-btn">
                <Button btnText="Load more" />
              </div>
          </main>
    )
}