import { Card } from "flowbite-react";
import { TDataUuDai } from "./../../Data";

type IProps = {
  item: TDataUuDai[];
};

export default function CardBlog({ item }: IProps) {
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3">
      {item?.map((items) => {
        return (
          <Card
            key={items.id}
            className="max-w-sm"
            renderImage={() => (
              <img className="h-auto w-full" src={items.img} alt={items.name} />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {items.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {items.desc}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
