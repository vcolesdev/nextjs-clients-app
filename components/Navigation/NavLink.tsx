import Link from "next/link";

export function NavLink({
  linkClasses,
  href,
  label
}: {
  href: string;
  label: string;
  linkClasses: string;
}) {
  return (
    <Link
      className={`px-2 py-1.5 rounded-md tracking-tight transition duration-200 ${
        linkClasses && linkClasses
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
