import Layout from '../components/Layout/Layout';
import { Space } from 'antd';
import MainTitle from '../components/Common/MainTitle';
import ResourceSection from '../components/Resources/ResourceSection';
import resources from '../data/Resources';


const Resources = () => {
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <MainTitle
                    title="Freee Resources for"
                    highlight="Web Development"
                />
                <Space direction="vertical" size="middle" >
                    <ResourceSection title="Learning Resources" resources={resources.learningResources} />
                    <ResourceSection title="Tools & Libraries" resources={resources.toolsLibraries} />
                    <ResourceSection title="Career Roadmaps" resources={resources.careerRoadmaps} />
                </Space>
            </div>
        </Layout>
    );
};

export default Resources;
