import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Spin, Alert } from 'antd';
import Layout from '../../components/Layout/Layout';

const DocList = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocs = async () => {
            try {
                const response = await fetch('https://github-error-solve.vercel.app/docs/index.json');
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



    if (loading) return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
    if (error) return <Alert message="Error" description={error} type="error" />;

    return (
        <Layout>
            <div className="container mx-auto p-4 min-h-screen">
                <h1 className="text-3xl font-bold mb-20 mt-5 text-center">Documentation</h1>
                <ul>
                    {
                        docs.map(item =>
                            <Link to={item.title} className='capitalize'>{item.title.replace(/_/g, ' ')}</Link>
                        )
                    }
                </ul>
            </div>
        </Layout>
    );
};

export default DocList;
