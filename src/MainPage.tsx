import React, { useEffect, useState } from 'react'
import Card from './Components/Card';
import { LandDataResult, RecordResponse } from './Response';

const MainPage = () => {
  const [landDetails, setLandDetails] = useState<Array<LandDataResult>>([]);
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setErrors] = useState<string>("");

  const fetctLandDetails = async (pageNumber: number) => {
    setLoading(true)
    const data = await fetch(
      `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${pageNumber}&page_size=10`,
      {
        method: "GET",
      }
    ).catch((err) => {
      setErrors(err);
    });

    const jsonData: RecordResponse = data && (await data.json());

    setLandDetails((prev) => [...prev, ...jsonData.results]);

    setLoading(false)
  };

  useEffect(() => {
    fetctLandDetails(1);
  }, []);

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && landDetails.length>0 && landDetails?.map((value) => (
        <Card details={value} />
      ))}
    </>
  );
}

export default MainPage