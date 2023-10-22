import ApplicationCard from "~/components/ApplicationCard";
import { CreateApplication } from "~/components/CreateApplication";
import { type ApplicationSchemaType } from "~/types";
import { api } from "~/utils/api";

export default function Home() {
  const { data: applications } = api.application.readAll.useQuery();

  return (
    <>
      {applications && (
        <>
          <ApplicationList applications={applications} />
          <CreateApplication />
        </>
      )}
    </>
  );
}

function ApplicationList({
  applications,
}: {
  applications: ApplicationSchemaType[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}
