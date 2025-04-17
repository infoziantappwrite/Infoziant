import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go back to Home</a>
    </div>
  )
}

export default PageNotFound
