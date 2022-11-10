import axios from './axios.interceptor';
import baseUrl from './api.util';

export const STATION = `${baseUrl}/station`;
export const RESTAURANT = `${baseUrl}/restaurant`;
export const MENU = `${baseUrl}/restaurant-menu`;
export const BLOG = `${baseUrl}/blog`;
export const PNR = `${baseUrl}/pnr`;
export const USER = `${baseUrl}/user`;
export const LOGINUSER = `${baseUrl}/aa/userLogin`;
export const LOGOUTUSER = `${baseUrl}/aa/userLogout`;
export const CAT = `${baseUrl}/category`;

export function fetchStation() {
    return axios.get(STATION);
}

export function fetchStationEmail(code) {
    return axios.get(`${STATION}/${code}`);
}

export function fetchRestaurant() {
    return axios.get(RESTAURANT);
}

export function fetchRestaurantEmail(resName) {
    return axios.get(`${RESTAURANT}/${resName}`);

}

export function fetchRestaurantStationCode(code) {
    return axios.get(`${RESTAURANT}/find/${code}`);
  
}


export function fetchMenu() {
    return axios.get(MENU);
}

export function fetchMenuEmail(menuName) {
    return axios.get(`${MENU}/${menuName}`);
}

export function fetchPnrCode(pnr) {
    return axios.get(`${PNR}/${pnr}`);
}

export function fetchPnr(code) {
    return axios.get(`${PNR}/${code}`);
}

export function fetchBlog() {
    return axios.get(BLOG);
}

export function createBlog( blogName,title,description,image ) {
    return axios.post(BLOG, {
         blogName:blogName,
         title:title,
         description:description,
         image:image,
         blog_stat:"0",
      });
}

export function createUser( userName,userEmail,userPswd,userPhone ) {
    return axios.post(USER, {
        userName:userName,
        userEmail:userEmail,
        userPswd:userPswd,
        userPhone:userPhone
      });
}

export function loginUser( userEmail,userPswd ) {
    return axios.post(LOGINUSER, { userEmail,userPswd });
}
export function logoutUser( userEmail ) {
    return axios.post( LOGOUTUSER, { userEmail });
}

export function createRestaurant(restaurant_dtl ) { 
    return axios.post(RESTAURANT, {restaurant_dtl});
}
export function deleteRestaurant(resName) {
    const delAdm = `${RESTAURANT}/${resName}`;
    return axios.delete(delAdm);
}


export function editRestaurant(_id,restaurant_dtl) {
    const edtStd = `${RESTAURANT}/${_id}`;
    return axios.patch(edtStd, { restaurant_dtl});
}

export function createMenu( menuName,resName,category,price,containsDetails,dishType) {
  

    return axios.post(MENU, {
        menuName:menuName,
        resName:resName,
        containsDetails:containsDetails,
        category:category,
        price:price,
        dishType:dishType,
        
      });
}
export function deleteMenu(menuName) {
    const delAdm = `${MENU}/${menuName}`;
    return axios.delete(delAdm);
}



export function editMenu(_id,menuName,resName,category,price,containsDetails,dishType) {
    const edtStd = `${MENU}/${_id}`;
    return axios.patch(edtStd, { 
        _id:_id,
        menuName:menuName,
        resName:resName,
       
        category:category,
        containsDetails:containsDetails,
        price:price,
        dishType:dishType,
    });
}

export function fetchCat() {
    return axios.get(CAT);
}