import { SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { redirect } from '@sveltejs/kit';
export function load({ cookies }) {
    try {
        const token = cookies.get('session');
        if ( token ){
            jwt.verify(token, SECRET);
        }else{
            throw redirect(301,'/')
        }
    }
    catch (err) {
        console.log('JWT token is invalid or expired:', err);
        throw redirect(301, "/")
    }

}
