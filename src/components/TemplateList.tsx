import { Link } from "react-router-dom";
import { templates } from "../templates";

export default function TemplateList() {
  return (
    <div style={{ padding: 32 }}>
      <h2>テンプレート一覧</h2>
      <ul>
        {templates.map((t, i) => (
          <li key={t.name}>
            <Link to={`/template/${i}`}>{t.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
