import { db } from "@/server/db"
import ApplicationCard from "./_components/ApplicationCard"

async function getApplications() {
  return await db.query.applications.findMany()
}

export default async function Home() {
  const applications = await getApplications()

  return (
    <>
      {applications && (
        <div className="flex flex-wrap gap-2 p-2">
          {applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      )}
    </>
  )
}
