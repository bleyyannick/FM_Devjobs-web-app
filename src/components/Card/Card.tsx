import { FC } from "react"
import { Job } from "../CardList/CardList"

export const Card :FC<Job> = ({...job}) => {
  
    const normalizedLogo = job.logo.slice(1);
    return (
        <div className="card">
          <div className="card-img" style={{background: `${job.logoBackground}`}}>
            <img src={normalizedLogo} alt="log" />
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
}