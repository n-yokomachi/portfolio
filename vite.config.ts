import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  base: "/portfolio/",
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },

      // SPAモード
      ssr: false,

      // Github Pages用basenameの設定
      basename: "/portfolio/",

      // GitHub Pagesにデプロイする際、/から別のルートに移動しタブをリフレッシュすると、デフォルトのGH Pages 404ページが表示されます。
      // これは、GH Pagesがすべてのトラフィックをindex.htmlに送信するように設定されていないためです。
      // これを修正するために、index.htmlと同じ内容を含む404.htmlファイルを作成できます。
      // こうすることで、ユーザーがページをリフレッシュすると、GH Pagesは404.htmlを提供し、すべてが期待通りに動作します。
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(
          join(buildPath, "index.html"),
          join(buildPath, "404.html")
        );
      },
    }),
    tsconfigPaths(),
  ],
});
