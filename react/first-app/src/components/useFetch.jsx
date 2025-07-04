//useFetch

import React, { useEffect, useState } from "react";

function useFetch(arg) {
  const { url, method } = arg;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleFetch = () => {
    setLoading(true);
    fetch(url, { method: method })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false); // <-- move here
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // <-- and here
      });
  };

  console.log({ data, error, loading });
  useEffect(() => {
    handleFetch();
  }, [url]);

  return { loading, data, error };
}

export default useFetch;
