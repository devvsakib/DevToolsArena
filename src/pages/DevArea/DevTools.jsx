import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MarkDownEditor from "../../components/DevAreaTools/MarkDownEditor";
import JSONFormatter from "../../components/DevAreaTools/JSONFormatter";
import JWTDecoder from "../../components/DevAreaTools/JwtDecoder";
import URLEncoderDecoder from "../../components/DevAreaTools/URLEncoderDecoder";
import XmlFormatter from "../../components/DevAreaTools/XmlFormatter";

const DevTools = () => {
    const { tool } = useParams();

    const tools = {
        markdown: <MarkDownEditor />,
        jwtdecoder: <JWTDecoder />,
        "json-formatter": <JSONFormatter />,
        "url-encoder-decoder": <URLEncoderDecoder />,
        "xml-formatter": <XmlFormatter />,
    }


    return <Layout>{tools[tool]}</Layout>;
};

export default DevTools;
