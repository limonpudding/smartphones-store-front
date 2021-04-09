export const authHeader = () => {
    let userDetail = JSON.parse(sessionStorage.getItem('userDetail'));
    if (userDetail && userDetail.basic) {
        return {'Authorization': 'Basic ' + userDetail.basic};
    } else {
        return null;
    }
}