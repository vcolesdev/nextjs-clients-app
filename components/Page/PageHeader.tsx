export function PageHeader({ title }: { title: string }) {
  return (
    <header className="page__header">
      <h1 className="page__title text-2xl text-gray-800 font-semibold tracking-tight mb-4 ms-6">
        {title}
      </h1>
    </header>
  );
}
