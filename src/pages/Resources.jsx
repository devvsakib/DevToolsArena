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
                {/* <div className="loader h-24 w-full">
                    <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
                                <stop stop-color="#973BED"></stop>
                                <stop stop-color="#007CFF" offset="1"></stop>
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
                                <stop stop-color="#FFC800"></stop>
                                <stop stop-color="#F0F" offset="1"></stop>
                            </linearGradient>
                            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
                                <stop stop-color="#00E0ED"></stop>
                                <stop stop-color="#00DA72" offset="1"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 10,4 H 32 C 48,4 54,20 54,32 54,44 48,60 32,60 H 10 Z" className="dash" id="d" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#c)" d="M 54,32 C 54,18 43,4 28,4 13,4 4,18 4,32 4,46 13,60 28,60 43,60 54,46 54,32 Z M 54,32 H 4" className="dash" id="e" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 4,4 L 32,60 L 60,4" className="dash" id="v" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 4,4 H 60 M 32,4 V 60" className="dash" id="t" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ "--rotation-duration": "0ms", "--rotation-direction": "normal" }} viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#c)" d="M 32 32 m 0 -28 a 28 28 0 1 1 0 56 a 28 28 0 1 1 0 -56" className="spin" id="o" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ "--rotation-duration": "0ms", "--rotation-direction": "normal" }} viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 32 32 m 0 -28 a 28 28 0 1 1 0 56 a 28 28 0 1 1 0 -56" className="spin" id="o2" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 32,4 V 60" className="dash" id="l" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#c)" d="M 60,16 C 60,8 52,4 32,4 12,4 4,8 4,16 4,24 12,28 32,28 52,28 60,32 60,40 60,48 52,52 32,52 12,52 4,48 4,40" className="dash" id="s" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 4,60 L 32,4 L 60,60 M 16,40 H 48" className="dash" id="a" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 4,32 V 60 M 4,32 C 4,16 16,16 32,16" className="dash" id="r" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#c)" d="M 54,32 C 54,18 43,4 28,4 13,4 4,18 4,32 4,46 13,60 28,60 43,60 54,46 54,32 Z M 54,32 H 4" className="dash" id="e2" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 4,60 V 16 C 4,8 12,4 32,4 52,4 60,8 60,16 V 60" className="dash" id="n" pathLength="360"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 60,44 C 60,52 52,60 32,60 12,60 4,52 4,44 V 32 C 4,24 12,16 32,16 52,16 60,24 60,32 V 60" className="dash" id="a2" pathLength="360"></path>
                    </svg>
                </div> */}

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
                        title={
                            key
                                .replace(/(^[a-z])/g, ($1) => { return $1.toUpperCase() })
                                .replace(/([A-Z])/g, " $1")
                        }
                        resources={filteredResources[key]}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Resources;
