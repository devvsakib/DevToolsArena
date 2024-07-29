import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin, Alert } from 'antd';
import Layout from '../../../components/Layout/Layout';

const Table = ({ children }) => {
    return <table className="min-w-full mt-4 border border-gray-300">{children}</table>;
};

const TableRow = ({ children }) => {
    return <tr className="border-b border-gray-300">{children}</tr>;
};

const TableCell = ({ children }) => {
    return <td className="px-4 py-2">{children}</td>;
};

const TableHeader = ({ children }) => {
    return <th className="px-4 py-2 bg-gray-100 font-bold">{children}</th>;
};

const DocDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [isTOCOpen, setIsTOCOpen] = useState(false);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/posts/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content: ${response.statusText}`);
                }
                const text = await response.text();
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
            if (level > 3) continue;
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
    const headingToId = (children) => String(children).toLowerCase().replace(/\s+/g, '-');

    return (
        <Layout>
            <section className="container mx-auto p-4 min-h-screen">
                <h3 className="text-2xl md:text-3xl capitalize text-center my-10 mb-20 font-semibold">
                    {slug.replace(/_/g, ' ')}
                </h3>
                <div className="flex flex-col md:flex-row">
                    {/* Table of Contents button for smaller screens */}
                    <div className="md:hidden flex justify-center mb-4">
                        <button
                            className="bg-white py-3 px-6 rounded-lg text-left text-black font-normal"
                            onClick={() => setIsTOCOpen(!isTOCOpen)}
                        >
                            Table of Contents
                        </button>
                    </div>

                    {/* Table of Contents for larger screens */}
                    <aside className="md:w-1/4 p-4 hidden md:block">
                        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
                        <ul className='grid gap-2'>
                            {headings.map((heading, index) => {
                                const id = heading.title.replace(/\s+/g, '-').toLowerCase();
                                return (
                                    <li
                                        key={index}
                                        className={`ml-${heading.level} ${activeSection === id ? 'text-green-500 font-semibold' : ''}`}
                                    >
                                        <a
                                            href={`#${id}`}
                                            onClick={() => setActiveSection(id)}
                                        >
                                            {heading.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </aside>

                    {/* Toggleable Table of Contents for smaller screens */}
                    <div className={`md:hidden ${isTOCOpen ? 'block' : 'hidden'} p-4`}>
                        <ul className='grid gap-2'>
                            {headings.map((heading, index) => {
                                const id = heading.title.replace(/\s+/g, '-').toLowerCase();
                                return (
                                    <li
                                        key={index}
                                        className={`ml-${heading.level} ${activeSection === id ? 'text-green-500 font-semibold' : ''}`}
                                    >
                                        <a
                                            href={`#${id}`}
                                            onClick={() => setActiveSection(id)}
                                        >
                                            {heading.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="prose lg:prose-xl md:w-3/4">
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
                                    return <h1 className='text-xl font-normal mt-10 mb-3' id={headingToId(children)}> {children}</h1>;
                                },
                                h2({ node, children }) {
                                    return <h2 className='text-xl font-normal mt-10 mb-3' id={headingToId(children)}>🌿 {children}</h2>;
                                },
                                h3({ node, children }) {
                                    return <h3 className='text-xl font-normal mt-10 mb-3' id={headingToId(children)}>🌿 {children}</h3>;
                                },
                                blockquote({ node, children }) {
                                    return <span className='bg-gray-100 p-4 pl-0 text-sm my-4 block text-gray'>{children}</span>;
                                },
                                table: Table,
                                tr: TableRow,
                                td: TableCell,
                                th: TableHeader,
                                li({ node, children }) {
                                    return <li className='list-disc ml-4'>{children}</li>;
                                },
                                ul({ node, children }) {
                                    return <ul className='list-disc ml-4 mb-2'>{children}</ul>;
                                },
                                ol({ node, children }) {
                                    return <ul className='list-disc ml-4 mb-2'>{children}</ul>;
                                },
                                img({ node, src, alt }) {
                                    return <img src={src} alt={alt} className='mb-4 rounded-md' />;
                                }
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
