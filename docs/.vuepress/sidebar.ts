// @ts-ignore
import {sidebar} from "vuepress-theme-hope";
import {
    allSources,
    about,
    architectures,
    books,
    databaseJson,
    javaJson,
    middlewareJson,
    linuxJson,
    kubernetesJson,
    dockerJson,
    openSources,
    toolsJson,
    webJson
} from "./sidebars/index.ts";

/**
 * 应该把更精确的路径放置在前边
 */
export const sidebarConfig = sidebar({
    "/history/": ["history"],
    "/about/": about,
    "/architecture/": architectures,
    "/books/": books,
    "/open-source/": openSources,
    "/all/": allSources,
    "/": [
        javaJson,
        databaseJson,
        webJson,
        middlewareJson,
        linuxJson,
        kubernetesJson,
        dockerJson,
        toolsJson
    ],
});
