import { FiDownload, FiUpload } from "react-icons/fi";
import { IconType } from "react-icons";

export interface Menu {
  id: string;
  path: string;
  title: string;
  icon: IconType;
  disabled?: boolean;
  hide?: boolean;
}

export const menu: Menu[] = [
  {
    id: "generate-pdf",
    path: "/generate-pdf",
    title: "Generate PDF",
    icon: FiDownload,
  },
  {
    id: "upload-template",
    path: "/add-template",
    title: "Upload Template",
    icon: FiUpload,
  },
];
