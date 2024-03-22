import { FC } from "react"; 
import { useParams } from "react-router-dom";


type Params = {
    id: string
}


export const Detail :FC = () => {

    const { id } = useParams<Params>()

    return( 
        <div>Detail : {id} </div>
    )
}