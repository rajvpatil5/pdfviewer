import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../assets/pdf/certificate_of_publication-merged.pdf";
import researchPaper from "../assets/pdf/research_paper.pdf";
import certificate from "../assets/pdf/certificate_of_publication.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const CustomPdfViewer = () => {
    const plugins = defaultLayoutPlugin();
    return (
        <>
            <div className="w-full h-[900px] flex justify-center items-center overflow-y-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={researchPaper} plugins={[plugins]} />
                </Worker>
            </div>
        </>
    );
};

export default CustomPdfViewer;
