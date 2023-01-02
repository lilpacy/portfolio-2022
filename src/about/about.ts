import '../style.scss'
import './about.scss'
import {template} from "../template";

const options = {
  path: { home: '../', about: './index.html' },
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = template(`
  <div class="flex flex-col gap-10 justify-center items-center px-10 md:px-4">
    <h1>自己紹介</h1>
    <img class="w-80" src="${options.path.home}profile.png" />
    <table class="w-[70vw] md:w-full">
      <tbody>
        <tr>
          <td>1994年</td>
          <td>福岡生まれ</td>
        </tr>
        <tr>
          <td>2014年</td>
          <td>神戸大学経済学部入学</td>
        </tr>
        <tr>
          <td></td>
          <td>
            大学在学中に受験教材の作成販売、営業代行、LPの代筆、アフィリエイトサイト作成代行などの個人事業で生計を立てる
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            半年の休学期間にDonutsバンコク支社でRubyメインのフルスタックエンジニアとしてインターン勤務
          </td>
        </tr>
        <tr>
          <td>2019年</td>
          <td>Fringe81株式会社にエンジニアとして新卒入社</td>
        </tr>
        <tr>
          <td></td>
          <td>
            ARR億単位のHRTech事業フロントエンドを純粋関数型言語Elmで保守運用、新規開発
          </td>
        </tr>
        <tr>
          <td>2020年</td>
          <td>年間取扱高10億規模の広告事業へ異動</td>
        </tr>
        <tr>
          <td></td>
          <td>
            広告配信ログの集計基盤責任者としてScalaでサーバーサイド/インフラ保守運用、新規開発
          </td>
        </tr>
        <tr>
          <td>2021年6月</td>
          <td>CryptoGames.incへフルスタックエンジニアとしてJoin</td>
        </tr>
        <tr>
          <td>2021年11月</td>
          <td>同社NFT事業開発リード</td>
        </tr>
        <tr>
          <td>2022年7月</td>
          <td>CryptoGames CTO</td>
        </tr>
        <tr>
          <td></td>
          <td>現在はNuxt.js/Next.jsを用いたフロントエンド開発、Ruby/Go/Elixirなど用いたサーバーサイド開発、Solidityを用いたスマートコントラクト開発など</td>
        </tr>
      </tbody>
    </table>
  </div>
`, options)
