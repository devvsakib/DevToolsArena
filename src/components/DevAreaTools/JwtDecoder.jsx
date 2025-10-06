import React, { useState } from "react";

export function base64UrlToBase64(base64url) {
  if (typeof base64url !== "string") throw new Error("Invalid input for base64UrlToBase64");
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = base64.length % 4;
  if (pad === 2) base64 += "==";
  else if (pad === 3) base64 += "=";
  else if (pad === 1) throw new Error("Invalid base64url string");
  return base64;
}

export function decodeBase64UrlJson(input) {
  const b64 = base64UrlToBase64(input);
  try {
    const decoded = atob(b64);
    try {
      const percentDecoded = decodeURIComponent(
        decoded
          .split("")
          .map((c) => {
            const code = c.charCodeAt(0).toString(16).padStart(2, "0");
            return `%${code}`;
          })
          .join("")
      );
      return JSON.parse(percentDecoded);
    } catch (e) {
      return JSON.parse(decoded);
    }
  } catch (err) {
    throw new Error("Failed to decode base64url JSON: " + (err && err.message));
  }
}

export function parseJWT(token) {
  if (typeof token !== "string") throw new Error("Token must be a string");
  const parts = token.trim().split(".");
  return {
    parts,
    header: parts[0] ? decodeBase64UrlJson(parts[0]) : null,
    payload: parts[1] ? decodeBase64UrlJson(parts[1]) : null,
    signature: parts[2] || null,
  };
}

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [signature, setSignature] = useState(null);
  const [error, setError] = useState(null);

  const handleDecode = () => {
    setError(null);
    setHeader(null);
    setPayload(null);
    setSignature(null);
    if (!token.trim()) {
      setError("Please paste a JWT token.");
      return;
    }
    try {
      const parsed = parseJWT(token);
      if (!parsed.parts || parsed.parts.length < 2) {
        setError("Token does not have the expected parts (header.payload[.signature]).");
        return;
      }
      setHeader(parsed.header);
      setPayload(parsed.payload);
      setSignature(parsed.signature);
    } catch (e) {
      setError(e.message || String(e));
    }
  };

  const handleClear = () => {
    setToken("");
    setHeader(null);
    setPayload(null);
    setSignature(null);
    setError(null);
  };

  const copyPayload = async () => {
    if (!payload) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    } catch {}
  };

  return (
    <div className="min-h-screen  text-white p-8 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]">
        🔐 JWT Decoder
      </h2>

      <div className="max-w-3xl mx-auto bg-[#111827]/70 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(56,189,248,0.15)]">
        <p className="text-sm text-slate-400 mb-4 text-center">
          Paste your <span className="text-cyan-400 font-medium">JWT</span> below and decode it safely on the client-side.
        </p>

        <textarea
          aria-label="JWT token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste JWT here (header.payload.signature)"
          className="w-full min-h-[100px] p-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-cyan-500 text-sm mb-4 outline-none text-slate-200"
        />

        <div className="flex gap-3 justify-center mb-5">
          <button
            onClick={handleDecode}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 shadow-[0_0_12px_rgba(147,51,234,0.4)] transition-all"
          >
            Decode
          </button>
          <button
            onClick={handleClear}
            className="px-5 py-2 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all"
          >
            Clear
          </button>
          <button
            onClick={copyPayload}
            disabled={!payload}
            className={`px-5 py-2 rounded-lg border ${
              payload
                ? "border-slate-600 hover:border-purple-400"
                : "border-slate-700 opacity-40 cursor-not-allowed"
            } transition-all`}
            title="Copy payload JSON"
          >
            Copy Payload
          </button>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-md bg-red-900/30 border border-red-500/30 text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h3 className="font-semibold text-cyan-400">Header</h3>
            <pre className="mt-2 p-3 rounded-md bg-[#0f172a] border border-slate-700 h-44 overflow-auto text-xs text-slate-300">
              {header ? JSON.stringify(header, null, 2) : "No header decoded"}
            </pre>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-purple-400">Payload</h3>
            <pre className="mt-2 p-3 rounded-md bg-[#0f172a] border border-slate-700 h-44 overflow-auto text-xs text-slate-300">
              {payload ? JSON.stringify(payload, null, 2) : "No payload decoded"}
            </pre>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-cyan-400">Signature</h3>
          <div className="mt-2 p-3 rounded-md bg-[#0f172a] border border-slate-700 text-xs text-slate-400 break-all">
            {signature || "No signature present"}
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        ⚠️ This tool only decodes client-side. Never paste production tokens.
      </p>
    </div>
  );
}
