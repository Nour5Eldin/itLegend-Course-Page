"use client";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url).toString();

export function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
    const [numPages, setNumPages] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return (
        <div ref={containerRef} className="w-full flex flex-col items-center gap-2">
            <Document
                file={pdfUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                {Array.from(new Array(numPages), (_, index) => (
                    <Page key={index} pageNumber={index + 1} width={containerWidth || undefined} />
                ))}
            </Document>
        </div>
    );
}