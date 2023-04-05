// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cookie = require('cookie');

export default function handler(req, res) {
// remove cookie




  res.status(200).json({ data: "cookie removed"})
}
