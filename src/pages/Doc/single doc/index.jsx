import React, { useEffect, useRef, useState } from 'react';
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
    const [activeSection, setActiveSection] = useState(null);
    const [headings, setHeadings] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (tableRef.current) {
                const rect = tableRef.current.getBoundingClientRect();
                const isTableVisible = rect.top <= 0 && rect.bottom >= 100;
                setIsSticky(isTableVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/docs/${slug}.md`);
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
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
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
            <section className="container mx-auto p-4 min-h-screen">
                <h3 className="text-2xl md:text-3xl capitalize text-center my-10 mb-20 font-semibold">
                    {slug.replace(/_/g, ' ')}
                </h3>
                <div className="flex">
                    <aside ref={tableRef} className="sticky top-20 w-1/4 p-4 h-0">
                        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
                        <ul className='grid gap-2'>
                            {headings.map((heading, index) => (
                                <li key={index} className={`ml-${heading.level} ${activeSection === heading.title.replace(/\s+/g, '-').toLowerCase() && 'text-green-500 font-semibold'}`}>
                                    <a href={`#${heading.title.replace(/\s+/g, '-').toLowerCase()}`}

                                        onClick={() => setActiveSection(heading.title.replace(/\s+/g, '-').toLowerCase())}
                                    >
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
                                    return <h1 className='text-xl font-normal mt-10 mb-3' id={children.toLowerCase().replace(/\s+/g, '-')}> {children}</h1>;
                                },
                                h2({ node, children }) {
                                    return <h2 className='text-xl font-normal mt-10 mb-3' id={children.toLowerCase().replace(/\s+/g, '-')}>🌿 {children}</h2>;
                                },
                                h3({ node, children }) {
                                    return <h3 className='text-xl font-normal mt-10 mb-3' id={children.toLowerCase().replace(/\s+/g, '-')}>🌿 {children}</h3>;
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
