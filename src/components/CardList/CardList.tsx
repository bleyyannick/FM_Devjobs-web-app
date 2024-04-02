import { FC, ReactNode } from "react";
import './CardList.css'; 
import { Card } from "../Card/Card";
export type Job = {
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
    const cards :ReactNode = jobs.map(job => <Card {...job} />)
    return (
        <section>
            {cards}
        </section>
    )

    }