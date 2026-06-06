// remove-black-bg.mjs
// Makes near-black pixels transparent in the pixel-art sprites.
import sharp from "sharp"
import { readFileSync, writeFileSync } from "fs"

const files = ["pixel-cockatiel-white"]
const THRESHOLD = 40 // pixels darker than this (on all channels) become transparent

for (const name of files) {
  const path = `public/${name}.png`
  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    if (r < THRESHOLD && g < THRESHOLD && b < THRESHOLD) {
      data[i + 3] = 0 // set alpha to 0
    }
  }

  const out = await sharp(data, { raw: { width, height, channels } })
    .png()
    .toBuffer()
  writeFileSync(path, out)
  console.log(`Processed ${path}`)
}
