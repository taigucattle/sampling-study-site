// Local KaTeX expressions for the chapter reader. Each formula is authored as TeX.
const courseMath = {
  ch1: {
    3: [
      ['偏差', "\\operatorname{Bias}(\\hat\\theta)=\\operatorname{E}(\\hat\\theta)-\\theta"],
      ['均方误差', "\\operatorname{MSE}(\\hat\\theta)=\\operatorname{Var}(\\hat\\theta)+\\operatorname{Bias}(\\hat\\theta)^2"]
    ],
    4: [['近似 95% 区间', "\\hat\\theta\\;\\pm\\;1.96\\,\\operatorname{SE}(\\hat\\theta)"]]
  },
  ch2: {
    1: [
      ['可能样本数', "\\binom{N}{n}"],
      ['单位的入样概率', "\\Pr(i\\in s)=\\frac{n}{N}"]
    ],
    2: [
      ['样本均值', "\\bar y=\\frac{1}{n}\\sum_{i=1}^{N}I_iY_i"],
      ['取期望', "\\operatorname{E}(\\bar y)=\\frac{1}{n}\\sum_{i=1}^{N}\\frac{n}{N}Y_i=\\bar Y"]
    ],
    3: [
      ['抽样比例', "f=\\frac{n}{N}"],
      ['总体方差', "S^2=\\frac{\\sum_{i=1}^{N}(Y_i-\\bar Y)^2}{N-1}"],
      ['均值方差', "\\operatorname{Var}(\\bar y)=(1-f)\\frac{S^2}{n}"]
    ],
    4: [
      ['样本方差', "s^2=\\frac{\\sum_{i\\in s}(y_i-\\bar y)^2}{n-1}"],
      ['估计均值方差', "\\widehat{\\operatorname{Var}}(\\bar y)=(1-f)\\frac{s^2}{n}"],
      ['总体总量', "\\hat Y=N\\bar y,\\qquad \\widehat{\\operatorname{Var}}(\\hat Y)=N^2\\widehat{\\operatorname{Var}}(\\bar y)"]
    ]
  },
  ch3: {
    1: [
      ['总体比例', "P=\\frac{A}{N}=\\frac{1}{N}\\sum_{i=1}^{N}y_i"],
      ['样本比例', "p=\\frac{a}{n}"]
    ],
    2: [['估计类别人数', "\\hat A=Np"]],
    3: [
      ['比例方差', "\\operatorname{Var}(p)=\\frac{N-n}{N-1}\\frac{PQ}{n}"],
      ['样本估计方差', "\\widehat{\\operatorname{Var}}(p)=(1-f)\\frac{pq}{n-1}"],
      ['人数标准误', "\\operatorname{SE}(\\hat A)=N\\operatorname{SE}(p)"]
    ],
    4: [['近似区间', "p\\;\\pm\\;1.96\\,\\operatorname{SE}(p)"]]
  },
  ch4: {
    1: [['误差界', "d\\approx t\\,\\operatorname{SE}(\\hat\\theta)"]],
    2: [
      ['大总体近似', "\\operatorname{SE}(p)\\approx\\sqrt{\\frac{PQ}{n}}"],
      ['反解样本量', "n_0=\\frac{t^2PQ}{d^2}"]
    ],
    3: [['有限总体修正', "n=\\frac{n_0}{1+(n_0-1)/N}"]],
    4: [['最保守的比例', "PQ=P(1-P)\\leq\\frac{1}{4}"]],
    5: [
      ['连续变量', "n_0=\\frac{t^2S^2}{d^2}"],
      ['相对误差', "n_0\\approx t^2\\left(\\frac{\\mathrm{CV}}{r}\\right)^2"]
    ]
  },
  ch5: {
    2: [
      ['层权重', "W_h=\\frac{N_h}{N},\\qquad \\sum_{h=1}^{L}W_h=1"],
      ['总体均值估计', "\\bar y_{\\mathrm{st}}=\\sum_{h=1}^{L}W_h\\bar y_h"],
      ['总体总量估计', "\\hat Y_{\\mathrm{st}}=\\sum_{h=1}^{L}N_h\\bar y_h"]
    ],
    3: [
      ['层内抽样比例', "f_h=\\frac{n_h}{N_h}"],
      ['均值方差', "\\operatorname{Var}(\\bar y_{\\mathrm{st}})=\\sum_{h=1}^{L}W_h^2(1-f_h)\\frac{S_h^2}{n_h}"]
    ],
    5: [
      ['比例分配', "n_h=n\\frac{N_h}{N}"],
      ['Neyman 分配', "n_h=n\\frac{N_hS_h}{\\sum_{k=1}^{L}N_kS_k}"]
    ]
  },
  ch5a: {
    1: [['权重造成的偏差', "\\operatorname{Bias}(\\bar y_w)\\approx\\sum_{h=1}^{L}(w_h-W_h)\\bar Y_h"]],
    3: [['均方误差', "\\operatorname{MSE}(\\bar y_w)=\\operatorname{Var}(\\bar y_w)+\\operatorname{Bias}(\\bar y_w)^2"]],
    4: [['比较分配', "\\operatorname{Var}(\\bar y_{\\mathrm{st}})\\approx\\sum_{h=1}^{L}\\frac{W_h^2S_h^2}{n_h}"]]
  },
  ch6: {
    2: [
      ['样本比率', "r=\\frac{\\sum_{i\\in s}y_i}{\\sum_{i\\in s}x_i}=\\frac{\\bar y}{\\bar x}"],
      ['总体总量估计', "\\hat Y^{(R)}=Xr"]
    ],
    3: [['比率残差', "e_i=y_i-Rx_i"]],
    4: [
      ['线性化', "r-R\\approx\\frac{\\bar y-R\\bar x}{\\bar X}"],
      ['近似方差', "\\operatorname{Var}(r)\\approx(1-f)\\frac{S_e^2}{n\\bar X^2}"],
      ['总量方差', "\\operatorname{Var}(\\hat Y^{(R)})\\approx X^2\\operatorname{Var}(r)"]
    ]
  }
};

const workedMath = {
  ch2: {
    0: [["总体均值", "\\bar Y=\\frac{2+4+6+8+10}{5}=6"]],
    1: [["总体方差", "S^2=\\frac{16+4+0+4+16}{4}=10"]],
    2: [["理论方差", "\\operatorname{Var}(\\bar y)=\\left(1-\\frac25\\right)\\frac{10}{2}=3"]],
    3: [["样本估计", "s^2=8,\\qquad\\widehat{\\operatorname{Var}}(\\bar y)=\\left(1-\\frac25\\right)\\frac82=2.4"]]
  },
  ch3: {
    0: [["样本比例", "p=\\frac{38}{200}=0.19"]],
    1: [["人数估计", "\\hat A=3042\\times0.19\\approx578"]],
    2: [["标准误", "\\operatorname{SE}(p)\\approx0.0269,\\qquad\\operatorname{SE}(\\hat A)\\approx81.8"]],
    3: [["近似人数区间", "578\\pm1.96\\times81.8\\approx(418,738)"]]
  },
  ch4: {
    1: [["大总体样本量", "n_0=\\frac{1.96^2\\times0.5\\times0.5}{0.05^2}=384.16"]],
    2: [["保留全精度", "n=\\frac{384.16}{1+(384.16-1)/3200}\\approx343.08\\;\\Rightarrow\\;344"]]
  },
  ch5: {
    0: [["层权重", "W_1=\\frac{250}{750}=\\frac13,\\qquad W_2=\\frac{500}{750}=\\frac23"]],
    2: [["总体均值", "\\bar y_{\\mathrm{st}}=\\frac13(3.2)+\\frac23(4.0)\\approx3.73"]]
  },
  ch5a: {
    1: [["正确加权", "\\bar Y=\\frac13(3.2)+\\frac23(4.0)\\approx3.733"]],
    2: [["错误加权", "\\bar Y_w=\\frac12(3.2)+\\frac12(4.0)=3.6,\\qquad\\text{偏差}\\approx-0.133"]]
  },
  ch6: {
    1: [["样本比率", "r=\\frac{18459}{16352}\\approx1.1289"]],
    2: [["比率总量估计", "\\hat Y^{(R)}=86436\\times\\frac{18459}{16352}\\approx97574"]],
    3: [["简单扩张估计", "\\hat Y=N\\bar y=56\\times\\frac{18459}{12}=86142"]]
  }
};

const workedNarratives = {
  ch2: [
    '总体共有 5 个数值：2、4、6、8、10。先求这 5 个数的平均值。',
    '再求有限总体方差。每个值减去总体均值 6，平方后相加，最后除以 N−1，也就是 4。',
    '不放回抽取 2 人，抽样比例为 0.4。将总体方差代入简单随机抽样公式，理论方差为 3，理论标准误约为 1.73。',
    '若实际抽到 4 和 8，样本均值为 6。只根据这两个样本值求样本方差，再得到方差估计 2.4、估计标准误约 1.55。'
  ],
  ch3: [
    '从 200 个样本地址中发现 38 个错误地址。先用错误地址数除以样本量，求样本错误比例。',
    '把样本比例乘总体地址数 3,042，得到总体错误地址的点估计。',
    '用比例方差估计式求标准误，再把比例标准误转换为“地址个数”的标准误。',
    '最后用点估计加减 1.96 倍标准误，得到一个近似的 95% 总人数区间。'
  ],
  ch4: [
    '题目给出总体 3,200 人、95% 置信和允许误差 5 个百分点。真实比例未知，用 0.5 做保守规划。',
    '先把总体当作很大，用临界值、比例波动和目标误差界计算初始样本量。',
    '再按 3,200 人的有限总体做修正。保留全部中间精度时结果约为 343.08，严格满足误差界需向上取 344；课件的近似取法给出约 343。',
    '如果总体变为 320,000 人，有限总体修正几乎不起作用，样本量仍接近初始值。'
  ],
  ch5: [
    '城市有 250 户、农村有 500 户，总计 750 户。先把每层规模换成总体权重。',
    '虽然两层各抽 10 户，城市层样本均值为 3.2 人，农村层为 4.0 人；这是两层各自的估计。',
    '把每层样本均值乘真实总体权重后再相加，得到总体平均家庭人数约 3.73 人。',
    '若将两个层均值直接平均，会把城市与农村误当成各占总体一半，得到偏低的 3.6。'
  ],
  ch5a: [
    '沿用城乡调查：真实权重为城市三分之一、农村三分之二，两层均值分别为 3.2 与 4.0。',
    '先按真实权重合并，得到总体均值约 3.733。',
    '如果误把两层都按二分之一加权，得到 3.6，比真实加权结果低约 0.133。',
    '即使各层样本量继续增加，错误权重仍会把结果拉向 3.6；首先要核对总体层规模。'
  ],
  ch6: [
    '总体有 56 家公司，已知去年利润总额。样本的 12 家公司同时记录了去年与今年的利润。',
    '先用样本今年利润总和除以样本去年利润总和，得到两年的样本比率。',
    '将样本比率乘已知的总体去年利润总额，得到今年利润总额的比率估计。',
    '若只把样本今年平均利润乘公司总数，会得到简单扩张估计。两种估计利用的信息不同。',
    '比较两种方法的精度还需检查去年与今年利润的关系，以及比率残差的波动。'
  ]
};

// The source notes used Unicode approximations in prose. Render the common
// expressions inline as real mathematics while keeping the Chinese explanation.
const inlineMathPairs = [
  ["E(ȳ)=(1/n)ΣE(Iᵢ)Yᵢ=(1/n)(n/N)ΣYᵢ=Ȳ", "\\operatorname{E}(\\bar y)=\\frac1n\\sum_i\\operatorname{E}(I_i)Y_i=\\bar Y"],
  ["Var(ȳ)=(1−f)S²/n", "\\operatorname{Var}(\\bar y)=(1-f)\\frac{S^2}{n}"],
  ["Var(Ŷ)=N²Var(ȳ)", "\\operatorname{Var}(\\hat Y)=N^2\\operatorname{Var}(\\bar y)"],
  ["v(ȳ)=(1−f)s²/n", "\\widehat{\\operatorname{Var}}(\\bar y)=(1-f)\\frac{s^2}{n}"],
  ["ȳ=(1/n)ΣIᵢYᵢ", "\\bar y=\\frac1n\\sum_i I_iY_i"],
  ["E(Iᵢ)=n/N", "\\operatorname{E}(I_i)=\\frac nN"],
  ["P(i 入样)=n/N", "\\Pr(i\\in s)=\\frac nN"],
  ["Var(p)=[(N−n)/(N−1)]·PQ/n", "\\operatorname{Var}(p)=\\frac{N-n}{N-1}\\frac{PQ}{n}"],
  ["Var(p)=(1−n/N)S²/n", "\\operatorname{Var}(p)=\\left(1-\\frac nN\\right)\\frac{S^2}{n}"],
  ["S²=N·P·Q/(N−1)", "S^2=\\frac{NPQ}{N-1}"],
  ["v(Â)=N²v(p)", "\\widehat{\\operatorname{Var}}(\\hat A)=N^2\\widehat{\\operatorname{Var}}(p)"],
  ["v(p)=(1−n/N)pq/(n−1)", "\\widehat{\\operatorname{Var}}(p)=\\left(1-\\frac nN\\right)\\frac{pq}{n-1}"],
  ["SE≈√(PQ/n)", "\\operatorname{SE}(p)\\approx\\sqrt{\\frac{PQ}{n}}"],
  ["n≥t²PQ/d²", "n\\geq\\frac{t^2PQ}{d^2}"],
  ["n=n₀/[1+(n₀−1)/N]", "n=\\frac{n_0}{1+(n_0-1)/N}"],
  ["n₀=t²PQ/d²", "n_0=\\frac{t^2PQ}{d^2}"],
  ["n₀=t²S²/d²", "n_0=\\frac{t^2S^2}{d^2}"],
  ["n₀≈t²(CV/r)²", "n_0\\approx t^2\\left(\\frac{\\mathrm{CV}}r\\right)^2"],
  ["Var(ΣWₕȳₕ)=ΣWₕ²Var(ȳₕ)", "\\operatorname{Var}(\\sum_h W_h\\bar y_h)=\\sum_hW_h^2\\operatorname{Var}(\\bar y_h)"],
  ["Var(ȳₕ)=(1−fₕ)Sₕ²/nₕ", "\\operatorname{Var}(\\bar y_h)=(1-f_h)\\frac{S_h^2}{n_h}"],
  ["Var(ȳₛₜ)=ΣWₕ²(1−fₕ)Sₕ²/nₕ", "\\operatorname{Var}(\\bar y_{\\mathrm{st}})=\\sum_hW_h^2(1-f_h)\\frac{S_h^2}{n_h}"],
  ["ȳₛₜ=ΣWₕȳₕ", "\\bar y_{\\mathrm{st}}=\\sum_hW_h\\bar y_h"],
  ["Ŷₛₜ=ΣNₕȳₕ", "\\hat Y_{\\mathrm{st}}=\\sum_hN_h\\bar y_h"],
  ["Wₕ=Nₕ/N", "W_h=\\frac{N_h}{N}"],
  ["nₕ=nWₕ", "n_h=nW_h"],
  ["nₕ∝NₕSₕ/√cₕ", "n_h\\propto\\frac{N_hS_h}{\\sqrt{c_h}}"],
  ["nₕ∝NₕSₕ", "n_h\\propto N_hS_h"],
  ["r=Σy/Σx", "r=\\frac{\\sum y_i}{\\sum x_i}"],
  ["r=Σyᵢ/Σxᵢ", "r=\\frac{\\sum y_i}{\\sum x_i}"],
  ["Ŷᴿ=Xr", "\\hat Y^{(R)}=Xr"],
  ["eᵢ=yᵢ−R xᵢ", "e_i=y_i-Rx_i"],
  ["r−R≈(ȳ−R x̄)/X̄", "r-R\\approx\\frac{\\bar y-R\\bar x}{\\bar X}"],
  ["Var(r)≈(1−f)S²ₑ/(nX̄²)", "\\operatorname{Var}(r)\\approx(1-f)\\frac{S_e^2}{n\\bar X^2}"],
  ["MSE=方差+偏差²", "\\operatorname{MSE}=\\operatorname{Var}+\\operatorname{Bias}^2"],
  ["s²", "s^2"], ["S²", "S^2"], ["n₀", "n_0"],
  ["ȳₛₜ", "\\bar y_{\\mathrm{st}}"], ["ȳₕ", "\\bar y_h"],
  ["Ȳₕ", "\\bar Y_h"], ["ȳ", "\\bar y"], ["Ȳ", "\\bar Y"],
  ["Ŷᴿ", "\\hat Y^{(R)}"], ["Ŷ", "\\hat Y"], ["Â", "\\hat A"],
  ["Wₕ", "W_h"], ["Nₕ", "N_h"], ["nₕ", "n_h"], ["Sₕ", "S_h"], ["fₕ", "f_h"]
].sort(function(a, b) { return b[0].length - a[0].length; });

function renderInlineMath(copy) {
  let cursor = 0;
  let html = '';
  while (cursor < copy.length) {
    let found = null;
    let foundAt = copy.length;
    for (const pair of inlineMathPairs) {
      const at = copy.indexOf(pair[0], cursor);
      if (at >= 0 && (at < foundAt || (at === foundAt && pair[0].length > found[0].length))) {
        found = pair;
        foundAt = at;
      }
    }
    if (!found) break;
    html += copy.slice(cursor, foundAt);
    html += katex.renderToString(found[1], {displayMode: false, throwOnError: false, output: 'htmlAndMathml'});
    cursor = foundAt + found[0].length;
  }
  return html + copy.slice(cursor);
}

function renderMathRows(rows) {
  if (!rows || !rows.length) return '';
  return '<div class="course-formula"><span>把关系写下来</span>' +
    rows.map(function(row) {
      return '<div class="math-row"><small>' + row[0] + '</small><div class="math-render">' +
        katex.renderToString(row[1], {displayMode: true, throwOnError: false, output: 'htmlAndMathml'}) +
        '</div></div>';
    }).join('') + '</div>';
}

function renderWorkedMath(rows) {
  if (!rows || !rows.length) return '';
  return '<div class="worked-math">' + rows.map(function(row) {
    return '<span>' + row[0] + '</span><div class="math-render">' +
      katex.renderToString(row[1], {displayMode: true, throwOnError: false, output: 'htmlAndMathml'}) +
      '</div>';
  }).join('') + '</div>';
}
