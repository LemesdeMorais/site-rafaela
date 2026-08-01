import { createPortal } from "react-dom";

import { schemas } from "@/seo/schema";

export function StructuredData() {
  return createPortal(
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>,
    document.head
  );
}