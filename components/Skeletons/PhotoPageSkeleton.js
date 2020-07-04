export default function PhotoPageSkeleton() {
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-md-center">
      <div className="px-3 px-md-5">
        <div className="d-flex align-items-center">
          <div className="skeleton_avatar"></div>
          <div className="mx-2 "></div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div className="skeleton_photo-data" />
          <div className="skeleton_photo-data" />
          <div className="skeleton_photo-data" />
        </div>
        <div className="my-3 skeleton_date" />
        <div className="d-flex">
          <div className="mr-1 skeleton_photo-data" />
          <div className="mr-1 skeleton_photo-data" />
          <div className="mr-1 skeleton_photo-data" />
          <div className="mr-1 skeleton_photo-data" />
        </div>
      </div>
      <div className="align-self-center mb-4 mb-md-0 skeleton_featured-photo"></div>
    </div>
  );
}
