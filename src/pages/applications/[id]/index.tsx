import { useRouter } from "next/router";
import { ApplicationForm } from "~/components/ApplicationForm";
import { api } from "~/utils/api";

export default function ApplicationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === "new";

  const {
    data: application,
    isLoading,
    isError,
    refetch,
  } = api.application.readOne.useQuery(
    { id: id as string },
    { enabled: !!id && !isNew, refetchOnWindowFocus: false },
  );

  return (
    <>
      {isLoading && (
        <div>
          Loading...
          <button type="button" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      )}
      {isError && <div>An error occurred</div>}
      {application && (
        <div className="mx-auto max-w-[600px]">
          <ApplicationForm application={application} />
        </div>
      )}
    </>
  );
}
