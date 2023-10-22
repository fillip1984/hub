import Link from "next/link";

import { useState } from "react";
import { FaEllipsisVertical, FaPencil, FaTrash } from "react-icons/fa6";

import { type ApplicationSchemaType } from "~/types";
import { api } from "~/utils/api";

export default function ApplicationCard({
  application,
}: {
  application: ApplicationSchemaType;
}) {
  // const [menuShown, setMenuShown] = useState(false);

  // const utils = api.useUtils();
  // const deleteApplication = api.application.delete.useMutation({
  //   onSuccess: () => {
  //     void utils.application.invalidate();
  //   },
  // });

  return (
    <Link
      href={application.url}
      className="relative min-h-[200px] rounded border p-2 transition duration-300 ease-in-out hover:bg-white/10">
      <div className="flex items-center justify-between">
        <h4>{application.name}</h4>
        {/* TODO: Turn off since there is no route specific security yet */}
        {/* <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuShown((prev) => !prev);
          }}
          className="rounded-full bg-white/5 p-2 transition duration-300 ease-in-out hover:bg-white/40">
          <FaEllipsisVertical />
        </button> */}
      </div>

      {/* {menuShown && (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuShown((prev) => !prev);
          }}
          className="fixed inset-0 z-[900]"></div>
      )}

      {menuShown && application?.id && (
        <div className="absolute right-0 z-[998] m-1 flex flex-col gap-1 rounded bg-white p-2">
          <Link
            href={`applications/${application.id}`}
            type="button"
            className="flex transform items-center gap-2 rounded px-2 py-1 text-info duration-300 ease-in-out hover:bg-info hover:text-white">
            <FaPencil />
            Edit
          </Link>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteApplication.mutate({ id: application.id! });
            }}
            className="flex transform items-center gap-2 rounded px-2 py-1 text-danger duration-300 ease-in-out hover:bg-danger hover:text-white">
            <FaTrash />
            Delete
          </button>
        </div>
      )} */}

      <p>{application.description}</p>
    </Link>
  );
}
