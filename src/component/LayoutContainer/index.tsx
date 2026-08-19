interface IProps {
  children: React.ReactNode;
}

export default function LayoutContainer(props: IProps) {
  const { children } = props;
  return (
    <div className="mx-auto w-full max-w-[100%] px-4 sm:max-w-[768px] sm:px-2 md:max-w-[992px] md:px-2 lg:max-w-screen-xl lg:px-0">
      <div className="w-full py-8 sm:py-16">{children}</div>
    </div>
  );
}
