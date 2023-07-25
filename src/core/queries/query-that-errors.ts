import { resolver } from "@blitzjs/rpc"
import db from "db"

const QueryThatErrors = resolver.pipe(
  async () => {
    return await db.user.findFirst({
      select: {
        idd: true,
      }
    })
  },
)

export default QueryThatErrors
