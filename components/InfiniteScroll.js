import dynamic from "next/dynamic";
const InfiniteScrollComponent = dynamic(() =>
  import("react-infinite-scroll-component")
);

export default function InfiniteScroll({
  dataLength,
  next,
  hasMore,
  scrollThreshold,
  children,
  loadingSkeleton
}) {
  return (
    <InfiniteScrollComponent
      dataLength={dataLength}
      next={next}
      hasMore={hasMore}
      scrollThreshold={scrollThreshold}
      loader={loadingSkeleton}
    >
      {children}
    </InfiniteScrollComponent>
  );
}
