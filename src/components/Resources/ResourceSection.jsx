import { Link } from "react-router-dom";

const ResourceSection = ({ title, resources }) => (
    <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
                <div key={index} className="p-4 bg-black rounded-lg shadow-md flex flex-col items-center overflow-hidden">
                    {resource.image && <img src={resource.image} alt={resource.title} className="mb-4 object-cover object-center w-full h-36 rounded-t-lg" />}
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="mb-4">{resource.description}</p>
                    <Link to={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        Learn More
                    </Link>
                </div>
            ))}
        </div>
    </section>
);

export default ResourceSection;
