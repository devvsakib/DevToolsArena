import ResourceCard from "./ResourceCard";

const ResourceSection = ({ title, resources }) => (
    <section className="my-12">
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard idx={index} resource={resource} />
            ))}
        </div>
    </section>
);

export default ResourceSection;
