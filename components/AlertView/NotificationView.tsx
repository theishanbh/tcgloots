import React from 'react'



export default function NotificationView({children}: {children: React.ReactNode}) {
  return (
    <div className="flex border rounded-xl px-10 py-5 font-jost text-lg bg-white-100 border-yellow-200 items-center justify-center">
       {children}
   </div>
  )
}
