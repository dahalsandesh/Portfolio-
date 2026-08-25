import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

let client: MongoClient | null = null
async function getClient() {
  if (!process.env.MONGODB_CONNECTION_STRING) throw new Error("MONGODB_CONNECTION_STRING is not configured")
  client ??= new MongoClient(process.env.MONGODB_CONNECTION_STRING)
  await client.connect()
  return client
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name ?? "").trim().slice(0, 120)
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, 200)
    const message = String(body.message ?? "").trim().slice(0, 3000)
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) return NextResponse.json({ error: "Please complete all fields." }, { status: 400 })
    const db = (await getClient()).db("sandesh_studio")
    await db.collection("contact_messages").insertOne({ name, email, message, createdAt: new Date(), source: "portfolio" })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Unable to save your message right now." }, { status: 500 })
  }
}
