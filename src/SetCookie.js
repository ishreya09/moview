import Cookies from 'js-cookie';

function SetCookie(){
    Cookies.set('name', '', { expires: 30 });
    Cookies.set('username', 'AnonymousUser', { expires: 30 });
    Cookies.set('role', 'basic', { expires: 30 });
    Cookies.set('email', '', { expires: 30 });
}
export default SetCookie;