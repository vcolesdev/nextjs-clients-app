import React from "react";

export default function ActionCenter({ children, extraClasses }: {
  children: React.ReactNode,
  extraClasses?: string
}) {
  return (
    <div className={`appbar__actions flex items-center pe-5 ${extraClasses}`}>
      <div className={`appbar__buttons`}>
        {children}
      </div>
    </div>
  )
}