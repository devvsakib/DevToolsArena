import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { docs } from '../../data/Doc.json';
import { useEffect, useState } from "react";

const SingleDoc = () => {
    const { doc_name } = useParams();
    const [doc, setDoc] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const doc = docs.find(item => item.title.toLowerCase() === doc_name.split("_").join(" "));
        setDoc(doc);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [doc_name]);
    
    return (
        <Layout>
            <section className="px-5 md:px-10 min-h-screen">
                <h3 className="text-2xl md:text-3xl capitalize text-center my-10 mb-20">
                    {doc_name.split("_").join(" ")}
                </h3>
                {
                    loading ? <p>Loading...</p>
                        :
                        <div className="">
                            <div>
                                <div className="">
                                    {
                                        doc.tag.map((tag, index) => (
                                            <span key={index} className="bg-primary text-white px-2 py-1 rounded-lg mr-2">
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>
                                <hr className="my-5" />
                            </div>
                            <p className="text-justify">{doc.description}</p>
                        </div>
                }
            </section>
        </Layout>
    );
};

export default SingleDoc;
