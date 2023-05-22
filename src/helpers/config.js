const prodDomain = 'https://sms.ft.ugm.ac.id';
const devDomain = 'http://localhost:8989/';

const baseUrl = process.env.NODE_ENV === 'production' 
                ? '/' 
                : '/';

const baseUrlFull = process.env.NODE_ENV === 'production' 
                ? prodDomain + baseUrl
                : devDomain + baseUrl;

const siteUrl = baseUrl + 'index.php/';

export { baseUrl };
export { baseUrlFull };
export default { 
  baseUrl,
  baseUrlFull, 
};