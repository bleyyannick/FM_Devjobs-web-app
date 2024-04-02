import { FC } from "react"; 
import data from '../../../data.json'; 
import './Home.css';
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { CardList } from "../../components/CardList/CardList";
import { Button } from "../../components/Button/Button";

export const Home :FC = () => {
    return( 
          <main className="container">
            <Header />
            <Form />
            <CardList jobs={data} />
            <div className="container-btn">
              <Button btnText="Load more" />
            </div>
          </main>
    )
}