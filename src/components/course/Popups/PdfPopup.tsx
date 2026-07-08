"use client";
import dynamic from "next/dynamic";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PdfViewer = dynamic(() => import("./PdfViewer").then((mod) => mod.PdfViewer), {
    ssr: false,
    loading: () => <p className="text-center py-10">Loading PDF...</p>,
});

interface PdfPopupProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}
export function PdfPopup({ isOpen, onClose, pdfUrl, title }: PdfPopupProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="
                    w-screen h-screen max-w-none max-h-none rounded-none
                    sm:w-[90vw] sm:h-[90vh] sm:max-w-[90vw] sm:max-h-[90vh] sm:rounded-lg
                    flex flex-col p-4 gap-2
                    overflow-hidden">
                <DialogHeader className="shrink-0">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 min-h-0 overflow-y-auto flex justify-center">
                    {isOpen && <PdfViewer pdfUrl={pdfUrl} />}
                </div>
            </DialogContent>
        </Dialog>
    );
}