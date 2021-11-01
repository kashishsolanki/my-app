import { useEffect, useRef } from "react";
import "./App.css";
import WebViewer from "@pdftron/webviewer";

function App() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        webviewerServerURL: "https://pdftron-load-balancer-1822967848.us-east-1.elb.amazonaws.com/",
        path: "/pdftron-lib",
        licenseKey:
          "Modern Logik, Inc.(vaultlogik.com):OEM:VaultLogik::B+:AMS(20220130):EBA556FD0477E80A7360B13AC982537B60611FD5D9264A45241CECFA4C9F00F662CABEF5C7",
        initialDoc: "https://cdn.filestackcontent.com/18RQ27mRwyyYHhVlSaMq",
      },
      viewer.current
    ).then((instance) => {
      // const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
