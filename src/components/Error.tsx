import React from "react"

export const Error = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="py-1 px-2 bg-red-500 text-white">
        {children}
    </div>
  )
}
