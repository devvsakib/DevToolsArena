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
            isAvailable: false
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
            isAvailable: false
        },
        {
            name: "YAML Formatter",
            link: "/devarea/yaml-formatter",
            isAvailable: false
        },
        {
            name: "CSV Formatter",
            link: "/devarea/csv-formatter",
            isAvailable: false
        },
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
