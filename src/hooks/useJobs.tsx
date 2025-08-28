import { useState, useMemo } from "react";
import { JobListProps, Job } from "../components/CardList/CardList";
import { FilterProps } from "../components/Form/Form";
import data from '../../data.json';

type NormalizedJob = {
  original: Job;  
  position: string[];
  location: string;
  contract: string;
  company: string[];
};

export const useJobs = () => {
  const [jobs, setJobs] = useState<JobListProps["jobs"]>(data);


  const normalizedJobs: NormalizedJob[] = useMemo(() => 
    data.map(job => ({
      original: job,
      position: job.position.toLowerCase().split(/\s+/),
      location: job.location.toLowerCase(),
      contract: job.contract.toLowerCase().replace(/\s+/g, ''),
      company: job.company.toLowerCase().split(/\s+/),
    })), []
  );

  const isJobMatched = (job: NormalizedJob, filters: FilterProps) => {
    const { title, location, fulltime } = filters;
    let matches = true;

    if (title) {
      const searchWords = title.toLowerCase().split(/\s+/);
      matches = matches && searchWords.every(word => job.position.includes(word) || job.company.includes(word));
    }

    if (location) {
      matches = matches && job.location.includes(location.toLowerCase());
    }

    if (fulltime) {
      matches = matches && job.contract === "fulltime";
    }

    return matches;
  };

  const updateJobs = (filters: FilterProps) => {
    return normalizedJobs
      .filter(job => isJobMatched(job, filters))
      .map(job => job.original);
  };

  return {
    jobs,
    setJobs,
    updateJobs
  };
};
