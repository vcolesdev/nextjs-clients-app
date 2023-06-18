import React from "react";

export default function ContentHeader({
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
      <h3 className="font-semibold leading-7 text-gray-800 tracking-tight">
        {headingText ? headingText : "Content Header"}
      </h3>
      {subheadingText && (
        <p className="mt-1 max-w-2xl leading-6 text-gray-500 text-sm">
          {subheadingText ? subheadingText : "Content subheading."}
        </p>
      )}
    </div>
  );
}
