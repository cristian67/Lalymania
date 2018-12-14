//=============
// Puerto
//=============
process.env.PORT = process.env.PORT || 3000;

//=============
// Entorno
//=============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//==================
// Vencimiento Token
//==================
process.env.CADUCIDAD_TOKEN = '48h';


//=======================================================================
// Seed de Autenticacion: Seed de desarrollo,es distinto al de produccion
//=======================================================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=============
// Base de Dato
//=============
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Lalymania';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//==================
// Google Client ID
//==================
process.env.CLIENT_ID = process.env.CLIENT_ID || '609383688455-rpnhud7octf20s70et7sv4o3vji5ck1j.apps.googleusercontent.com';