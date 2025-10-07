import { useState } from 'react';

export default function IPLookup() {
    const [ipAddress, setIpAddress] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const lookupIP = async (ip) => {
        setLoading(true);
        try {
            // Using ipapi.co - free, no API key
            const url = ip
                ? `https://ipapi.co/${ip}/json/`
                : 'https://ipapi.co/json/';

            const response = await fetch(url);
            const data = await response.json();

            setResult(data);
        } catch (error) {
            console.error('Error:', error);
            setResult({ error: 'Failed to lookup IP' });
        }
        setLoading(false);
    };

    const getMyIP = () => {
        setIpAddress('');
        lookupIP('');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">IP Address Lookup</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter IP address (e.g., 8.8.8.8)"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded"
                />
                <button
                    onClick={() => lookupIP(ipAddress)}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                >
                    Lookup
                </button>
                <button
                    onClick={getMyIP}
                    disabled={loading}
                    className="px-6 py-2 bg-green-500 text-white rounded"
                >
                    My IP
                </button>
            </div>

            {loading && <p>Loading...</p>}

            {result && !result.error && (
                <div className="bg-gray-100 p-4 rounded">
                    <p><strong>IP:</strong> {result.ip}</p>
                    <p><strong>City:</strong> {result.city}</p>
                    <p><strong>Region:</strong> {result.region}</p>
                    <p><strong>Country:</strong> {result.country_name}</p>
                    <p><strong>Timezone:</strong> {result.timezone}</p>
                    <p><strong>ISP:</strong> {result.org}</p>
                    <p><strong>Latitude:</strong> {result.latitude}</p>
                    <p><strong>Longitude:</strong> {result.longitude}</p>
                </div>
            )}

            {result?.error && (
                <p className="text-red-500">{result.error}</p>
            )}
        </div>
    );
}