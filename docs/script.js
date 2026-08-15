const phases = {
  germinate: {
    signal: "土壤正在苏醒",
    title: "从一粒种子开始",
    copy: "塑造水源与土壤，让先锋植物扎根。微小的选择会决定整个群落的方向。",
  },
  flourish: {
    signal: "物种开始共生",
    title: "让关系长成网络",
    copy: "引入物种，连接栖息地，也为竞争留下空间。过度保护会让生态变得脆弱。",
  },
  imbalance: {
    signal: "旧平衡正在松动",
    title: "危机不是失败",
    copy: "干旱、病变与迁徙会打破旧秩序。判断哪些系统需要帮助，哪些必须自行改变。",
  },
  renew: {
    signal: "新循环已经形成",
    title: "把伤痕带入下一轮",
    copy: "保存适应下来的物种与环境记忆。新的世界会从旧世界的结果中生长。",
  },
};

const tabs = Array.from(document.querySelectorAll(".phase-tab"));
const panel = document.querySelector("#cycle-panel");
const signal = document.querySelector("#phase-signal");
const title = document.querySelector("#phase-title");
const copy = document.querySelector("#phase-copy");

function activateTab(tab) {
  const phaseName = tab.dataset.phase;
  const phase = phases[phaseName];

  tabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });

  panel.className = `cycle-stage cycle-stage--${phaseName}`;
  panel.setAttribute("aria-labelledby", tab.id);
  signal.textContent = phase.signal;
  title.textContent = phase.title;
  copy.textContent = phase.copy;
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (event) => {
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const backward = event.key === "ArrowUp" || event.key === "ArrowLeft";
    if (!forward && !backward) return;
    event.preventDefault();
    const nextIndex = (index + (forward ? 1 : -1) + tabs.length) % tabs.length;
    activateTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});
