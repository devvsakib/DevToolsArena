import React, { useState } from 'react'

function ErrorCard({ title, error, type }) {
    // i want to show the solution when the user click on the button
    const [show, setShow] = useState(true)
    const [solution, setSolution] = useState(false)

    return (
        <div className="card text-dark mx-auto p-[2rem] mb-3 relative overflow-hidden">
            <div className={`top-0 left-0 sm:w-2 sm:h-full w-full h-2 absolute ${type === "add" ? "bg-[#4024e0]" : type === "commit" ? "bg-[#1a5ba5]" : type === "push" ? "bg-[#1a5ba5]" : "bg-[#7e1aa5]"}`}></div>
            <div className="card-body">
                <h4 className="card-title">{title}<span className={`before:block top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 relative inline-block ${type === "add" ? "before:bg-[#4024e0]" : type === "commit" ? "before:bg-[#1a5ba5]" : type === "push" ? "before:bg-[#1a5ba5]" : "before:bg-[#7e1aa5]"}`}>
                    <span className="relative text-white text-[1rem] -top-3">{type}</span>
                </span></h4>
                <hr className='border-none h-[2px] mb-2 mt-1 bg-[#5c329e]' />
                <code className={`error  ${solution ? "hidden" : "block"}`}>
                    {
                        error.length > 150 ? (
                            error.slice(0, 150) + '...'
                        ) : (
                            error
                        )

                    }</code>
                {/* <code className={`error  ${solution ? "hidden" : "block"} `}>{error}</code> */}
                <div className={`${show ? "hidden" : 'visible'} mt-4`}>
                    <p className="text-orange-300">git init</p>
                    <p className="text-orange-300">git add .</p>
                    <p className="text-orange-300">git commit -m "first commit"</p>
                    <p className="text-orange-300">git branch -M main</p>
                    <p className="text-orange-300">git remote add origin</p>
                    <p>
                        <span className="text-purple-400">
                            <p className="text-orange-300">git push origin main -u</p>
                        </span>
                    </p>


                </div>
            </div>
            <button
                onClick={() => { setShow(!show); setSolution(!solution) }}
                className="px-4 mt-4 py-1 text-sm text-purple-400 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none">Solution</button>
        </div >
    )
}

export default ErrorCard