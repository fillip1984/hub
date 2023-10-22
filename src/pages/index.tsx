import ApplicationCard from "~/components/ApplicationCard";
import { ApplicationForm } from "~/components/ApplicationForm";

import { type ApplicationSchemaType } from "~/types";
import { api } from "~/utils/api";

export default function Home() {
  const { data: applications } = api.application.readAll.useQuery();

  return (
    <>
      {applications && (
        <>
          <ApplicationList applications={applications} />
          <div className="mx-auto my-4 max-w-[600px] rounded-xl border-2 border-white/30">
            <h4 className="text-center uppercase">Create a new app</h4>
            {/* TODO: Turn off since there is no route specific security yet */}
            {/* <ApplicationForm application={null} /> */}
          </div>
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
