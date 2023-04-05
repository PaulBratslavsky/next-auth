// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cookie = require('cookie');

export default function handler(req, res) {
  // get cookie
  const userData = cookie.parse(req.headers.cookie || '');
  res.status(200).json(userData.user)
}
