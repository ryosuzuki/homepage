# Ryo Suzuki

## Installation

```sh
node server.js
```

```sh
npm run watch
```


To deploy

```sh
npm run deploy
npm run push
```

```sh
git fetch origin
git reset --hard origin/master
```


To add a new project

add new project id in `next.config.js`

```
const ids = [
  '[new-project]'
  'roomshift',
  'lift-tiles',
  'shapebots',
  ...
]
```


## Test

make sure to git pull before working on

```
cd ../gh-pages
git pull origin master
```



```
cp -rf out/* ../gh-pages
```


## Change Log for gh-pages

Modify `env-config.js`

```
  'process.env.BACKEND_URL': prod ? '/gh-pages' : ''
```


Modify `next.config.js`

```
  assetPrefix: !debug ? '/gh-pages/' : '',
```




## Create Paper Thumbnails

Step 1:
Convert PDF to JPG with https://ezgif.com/pdf-to-jpg/

Step 2:
Run `node static/projects/convert.js [directory] paper`

Step 3:
Then, you can get `paper-01.jpg`, `paper-02.jpg`, `paper-03.jpg`, ....

Step 4:
Create `paper-original` directory and put them into it

Step 5:
Run `mkdir static/projects/[name]/paper`

Step 6:
Run `node static/project/resize.js static/projects/[name]/paper-original paper`

Step 7:
Then, you can get the resized paper images


## Create Slide Thumbnails

Step 1:
Convert PDF to JPG with https://ezgif.com/pdf-to-jpg/

Step 2:
Run `node static/projects/convert.js [directory] slide`

Step 3:
Then, you can get `slide-01.jpg`, `slide-02.jpg`, `slide-03.jpg`, ....

Step 4:
Create `slide-original` directory and put them into it

Step 5:
Run `mkdir static/projects/[name]/slide`

Step 6:
Run `node static/project/resize.js static/projects/[name]/slide-original slide`

Step 7:
Then, you can get the resized paper images


## Prepare for the Videos

Keep the authoritative source outside this repository. Create a muted web-preview derivative locally with ffmpeg; do not upload private or unpublished source video to third-party compression sites.

```sh
ffmpeg -i input.mp4 -an \
  -vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p \
  -movflags +faststart static/video/project-id.mp4
```

This 360p/CRF 28 profile is intentionally lossy and is only for small autoplaying project-list previews. For a primary or downloadable video, preserve the source resolution and begin at CRF 18-22.

For an existing H.264 preview that only needs its silent audio track removed and fast-start enabled, copy the video stream without re-encoding:

```sh
ffmpeg -i input.mp4 -map 0:v:0 -c:v copy -an -movflags +faststart output.mp4
```

Verify codec, dimensions, duration, pixel format, size, and zero audio streams with `ffprobe`, then inspect playback in the browser.

---

To convert from mp4 to webm
https://www.zamzar.com/
https://www.ps2pdf.com/convert-video-to-webm

## Optimize Web Images

Optimage is installed on the site-maintenance Mac. Use its bundled CLI for lossless PNG/JPEG optimization and preserve decoded pixels and dimensions:

```sh
/Applications/Optimage.app/Contents/MacOS/cli/optimage \
  --strip-meta=most static/posters/project-id.jpg
```

Use `--lossy` only after explicit visual comparison. For paper-page conversion, use local `pdftoppm` rather than uploading unpublished papers to third-party sites.

To create a video poster

```
ffmpeg -i static/video/top.mp4 image.jpg -map 1 -map 0 -c copy
```

```
defaults write com.apple.screencapture disable-shadow -bool true
killall SystemUIServer
```

Compress with 30% and 360p

## Source Asset Archive Policy

Keep only files referenced by the current build and verified deployment tree in Git. Authoritative source videos, full-resolution paper/slide renders, superseded PDFs, and duplicate media belong in the OneDrive archive, not in this repository.

The pre-cleanup repository, complete Git history, removal manifest, and 2,436 excluded static files from the 2026-08-08 cleanup are stored under `Media/Website Backups/homepage-2026-08-08-pre-cleanup` in the CU OneDrive. Verify that archive with its `SHA256SUMS` file before restoring anything.

Run the following before committing a cleanup:

```sh
NODE_OPTIONS=--openssl-legacy-provider npm run build
NODE_OPTIONS=--openssl-legacy-provider npm run export
node scripts/create-deploy-tree.js
```

Then serve `deploy-out` and run `npm run verify` with `BASE_URL` pointing at that server. Do not treat a successful compile alone as proof that an asset is unused.
