export function Logo({ text }: { text: string }): JSX.Element {
  return (
    <div className="logo flex align-middle ps-10 pe-5 pt-4.5 py-3.5 me-8 border-r border-r-gray-100">
      <div className="icon__container inline-block w-[20px] mt-2.5 me-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon ionicon text-amber-600"
          viewBox="0 0 512 512"
        >
          <path fill="" d="M432 208H288l32-192L80 304h144l-32 192z" />
        </svg>
      </div>
      <span className="inilne-block mt-1.5 text-lg font-semibold text-gray-800">
        {text}
      </span>
    </div>
  );
}
