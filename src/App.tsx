import { RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/globalContext";
import router from "./pages/router";
import loader from "@monaco-editor/loader";

export default function App() {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme("one-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          token: "comment",
          foreground: "#338332",
          fontStyle: "italic",
        },
        {
          token: "bracket",
          foreground: "#0000ff",
        },
      ],
      colors: {
        "editor.background": "#000000",
      },
    });
  });

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}
