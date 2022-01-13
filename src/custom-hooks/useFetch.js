import React from "react";
import { useState, useEffect } from "react";

const useFetch = (urlLink) => {
  const abortCont = new AbortController();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(urlLink);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(urlLink, { signal: abortCont.signal });
      console.log(response);
      if (!response.ok) {
        throw Error("Could not Fetch the blogs Data");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("fetch Aborted");
      } else {
        console.log("Something Went Wrong!", err.message);
        setIsError(true);
        setErrorMessage(err.message);
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchBlogs();
    }, 2000);

    return () => abortCont.abort();
  }, [urlLink]);

  return { data, isError, errorMessage, isLoading };
};

export { useFetch };
