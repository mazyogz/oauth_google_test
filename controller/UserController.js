// const user = require("../models")
// const jwt = require("jsonwebtoken");
// const google = require("googleapis");


// const oauth2Client = new google.auth.OAuth2(
//     process.env.GOOGLE_CLIENT_ID,
//     process.env.GOOGLE_CLIENT_SECRET,
//     'http://localhost:5000/auth/google/callback'
// );

// const scopes = [
//     'https://www.googleapis.com/auth/userinfo.email',
//     'https://www.googleapis.com/auth/userinfo.profile'
// ]

// const authorizationUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//     include_granted_scopes: true,
// })

// interface UserData {
//     id: string;
//     name: string;
//     address: string;
// }

// interface ValidationRequest extends Request {
//     userData: UserData
// }

// const accessValidation = (req: Request, res: Response, next: NextFunction) => {
//     const validationReq = req as ValidationRequest
//     const {authorization} = validationReq.headers;

//     console.log('here: ', authorization)

//     if(!authorization){
//         return res.status(401).json({
//             message: 'Token diperlukan'
//         })
//     }

//     const token = authorization.split(' ')[1];
//     const secret = process.env.JWT_SECRET!;

//     try {
//         const jwtDecode = jwt.verify(token, secret);

//         if(typeof jwtDecode !== 'string'){
//             validationReq.userData = jwtDecode as UserData
//         }
//     } catch (error) {
//         return res.status(401).json({
//             message: 'Unauthorized'
//         })
//     }
//     next()
// }