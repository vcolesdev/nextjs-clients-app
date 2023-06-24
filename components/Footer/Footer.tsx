import useFooter from "@/api/hooks/components/useFooter";

export function Footer() {
  const { date, email } = useFooter();

  return (
    <footer className={"footer px-8 bg-gray-800"}>
      <div className={"py-5"}>
        <p className={"text-sm text-gray-400"}>
          <span className={"inline-block text-gray-100 me-1"}>&copy;</span>
          {date}
          <span className={"inline-block px-2 text-gray-600"}>|</span>
          Made with
          <span className={"inline-block text-gray-300 mx-1"}>&hearts;</span>
          <span
            className={"cursor-pointer hover:underline hover:text-gray-300"}
          >
            {email}
          </span>
        </p>
      </div>
    </footer>
  );
}
