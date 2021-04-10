export const authHeader = () => {
    let userDetail = JSON.parse(sessionStorage.getItem('userDetail'));
    if (userDetail && userDetail.basic) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + userDetail.basic
        };
    } else {
        return null;
    }
}