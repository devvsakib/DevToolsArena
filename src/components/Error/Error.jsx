import { useState, useEffect } from 'react'
import './css/style.css'
import ErrorCard from './ErrorCard'
import { errors } from '../../data/error.json'

const Error = ({ search }) => {
    const [error, setError] = useState([])
    useEffect(() => {
        setError(errors)
    }, [])

    const filteredError = error.filter((error) => {
        return error.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <section className="container mt-5 flex justify-center flex-wrap mx-auto px-6">
            {
                filteredError.length === 0 ? <h1 className="text-center text-2xl text-gray-500">No Error Found</h1> : filteredError.map((error, idx) => (
                    <ErrorCard key={idx} title={error.title} error={error.description} type={error.type} />
                ))
            }
        </section>
    )
}

export default Error