import './style.scss'
import './index.scss'
import zennIcon from './zenn.svg'
import qiitaIcon from './qiita.svg'
import pagesIcon from './githubpages.svg'
import wpIcon from './wordpress.svg'
import twitterIcon from './twitter.svg'
import githubIcon from './github.svg'
import vrchatIcon from './vrchat.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="w-full flex flex-col gap-10 justify-center items-center">
    <h1>Hello Happy World!</h1>

    <canvas id="canvas"></canvas>

    <div class="flex gap-2">
      <a href="https://zenn.dev/lilpacy"><img class="icon" src="${zennIcon}" /></a> 
      <a href="https://qiita.com/lilpacy"><img class="icon" src="${qiitaIcon}" /></a>
      <a href="https://lilpacy.github.io/"><img class="icon" src="${pagesIcon}" /></a> 
      <a href="http://lilpacy.info/"><img class="icon" src="${wpIcon}" /></a>
      <a href="https://twitter.com/lilpacy_"><img class="icon" src="${twitterIcon}" /></a>
      <a href="https://github.com/lilpacy"><img class="icon" src="${githubIcon}" /></a>
      <a href="https://vrchat.com/home/user/usr_7d9e5881-5bff-48fb-aa13-53415ba074ac"><img class="icon" src="${vrchatIcon}" /></a>
      <!--  <a href="https://www.wantedly.com/id/tomohiroseto"><img class="icon" src="wantedly.png" /></a>-->
      <!-- <a href="https://note.com/lilpacy"><img class="icon" src="note.png" /></a> -->
    </div>
    <p>
      <strong>
        Please tap a button to get further information.
      </strong>
    </p>
  </div>
`

window.onload = () => {
  let canvas: HTMLCanvasElement|null = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx:  CanvasRenderingContext2D | null = canvas.getContext("2d");
  let frame: number;

  (function loop() {
    frame = requestAnimationFrame(loop);

    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);

    if(!imageData) return;
    for (let p = 0; p < imageData.data.length; p += 4) {
      const i = p / 4;
      const x = i % canvas.width;
      const y = (i / canvas.height) >>> 0;

      const t = window.performance.now();

      const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
      const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
      const b = 128;

      imageData.data[p + 0] = r;
      imageData.data[p + 1] = g;
      imageData.data[p + 2] = b;
      imageData.data[p + 3] = 255;
    }

    ctx?.putImageData(imageData, 0, 0);
  })();

  return () => {
    cancelAnimationFrame(frame);
  };
};
