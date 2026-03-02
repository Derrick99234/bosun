/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.wired.com',
                pathname: '/photos/5c804d88b948cc3e882264a3/master/w_1600,c_limit/**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'media.sproutsocial.com',
                pathname: '/uploads/2022/06/**'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/photos/**'
            },
            {
                protocol: 'https',
                hostname: 'www.google.com',
                pathname: '/s2/favicons**'
            }
        ],
    },
};


export default nextConfig;

