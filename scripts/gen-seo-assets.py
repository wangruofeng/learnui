#!/usr/bin/env python3
"""一次性资产生成脚本：压缩 favicon、生成 apple-touch-icon 与 og-image。"""
from PIL import Image, ImageDraw, ImageFont

PAPER = "#F9F8F5"
INK = "#191817"
INK2 = "#55524E"
INK3 = "#85807A"
HAIRLINE = "#E2DED3"

SRC = "public/favicon.png"
SERIF = "/System/Library/Fonts/Supplemental/Times New Roman Bold Italic.ttf"
MONO = "/System/Library/Fonts/Supplemental/Courier New.ttf"

logo = Image.open(SRC).convert("RGBA")

# 1) favicon：1254x1254 842KB → 256x256（tab 图标 retina 足够）
logo.resize((256, 256), Image.LANCZOS).save("public/favicon.png", optimize=True)

# 2) apple-touch-icon 180x180，iOS 要求不透明 → 铺纸色底
touch = Image.new("RGBA", (180, 180), PAPER)
small = logo.resize((180, 180), Image.LANCZOS)
touch.alpha_composite(small)
touch.convert("RGB").save("public/apple-touch-icon.png", optimize=True)

# 3) og-image 1200x630
W, H = 1200, 630
img = Image.new("RGB", (W, H), PAPER)
draw = ImageDraw.Draw(img)

draw.rectangle([16, 16, W - 17, H - 17], outline=HAIRLINE, width=1)

def spaced(s, n=1):
    return (" " * n).join(list(s.replace(" ", "  ")))

eyebrow = ImageFont.truetype(MONO, 26)
draw.text((84, 108), spaced("THE VISUAL DICTIONARY OF UI"), font=eyebrow, fill=INK3)

title = ImageFont.truetype(SERIF, 118)
draw.text((78, 158), "What’s this", font=title, fill=INK)
draw.text((78, 276), "called?", font=title, fill=INK)

sub = ImageFont.truetype(MONO, 29)
draw.text((84, 428), "See the element, learn its real name,", font=sub, fill=INK2)
draw.text((84, 470), "prompt your agent with precision.", font=sub, fill=INK2)

badge = logo.resize((300, 300), Image.LANCZOS)
img.paste(badge, (816, 168), badge)

foot = ImageFont.truetype(MONO, 24)
draw.text((84, 556), "Name That UI", font=foot, fill=INK3)

img.save("public/og-image.png", optimize=True)

import os
for f in ("favicon.png", "apple-touch-icon.png", "og-image.png"):
    p = os.path.join("public", f)
    print(f, os.path.getsize(p) // 1024, "KB")
