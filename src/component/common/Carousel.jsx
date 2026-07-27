export default function CarouselHome() {
  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="rounded-base relative h-56 overflow-hidden md:h-96">
        {/* Item 1 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src="./images/banner-1.jpg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./images/banner-2.jpg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./images/banner-3.jpg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./images/banner-4.jpg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./images/banner-5.jpg"
            className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="rounded-base h-3 w-3"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to={0}
        />
        <button
          type="button"
          className="rounded-base h-3 w-3"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to={1}
        />
        <button
          type="button"
          className="rounded-base h-3 w-3"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to={2}
        />
        <button
          type="button"
          className="rounded-base h-3 w-3"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to={3}
        />
        <button
          type="button"
          className="rounded-base h-3 w-3"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to={4}
        />
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="rounded-base inline-flex h-10 w-10 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-5 w-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="rounded-base inline-flex h-10 w-10 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-5 w-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
