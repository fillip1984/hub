import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import { applicationSchema, type ApplicationSchemaType } from "~/types";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

export function ApplicationForm({
  application,
}: {
  application: ApplicationSchemaType | null;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationSchemaType>({
    resolver: zodResolver(applicationSchema),
  });

  useEffect(() => {
    if (application) {
      reset({
        id: application.id,
        name: application.name,
        description: application.description,
        url: application.url,
      });
    }
  }, [application, reset]);

  const onSubmit: SubmitHandler<ApplicationSchemaType> = (formData) => {
    if (application?.id) {
      // updateApplication.mutate(formData);
    } else {
      // createApplication.mutate(formData);
    }
  };

  // const util = api.useUtils();
  // const createApplication = api.application.create.useMutation({
  //   onSuccess: () => {
  //     void util.application.invalidate();
  //     reset();
  //   },
  // });
  // const router = useRouter();
  // const updateApplication = api.application.update.useMutation({
  //   onSuccess: () => {
  //     void util.application.invalidate();
  //     void router.push("/");
  //   },
  // });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-2 p-2">
      <div className="w-full">
        <input
          type="text"
          placeholder="Title"
          {...register("name")}
          className="w-full rounded px-4 py-2"
        />
        {errors.name && (
          <span className="text-sm text-danger">{errors.name.message}</span>
        )}
      </div>

      <div className="w-full">
        <textarea
          placeholder="Description of application"
          rows={3}
          {...register("description")}
          className="w-full rounded px-4 py-2"
        />
        {errors.description && (
          <span className="text-sm text-danger">
            {errors.description.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Url"
          {...register("url")}
          className="w-full rounded px-4 py-2"
        />
        {errors.url && (
          <span className="text-sm text-danger">{errors.url.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded bg-white/10 px-10 py-3 font-semibold uppercase transition hover:enabled:bg-white/20"
        // disabled={createApplication.isLoading}
      >
        {/* {createApplication.isLoading ? "Saving..." : "Save"} */}
      </button>
    </form>
  );
}
