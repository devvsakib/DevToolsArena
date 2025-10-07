import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MarkDownEditor from "../../components/DevAreaTools/MarkDownEditor";
import JSONFormatter from "../../components/DevAreaTools/JSONFormatter";
import JWTDecoder from "../../components/DevAreaTools/JwtDecoder";
import URLEncoderDecoder from "../../components/DevAreaTools/URLEncoderDecoder";
import XmlFormatter from "../../components/DevAreaTools/XmlFormatter";
import Base64Tool from "../../components/DevAreaTools/Base64Tool";
import YAMLFormatter from "../../components/DevAreaTools/YAMLFormatter";
import PasswordGenerator from "../../components/DevAreaTools/PasswordGenerator";

const DevTools = () => {
    const { tool } = useParams();

    const tools = {
        markdown: <MarkDownEditor />,
        jwtdecoder: <JWTDecoder />,
        "json-formatter": <JSONFormatter />,
        "url-encoder-decoder": <URLEncoderDecoder />,
        "xml-formatter": <XmlFormatter />,
        "yaml-formatter": <YAMLFormatter />,
        "base64": <Base64Tool />,
        "password-generator": <PasswordGenerator />,
    }


    return <Layout>{tools[tool]}</Layout>;
};

export default DevTools;
