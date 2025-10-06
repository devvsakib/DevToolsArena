import React, { useState, useEffect, useCallback } from "react";
import { FaCopy, FaSyncAlt, FaTrashAlt, FaCheck } from "react-icons/fa";

// XOR-based obfuscation (NOT cryptographically secure)
const xorObfuscate = (text, key = 129) => {
  return text
    .split("")
    .map((c) => String.fromCharCode(c.charCodeAt(0) ^ key))
    .join("");
};

const toBase64Url = (str) => {
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const fromBase64Url = (str) => {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  return atob(str);
};

const URLEncoderDecoder = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [auto, setAuto] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        const obfuscated = xorObfuscate(input);
        setOutput(toBase64Url(obfuscated));
      } else {
        const deobfuscated = xorObfuscate(fromBase64Url(input));
        setOutput(deobfuscated);
      }
    } catch (e) {
      setOutput("❌ Invalid input - unable to decode");
    }
  }, [input, mode]);

  const handleCopy = async () => {
    if (!output) return;
    
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      alert("Failed to copy to clipboard");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  useEffect(() => {
    if (auto) {
      handleConvert();
    }
  }, [input, mode, auto, handleConvert]);

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            URL Encoder / Decoder
          </h1>
          <p className="text-sm text-gray-400">
            XOR-based obfuscation for URLs • Not cryptographically secure
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex gap-3">
            <button
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                mode === "encode"
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
              onClick={() => setMode("encode")}
            >
              Encode
            </button>
            <button
              className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                mode === "decode"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-300"
              }`}
              onClick={() => setMode("decode")}
            >
              Decode
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={auto}
                onChange={() => setAuto(!auto)}
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />
              Auto convert
            </label>
            {!auto && (
              <button
                onClick={handleConvert}
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all text-gray-300"
              >
                <FaSyncAlt className="text-sm" /> Convert
              </button>
            )}
          </div>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Input
          </label>
          <textarea
            className="w-full p-4 border-2 border-gray-700 rounded-lg bg-gray-800 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent h-40 resize-none transition-all"
            placeholder={
              mode === "encode"
                ? "Enter text or URL to encode..."
                : "Enter encoded text to decode..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Output Section */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Output
          </label>
          <textarea
            className="w-full p-4 border-2 border-gray-700 rounded-lg bg-gray-800 text-green-400 font-mono focus:outline-none h-40 resize-none"
            readOnly
            value={output}
            placeholder="Output will appear here..."
          />
          
          {/* Action Buttons */}
          <div className="absolute top-10 right-3 flex gap-2">
            <button
              onClick={handleCopy}
              disabled={!output}
              className={`p-2.5 rounded-lg transition-all ${
                output
                  ? copied
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-gray-800 text-gray-600 cursor-not-allowed"
              }`}
              title={copied ? "Copied!" : "Copy to clipboard"}
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </button>
            <button
              onClick={handleClear}
              className="p-2.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all text-gray-300"
              title="Clear all"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <p className="text-sm text-yellow-200">
            <strong>Security Notice:</strong> This tool uses simple XOR obfuscation and Base64URL encoding. 
            It is NOT suitable for protecting sensitive information. Do not use for passwords, API keys, 
            or any data requiring real security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default URLEncoderDecoder;