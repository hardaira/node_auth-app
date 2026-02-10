// export const ownerMiddleware = (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).json({ message: 'Unauthorized ownerMiddleware' });
//   }

//   if (!req.params.id) {
//     return res.status(400).json({ message: 'Missing id param ownerMiddleware' });
//   }

//   const tokenUserId = Number(req.user.id);
//   const paramUserId = Number(req.params.id);

//   if (tokenUserId !== paramUserId) {
//     return res.status(403).json({ message: 'Forbidden ownerMiddleware' });
//   }

//   next();
// };

export const ownerMiddleware = (req, res, next) => {
if (!req.user) {
  return res.status(401).json({ message: 'owner Unauthorized' });
}
  console.log(req.user, req.params);
  const tokenUserId = Number(req.user.id);
  const paramUserId = Number(req.params.id);
  console.log(tokenUserId);
  if (tokenUserId !== paramUserId) {
    return res.status(403).json({ message: 'owner Forbidden' });
  }

  next();
};
