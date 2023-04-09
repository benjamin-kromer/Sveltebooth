import { error, json } from '@sveltejs/kit';
import { SECRET } from '$env/static/private';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';


export async function GET({ url,cookies })  {
    const token = String(url.searchParams.get('token') ?? "");
    if (token === SECRET) {
        //return new Response(JSON.stringify({ "ok": "good" }), { status: 200 });
        const jwtToken = jwt.sign({ id:uuidv4(),user: "" }, SECRET, { expiresIn: '1m' });
        cookies.set("session", jwtToken, {
            httpOnly: true,
            maxAge:  24 * 60 * 60 * 1000 ,
            path: "/",
        });
        throw redirect(303,'/gallery')
       
    } else {
        throw redirect(307, '/');
    }
}

