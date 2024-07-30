import { Link } from "react-router-dom";

const ResourceCard = ({idx, resource}) => {
  return   <div key={idx} className="dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  {resource.image && (
      <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-40 object-cover object-center"
      />
  )}
  <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
      <p className="text-gray-700 mb-4">{resource.description}</p>
      <Link
          to={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
      >
          Learn More
      </Link>
  </div>
</div>;
};

export default ResourceCard;
