export default function useNav() {
  const getRoute = (route: string) => {
    return route.split("/")[1]; // Split the pathname by "/" and get the first item in the array.
  };

  const links = [
    {
      title: "Home",
      route: "/"
    },
    {
      title: "About",
      route: "/about"
    },
    {
      title: "Clients",
      route: "/clients/dashboard"
    }
  ];

  return { getRoute, links };
}
