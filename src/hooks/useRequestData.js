import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

/*
useRequestData
- tratamento de errors com mensangem em caso de cair no catch error
- utilizar componente com Loader chamado isLoading em seu estado e que indique que asdos estão sendo carregados ao usuario

*/
export function useRequestData(path) {
  //estado inicial generico
  const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setIsError] = useState(false);

  useEffect(() => {
    //setIsLoading(true);
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        //setIsLoading(false);
        setData(response.data.result);
        console.log(data);
      })
      .catch((error) => {
        // setIsLoading(false);
        //setIsError(error);
        console.log(error);
      });
  }, []);

  return data;
}
