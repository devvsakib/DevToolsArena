import React, { useState } from 'react';
import { Input, Button, Alert } from 'antd';
import JSONPretty from 'react-json-pretty'; // You might need to install this library for pretty JSON output
import 'react-json-pretty/themes/monikai.css'; // Optional: import a theme for JSONPretty
import { toast } from 'sonner';

const JSONFormatter = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [formattedJson, setFormattedJson] = useState(null);
    const [error, setError] = useState('');

    const handleFormat = () => {
        try {
            const parsedJson = JSON.parse(jsonInput);
            setFormattedJson(parsedJson);
            setError('');
        } catch (err) {
            setError('Invalid JSON format');
            setFormattedJson(null);
        }
    };

    const handleClear = () => {
        setJsonInput('');
        setFormattedJson(null);
        setError('');
    };

    const handleCopy = () => {
        if (formattedJson) {
            navigator.clipboard.writeText(JSON.stringify(formattedJson, null, 2))
                .then(() => {
                    toast.success('JSON copied to clipboard');
                })
                .catch(err => alert('Failed to copy JSON: ' + err));
        } else {
            alert('Nothing to copy');
        }
    };

    return (
        <div className='p-5'>
            <h2 className='text-xl font-bold mb-4'>JSON Formatter</h2>
            <Input.TextArea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Paste your JSON here"
                autoSize={{ minRows: 10 }}
                className='mb-4 dark:bg-dark dark:text-white'
            />
            <div className='mb-4'>
                <Button onClick={handleFormat} type="primary" className='mr-2'>
                    Format JSON
                </Button>
                <Button onClick={handleClear} type="default" className='mr-1'>
                    Clear
                </Button>
                <Button onClick={handleCopy} type="default" className='ml-1'>
                    Copy to Clipboard
                </Button>
            </div>
            {error && <Alert message="Error" description={error} type="error" className='mb-4' />}
            {formattedJson && (
                <div className='bg-dark p-4 rounded-md'>
                    <JSONPretty data={formattedJson} onCopy={(data) => navigator.clipboard.writeText(JSON.stringify(data, null, 2))} />
                </div>
            )}
        </div>
    );
};

export default JSONFormatter;
