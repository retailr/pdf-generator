import { uid } from "uid";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { history } from "../../redux/store";

export interface Column {
  id: string;
  title: string;
  colspan: number;
  key: string;
}

export interface RowAction {
  id: string;
  title: string;
  action: Function;
  icon: IconType;
}

export interface Handlers {
  [k: string]: Function;
}

export interface Template {
  id: string;
  title: string;
  template_url: string;
  sample_data: string;
  updated_at: string;
  created_at: string;
}

export const templates: Template[] = [
  {
    id: uid(8),
    title: "VTL Pricing template",
    template_url: "",
    sample_data: "",
    updated_at: "2020-12-08:09:00:00",
    created_at: "2020-12-08:09:00:00",
  },
  {
    id: uid(8),
    title: "Retail Test template",
    template_url: "",
    sample_data: "",
    updated_at: "2020-12-08:09:00:00",
    created_at: "2020-12-08:09:00:00",
  },
  {
    id: uid(8),
    title: "Test template",
    template_url: "",
    sample_data: "",
    updated_at: "2020-12-08:09:00:00",
    created_at: "2020-12-08:09:00:00",
  },
  {
    id: uid(8),
    title: "User template",
    template_url: "",
    sample_data: "",
    updated_at: "2020-12-08:09:00:00",
    created_at: "2020-12-08:09:00:00",
  },
];

export const dataColumns: Column[] = [
  {
    id: uid(8),
    title: "ID",
    colspan: 2,
    key: "id",
  },
  {
    id: uid(8),
    title: "Title",
    colspan: 5,
    key: "title",
  },
  {
    id: uid(8),
    title: "Upload Date",
    colspan: 4,
    key: "created_at",
  },
];

export const actions = (baseUrl: string, handlers: Handlers): RowAction[] => [
  {
    id: uid(8),
    title: "View Details",
    icon: AiOutlineEye,
    action: (template: Template) => {
      history.push(`${baseUrl}/${template.id}/view`);
    },
  },
  {
    id: uid(8),
    title: "Edit",
    icon: AiOutlineEdit,
    action: (template: Template) => {
      history.push(`${baseUrl}/${template.id}/edit`);
    },
  },
  {
    id: uid(8),
    title: "Delete",
    icon: AiOutlineDelete,
    action: (template: Template) => {
      console.log(template.id);
    },
  },
];
