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

            // Scroll to the relevant section if there are results
            if (lowerQuery) {
                const sections = [
                    { id: 'learning-resources', resources: newFilteredResources.learningResources },
                    { id: 'tools-libraries', resources: newFilteredResources.toolsLibraries },
                    { id: 'career-roadmaps', resources: newFilteredResources.careerRoadmaps }
                ];
                const targetSection = sections.find(section => section.resources.length > 0);
                if (targetSection) {
                    const sectionElement = document.getElementById(targetSection.id);
                    if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        }, 300), // Debounce delay in milliseconds
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
                    {/* Icon and Input container */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleChange}
                            className="w-full outline-none p-2 border border-gray-300 rounded-md pl-10" // Added padding to the left for icon
                        />
                        <SearchOutlined className='text-2xl absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
                    </div>
                </div>
                {filteredResources.learningResources.length > 0 && (
                    <ResourceSection id="learning-resources" title="Learning Resources" resources={filteredResources.learningResources} />
                )}
                {filteredResources.toolsLibraries.length > 0 && (
                    <ResourceSection id="tools-libraries" title="Tools & Libraries" resources={filteredResources.toolsLibraries} />
                )}
                {filteredResources.careerRoadmaps.length > 0 && (
                    <ResourceSection id="career-roadmaps" title="Career Roadmaps" resources={filteredResources.careerRoadmaps} />
                )}
            </div>
        </Layout>
    );
};

export default Resources;
