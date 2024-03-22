import { FC } from "react"; 
import data from '../../../data.json'; 
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";

export const Home :FC = () => {
    console.log(data)
    return( 
        <>
          <Header />
          <Form />
        </>
    )
}