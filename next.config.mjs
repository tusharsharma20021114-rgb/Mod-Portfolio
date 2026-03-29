/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // This prevents image build errors on GitHub Pages
  }
};

export default nextConfig;
