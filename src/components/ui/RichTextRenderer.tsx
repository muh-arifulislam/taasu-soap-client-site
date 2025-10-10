// RichTextRenderer.tsx
import React, { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact, RenderElementProps } from "slate-react";

interface RichTextRendererProps {
  content: Record<string, unknown>[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  const [editor] = useState(() => withReact(createEditor()));

  // const renderElement = useCallback(({ attributes, children, element }) => {
  //   switch (element.type) {
  //     case "h1":
  //       return (
  //         <h1 className="text-lg" {...attributes}>
  //           {children}
  //         </h1>
  //       );
  //     case "quote":
  //       return <blockquote {...attributes}>{children}</blockquote>;
  //     case "link":
  //       return (
  //         <a {...attributes} href={element.url}>
  //           {children}
  //         </a>
  //       );
  //     default:
  //       return <p {...attributes}>{children}</p>;
  //   }
  // }, []);

  return (
    <Slate initialValue={content} editor={editor}>
      <Editable readOnly={true} renderElement={renderElement} />
    </Slate>
  );
};

export default RichTextRenderer;

export const renderElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case "heading-one":
      return (
        <h1 className="text-3xl font-bold my-4" {...attributes}>
          {children}
        </h1>
      );

    case "heading-two":
      return (
        <h2 className="text-2xl font-semibold my-3" {...attributes}>
          {children}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-base leading-7 my-2" {...attributes}>
          {children}
        </p>
      );

    case "blockquote":
      return (
        <blockquote
          className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-700"
          {...attributes}
        >
          {children}
        </blockquote>
      );

    case "link":
      return (
        <a
          className="text-blue-600 hover:underline"
          href={element.url}
          target="_blank"
          rel="noopener noreferrer"
          {...attributes}
        >
          {children}
        </a>
      );

    case "bulleted-list":
      return (
        <ul className="list-disc list-inside my-2" {...attributes}>
          {children}
        </ul>
      );

    case "numbered-list":
      return (
        <ol className="list-decimal list-inside my-2" {...attributes}>
          {children}
        </ol>
      );

    case "list-item":
      return (
        <li className="ml-4 my-1" {...attributes}>
          {children}
        </li>
      );

    default:
      return (
        <p className="text-base leading-7 my-2" {...attributes}>
          {children}
        </p>
      );
  }
};
