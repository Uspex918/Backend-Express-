import {Low} from "lowdb"
import {JSONFile} from "lowdb/node"

const adapter = new JSONFile("db.json")
const db = new Low(adapter, { posts: [] })

await db.read()

// if (!db.data || Array.isArray(db.data)) {
//    db.data = { posts: [] }
// }

db.data.posts = db.data.posts || []
console.log("DATA: => ", db.data)


export default db
