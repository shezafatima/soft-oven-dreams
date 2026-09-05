import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }, 
  distDir: 'build', // Changes the build output directory to `build`
}
 
export default nextConfig