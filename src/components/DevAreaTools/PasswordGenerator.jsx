import React, { useState } from "react";

export default function PasswordGenerator() {
    const [length, setLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        let charset = "";
        if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
        if (!charset) return setPassword("⚠️ Select at least one option.");

        let pass = "";
        for (let i = 0; i < length; i++) {
            pass += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(pass);
    };

    const copyPassword = async () => {
        if (!password) return;
        await navigator.clipboard.writeText(password);
    };

    return (
        <div className="min-h-screen text-white p-8 font-sans">
            <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]">
                🔐 Password Generator
            </h2>

            <div className="max-w-3xl mx-auto bg-[#111827]/70 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(52,211,153,0.15)] space-y-4">
                <div className="flex items-center justify-between">
                    <label className="text-sm text-slate-300">Password Length</label>
                    <input
                        type="number"
                        min="4"
                        max="64"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-20 text-center bg-[#0f172a] border border-slate-700 rounded-md p-1 text-sm text-slate-200 focus:border-emerald-500 outline-none"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2">
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} />
                        Include Uppercase
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} />
                        Include Lowercase
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
                        Include Numbers
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
                        Include Symbols
                    </label>
                </div>

                <div className="flex gap-3 justify-center mt-4">
                    <button
                        onClick={generatePassword}
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all"
                    >
                        Generate
                    </button>
                    <button
                        onClick={copyPassword}
                        className={`px-5 py-2 rounded-lg border border-slate-600 hover:border-emerald-400 transition-all ${!password && "opacity-40 cursor-not-allowed"
                            }`}
                        disabled={!password}
                    >
                        Copy
                    </button>
                </div>

                <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Generated Password</h3>
                    <textarea
                        readOnly
                        className="w-full p-3 rounded-md bg-[#0f172a] border border-slate-700 text-slate-200 text-sm"
                        rows="2"
                        value={password}
                        placeholder="Your secure password will appear here..."
                    />
                </div>
            </div>
        </div>
    );
}
