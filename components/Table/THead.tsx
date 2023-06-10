import React from "react";

export default function THead({ items }: { items: any[] }) {
  return (
    <thead>
      <tr>
        {items.length &&
          items.map((item) => (
            <th
              key={item}
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              {item}
            </th>
          ))}
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}
