import { useParams } from "react-router-dom";
import { templates } from "../templates";
import Layout from "./Layout";
import Preview from "./Preview";

export default function TemplatePage() {
  const { id } = useParams<{ id: string }>();
  const template = templates[Number(id)];

  if (!template) return <div>テンプレートが見つかりません</div>;

  return (
    <Layout>
      <h1 className="title">{template.name}</h1>
      <div className="content">
        <Preview template={template} />
      </div>
    </Layout>
  );
}
