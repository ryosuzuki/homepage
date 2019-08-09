const compress = require('compress-images')
const dir = process.argv[2]
const path = dir + '/*'
const output = dir + '/../paper/'

compress(path, output, {
  compress_force: true,
  statistic: true,
  autoupdate: true
},
false,
{
  jpg: { engine: 'mozjpeg', command: ['-quality', '50'] }
},
{
  // png: { engine: 'pngquant', command: ['--quality=1'] }
  png: { engine: 'webp', command: ['-q', '1'] }
  // png: { engine: 'pngout' }
},
{
  svg: { engine: 'svgo', command: '--multipass'}
},
{
  gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] }
}, function(){
})
