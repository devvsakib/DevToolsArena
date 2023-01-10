import './css/style.css'
import ErrorCard from './ErrorCard'
import { errors } from  '../../data/error.json'

const Error = () => {
    return (
        <section className="container mt-5 flex justify-center flex-wrap mx-auto px-6">
            {
                errors.map((error, index) => (
                    <ErrorCard key={index} title={error.title} error={error.description} type={error.type} />
                ))

            }
        </section>
    )
}

export default Error