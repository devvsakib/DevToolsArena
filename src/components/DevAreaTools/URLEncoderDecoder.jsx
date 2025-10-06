import React, { useState, useEffect, useCallback } from "react";
import { FaCopy, FaSyncAlt, FaTrashAlt } from "react-icons/fa";

/*
  NOTE: This tool performs **obfuscation only** (XOR + Base64-url).
  It is NOT secure encryption. See in-code warnings and UI label.
*/

/* ---------- Utilities ---------- */

// WARNING: XOR with a fixed key provides NO SECURITY - for obfuscation only.
const xorObfuscate = (str, key = 129) =>
  str
    .split("")
    .map((c) => String.fromCharCode(c.charCodeAt(0) ^ key))
    .join("");

// Base64 URL-safe helpers that support full Unicode via TextEncoder/TextDecoder
const toBase64Url = (str) => {
  // UTF-8 encode into bytes, then base64-encode that binary
  const utf8Bytes = new TextEncoder().encode(str);
  const binary = String.fromCharCode(...utf8Bytes);
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const fromBase64Url = (str) => {
  // restore padding and normal base64 chars, then decode to bytes and to UTF-8 string
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const binaryString = atob(s);
  const bytes = Uint8Array.from(binaryString, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
};

/* ---------- Component ---------- */

const URLEncoderDecoder = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // "encode" | "decode"
  const [auto, setAuto] = useState(true);
  const [error, setError] = useState(""); // user-friendly error message
  const [copied, setCopied] = useState(false);

  // Encodes by: encodeURIComponent -> xorObfuscate -> base64url
  const strongEncode = (text) => {
    // encodeURIComponent ensures reserved characters are percent-encoded,
    // we then obfuscate bytes and base64-url them.
    const uriEncoded = encodeURIComponent(text);
    const ob = xorObfuscate(uriEncoded);
    return toBase64Url(ob);
  };

  // Decodes by: base64url -> xorObfuscate -> decodeURIComponent
  const strongDecode = (text) => {
    try {
      const decodedBase = fromBase64Url(text);
      const deob = xorObfuscate(decodedBase); // XOR is symmetric
      // decodeURIComponent might throw if percent-decoding is invalid
      return decodeURIComponent(deob);
    } catch (e) {
      // normalize error for UI
      throw new Error(e?.message || "Failed to decode input.");
    }
  };

  // Stable handler for conversion (so it can be used in useEffect deps)
  const handleConvert = useCallback(() => {
    setError("");
    if (!input) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        const enc = strongEncode(input);
        setOutput(enc);
      } else {
        const dec = strongDecode(input);
        setOutput(dec);
      }
    } catch (e) {
      // Provide actionable hints to the user
      const hint =
        mode === "decode"
          ? "Ensure input is valid Base64 URL-safe format (no extra whitespace)."
          : "Check for unsupported characters or try disabling Auto mode and pressing Convert.";
      setOutput("");
      setError(`❌ Error: ${e.message || "Invalid input."}\nHint: ${hint}`);
    }
  }, [input, mode]);

  // Auto-convert when appropriate. include handleConvert in deps to avoid stale closures
  useEffect(() => {
    if (auto && input.trim() !== "") {
      handleConvert();
    } else if (!input.trim()) {
      setOutput("");
      setError("");
    }
  }, [input, mode, auto, handleConvert]);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      if (!output) return;
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
      setError("❌ Copy failed: permission denied or clipboard unavailable.");
    }
  };

  return (
    <div className="p-8 md:p-10 min-h-screen bg-[#0b1220]/70 rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.08)] text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-3 text-center">
        🔀 URL Encoder / Decoder (Obfuscation Only)
      </h1>

      <p className="text-xs text-gray-300 text-center mb-6">
        <strong className="text-yellow-300">Warning:</strong> This performs reversible obfuscation
        (XOR + Base64 URL-safe). It is <em>not</em> secure encryption. Do not use for secrets.
      </p>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex gap-3">
          <button
            onClick={() => setMode("encode")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              mode === "encode" ? "bg-green-500 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              mode === "decode" ? "bg-blue-500 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Decode
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={auto}
              onChange={() => setAuto((s) => !s)}
              className="accent-green-400"
            />
            Auto
          </label>

          <button
            onClick={handleConvert}
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition"
            title="Convert now"
          >
            <FaSyncAlt /> Convert
          </button>

          <button
            onClick={handleClear}
            className="px-3 py-2 bg-gray-600 rounded-md text-white hover:bg-gray-500 transition"
            title="Clear"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>

      {/* Error / hint */}
      {error && (
        <pre className="whitespace-pre-wrap text-sm text-red-300 bg-red-900/10 p-3 rounded-md mb-4 border border-red-700/20">
          {error}
        </pre>
      )}

      {/* Input */}
      <label className="text-sm text-gray-300 mb-1 block">Input</label>
      <textarea
        className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 h-36 resize-none mb-4"
        placeholder="Enter text to encode, or paste encoded text to decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Input for encoder/decoder"
      />

      {/* Output */}
      <div className="mt-2 relative">
        <label className="text-sm text-gray-300 mb-1 block">Output</label>
        <textarea
          className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white font-mono focus:outline-none h-36 resize-none"
          readOnly
          value={output}
          placeholder="Result will appear here..."
          aria-label="Output from encoder/decoder"
        />

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition"
            title="Copy output"
            aria-label="Copy output"
          >
            <FaCopy />
          </button>
          {copied && (
            <span className="text-xs text-green-300 ml-1">Copied!</span>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Note: This tool obfuscates using XOR + Base64 URL-safe encoding and supports Unicode input
        (emoji, CJK, etc.). It is intended for obfuscation/transport only — not for protecting secrets.
      </p>
    </div>
  );
};

export default URLEncoderDecoder;
