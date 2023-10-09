"use client";

import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import UppyDashboard from "@uppy/dashboard";
import ImageEditor from "@uppy/image-editor";

import { useEffect } from "react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/progress-bar/dist/style.min.css";
import "@uppy/status-bar/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";
import "@uppy/file-input/dist/style.min.css";
import "@uppy/informer/dist/style.min.css";
import "@uppy/progress-bar/dist/style.min.css";
import "@uppy/image-editor/dist/style.css";

const uppy = new Uppy()
  .use(UppyDashboard, {
    
    })
  .use(ImageEditor, {});

export default function Home() {
  useEffect(() => {
    uppy.on("complete", (result) => {
      console.log(
        "Upload complete! We’ve uploaded these files:",
        result.successful
      );
    });

    uppy.on("file-added", (result) => {
      console.log("File added", result);
    });

    uppy.on("upload", (result) => {
      console.log("Upload started", result);
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <Dashboard
        id="dashboard"
        uppy={uppy}
        plugins={["ImageEditor"]}
        metaFields={[{ id: "name", name: "Name", placeholder: "File name" }]}
      />
    </div>
  );
}
