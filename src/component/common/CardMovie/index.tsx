import { ListMovie } from "./../../../type";

interface IProps {
  movie: ListMovie;
}

export default function CardMovie({ movie }: IProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <a href="#">
          <img
            className="mx-auto h-full"
            src={movie.hinhAnh}
            alt={movie.tenPhim}
          />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 me-2 rounded px-2.5 py-0.5 text-xs font-medium">
            {" "}
            Phụ đề / Lồng tiếng{" "}
          </span>
          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only"> Xem trailer </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-quick-look"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              Xem trailer
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        </div>
        <a
          href="#"
          className="text-lg leading-tight font-semibold text-gray-900 hover:underline dark:text-white"
        >
          {movie.tenPhim}
        </a>
        {/* <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Thể loại phim:
            </p>
            <p className="text-sm font-medium text-black dark:text-gray-400">
              {movie.biDanh}
            </p>
          </li>
        </ul> */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none"
          >
            Mua vé ngay
          </button>
        </div>
      </div>
    </div>
  );
}
