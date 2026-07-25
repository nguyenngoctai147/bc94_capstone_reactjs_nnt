import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function CardMovie(props) {
  const { movie } = props;
  return (
    <Card
      className="max-w-sm overflow-hidden"
      renderImage={() => (
        <Link to="#" className="block aspect-3/2 w-full overflow-hidden">
          <img
            className="object-cover transition duration-1000 ease-in-out hover:scale-120"
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
          />
        </Link>
      )}
    >
      <Link to="#">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </Link>
    </Card>
  );
}
