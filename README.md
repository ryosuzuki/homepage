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

1. Download 360p from YouTube with Y2Mate
https://en1.y2mate.is/

2. Crop with QuickTime

3. To compress mp4
https://www.ps2pdf.com/compress-mp4

4. Mute the video
https://ezgif.com/mute-video

---

To convert from mp4 to webm
https://www.zamzar.com/
https://www.ps2pdf.com/convert-video-to-webm

To convert from pdf to jpg
https://ezgif.com/pdf-to-jpg

To create a video poster

```
ffmpeg -i static/video/top.mp4 image.jpg -map 1 -map 0 -c copy
```

```
defaults write com.apple.screencapture disable-shadow -bool true
killall SystemUIServer
```

Compress with 30% and 360p
