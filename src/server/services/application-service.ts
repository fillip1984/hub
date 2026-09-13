import { db } from "../db"

export const getApplications = async () => {
  return await db.query.applications.findMany()
}
