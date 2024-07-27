import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SingleDoc = () => {
    const { doc_name } = useParams();

    return (
        <Layout>
            <section className="px-5 md:px-10">
                {doc_name.split("_").join(" ")}
            </section>
        </Layout>
    );
};

export default SingleDoc;
