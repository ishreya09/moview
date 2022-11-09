import Cookies from 'js-cookie';

function FillCookie(user){
    Cookies.set('name', user.name, { expires: 30 });
    Cookies.set('username', user.username, { expires: 30 });
    Cookies.set('role', user.role, { expires: 30 });
    Cookies.set('email', user.email, { expires: 30 });
}
export default FillCookie;