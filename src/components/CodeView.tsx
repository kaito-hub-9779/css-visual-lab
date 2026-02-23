export default function Codeview({
  code,
  parentClass,
}: {
  code: string;
  parentClass: string;
}) {
  const full = `${parentClass} {\n`;

  return (
    <pre className="css-typing">
      <div>{full}</div>
      <code>
        {` ` + code}
        <div className="css-typing-cursor" style={{ opacity: 1 }}>
          |
        </div>
      </code>
      <div>{`}`}</div>
    </pre>
  );
}
