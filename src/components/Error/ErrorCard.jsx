import React from 'react'

function ErrorCard({ title, error, type }) {
    return (
        <div className="card text-dark mx-auto p-[2rem] mb-3">
            <div className="card-body">
                <h4 className="card-title">{title}<span className="before:block top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#7e1aa5] relative inline-block">
                    <span className="relative text-white text-[1rem] -top-3">{type}</span>
                </span></h4>
                <hr className='border-none h-[2px] mb-2 mt-1 bg-[#5c329e]' />
                <code className="error block sm:hidden">{
                    error.length > 150 ? (
                        error.slice(0, 150) + '...'
                    ) : (
                        error
                    )

                }</code>
                <code className="error hidden sm:block">{error}</code>
            </div>
            <button className="px-4 mt-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Solution</button>
        </div>
    )
}

export default ErrorCard