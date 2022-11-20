// .vuepress/config.ts
import theme from "./theme.ts";
import { searchProPlugin } from "vuepress-plugin-search-pro";
//import {cp, search} from "./plugins/index.ts";
//import searchPro from "./plugins/searchPro.ts";
import {defineUserConfig, viteBundler} from "vuepress";
import {copyCode} from "vuepress-theme-hope";

export default defineUserConfig({
    
    base: "/",
    
    locales: {
        "/": {
            lang: "zh-CN",
            title: "topsjf",
            description: "꧁「小牛专属笔记本」꧂",
        },
    },
    
    plugins: [
      searchProPlugin({
      // 搜索引擎，是否索引内容
      indexContent: true,
      // 配置选项
      customFields: [
        {
          name: "title",
          getter: (page) => page.frontmatter.title,
          formatter: {
            "/": "标题：$content",
          },
        },
        {
          name: "category",
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "分类：$content",
          },
        },
        {
          name: "tag",
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "标签：$content",
          },
        },
        {
          name: "updateTime",
          getter: (page) => page.data.git?.updateTime.toLocaleString(),
          formatter: {
            "/": "更新时间：$content",
          },
        },
      ]
    }),
    ],
    
    bundler: viteBundler({
        viteOptions: {
            build: {
                chunkSizeWarningLimit: 12040,
                // rollupOptions: {
                //     output: {}
                // }
            }
        },
        vuePluginOptions: {},
    }),
    
    markdown: {
        anchor: {
            level: [2, 3, 4],
        },
        headers: {
            level: [2, 3, 4],
        },
        toc: {
            level: [2, 3, 4],
        },
    },
    
    head: [
        ["script", {type: 'text/javascript', src: '/script/demo.js'}],
        ["link",{rel: "stylesheet", href: "/iconfont/iconfont.css"}],
    ],
    
    theme,
    
    //预读取，开启pwa后建议为false
    shouldPrefetch: false,
    
});
