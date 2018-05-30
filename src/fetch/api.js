import axios from 'axios';
let util = {

};

util.commonUrl = 'http://route.showapi.com/255-1';
util.showapi_appid = '17899';
util.showapi_sign = '9208b4bf256a46c0b9f51f653ab6e8ae';
util.img_type = '10';
util.video_type = '41';
util.text_type = '29';

util.ajax = axios.create({
    baseURL: util.commonUrl,
    timeout: 30000
});
export default util;
