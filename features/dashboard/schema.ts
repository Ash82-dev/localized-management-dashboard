import z from "zod";
import { categoryOptions, statusOptions } from "./types";

export const recordFormSchema = z.object({
  name: z.string().nonempty("common:msg_field_required"),
  status: z.enum(statusOptions),
  category: z.enum(categoryOptions),
  score: z
    .number("common:msg_field_required")
    .min(0, "msg_score_boundary_invalid")
    .max(100, "msg_score_boundary_invalid"),
  createdAt: z.iso
    .datetime("common:msg_field_required")
    .nonempty("common:msg_field_required"),
  description: z
    .string()
    .max(300, "msg_description_boundary_invalid")
    .nullable(),
});

export type RecordFormData = z.infer<typeof recordFormSchema>;
