export default function TitleHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-base border-default-medium mx-auto mb-6 flex w-max items-start border px-6 py-2 text-2xl font-bold sm:items-center">
      <p>{children}</p>
    </div>
  );
}
