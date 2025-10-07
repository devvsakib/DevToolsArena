import React, { useState } from "react";
import yaml from "js-yaml";

export default function YAMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const handleFormat = () => {
    setError(null);
    try {
      const parsed = yaml.load(input);
      const formatted = yaml.dump(parsed, { indent: 2 });
      setOutput(formatted);
    } catch (err) {
      setError("Invalid YAML syntax.");
    }
  };

  const handleMinify = () => {
    setError(null);
    try {
      const parsed = yaml.load(input);
      const minified = yaml.dump(parsed, { indent: 0, flowLevel: -1 }).replace(/\n/g, "");
      setOutput(minified);
    } catch (err) {
      setError("Invalid YAML syntax.");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <div className="min-h-screen text-white p-8 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
        🧾 YAML Formatter
      </h2>

      <div className="max-w-3xl mx-auto bg-[#111827]/70 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(251,191,36,0.15)]">
        <p className="text-sm text-slate-400 mb-4 text-center">
          Paste your YAML below to <span className="text-amber-400 font-medium">format</span> or <span className="text-amber-400 font-medium">minify</span>.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste YAML here..."
          className="w-full min-h-[100px] p-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-amber-500 text-sm mb-4 outline-none text-slate-200"
        />

        <div className="flex gap-3 justify-center mb-5">
          <button
            onClick={handleFormat}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 shadow-[0_0_12px_rgba(251,191,36,0.4)] transition-all"
          >
            Format
          </button>
          <button
            onClick={handleMinify}
            className="px-5 py-2 rounded-lg border border-slate-600 hover:border-amber-400 transition-all"
          >
            Minify
          </button>
          <button
            onClick={handleClear}
            className="px-5 py-2 rounded-lg border border-slate-600 hover:border-amber-400 transition-all"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-md bg-red-900/30 border border-red-500/30 text-red-300 text-sm">
            {error}
          </div>
        )}

        <div>
          <h3 className="font-semibold text-amber-400 mb-2">Output</h3>
          <pre className="mt-2 p-3 rounded-md bg-[#0f172a] border border-slate-700 h-60 overflow-auto text-xs text-slate-300 whitespace-pre-wrap">
            {output || "No formatted YAML yet"}
          </pre>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        🟡 This tool formats YAML locally in your browser.
      </p>
    </div>
  );
}
