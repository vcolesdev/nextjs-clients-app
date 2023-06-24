import React from "react";

export function TableHead({ items }: { items: any[] }) {
  return (
    <thead>
      <tr>
        {items.length &&
          items.map((item) => (
            <th
              key={item}
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left font-bold text-slate-600 text-xs uppercase tracking-tight sm:pl-0 last:text-right"
            >
              {item}
            </th>
          ))}
      </tr>
    </thead>
  );
}
