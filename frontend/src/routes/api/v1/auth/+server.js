//import { error, json } from '@sveltejs/kit';
const jwt = require('jsonwebtoken');
import { redirect } from '@sveltejs/kit';
export const GET = async ({ url }) => {
    const token = String(url.searchParams.get('token') ?? "");
    console.log(token)
    if (token === "hush") {
        return new Response(JSON.stringify({ "ok": "good" }), { status: 200 });
        throw redirect(307, '/');
    } else {
        throw redirect(307, '/');
    }
}
