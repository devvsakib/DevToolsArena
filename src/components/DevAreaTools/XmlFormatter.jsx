import React, { useState } from "react";
// import { button } from "@/components/ui/button";
// import { textarea } from "@/components/ui/textarea";

const XmlFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatXml = (xml) => {
    try {
      const PADDING = "  ";
      const reg = /(>)(<)(\/*)/g;
      let formatted = "";
      let pad = 0;

      xml = xml.replace(reg, "$1\r\n$2$3");
      xml.split("\r\n").forEach((node) => {
        let indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) indent = 0;
        else if (node.match(/^<\/\w/)) {
          if (pad !== 0) pad -= 1;
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) indent = 1;
        formatted += PADDING.repeat(pad) + node + "\r\n";
        pad += indent;
      });
      return formatted.trim();
    } catch {
      return "Invalid XML input.";
    }
  };

  const handleFormat = () => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "application/xml");
      const parseError = xmlDoc.getElementsByTagName("parsererror");
      if (parseError.length) throw new Error("Invalid XML");
      setOutput(formatXml(input));
    } catch {
      setOutput("❌ Invalid XML structure");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-slate-800">XML Formatter</h2>
      <textarea
        placeholder="Paste your XML here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="resize-none border border-slate-300"
        rows={6}
      />

      <div className="flex gap-2">
        <button onClick={handleFormat}>Format</button>
        <button onClick={handleClear} variant="outline">Clear</button>
      </div>

      <textarea
        placeholder="Formatted XML output..."
        value={output}
        readOnly
        className="resize-none border border-slate-300 font-mono text-sm"
        rows={8}
      />
    </div>
  );
};

export default XmlFormatter;
