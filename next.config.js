/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.lorem.space',
      'placeimg.com',
      'www.google.com',
      'images.pexels.com',
    ],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://platzi.com/home',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig
