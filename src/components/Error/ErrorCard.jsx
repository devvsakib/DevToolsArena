import React from 'react'

function ErrorCard({ title, error }) {
    return (
        <div className="card text-dark mx-auto p-[2rem] mb-3">
            <div className="card-header py-2">
                <h4>Push error<span class="before:block top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#7e1aa5] relative inline-block">
                    <span class="relative text-white text-[1rem] -top-3">Git</span>
                </span></h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
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
            <button class="px-4 mt-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Solution</button>
        </div>
    )
}

export default ErrorCard