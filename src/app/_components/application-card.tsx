import Link from "next/link"

import type { Application } from "@/server/db/schema"

export default function ApplicationCard({
  application,
}: {
  application: Application
}) {
  return (
    <Link
      href={application.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-accent min-h-50 w-full rounded border p-2 transition duration-300 ease-in-out lg:w-100"
    >
      <div className="flex flex-col">
        <h3>{application.name}</h3>
        <p className="text-muted-foreground text-sm">
          {application.description}
        </p>
      </div>
    </Link>
  )
}
