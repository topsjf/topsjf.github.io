// @ts-ignore
import {sidebar} from "vuepress-theme-hope";
import {
    allSources,
    aboutThis,
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
} from "./sidebars";

/**
 * 应该把更精确的路径放置在前边
 */
export const sidebarConfig = sidebar({
    "/history/": ["history"],
    "/about/": aboutThis,
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
