"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RecordFormData, recordFormSchema } from "../schema";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LocalizedDateTimePicker } from "./LocalizedDatePicker";
import { useRecord } from "../hooks/use-record";
import { toRecordFormData } from "../mappers";
import { useCreateRecord } from "../hooks/use-create-record";
import { useUpdateRecord } from "../hooks/use-update-record";
import RecordFormSkeleton from "./skeletons/RecordFormSkeleton";

interface RecordFormDialogProps {
  id?: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

function RecordFormDialog({ id, isOpen, setOpen }: RecordFormDialogProps) {
  const { record, isLoading } = useRecord(id, isOpen);
  const { createRecord, isCreating } = useCreateRecord();
  const { updateRecord, isUpdating } = useUpdateRecord();
  const isSubmitting = isCreating || isUpdating;

  const { t } = useTranslation();
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RecordFormData>({
    resolver: zodResolver(recordFormSchema),
    defaultValues: {
      name: "",
      status: "active",
      category: "development",
      score: 0,
      createdAt: "",
      description: "",
    },
  });

  useEffect(() => {
    if (record) {
      reset(toRecordFormData(record));
    }
  }, [record, reset]);

  async function onSubmit(data: RecordFormData) {
    if (id) {
      await updateRecord({ id, record: data });
    } else {
      await createRecord(data);
    }

    reset();
    setOpen(false);
  }

  const statusOptions = [
    { id: "active", label: t("lbl_status_active"), value: "active" },
    { id: "inactive", label: t("lbl_status_inactive"), value: "inactive" },
  ];

  const categoryOptions = [
    { label: t("lbl_development_category"), value: "development" },
    { label: t("lbl_design_category"), value: "design" },
    { label: t("lbl_marketing_category"), value: "marketing" },
    { label: t("lbl_operations_category"), value: "operations" },
    { label: t("lbl_research_category"), value: "research" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="rounded-sm sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="mb-4">
            <DialogTitle>
              {id ? t("lbl_edit_modal_title") : t("lbl_create_modal_title")}
            </DialogTitle>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {isLoading ? (
              <RecordFormSkeleton />
            ) : (
              <FieldGroup className="py-5">
                <Field>
                  <Label htmlFor="name">{t("lbl_name")}</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name?.message && (
                    <FieldError>{t(errors.name.message)}</FieldError>
                  )}
                </Field>

                <Controller
                  name="status"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FieldSet data-invalid={fieldState.invalid}>
                      <FieldLegend>{t("lbl_status")}</FieldLegend>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                        className="flex items-center gap-2"
                      >
                        {statusOptions.map((status) => (
                          <FieldLabel
                            key={status.id}
                            htmlFor={`form-rhf-radiogroup-${status.id}`}
                          >
                            <Field
                              orientation="horizontal"
                              data-invalid={fieldState.invalid}
                            >
                              <FieldContent>
                                <FieldTitle>{status.label}</FieldTitle>
                              </FieldContent>
                              <RadioGroupItem
                                value={status.id}
                                id={`form-rhf-radiogroup-${status.id}`}
                                aria-invalid={fieldState.invalid}
                              />
                            </Field>
                          </FieldLabel>
                        ))}
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldSet>
                  )}
                />

                <Controller
                  name="category"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field
                      orientation="responsive"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldContent>
                        <FieldLabel htmlFor="form-rhf-select-category">
                          {t("lbl_category")}
                        </FieldLabel>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                      <Select
                        name={field.name}
                        items={categoryOptions}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-select-category"
                          aria-invalid={fieldState.invalid}
                          className="w-full"
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent alignItemWithTrigger={false}>
                          <SelectGroup>
                            {categoryOptions.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />

                <Field>
                  <Label htmlFor="score">{t("lbl_score")}</Label>
                  <Input
                    id="score"
                    type="number"
                    {...register("score", { valueAsNumber: true })}
                    aria-invalid={!!errors.score}
                  />
                  {errors.score?.message && (
                    <FieldError>{t(errors.score.message)}</FieldError>
                  )}
                </Field>

                <Controller
                  name="createdAt"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field>
                      <Label>{t("lbl_createdAt")}</Label>

                      <LocalizedDateTimePicker
                        value={field.value}
                        onChange={field.onChange}
                      />

                      {fieldState.error?.message && (
                        <FieldError>{t(fieldState.error.message)}</FieldError>
                      )}
                    </Field>
                  )}
                />

                <Field>
                  <Label htmlFor="description">{t("lbl_description")}</Label>
                  <Textarea
                    id="description"
                    {...register("description")}
                    aria-invalid={!!errors.description}
                    className="resize-none"
                  />
                  {errors.description?.message && (
                    <FieldError>{t(errors.description.message)}</FieldError>
                  )}
                </Field>
              </FieldGroup>
            )}
          </div>
          <DialogFooter className="rounded-b-sm">
            <DialogClose
              render={
                <Button variant="outline">{t("common:lbl_cancel")}</Button>
              }
            />
            <Button type="submit" disabled={isSubmitting}>
              {t("common:lbl_save")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default RecordFormDialog;
