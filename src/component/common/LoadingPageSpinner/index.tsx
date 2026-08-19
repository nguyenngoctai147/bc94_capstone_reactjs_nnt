import { Spinner } from "flowbite-react";

export default function LoadingPageSpinner({ label = "Đang tải..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16">
      <Spinner size="xl" aria-label={label} />
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}
