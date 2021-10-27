import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [errorMsg, seterrorMsg] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (res.ok !== true) {
          throw Error("server not responding");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setisLoading(false);
      })
      .catch((error) => {
        if (error.message === "AbortError") {
          console.log("fetch aborted");
        } else {
          setisLoading(false);
          seterrorMsg(error.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, errorMsg };
};

export default useFetch;
