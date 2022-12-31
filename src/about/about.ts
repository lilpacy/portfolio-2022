import '../style.scss'
import './about.sass'
import {Nav} from "../components/nav";
import {Footer} from "../components/footer";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Nav()}
  <div class="flex flex-col gap-10 justify-center items-center px-10 md:px-4">
    <h1>自己紹介</h1>
    <img class="w-80" src="profile.png" />
    <p class="">1994年 福岡生まれ
      <br />
      2014年 神戸大学経済学部入学
      <br />
      大学在学中に受験教材の作成販売、営業代行、LPの代筆、アフィリエイトサイト作成代行などの個人事業で生計を立てる<br />
      半年の休学期間にDonutsバンコク支社でRubyメインのフルスタックエンジニアとしてインターン勤務<br />
      2019年 Fringe81株式会社にエンジニアとして新卒入社<br />
      ARR億単位のHRTech事業フロントエンドを純粋関数型言語Elmで保守運用、新規開発<br />
      2020年 年間取扱高10億規模の広告事業へ異動<br />
      広告配信ログの集計基盤責任者としてScalaでサーバーサイド/インフラ保守運用、新規開発<br />
      2021年6月 CryptoGames.incへフルスタックエンジニアとしてJoin<br />
      同年11月〜 同社NFT事業開発リード<br />
      2022年7月〜 CryptoGames CTO<br />
      <br />
      現在はNuxt.js/Next.jsを用いたフロントエンド開発、Ruby/Go/Elixirなど用いたサーバーサイド開発、Solidityを用いたスマートコントラクト開発など
    </p>
  </div>
  ${Footer()}
`
