export const authHeader = () => {
    let userDetail = JSON.parse(sessionStorage.getItem('userDetail'));
    if (userDetail && userDetail.token) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + userDetail.token
        };
    } else {
        return null;
    }
}