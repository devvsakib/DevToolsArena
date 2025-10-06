import React, { useState, useEffect } from "react";
import { FaCopy, FaSyncAlt, FaTrashAlt } from "react-icons/fa";

// Simple XOR-based obfuscation with key (optional)
const xorEncrypt = (text, key = 129) => {
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
  const [mode, setMode] = useState("encode"); // "encode" or "decode"
  const [auto, setAuto] = useState(true);

  const handleConvert = () => {
    try {
      if (mode === "encode") {
        const encrypted = xorEncrypt(input);
        setOutput(toBase64Url(encrypted));
      } else {
        const decrypted = xorEncrypt(fromBase64Url(input));
        setOutput(decrypted);
      }
    } catch (e) {
      setOutput("❌ Invalid input");
    }
  };

  const handleCopy = () => navigator.clipboard.writeText(output);
  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  useEffect(() => {
    if (auto && input.trim() !== "") handleConvert();
    if (!input.trim()) setOutput("");
  }, [input, mode, auto]);

  return (
    <div className="p-10 min-h-screen bg-gray-900 text-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔒 Advanced URL Encoder / Decoder
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-3">
          <button
            className={`px-4 py-2 rounded-md font-medium transition ${
              mode === "encode"
                ? "bg-green-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
            onClick={() => setMode("encode")}
          >
            Encode
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium transition ${
              mode === "decode"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
            onClick={() => setMode("decode")}
          >
            Decode
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={auto}
              onChange={() => setAuto(!auto)}
              className="accent-green-500"
            />
            Auto mode
          </label>
          <button
            onClick={handleConvert}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition"
          >
            <FaSyncAlt /> Convert
          </button>
        </div>
      </div>

      {/* Input */}
      <textarea
        className="w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-black placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 h-40 resize-none"
        placeholder="Enter text or URL here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Output */}
      <div className="mt-6 relative">
        <textarea
          className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-black font-mono focus:outline-none h-40 resize-none"
          readOnly
          value={output}
          placeholder="Output will appear here..."
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 bg-gray-600 hover:bg-gray-500 rounded-md transition"
            title="Copy"
          >
            <FaCopy />
          </button>
          <button
            onClick={handleClear}
            className="p-2 bg-gray-600 hover:bg-gray-500 rounded-md transition"
            title="Clear"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default URLEncoderDecoder;
