import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Next.js 自动适配要求 Next.js 默认输出（SSG 预渲染 HTML 到磁盘）。
  // output: "standalone" 会让所有页面通过 .next/standalone/server.js 在 Node 运行时渲染，
  // 不写盘 HTML，Cloudflare Workers 拿不到产物，导致动态路由部署后空白。
  // Dockerfile 构建时可设置 BUILD_STANDALONE=1 重新启用 standalone。
  ...(process.env.BUILD_STANDALONE === "1" ? { output: "standalone" } : {}),
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com", pathname: "/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
    ],
  },
};

export default withNextIntl(withMDX(nextConfig));

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
