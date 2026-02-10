import { jwtService } from '../services/jwtService.js';

export const authMiddleware = async (req, res, next) => {
  const authorization = req.headers['authorization'] || '';
  const [, token] = authorization.split(' ');

  if (!authorization || !token) {
    return res.status(401).json({ message: 'Unauthorized: no token in authmiddleware' });
  }
  
  const userData = jwtService.verify(token);
if (!userData) {
  return res
    .status(401)
    .json({ message: 'Unauthorized: no userData' });
}
  next();
}

// import { jwtService } from '../services/jwtService.js';
// import { User } from '../models/userModel.js'; // adjust path to your model

// export const authMiddleware = async (req, res, next) => {
//   try {
//     // 1️⃣ Get Authorization header
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       return res
//         .status(401)
//         .json({ message: 'am Unauthorized: No token provided' });
//     }

//     // 2️⃣ Extract token
//     const [, accessToken] = authHeader.split(' ');
//     if (!accessToken || accessToken === 'null' || accessToken === 'undefined') {
//       return res
//         .status(401)
//         .json({ message: 'am Unauthorized: Invalid token format' });
//     }

//     // 3️⃣ Verify JWT signature and expiration
//     let payload;
//     try {
//       payload = jwtService.verify(accessToken); // throws if invalid
//     } catch (err) {
//       return res.status(401).json({ message: 'am Unauthorized: Invalid token' });
//     }

//     if (!payload?.id) {
//       return res
//         .status(401)
//         .json({ message: 'am Unauthorized: Token missing user ID' });
//     }

//     // 4️⃣ Optional: Verify user exists in DB
//     const user = await User.findByPk(payload.id);
//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: 'am Unauthorized: User does not exist' });
//     }

//     // 5️⃣ Attach user to request for downstream middlewares/controllers
//     req.user = user;

//     // ✅ Everything OK, proceed
//     next();
//   } catch (err) {
//     console.error('authMiddleware error:', err);
//     return res.status(500).json({ message: 'am Internal server error' });
//   }
// };


// export const authMiddleware = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       return res.status(401).json({ message: 'No token' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verifyToken(token, ACCESS_SECRET);

//     req.user = decoded; // must contain .id
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };


// export const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const [, accessToken] = authHeader.split(' ');

//   // if (!accessToken || accessToken === 'null' || accessToken === 'undefined' ) {
//   //   return res.status(401).json({ message: 'Unauthorized' });
//   // }

// if (!accessToken) {
//     return res.status(401).json({ message: 'Unauthorized authMiddleWare' });
//   }

//   try {
//     const userData = jwtService.verify(accessToken);

//     if (!userData) {
//       return res.status(401).json({ message: 'Invalid token authMiddleware' });
//     }
//     req.user = userData; // 👈 attach user from token
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };
