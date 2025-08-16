import { api, HydrateClient } from "~/trpc/server";
import ApplicationCard from "./_components/ApplicationCard";

export default async function Home() {
  const applications = await api.application.readAll();

  return (
    <HydrateClient>
      <>
        {applications && (
          <div className="flex flex-wrap gap-2 p-2">
            {applications.map((application) => (
              <ApplicationCard key={application.id} application={application} />
            ))}
          </div>
        )}
      </>
    </HydrateClient>
  );
}
