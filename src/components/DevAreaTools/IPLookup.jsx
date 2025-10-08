import { useState } from 'react';

export default function IPLookup() {
    const [ipAddress, setIpAddress] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const lookupIP = async (ip) => {
        setLoading(true);
        setError(null);
        try {
            const url = ip 
                ? `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`
                : `http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.status === 'fail') {
                setError(data.message);
                setResult(null);
            } else {
                setResult(data);
            }
        } catch (err) {
            setError('Failed to lookup IP');
            console.error('Error:', err);
        }
        setLoading(false);
    };

    const getMyIP = () => {
        setIpAddress('');
        lookupIP('');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">IP Address Lookup</h1>
            
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Enter IP address (e.g., 8.8.8.8)"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={() => lookupIP(ipAddress)}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Loading...' : 'Lookup'}
                </button>
                <button 
                    onClick={getMyIP}
                    disabled={loading}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400"
                >
                    My IP
                </button>
            </div>

            {error && (
                <div className="bg-slate-800 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {result && (
                <div className="bg-gray-500 border border-gray-700 rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold">IP Information</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">IP Address</span>
                            <span className="font-mono font-semibold">{result.query}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">Country</span>
                            <span className="font-medium">{result.country} ({result.countryCode})</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">Region</span>
                            <span className="font-medium">{result.regionName}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">City</span>
                            <span className="font-medium">{result.city}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">ZIP Code</span>
                            <span className="font-medium">{result.zip || 'N/A'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">Timezone</span>
                            <span className="font-medium">{result.timezone}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">ISP</span>
                            <span className="font-medium">{result.isp}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">Organization</span>
                            <span className="font-medium">{result.org}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">AS Number</span>
                            <span className="font-mono text-sm">{result.as}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">Coordinates</span>
                            <span className="font-mono text-sm">{result.lat}, {result.lon}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}