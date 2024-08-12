import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin, Alert } from 'antd';
import Layout from '../../../components/Layout/Layout';
import * as matter from 'frontmatter'
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

const BlogDetail = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [headings, setHeadings] = useState([]);
    const [frontmatter, setFrontmatter] = useState({});

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/blogposts/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content: ${response.statusText}`);
                }
                const text = await response.text(); // Ensure you're reading text
                const { content, data } = matter(text);
                setContent(content);
                setFrontmatter(data);
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
                {/* Title Section */}
                <div className="text-center my-10">
                    <h3 className="text-2xl md:text-3xl font-semibold capitalize">{frontmatter.title || slug.replace(/_/g, ' ')}</h3>
                    <p className="text-lg text-gray-500">   {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString() : 'Date not available'}</p>
                </div>
                <div className="mb-6 text-center">
                    <p className="text-md font-semibold">
                        Author: <span className="font-normal">{frontmatter.author || 'Unknown'}</span>
                    </p>
                    <p className="text-md font-semibold">
                        Tags:
                        {frontmatter.tags && frontmatter.tags.length > 0 ? (

                            <span className="font-normal">
                                {frontmatter.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-200 text-blue-800 py-1 px-2 rounded-md text-sm mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </span>
                        ) : (
                            <span className="font-normal">None</span>
                        )}
                    </p>
                </div>

                <div className="flex">
                    <aside className="sticky top-20 w-1/4 p-4 h-0">
                        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
                        <ul className='grid gap-2'>
                            {headings.map((heading, index) => (
                                <li key={index} className={`ml-${heading.level} ${activeSection === heading.title.replace(/\s+/g, '-').toLowerCase() && 'text-green-500 font-semibold'}`}>
                                    <a href={`#${heading.title.replace(/\s+/g, '-').toLowerCase()}`}

                                        onClick={() => setActiveSection(heading.title.replace(/\s+/g, '-')?.toLowerCase())}
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

export default BlogDetail;
