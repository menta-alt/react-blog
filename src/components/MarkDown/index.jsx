import React from 'react'
import {marked} from 'marked'
import 'highlight.js/styles/github.css'; //highlight需要自己手动引入css文件，否则页面样式不生效
import hljs from "highlight.js";

export default function Markdown(props) {
  const {content} = props
  hljs.configure({
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
  });

  // 配置marked
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: code => hljs.highlightAuto(code).value,
    gfm: true, // 默认为true。 允许 Git Hub标准的markdown.
    breaks: true, // 默认为false。 允许回车换行。该选项要求 gfm 为true。
    pedantic: false,
    tables: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>
  )
}
