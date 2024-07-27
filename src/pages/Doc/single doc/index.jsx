import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin, Alert } from 'antd';
import Layout from '../../../components/Layout/Layout';

const DocDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/posts/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content: ${response.statusText}`);
                }
                const text = await response.text(); // Ensure you're reading text
                setContent(text);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [slug]);


    const extractHeadings = (markdown) => {
        const headings = [];
        const regex = /^#{1,6}\s+(.*)$/gm;
        let match;
        while ((match = regex.exec(markdown)) !== null) {
            const level = match[0].split(' ')[0].length;
            const title = match[1];
            headings.push({ level, title });
        }
        setHeadings(headings);
    };

    useEffect(() => {
        if (content) {
            extractHeadings(content);
        }
    }, [content]);

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [content]);

    if (loading) return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
    if (error) return <Alert message="Error" description={error} type="error" />;

    return (
        <Layout>
            <section className="container mx-auto p-4">
                <h3 className="text-2xl md:text-3xl capitalize text-center my-10 mb-20 font-semibold">
                    {slug.replace(/-/g, ' ')}
                </h3>
                <div className="flex sticky top-20">
                    <aside className="w-1/4 p-4">
                        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
                        <ul>
                            {headings.map((heading, index) => (
                                <li key={index} className={`ml-${heading.level}`}>
                                    <a href={`#${heading.title.replace(/\s+/g, '-').toLowerCase()}`}>
                                        {heading.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <div className="prose lg:prose-xl w-3/4">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={a11yDark}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                                h1({ node, children }) {
                                    return <h1 className='text-xl font-normal mt-5' id={children[0].toLowerCase().replace(/\s+/g, '-')}> {children}</h1>;
                                },
                                h2({ node, children }) {
                                    return <h2 className='text-xl font-normal mt-5' id={children[0].toLowerCase().replace(/\s+/g, '-')}>🌿 {children}</h2>;
                                },
                                h3({ node, children }) {
                                    return <h3 className='text-xl font-normal mt-5' id={children[0].toLowerCase().replace(/\s+/g, '-')}>🌿 {children}</h3>;
                                },
                                // Handle other heading levels if needed
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DocDetail;
