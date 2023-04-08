import { error, json } from '@sveltejs/kit';
import { SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';
export const GET = async ({ url }) => {
    const token = String(url.searchParams.get('token') ?? "");
    if (token === SECRET) {
        //return new Response(JSON.stringify({ "ok": "good" }), { status: 200 });
        throw redirect(307,'/login')
       
    } else {
        throw redirect(307, '/');
    }
}

