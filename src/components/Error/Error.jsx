import { useState, useEffect } from 'react'
import './css/style.css'
import ErrorCard from './ErrorCard'
import { errors } from '../../data/error.json'

const Error = ({ search, type }) => {
    const [error, setError] = useState([])
    useEffect(() => {
        setError(errors)
    }, [])

    const filteredError = error.filter((error) => {
        return ((error.title.toLowerCase().includes(search.toLowerCase()) || (error.description.toLowerCase().includes(search.toLowerCase())) || (error.type.toLowerCase().includes(search.toLowerCase()))))
    })

    const filteredErrorByType = filteredError.filter((error) => {
        return (error.type.toLowerCase().includes(type.toLowerCase()))
    })


    return (
        <section className="container mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4  gap-4 mx-auto px-4">
            {
                (filteredErrorByType.length === 0 ? <h1 className="text-center text-2xl text-gray-500">No Error Found</h1> : filteredErrorByType.map((error, idx) => (
                    <ErrorCard key={idx} title={error.title} error={error.description} type={error.type} solutions={error.solutions} />
                )))
            }
        </section>
    )
}

export default Error