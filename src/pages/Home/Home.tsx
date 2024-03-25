import { FC } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { CardList } from "../../components/CardList/CardList";

export const Home :FC = () => {
    return( 
        <>
          <Header />
          <Form />
          <main className="container">
            <CardList jobs={data} />
          </main>
        </>
    )
}