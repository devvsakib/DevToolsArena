import { Link } from "react-router-dom";
import MainTitle from "../../components/Common/MainTitle";
import Layout from "../../components/Layout/Layout";
import { FaArrowRight } from "react-icons/fa";

const DevArea = () => {
    const tools = [
        {
            name: "Markdown",
            link: "/devarea/markdown",
            isAvailable: true
        },
        {
            name: "JSON Formatter",
            link: "/devarea/json-formatter",
            isAvailable: true
        },
        {
            name: "Base64 Encoder/Decoder",
            link: "/devarea/base64",
            isAvailable: true
        },
        {
            name: "JWT Decoder",
            link: "/devarea/jwtdecoder",
            isAvailable: true
        },
        {
            name: "URL Encoder/Decoder",
            link: "/devarea/url-encoder-decoder",
            isAvailable: true
        },
        {
            name: "XML Formatter",
            link: "/devarea/xml-formatter",
            isAvailable: true
        },
        {
            name: "YAML Formatter",
            link: "/devarea/yaml-formatter",
            isAvailable: true
        },
        {
            name: "CSV Formatter",
            link: "/devarea/csv-formatter",
            isAvailable: false
        },
        // Text & String Tools
        {
            name: "Text Diff Checker",
            link: "/devarea/text-diff",
            isAvailable: false
        },
        {
            name: "Case Converter",
            link: "/devarea/case-converter",
            isAvailable: false
        },
        {
            name: "String Length Counter",
            link: "/devarea/string-counter",
            isAvailable: false
        },
        {
            name: "Lorem Ipsum Generator",
            link: "/devarea/lorem-ipsum",
            isAvailable: false
        },
        // Encoding & Hashing
        {
            name: "Hash Generator (MD5, SHA)",
            link: "/devarea/hash-generator",
            isAvailable: false
        },
        {
            name: "UUID Generator",
            link: "/devarea/uuid-generator",
            isAvailable: false
        },
        {
            name: "HTML Encoder/Decoder",
            link: "/devarea/html-encoder-decoder",
            isAvailable: false
        },
        // Code & Data
        {
            name: "SQL Formatter",
            link: "/devarea/sql-formatter",
            isAvailable: false
        },
        {
            name: "Regex Tester",
            link: "/devarea/regex-tester",
            isAvailable: false
        },
        {
            name: "JSON to CSV",
            link: "/devarea/json-to-csv",
            isAvailable: false
        },
        {
            name: "CSV to JSON",
            link: "/devarea/csv-to-json",
            isAvailable: false
        },
        {
            name: "Code Minifier",
            link: "/devarea/code-minifier",
            isAvailable: false
        },
        {
            name: "Code Beautifier",
            link: "/devarea/code-beautifier",
            isAvailable: false
        },
        // Color & Design
        {
            name: "Color Converter",
            link: "/devarea/color-converter",
            isAvailable: false
        },
        {
            name: "Color Picker",
            link: "/devarea/color-picker",
            isAvailable: false
        },
        {
            name: "Gradient Generator",
            link: "/devarea/gradient-generator",
            isAvailable: false
        },
        // Time & Date
        {
            name: "Unix Timestamp Converter",
            link: "/devarea/timestamp-converter",
            isAvailable: false
        },
        {
            name: "Cron Expression Generator",
            link: "/devarea/cron-generator",
            isAvailable: false
        },
        // Image & Media
        {
            name: "Image to Base64",
            link: "/devarea/image-to-base64",
            isAvailable: false
        },
        {
            name: "QR Code Generator",
            link: "/devarea/qr-code-generator",
            isAvailable: false
        },
        // Network & API
        {
            name: "API Tester",
            link: "/devarea/api-tester",
            isAvailable: false
        },
        {
            name: "HTTP Status Codes",
            link: "/devarea/http-status-codes",
            isAvailable: false
        },
        {
            name: "IP Address Lookup",
            link: "/devarea/ip-lookup",
            isAvailable: true
        },
        // Security
        {
            name: "Password Generator",
            link: "/devarea/password-generator",
            isAvailable: true
        },
        {
            name: "Bcrypt Generator/Checker",
            link: "/devarea/bcrypt",
            isAvailable: true
        }
    ]
    return <Layout>
        <div className="px-5 md:px-10">
            <MainTitle highlight={'DevArea'} />

            <div className="grid grid-cols-4 gap-5">
                {tools.map((tool, index) => (
                    tool.isAvailable ?
                        <Link to={tool.link} key={index}
                            className="capitalize group flex items-center justify-between bg-white/10 p-5 rounded-md">
                            {tool.name}
                            <FaArrowRight className="dark:text-white opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition duration-300" />
                        </Link>
                        :
                        <div key={index}
                            className="capitalize group flex items-center justify-between bg-white/10 p-5 rounded-md">
                            {tool.name}
                        </div>
                ))}
            </div>

        </div>
    </Layout>;
};

export default DevArea;
