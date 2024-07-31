import React, { useState, useCallback } from 'react';
import Layout from '../components/Layout/Layout';
import MainTitle from '../components/Common/MainTitle';
import ResourceSection from '../components/Resources/ResourceSection';
import resources from '../data/Resources';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce'; // Import lodash debounce

const { Search } = Input;

const Resources = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResources, setFilteredResources] = useState(resources);

    const handleSearch = useCallback(
        debounce((query) => {
            const lowerQuery = query.toLowerCase();

            // Update filtered resources
            const newFilteredResources = {
                learningResources: resources.learningResources.filter(resource =>
                    resource.title.toLowerCase().includes(lowerQuery) ||
                    resource.description.toLowerCase().includes(lowerQuery)
                ),
                toolsLibraries: resources.toolsLibraries.filter(resource =>
                    resource.title.toLowerCase().includes(lowerQuery) ||
                    resource.description.toLowerCase().includes(lowerQuery)
                ),
                careerRoadmaps: resources.careerRoadmaps.filter(resource =>
                    resource.title.toLowerCase().includes(lowerQuery) ||
                    resource.description.toLowerCase().includes(lowerQuery)
                )
            };
            setFilteredResources(newFilteredResources);

            if (lowerQuery) {
                const sections = (Object.keys(newFilteredResources)).map(key => ({ id: key, resources: newFilteredResources[key] }));
                const targetSection = sections.find(section => section.resources.length > 0);
                if (targetSection) {
                    const sectionElement = document.getElementById(targetSection.id);
                    if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }, 100),
        []
    );

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        handleSearch(query);
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <MainTitle
                    title="Free Resources for"
                    highlight="Web Development"
                />
                <div className="w-full md:w-1/4 sticky top-0 p-4 pl-0">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleChange}
                            className="w-full dark:bg-black outline-none p-2 border border-gray-300 rounded-md pl-10"
                        />
                        <SearchOutlined className='text-2xl absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                    </div>
                </div>
                {Object.keys(filteredResources).map((key, index) => (
                    <ResourceSection 
                        key={index} 
                        id={key} 
                        title={key.replace(/(^[a-z])/g,($1)=>{return $1.toUpperCase()})
                                .replace(/([A-Z])/g," $1")}
                        resources={filteredResources[key]} 
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Resources;
