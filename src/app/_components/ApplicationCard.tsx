import Link from "next/link";

import type { ApplicationSummaryType } from "~/trpc/types";

export default function ApplicationCard({
  application,
}: {
  application: ApplicationSummaryType;
}) {
  return (
    <Link
      href={application.url}
      className="min-h-[200px] w-full rounded border p-2 transition duration-300 ease-in-out hover:bg-white/10 lg:w-[400px]"
    >
      <div className="flex flex-col">
        <h4>{application.name}</h4>
        <p>{application.description}</p>
      </div>
    </Link>
  );
}
