// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cookie = require('cookie');

export default function handler(req, res) {
  // Set cookie

  res.setHeader('Set-Cookie', cookie.serialize('user', JSON.stringify(req.body.data), {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24 * 7, 
    sameSite: 'strict',
    path: '/'
  }));

  res.status(200).json({ user: req.body.data.user })
}
