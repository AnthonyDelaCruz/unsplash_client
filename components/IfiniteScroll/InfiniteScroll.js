import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScroller = ({ dataLength, next, hasMore, children }) => {
  const handleScrollTop = () => window.scrollTo("0", "0");
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore={hasMore}
      loader={
        <div className="d-block text-center my-2 my-md-4">
          <h4 className="font-weight-bold">Fetching images...</h4>
        </div>
      }
      endMessage={
        <div className="d-block text-center my-2 my-md-4">
          <h3 className="font-weight-bold">You have seen them all!</h3>
          <button onClick={handleScrollTop} className="btn btn-primary">
            Back to top
          </button>
        </div>
      }
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScroller;
