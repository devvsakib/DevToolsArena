import React, { useState } from "react";

export default function Base64Tool() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState(null);

    const handleEncode = () => {
        setError(null);
        try {
            const encoded = btoa(unescape(encodeURIComponent(input)));
            setOutput(encoded);
        } catch (err) {
            setError("Failed to encode text.");
        }
    };

    const handleDecode = () => {
        setError(null);
        try {
            const decoded = decodeURIComponent(escape(atob(input)));
            setOutput(decoded);
        } catch (err) {
            setError("Invalid Base64 string.");
        }
    };

    const handleClear = () => {
        setInput("");
        setOutput("");
        setError(null);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-4">
            <h2 className="text-lg font-semibold">Base64 Encoder / Decoder</h2>
            <p className="text-sm text-slate-500">
                Encode or decode Base64 text directly in your browser.
            </p>

            <textarea
                className="w-full border rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
                rows="4"
                placeholder="Enter text or Base64 string here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="flex flex-wrap gap-2">
                <button
                    onClick={handleEncode}
                    className="px-4 py-2 rounded-md border text-sm hover:bg-slate-700"
                >
                    Encode
                </button>
                <button
                    onClick={handleDecode}
                    className="px-4 py-2 rounded-md border text-sm hover:bg-slate-700"
                >
                    Decode
                </button>
                <button
                    onClick={handleClear}
                    className="px-4 py-2 rounded-md border text-sm hover:bg-slate-700"
                >
                    Clear
                </button>
            </div>

            {error && (
                <div className="text-red-600 text-sm border border-red-300 rounded-md p-2">
                    {error}
                </div>
            )}

            <div>
                <h3 className="font-medium mb-2">Output</h3>
                <textarea
                    className="w-full border rounded-md p-3 text-sm bg-transparent focus:outline-none"
                    rows="4"
                    readOnly
                    value={output}
                    placeholder="Result will appear here..."
                />
            </div>

            <div className="text-sm text-slate-500">
                <p>⚙️ Example for testing:</p>
                <p><strong>Input:</strong> Hello World</p>
                <p><strong>Encoded Output:</strong> SGVsbG8gV29ybGQ=</p>
            </div>
        </div>
    );
}
