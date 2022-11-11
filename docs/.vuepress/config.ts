// .vuepress/config.ts
import theme from "./theme.ts";
import {cp, search} from "./plugins/index.ts";
import {defineUserConfig, viteBundler} from "vuepress";
import {copyCode} from "vuepress-theme-hope";

export default defineUserConfig({
    theme: theme,
    base: "/",
    title: "topsjf",
    description: "꧁「小牛专属笔记本」꧂",
    dest: "./dist",
    //预读取，开启pwa后建议为false
    shouldPrefetch: false,
    plugins: [
        search,
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
        ["meta", {name: "robots", content: "all"}],
        ["meta", {"http-equiv": "Cache-Control", content: "no-cache, no-store, must-revalidate"}],
        ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
        ["meta", {"http-equiv": "Expires", content: "0"}],
        ["meta", {name: "keywords", content: "Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ["script", {type: 'text/javascript', src: '/script/demo.js'}],
        ["link",{rel: "stylesheet", href: "/iconfont/iconfont.css"}],
    ],
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
});
