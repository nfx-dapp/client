import { useEffect, useRef, useState } from "react";
import { checkValidDefinition } from "../../../utils/schemaValidation";
import { purifyJson } from "../../../utils";
import { twMerge } from "tailwind-merge";
import Editor from "@monaco-editor/react";

export default function SchemaDescription(props: {
  nextEvent: (data: { schema: string }) => void;
}) {
  const [schema, setSchema] = useState<string>();

  const [result, setResult] = useState({ valid: false, message: "" });

  function verifySchema(inStr: string | undefined) {
    if (!inStr) return;

    try {
      const valid = checkValidDefinition(JSON.parse(purifyJson(inStr)));
      if (valid === true) {
        setResult({ valid: true, message: "Valid" });
        setSchema(purifyJson(inStr));
      } else {
        return setResult({
          valid: false,
          message: `Error${
            valid.length > 1 ? "s" : ""
          } in Schema definition \n${valid.join(" \n")}`,
        });
      }
    } catch (err: any) {
      setResult({
        valid: false,
        message: `SyntaxError while parsing Schema Definiton : \n${err.message}`,
      });
    }
  }

  return (
    <>
      <section className="p-page">
        <div className="h-[80vh] flex p-page">
          <div className="basis-1/2 flex relative justify-center">
            <>
              <Editor
                className="w-11/12 h-11/12 resize-none bg-transparent border"
                theme="one-dark"
                language="json"
                defaultValue={schema}
                onChange={verifySchema}
                onMount={(editor) => {
                  setTimeout(() => {
                    editor.getAction("editor.action.formatDocument").run();
                  }, 69);
                }}
              />
            </>
          </div>

          <div className="basis-1/2 flex flex-col">
            <div
              className={twMerge(
                "bg-background p-5 flex-1",
                result.valid ? "text-green-500" : "text-red-500"
              )}
            >
              {result.message.split("\n").map((line, key) => (
                <p key={key}>{line}</p>
              ))}
            </div>
            <div className="py-5 flex justify-center">
              <div className="relative">
                <button
                  className="btn-3 px-6 py-2 rounded-lg bg-green-400 text-black disabled:bg-red-500 disabled:text-white disabled:opacity-50 disabled:pointer-events-none"
                  disabled={!result.valid}
                  onClick={() => props.nextEvent({ schema: schema || "[]" })}
                >
                  Next
                </button>
                {!result.valid && (
                  <div className="absolute z-1 top-0 left-0 w-full h-full group cursor-not-allowed">
                    <ErrorTooltip className="hidden group-hover:block" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ErrorTooltip(props: { className?: string }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const ref = useRef() as React.MutableRefObject<HTMLParagraphElement>;

  let swapX = false;
  let swapY = false;
  function attachToMouse(event: MouseEvent) {
    const rect = ref.current.getBoundingClientRect();
    swapX = window.innerWidth < rect.right + (swapX ? rect.width : 0);
    swapY = window.innerHeight < rect.bottom + (swapY ? rect.height : 0);

    setPosition({
      top: event.y - (swapY ? rect.height : 0),
      left: event.x - (swapX ? rect.width : 0),
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", attachToMouse);

    return () => window.removeEventListener("mousemove", attachToMouse);
  }, []);

  return (
    <p
      className={twMerge(
        "fixed w-[25vw] bg-background text-red-300 py-2 px-3 duration-100 text-sm",
        props.className
      )}
      ref={ref}
      style={position}
    >
      Please fix all Schema Definition errors before being able to save your
      changes <br /> Refer to docs if you need help
    </p>
  );
}
