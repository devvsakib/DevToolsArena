import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Spin, Alert } from 'antd';
import Layout from '../../components/Layout/Layout';
import { FaArrowRight } from "react-icons/fa";
import MainTitle from '../../components/Common/MainTitle';

const DocList = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const response = await fetch('/posts/index.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setDocs(data);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching JSON data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocs();
    }, []); 



    if (error) return <Alert message="Error" description={error} type="error" />;

    return (
        <Layout>
            <div className="container mx-auto p-4 min-h-screen">
                <MainTitle highlight={'Documentation'} />
                {loading ? (
                    <div className='grid place-content-center mx-auto md:max-w-2xl aspect-video'>
                        <Spin size="large" />
                    </div>
                ) : (<ul className='grid gap-5 mx-auto md:max-w-2xl'>
                    {
                        docs.map(item =>
                            <Link key={item.title} to={item.title} className='capitalize group flex items-center justify-between bg-white/10 p-5 rounded-md'>{item.title.replace(/_/g, ' ')}
                                <FaArrowRight className="dark:text-white opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition duration-300" />
                            </Link>
                        )
                    }
                </ul>)}
            </div>
        </Layout>
    );
};

export default DocList;
