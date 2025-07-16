/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // ⬅️ Increase limit (you can go up to 100mb)
    },
  },
};

module.exports = nextConfig;
