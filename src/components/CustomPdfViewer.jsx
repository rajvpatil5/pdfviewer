import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../assets/pdf/certificate_of_publication-merged.pdf";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const CustomPdfViewer = () => {
    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // const pdfFile = "../assets/pdf/certificate_of_publication-merged.pdf";
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess(numPages) {
    //     setNumPages(numPages);
    // }
    const plugins = defaultLayoutPlugin();
    return (
        <>
            <div className="w-full h-[900px] flex justify-center items-center overflow-y-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfFile} plugins={[plugins]} />
                </Worker>
            </div> 
        </>
    );
};

export default CustomPdfViewer;
