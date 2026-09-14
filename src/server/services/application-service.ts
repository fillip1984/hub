import { db } from "../db/client"

export const getApplications = async () => {
  return await db.query.applications.findMany()
}
