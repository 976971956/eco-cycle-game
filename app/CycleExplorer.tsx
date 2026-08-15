"use client";

import { KeyboardEvent, useState } from "react";

const phases = [
  {
    id: "germinate",
    name: "萌发",
    title: "从一粒种子开始",
    copy: "塑造水源与土壤，让先锋植物扎根。微小的选择会决定整个群落的方向。",
    signal: "土壤正在苏醒",
  },
  {
    id: "flourish",
    name: "繁盛",
    title: "让关系长成网络",
    copy: "引入物种，连接栖息地，也为竞争留下空间。过度保护会让生态变得脆弱。",
    signal: "物种开始共生",
  },
  {
    id: "imbalance",
    name: "失衡",
    title: "危机不是失败",
    copy: "干旱、病变与迁徙会打破旧秩序。判断哪些系统需要帮助，哪些必须自行改变。",
    signal: "旧平衡正在松动",
  },
  {
    id: "renew",
    name: "重生",
    title: "把伤痕带入下一轮",
    copy: "保存适应下来的物种与环境记忆。新的世界会从旧世界的结果中生长。",
    signal: "新循环已经形成",
  },
];

export function CycleExplorer() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  const moveTab = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const next = (index + direction + phases.length) % phases.length;
    setActive(next);
    document.getElementById(`cycle-tab-${phases[next].id}`)?.focus();
  };

  return (
    <section className="cycle-section" id="cycle" aria-labelledby="cycle-title">
      <div className="section-shell cycle-layout">
        <header className="cycle-heading">
          <h2 id="cycle-title">没有失败，只有下一次适应</h2>
          <p>选择一个生态阶段，观察世界如何回应。</p>
        </header>

        <div className="cycle-console">
          <div className="phase-tabs" role="tablist" aria-label="生态循环阶段" aria-orientation="vertical">
            {phases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="cycle-panel"
                id={`cycle-tab-${item.id}`}
                tabIndex={active === index ? 0 : -1}
                className={active === index ? "phase-tab is-active" : "phase-tab"}
                onClick={() => setActive(index)}
                onKeyDown={(event) => moveTab(event, index)}
              >
                <span>{item.name}</span>
                <small>{item.signal}</small>
              </button>
            ))}
          </div>

          <div
            className={`cycle-stage cycle-stage--${phase.id}`}
            id="cycle-panel"
            role="tabpanel"
            aria-labelledby={`cycle-tab-${phase.id}`}
            tabIndex={0}
          >
            <div className="cycle-orbit" aria-hidden="true">
              <span className="orbit-core" />
              <span className="orbit-trace orbit-trace--one" />
              <span className="orbit-trace orbit-trace--two" />
              <span className="orbit-seed" />
            </div>
            <div className="cycle-panel-copy" aria-live="polite">
              <p>{phase.signal}</p>
              <h3>{phase.title}</h3>
              <div>{phase.copy}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
