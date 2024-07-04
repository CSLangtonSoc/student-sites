import { render } from "ejs"
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs"
import minifyHtml from "@minify-html/node"
import { URL } from "node:url"

const PUBLISH_DIR = "public"
const projects = []

readdirSync("public").forEach((item) => {
  const basePath = PUBLISH_DIR + "/" + item
  const obj = statSync(basePath)
  if (obj.isFile()) return

  let meta = {
    name: item,
    author: "-",
    description: "-",
  }
  try {
    meta = {
      ...meta,
      ...JSON.parse(readFileSync(basePath + "/meta.json", "utf-8")),
    }
  } catch (error) {}

  meta.path = "/" + item
  meta.external = false

  if (meta.redirectPath !== undefined) {
    try {
      new URL(meta.redirectPath)
      meta.path = meta.redirectPath
      meta.external = true
    } catch {}
  }

  projects.push(meta)
})

const template = readFileSync("template.ejs", "utf-8")
const htmlContent = render(template, { projects }, {})
const minified = minifyHtml.minify(Buffer.from(htmlContent), {})

writeFileSync(`${PUBLISH_DIR}/index.html`, minified)
