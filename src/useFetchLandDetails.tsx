import { useEffect, useState } from "react";
import { LandDataResult, RecordResponse } from "./Response";

const useFetchLandDetails = (pageNumber: number) => {
  const [landDetails, setLandDetails] = useState<Array<LandDataResult>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setErrors] = useState<string>("");

  const fetctLandDetails = async (pageNumber: number) => {
    setLoading(true);
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
    if (jsonData.next === null) setHasNextPage(false);
    setCurrentPage(pageNumber);
    setLoading(false);
  };

  useEffect(() => {
    fetctLandDetails(1);
  }, []);

  return {
    landDetails,
    currentPage,
    hasNextPage,
    isLoading,
    error,
    fetctLandDetails
  };
};

export default useFetchLandDetails;
