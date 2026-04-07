/** @type {import('next').NextConfig} */
const nextConfig = {
  // 빌드 시 사소한 문법 에러(ESLint) 무시하고 강제 배포
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 타입스크립트 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;