import { FC, ReactNode } from "react";
import './CardList.css'; 
type Job = {
    id: number;
    company: string,
    logo: string,
    logoBackground: string,
    position: string,
    postedAt:  string,
    contract: string,
    location: string,
    website: string,
    apply: string
    description: string,
    requirements: {
      content: string,
      items: string[]
    },
    role: {
      content: string,
      items: string[]
    }
}
type CardListProps = {
    jobs: Job[]
}
export const CardList :FC<CardListProps> = ({jobs} : CardListProps) => {
    const cards :ReactNode = jobs.map(job => {
        return (
          <div className="card" key={job.id}>
              <div className="card-img" style={{background: `${job.logoBackground}`}}>
                <img src={job.logo} alt="log" />
              </div>
            <div className="container-card-description">
                <div className="card-description">
                  <ul className="card-job-time">
                    <li>{job.postedAt}</li>
                    <li>{job.contract}</li>
                  </ul>
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
                <p className="card-location">{job.location}</p>
            </div>
        </div>
        )
    })
    return (
        <section>
            {cards}
        </section>
    )

    }