import Image from "next/image";
import { CycleExplorer } from "./CycleExplorer";

const systems = [
  {
    title: "让万物彼此需要",
    body: "水脉、菌群、植被与兽群共享同一套资源。改变一个物种，整片土地都会回应。",
    className: "system-card system-card--wide",
  },
  {
    title: "选择何时介入",
    body: "修复不一定是答案。有时撤退、等待和放手，才能留下更坚韧的生态。",
    className: "system-card system-card--quiet",
  },
  {
    title: "带着记忆重生",
    body: "每次循环都会保留物种适应、土壤变化与玩家选择，下一轮从来不是简单重置。",
    className: "system-card system-card--accent",
  },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav-shell" aria-label="主导航">
          <a className="brand" href="#top" aria-label="生态轮回首页">
            <span className="brand-mark" aria-hidden="true" />
            <span>生态轮回</span>
          </a>
          <div className="nav-links">
            <a href="#world">世界</a>
            <a href="#cycle">循环</a>
            <a href="#gameplay">玩法</a>
          </div>
          <a className="nav-action" href="#wishlist">
            发行消息
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">生态策略生存游戏</p>
            <h1 id="hero-title">
              生态
              <br />
              <span>轮回</span>
            </h1>
            <p className="hero-lede">
              管理一颗活着的星球。繁盛、崩解、再生，每次终结都在改变下一次开始。
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#cycle">
                探索循环
              </a>
              <a className="text-link" href="#world">
                进入世界
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="游戏世界概念图">
            <Image
              src="/eco-cycle-hero.webp"
              alt="由繁茂森林、湿地和衰败土地构成的环形生态世界"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <div className="hero-visual-fade" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="manifesto" id="world" aria-labelledby="world-title">
        <div className="section-shell manifesto-grid">
          <p className="manifesto-note">这个世界不等待命令</p>
          <h2 id="world-title">
            你不是自然的主人。
            <span>你只是循环中的一个变量。</span>
          </h2>
          <p className="manifesto-copy">
            河流会改道，林地会老去，物种会迁徙。你的工作不是维持永恒的平衡，而是读懂变化，并决定什么值得延续。
          </p>
        </div>
      </section>

      <CycleExplorer />

      <section className="world-window" aria-labelledby="land-title">
        <div className="world-image">
          <Image
            src="/eco-cycle-world.webp"
            alt="倒木、菌丝、溪流与新生树苗共同组成的森林生态"
            fill
            sizes="100vw"
          />
        </div>
        <div className="section-shell world-caption">
          <h2 id="land-title">每块土地都有后果</h2>
          <p>
            倒下的树成为菌群的家，洪水带走旧土，也送来新的种子。世界会记录你的每次选择。
          </p>
        </div>
      </section>

      <section className="systems" id="gameplay" aria-labelledby="systems-title">
        <div className="section-shell">
          <div className="systems-heading">
            <h2 id="systems-title">培育关系，不是堆叠资源</h2>
            <p>真正稳定的生态，不依赖单一强者，而依赖无数微小关系。</p>
          </div>
          <div className="systems-grid">
            {systems.map((system) => (
              <article className={system.className} key={system.title}>
                <div className="system-ring" aria-hidden="true" />
                <h3>{system.title}</h3>
                <p>{system.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="wishlist" aria-labelledby="wishlist-title">
        <div className="section-shell final-grid">
          <div>
            <p className="section-kicker">循环即将开始</p>
            <h2 id="wishlist-title">让世界记住你的选择</h2>
          </div>
          <div className="final-action">
            <p>Steam 商店页面正在准备中。发行入口开放后将在这里公布。</p>
            <a className="button button--primary" href="#top">
              回到生态
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand" href="#top" aria-label="返回生态轮回首页">
          <span className="brand-mark" aria-hidden="true" />
          <span>生态轮回</span>
        </a>
        <p>一场关于适应、失衡与新生的生态策略游戏。</p>
      </footer>
    </main>
  );
}
