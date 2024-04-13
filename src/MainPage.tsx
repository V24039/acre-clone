import Card from "./Components/Card";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { TailSpin } from "react-loader-spinner";
import useFetchLandDetails from "./useFetchLandDetails";

const MainPage = () => {
  const {
    landDetails,
    currentPage,
    hasNextPage,
    isLoading,
    error,
    fetctLandDetails,
  } = useFetchLandDetails(1);

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: () => fetctLandDetails(currentPage + 1),
    disabled: !!error,
  });

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      <div className="flex gap-0 flex-wrap max-md:gap-1">
        {landDetails.length > 0 &&
          landDetails?.map((value) => (
            <div className="p-4 w-1/3 max-md:w-full" key={value.id}>
              <Card details={value} />
            </div>
          ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center" ref={sentryRef}>
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      )}
    </>
  );
};

export default MainPage;
