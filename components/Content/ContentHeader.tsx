import React from "react";
import { Text } from "@/components/Typography";

export function ContentHeader({
  containerClasses,
  headingText,
  subheadingText
}: {
  containerClasses?: string;
  headingText?: string;
  subheadingText?: string;
}) {
  return (
    <div className={`px-4 sm:px-0 ${containerClasses ? containerClasses : ""}`}>
      <h3 className="mb-2 font-semibold text-lg leading-7 text-slate-700 tracking-tight">
        {headingText ? headingText : "Content Header"}
      </h3>
      {subheadingText && (
        <div className="mt-1 max-w-2xl leading-6">
          <Text>{subheadingText ? subheadingText : "Content subheading."}</Text>
        </div>
      )}
    </div>
  );
}
