import { neon } from '@neondatabase/serverless';

function isValid(id: string) {
  const pattern = /^MW-[A-Z0-9]{6}$/;
  return pattern.test(id);
}

async function getData(id: string) {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const response = await sql`SELECT * FROM tracking WHERE id = ${id}`;
  return response[0];
}


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) return new Response('', { status: 400 }) // no id in url param
  if (isValid(id)) {
    let data = await getData(id);
    if (!data) return new Response('no data in db', { status: 404 }) // id not found in db/no data

    return new Response(JSON.stringify(await getData(id))) // id found, sending data
  } else {
    return new Response('id not valid', { status: 418 }) // id is not valid according to schema
  }
}