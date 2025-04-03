import { Card } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeDisplay({ code }: { code: string }) {
  return (
    <Card style={{ margin: "20px", padding: "10px" }}>
      <Card.Body>
        <SyntaxHighlighter language="javascript" style={dark}>
          {code}
        </SyntaxHighlighter>
      </Card.Body>
    </Card>
  );
}
