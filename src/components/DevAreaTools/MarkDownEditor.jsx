import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Input, Button } from 'antd';
import Layout from '../Layout/Layout';

const MarkDownEditor = () => {
    const [content, setContent] = useState("");

    const handleDownload = () => {
        const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'document.md';
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className='grid md:grid-cols-2 gap-5 px-5 md:px-10 h-dvh overflow-y-scroll'>
            <div>
                <Input.TextArea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter markdown here"
                    autoSize={{ minRows: 20 }}
                    className='min-h-screen dark:bg-black text-sm md:text-base dark:text-white p-4 !outline-none placeholder:font-semibold'
                />
                <Button
                    onClick={handleDownload}
                    type="primary"
                    className='mt-4'
                >
                    Download Markdown
                </Button>
            </div>

            <div className='bg-dark/40 p-5 rounded-md overflow-auto'>
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
                        blockquote({ node, children }) {
                            return <blockquote className='bg-gray-100 p-4 pl-6 text-sm my-4 border-l-4 border-gray-300'>{children}</blockquote>;
                        },
                        li({ node, children }) {
                            return <li className='list-disc ml-4'>{children}</li>;
                        },
                        ul({ node, children }) {
                            return <ul className='list-disc ml-4 mb-2'>{children}</ul>;
                        },
                        ol({ node, children }) {
                            return <ol className='list-decimal ml-4 mb-2'>{children}</ol>;
                        },
                        img({ node, src, alt }) {
                            return <img src={src} alt={alt} className='mb-4 rounded-md' />;
                        },
                        h1({ node, children }) {
                            return <h1 className='text-3xl font-bold mt-6 mb-4'>{children}</h1>;
                        },
                        h2({ node, children }) {
                            return <h2 className='text-2xl font-semibold mt-5 mb-3'>{children}</h2>;
                        },
                        h3({ node, children }) {
                            return <h3 className='text-xl font-medium mt-4 mb-2'>{children}</h3>;
                        },
                        h4({ node, children }) {
                            return <h4 className='text-lg font-medium mt-3 mb-1'>{children}</h4>;
                        },
                        h5({ node, children }) {
                            return <h5 className='text-md font-medium mt-2 mb-1'>{children}</h5>;
                        },
                        h6({ node, children }) {
                            return <h6 className='text-sm font-medium mt-1 mb-1'>{children}</h6>;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkDownEditor;
