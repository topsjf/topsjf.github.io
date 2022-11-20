// .vuepress/config.ts
import { searchProPlugin } from "vuepress-plugin-search-pro";

//export const searchPro = () =>
export default searchProPlugin({
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
    })