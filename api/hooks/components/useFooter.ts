export default function useFooter() {
  const date = new Date().getFullYear();
  const email = "webdev@vcoles.com";

  return { date, email };
}
