/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState({
    err: true,
    status: "Busca tu ciudad",
    statusText: null,
  });

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw {
            err: true,
            status: response.status,
            statusText:
              response.statusText === "Not Found" ||
              response.statusText === "Bad Request"
                ? "Ocurrio un error"
                : response.statusText,
          };
        }
        let data = await response.json();

        setIsPending(false);
        setData(data);
      } catch (err) {
        setIsPending(true);
        setError({ err });
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
