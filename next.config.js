/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.unofoods.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}
