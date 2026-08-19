interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Panigation(props: IProps) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="flex -space-x-px text-sm">
        {/* Previous */}
        <li>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-s-base box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="sr-only">Previous</span>

            <svg
              className="h-4 w-4 rtl:rotate-180"
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
          </button>
        </li>

        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li key={page}>
              <button
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
                className={
                  currentPage === page
                    ? "text-fg-brand bg-neutral-tertiary-medium border-default-medium box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                    : "text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none"
                }
              >
                {page}
              </button>
            </li>
          ),
        )}

        {/* Next */}
        <li>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading rounded-e-base box-border flex h-9 w-9 items-center justify-center border text-sm font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="sr-only">Next</span>

            <svg
              className="h-4 w-4 rtl:rotate-180"
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
          </button>
        </li>
      </ul>
    </nav>
  );
}
