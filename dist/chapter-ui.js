// A chapter is a reading path, not a popup: one question, one explanation, then one application.
const guides = {
  ch1: {
    question: '只问一部分人，凭什么能谈整个总体？',
    fromPrevious: '课程从调查问题出发：先建立总体、样本和误差的语言，后面所有估计方法都会用到。',
    scene: '假设学校让你估计所有本科生的单程通勤时间。你手里只有一份学籍名单，也不可能逐个联系所有人。先别算平均数：你必须先说清名单能代表谁、抽到谁、答案会出什么错。',
    thread: [
      '在这个调查里，“全校学生”仍太模糊。可以先定成“本学期在校注册本科生”，并确定交换生是否算在内。然后拿这一定义核对学籍名单：名单漏人，结论就只能覆盖名单里的人。',
      '如果名单有 N 人，可以给每人一个编号，再用随机数抽 n 人。每个人的入样机会由设计给定；在食堂临时找人则受地点和时间影响，机会不清楚。这一差别决定后面能否计算设计标准误。',
      '假设同一套规则第一次抽到通勤均值 24 分钟，第二次是 27 分钟。真实总体均值没有变，变化来自抽到的人不同。想象所有可能样本的均值排成一列，才能谈它们的中心、波动和偏差。',
      '若某次均值估计为 26 分钟，估计标准误为 2 分钟，粗略 95% 区间是 26±1.96×2，即约 22.1～29.9 分钟。这里的范围只反映这套抽样设计所量化的不确定性。',
      '回看通勤问卷：名单漏掉某类学生是覆盖问题；抽中学生拒答是无回答；把往返写成单程是测量问题。随机抽中不同学生才是抽样误差。诊断清楚后，才知道该改名单、追访、改问题，还是增大 n。'
    ],
    bridges: [
      '从调查目标开始。只有把“总体”说具体，后面的样本和估计才有明确对象。',
      '现在知道要研究谁了。下一问是：怎样让名单中的人进入样本，才能谈抽样误差？',
      '抽样规则明确后，同一规则反复使用会得到不同结果。这个变化就是抽样分布要描述的东西。',
      '看清估计值会怎样波动，才能回答“这次结果有多可靠”。',
      '最后回到真实调查：抽样之外的问题同样会影响结论。'
    ],
    pauses: [
      ['若学籍名单漏掉交换生，抽更多名单内学生能补救吗？', '不能。扩大样本只能覆盖名单内的人；先要检查交换生是否属于目标总体，并修正抽样框。'],
      ['“随手在食堂问 100 人”能直接套简单随机抽样的标准误吗？', '不能。谁在食堂、谁愿意回答，入样机会通常未知。'],
      ['一项估计长期平均正确，每一次都一定正确吗？', '不一定。无偏谈的是重复抽样的平均；单次估计仍会随机偏离真值。'],
      ['95% 置信区间中的 95% 描述谁？', '描述反复抽样构造区间时的长期覆盖率。总体参数在一次调查中是固定的。'],
      ['人人把单程误填成往返，样本翻倍会怎样？', '随机波动可能变小，但测量偏差不会自动消失。']
    ]
  },
  ch2: {
    question: '等机会抽样为什么能估总体均值？误差又从哪里来？',
    fromPrevious: '上一章区分了总体、样本和抽样误差。这一章给它们一个具体的随机抽取规则，并推导估计值与标准误。',
    scene: '想象一个只有 5 人的总体，你每次不放回抽 2 人。每次抽到的均值可能不同，但抽取规则相同。我们先弄清哪些样本可能出现，再把这些均值合起来看。',
    thread: [
      '给这 5 个人标号 1～5。每次抽 2 人、不计顺序，共有 C(5,2)=10 组。若每组机会都是 1/10，就满足 SRS。某个指定的人会出现在 4 组里，所以他入样的机会是 4/10=2/5。',
      '设 5 人的数值是 2、4、6、8、10，总体均值为 6。抽中谁由指示量表示，每个人的入样概率都是 2/5。把样本均值的表达式按入样概率取平均，结果仍是 6，正好对准总体均值。完整推导见下面两行公式。',
      '这 5 个数的总体方差 S²=10。若 n=2，则 f=2/5，Var(ȳ)=(1−2/5)×10/2=3。它不是说每次估计都错 3；方差是全部可能样本均值围绕 6 的平均平方偏差。',
      '实际抽到 4 和 8 时，ȳ=6，样本方差 s²=8，估计方差 v(ȳ)=(1−2/5)×8/2=2.4，估计标准误约 1.55。理论的 3 用了总体 S²；调查时通常只能拿到样本给出的 2.4。',
      '若改成有放回，第二次仍可能抽到第一次的人，样本中获得的新信息更少。不放回时抽样比例越大，1−f 越小；如果 n=N，所有人都看到了，抽样方差归零。'
    ],
    bridges: [
      '从抽样机制出发，先把“简单随机”翻译成每个可能样本的概率。',
      '知道每个单位的入样机会后，可以推导样本均值长期是否对准总体均值。',
      '无偏只回答中心是否正确；下一步要衡量每次估计会散开多远。',
      '总体方差通常未知，所以要把理论公式改写成实际样本可计算的标准误。',
      '最后比较有放回和不放回，理解有限总体修正的来源。'
    ],
    pauses: [
      ['N=5、n=2 时，一个指定单位的入样概率是多少？', '是 n/N=2/5。它会出现在多个大小为 2 的可能样本中。'],
      ['无偏是否表示这次抽到的均值一定等于总体均值？', '不是。它表示按同一设计重复抽样时，估计值的平均等于真值。'],
      ['当 n 接近 N，方差式中的 1−f 会怎样？', '接近 0。因为几乎看完总体，未观察部分带来的不确定性越来越小。'],
      ['把均值乘 N 估总量，标准误应如何变？', '标准误也乘 N；方差乘 N²。'],
      ['N 很大、n 很小，为什么常忽略有限总体修正？', '此时 f=n/N 接近 0，1−f 接近 1，对结果影响很小。']
    ]
  },
  ch3: {
    question: '“有或没有”这样的类别数据，怎样估比例和人数？',
    fromPrevious: '上一章用样本均值估连续数值。本章把“是否属于某类”记为 0/1，于是比例就成了同一个均值问题。',
    scene: '抽 200 个地址，发现 38 个错误。38 是样本中看到的数量；你真正想报告的是全部 3,042 个地址中大约有多少错误，以及这个推断会有多大波动。',
    thread: [
      '给每个地址记一个数：错误记 1，正确记 0。样本里 38 个 1、162 个 0，总和是 38，均值自然是 38/200=0.19。上一章的均值公式现在就能用于比例。',
      'p=0.19 首先描述样本；用它估总体比例 P 后，才能乘总体地址数 N=3,042，得到错误地址约 578 个。若题目问“错误率”，报 19%；若问“有多少个”，报约 578 个。',
      '样本比例的估计方差约为 (1−200/3042)×0.19×0.81/199≈0.000723，标准误约 0.0269。这是比例尺度的波动；乘 3,042 后，人数估计的标准误约 81.8 个。',
      '本例两类都出现几十次，用正态近似有一定依据；若样本只发现 1 个错误，分布会更偏斜。此时“估计值±1.96×标准误”可能表现不好，需按讲义要求选区间方法。',
      '若同时把地址分成“正确”“格式错误”“无法投递”等互斥类别，每类都可单独编码成 0/1。但这些比例相加必须为 1；如果还按地区分别报告，就要留意各地区的样本量。'
    ],
    bridges: [
      '先把类别写成 0 和 1。这样比例问题就能接上上一章的均值理论。',
      '既然比例就是 0/1 均值，先用样本比例估总体比例，再推总体人数。',
      '点估计给出中心；下一步用上一章方差式量化它的抽样波动。',
      '有了标准误，也要检查正态近似是否适合当前频数。',
      '一个类别处理清楚后，再看多类别或子总体如何扩展。'
    ],
    pauses: [
      ['38/200 在计算的第一刻表示什么？', '它是样本比例 p=0.19，并用来估计总体比例 P。'],
      ['要估全部 3,042 个地址中错误的数量，应再做什么？', '将样本比例乘总体规模：Â=Np。'],
      ['人数估计的标准误，是比例标准误乘多少？', '乘 N；若求方差则乘 N²。'],
      ['样本里某类别只出现 1 次，直接套正态区间稳妥吗？', '不稳妥。类别频数太低时分布可能偏斜，应按课程指定方法处理。'],
      ['多类别比例相加为什么受约束？', '每个单位只属于一个互斥类别时，所有类别比例之和为 1。']
    ]
  },
  ch4: {
    question: '要把误差控制在规定范围，至少需要抽多少？',
    fromPrevious: '前两章已经会计算均值或比例的标准误。本章把标准误公式倒过来用，根据目标精度求样本量。',
    scene: '准备估计一座岛上某种血型的比例。老师要求 95% 置信、误差不超过 5 个百分点。你还没调查，真实比例未知；这时样本量必须从精度目标反推。',
    thread: [
      '这里“95%”决定临界值约 1.96，“5 个百分点”决定 d=0.05。两者作用不同：前者决定区间要多有把握，后者决定区间半宽有多窄。题目若只说“尽量准确”，还不能解出唯一 n。',
      '先把岛想成很大。比例标准误近似 √(PQ/n)，要求 1.96√(PQ/n)≤0.05。平方并移项，得到 n≥1.96²PQ/0.05²。若先用 P=Q=0.5，n₀=384.16。',
      '岛上只有 N=3,200 人，不放回抽样的方差还要乘 1−n/N。将前一步的 n₀ 放进修正式，得约 343.08。若要严格满足事先写下的精度界，整数样本量向上取 344。',
      '为什么刚才取 0.5？因为 P(1−P) 在 P=0.5 达到 0.25。若真实 P 更接近 0 或 1，比例数据更少变化，所需样本可能更少；未知时用 0.5 能防止规划过小。',
      '若改成估平均通勤时间，须先知道或估计 S²，再用 t²S²/d²。若还要分年龄段报告，光满足全岛比例的 n 未必够：每个重要子群也需要可用的样本量。'
    ],
    bridges: [
      '先把“希望够准”拆成置信水平和允许误差界，公式才有输入。',
      '从比例标准误出发，反解大总体下所需的样本量。',
      '若总体只有几千人，已经抽到的单位会减少未知部分，需要有限总体修正。',
      '规划时不知道 P，就看哪一个 P 会给出最大的方差。',
      '最后把方法扩展到均值、相对误差和多个调查指标。'
    ],
    pauses: [
      ['“误差不超过 5 个百分点”应把 d 写成 5 还是 0.05？', '写成 0.05，因为比例公式使用 0 到 1 的尺度。'],
      ['允许误差 d 减半，忽略有限总体修正时 n 大约怎样变？', '约增到 4 倍，因为 n 与 1/d² 成正比。'],
      ['有限总体修正后的 n 通常大于还是小于 n₀？', '小于或等于 n₀；N 越大，修正越不明显。'],
      ['P 未知时取 0.5 为什么偏保守？', '因为 P(1−P) 在 0.5 时最大，给出较大的规划样本量。'],
      ['多个指标分别算出不同 n，应只取最小值吗？', '通常不能。要保证关键指标的精度，并结合预算、成本及各层最低样本需求。']
    ]
  },
  ch5: {
    question: '总体由不同群体组成时，怎样既保证每类入样，又还原总体？',
    fromPrevious: '前面以简单随机抽样为基准。现在总体有不同群体，先在各层内部沿用简单随机抽样，再按层规模合并。',
    scene: '一项家庭调查中，农村家庭是城市家庭的两倍。即使两类各抽 10 户，总体平均也不能把两个层平均数各占一半。先分层抽样，再按总体结构合并。',
    thread: [
      '把 750 户分成城市 250 户、农村 500 户。先检查两张名单是否有重复、是否漏户，再在每张名单里分别随机抽样。这样每层的样本均值才有明确对应的层总体。',
      '两层各抽 10 户，得到城市平均 3.2 人、农村平均 4.0 人。总体权重由 250/750 与 500/750 决定，估计为 (1/3)×3.2+(2/3)×4.0≈3.73。各抽 10 户不表示各占总体一半。',
      '若城市层的均值估计方差为 v₁，农村为 v₂，则总体均值方差为 (1/3)²v₁+(2/3)²v₂。权重平方出现，是因为每层估计值先乘权重，再计算它的方差。',
      '设城市和农村平均人数差别大。如果直接从 750 户抽一个小样本，有时城市户偏多、有时农村户偏多；分层先固定每层抽多少，就控制了这种构成波动。层内越相似，通常越有帮助。',
      '若总共计划抽 30 户，比例分配是城市 10、农村 20。若农村层内变化更大，Neyman 分配还会给农村更多名额；但最后计算总体均值时，权重仍是 1/3 与 2/3。'
    ],
    bridges: [
      '设计的第一步不是算权重，而是确认层能把总体完整且不重叠地分开。',
      '每层估好以后，按各层在总体中的真实份额还原总体均值。',
      '点估计有了，再把每层抽样波动按权重合并。',
      '理解方差后，才能判断分层什么时候会提高精度。',
      '最后决定固定总样本量如何分给各层，这与最终加权是两件事。'
    ],
    pauses: [
      ['同一户同时属于两层，会违反什么要求？', '层必须互不重叠，每个总体单位恰好属于一层。'],
      ['两层各抽 10 户，最终总体权重就各为 1/2 吗？', '不是。权重来自总体规模 Nₕ/N，不来自样本量。'],
      ['合并层均值方差时，为什么出现 Wₕ²？', '因为 Var(Wₕȳₕ)=Wₕ²Var(ȳₕ)，独立层的方差再相加。'],
      ['层内很相似、层间差异大，分层可能带来什么？', '层内方差较小，按层估计并合并通常能降低总体估计的抽样波动。'],
      ['Neyman 分配为何给高变异层更多样本？', '这些层每增加一个观测，通常更能压低总体估计的方差。']
    ]
  },
  ch5a: {
    question: '层权重弄错后，样本再大能救回来吗？',
    fromPrevious: '上一章用真实层权重合并层均值。这一章检查权重估错、样本分配偏离时，估计会受到什么影响。',
    scene: '城乡层的真实权重是 1/3 与 2/3，你却都用了 1/2。每层样本均值也许算得非常稳定，但总体结果会稳定地偏低。这里要分清抽样波动与权重偏差。',
    thread: [
      '沿用城乡例题：正确中心是 (1/3)×3.2+(2/3)×4.0≈3.733；错误地各给一半，中心变为 3.6。两者相差约 −0.133。这不是偶然抽样造成的，而是权重把总体结构改写了。',
      '若两层真实均值碰巧都等于 4，任意两项加起来为 1 的权重都会得到 4。这个特殊情况说明偏差取决于“权重错了多少”与“层均值差了多少”共同作用。',
      '假设每层样本不断增加，3.2 和 4.0 会估得越来越稳定。错误加权仍把中心锁在 3.6；方差下降后，MSE 还留有约 0.133² 的偏差平方。因此先核对权重比一味加人更关键。',
      '即使权重正确，样本在两层怎么分也影响方差。把实际 n₁、n₂ 和候选 Neyman 分配分别代入 ΣWₕ²Sₕ²/nₕ，就能看到哪种分配使总体估计更稳。',
      '若还要同时估计收入和就业，层内方差排序可能不同。先写清主要指标、每层最低样本和预算，再比较折中方案；分层边界也应服务于这些目标。'
    ],
    bridges: [
      '从上一章的加权均值出发，把真实权重换成错误权重，观察期望落在哪里。',
      '再看哪些特殊情形下，错误权重恰好不影响结果。',
      '有了偏差公式，就能解释为什么单纯增加 n 不一定解决问题。',
      '权重正确后，还要检查每层分配偏离最优时损失多少精度。',
      '最后面对多指标和分层边界，做有目标的折中。'
    ],
    pauses: [
      ['错误权重固定时，每层均值越准，总体会趋近什么？', '趋近按错误权重加总的层均值，未必是真实总体均值。'],
      ['所有层均值完全相同，权重错误一定带来偏差吗？', '若权重仍加总为 1，不会；各层均值相同时加权结果相同。'],
      ['样本量不断增加，MSE 的哪一部分可能仍留下？', '固定权重错误造成的偏差平方。'],
      ['如何比较实际分配与 Neyman 分配？', '把两套 nₕ 分别代入同一个方差式，再比较所得方差。'],
      ['收入与就业两个指标对应不同最佳分配时怎么办？', '明确关键指标和最低层样本要求，再比较折中方案。']
    ]
  },
  ch6: {
    question: '有一项已知的辅助总量，怎样借它提高估计？',
    fromPrevious: '前面从抽样规则和分层结构提高估计质量。这一章加入另一类信息：已知的辅助变量总体总量。',
    scene: '今年全体公司的利润总额还不知道，但去年的总额有完整记录。样本里的每家公司都有去年的 x 与今年的 y。若两年利润大体同比例变化，就可以用样本比率放大到总体。',
    thread: [
      '这题中 x 是去年利润、y 是今年利润。去年的总体总额 X=86,436 已知，今年的 Y 未知。抽中的 12 家公司必须同时有 x 和 y，才能观察它们之间的关系。',
      '样本里去年利润合计 16,352，今年合计 18,459，所以 r=18,459/16,352≈1.1289。把这个“样本同比倍数”乘已知总体去年利润，得到今年总体利润估计约 97,574。',
      '若大公司通常今年也赚得多，单靠样本今年均值扩张可能受“这次抽到几家大公司”影响。比率法用去年利润把这类规模差异作调整；能否减少波动，要看样本中 y≈Rx 是否贴得紧。',
      '对每家构造残差 eᵢ=yᵢ−R xᵢ。若所有残差接近 0，表示同一比率能较好解释各公司的今年利润；线性化近似后，比率估计方差主要由这些残差的离散程度决定。',
      '若公司按行业分层，各行业的今年/去年倍数可能不同。此时可以每层估自己的比率再加总，也可以估一个总比率；先检查层间关系和每层样本量，再选方法。'
    ],
    bridges: [
      '先辨清目标变量 y、辅助变量 x，以及总体已知的 X。',
      '有了成对数据，算样本比率，再乘总体辅助总量。',
      '比率法是否值得用，取决于 x 能否解释 y 的变化。',
      '要报告精度，就把比率估计近似变成残差均值的方差问题。',
      '最后看分层时为何可能用一个总比率，也可能分别算层比率。'
    ],
    pauses: [
      ['只知道样本里的 x，没有总体 X，能直接算 Ŷᴿ=Xr 吗？', '不能。这个比率估计需要已知的总体辅助总量或均值。'],
      ['r=Σy/Σx 的分子和分母来自哪里？', '来自同一批抽样单位中成对观测到的 y 与 x。'],
      ['x 与 y 没有稳定关系，比率法一定更精确吗？', '不一定。校正未必能缩小残差方差，还可能变差。'],
      ['为什么比率估计的方差常写成“近似”？', '随机分子除以随机分母是非线性形式，通常用大样本线性化近似。'],
      ['各层真实比率差异很大，单一总比率可能有什么问题？', '它可能掩盖层间结构；可考虑分别估各层比率再合并。']
    ]
  }
};

const coursePage = document.getElementById('coursePage');
const homePage = document.getElementById('home');
const siteFooter = document.querySelector('.footer');
let currentCourse = null;
let selectedCourseOption = null;

function lessonUrl(id, step) { return `#learn/${id}/${step}`; }
function readingParagraphs(copy) {
  const sentences = copy.split('。').map(x => x.trim()).filter(Boolean);
  const groups = [];
  for (let i = 0; i < sentences.length; i += 2) groups.push(`<p>${renderInlineMath(sentences.slice(i, i + 2).join('。') + '。')}</p>`);
  return groups.join('');
}
function headingFor(step, deep) {
  if (step === 0) return '先弄清这一章要解决什么';
  if (step <= deep.steps.length) return deep.steps[step - 1].title.replace(/^第[一二三四五六七八九十]+步：/, '');
  if (step === 6) return '跟着例题走完整个过程';
  return '自己判断，再回看这一章';
}
function renderCourseBody(item, step) {
  const deep = deepDives[item.id], lesson = lectures[item.id], guide = guides[item.id];
  if (step === 0) return `<div class="course-eyebrow">进入问题</div><h2>先弄清这一章要解决什么</h2><p class="course-connection">${guide.fromPrevious}</p><p class="course-question">${guide.question}</p><div class="course-scene"><span>从这个情境出发</span><p>${guide.scene}</p></div><p class="course-intro">${deep.intro}</p><div class="course-goals"><h3>学完后，你应该能自己说明</h3><ol>${lesson.recap.map(x => `<li>${renderInlineMath(x)}</li>`).join('')}</ol></div><p class="course-forward">下面按顺序学习。每一步都接着前一步展开，遇到公式先看它解决什么问题，再看怎么算。</p>`;
  if (step <= 5) {
    const part = deep.steps[step - 1], pause = guide.pauses[step - 1];
    return `<div class="course-eyebrow">理解 · 第 ${step} 步</div><h2>${part.title}</h2><p class="course-bridge">${guide.bridges[step - 1]}</p><div class="course-prose">${readingParagraphs(part.text)}</div><div class="course-thread"><span>接回本章的同一个问题</span><p>${renderInlineMath(guide.thread[step - 1])}</p></div>${renderMathRows(courseMath[item.id] && courseMath[item.id][step])}<details class="course-think"><summary>停一下：${pause[0]} <span>展开讲解 ↗</span></summary><p>${renderInlineMath(pause[1])}</p></details><div class="course-next-hint">${step < 5 ? `下一步：${headingFor(step + 1, deep)}` : '接下来把这些概念用在完整例题里。'}</div>`;
  }
  if (step === 6) return `<div class="course-eyebrow">应用 · 完整例题</div><h2>${deep.worked.title}</h2><p class="course-bridge">前面五步已经给出判断和公式。现在按题意、已知量、计算、解释的顺序做一遍；每一步都说明它在解决什么。</p><ol class="course-worked">${deep.worked.steps.map((x, i) => `<li><span>步骤 ${String(i + 1).padStart(2, '0')}</span><div><p>${renderInlineMath((workedNarratives[item.id] || deep.worked.steps)[i])}</p>${renderWorkedMath(workedMath[item.id] && workedMath[item.id][i])}</div></li>`).join('')}</ol><div class="course-conclusion"><strong>所以这题要记住</strong><p>${renderInlineMath(deep.worked.result)}</p></div><div class="course-traps"><h3>做题时避开这些错法</h3><ul>${deep.pitfalls.map(x => `<li>${renderInlineMath(x)}</li>`).join('')}</ul></div>`;
  return `<div class="course-eyebrow">检验 · 自己作答</div><h2>合上讲解，你能答出来吗？</h2><p class="course-bridge">先自己选答案，再看解析。答完后试着不用看上面的内容，说出为什么。</p><div class="course-practice"><h3>${lesson.question}</h3><div class="course-options">${lesson.options.map((x, i) => `<button type="button" data-course-option="${i}">${String.fromCharCode(65 + i)}　${x}</button>`).join('')}</div><button type="button" class="button button-dark" data-course-check>看答案与原因 <span>↗</span></button><p class="course-feedback" aria-live="polite"></p></div><div class="course-recap"><h3>最后，用自己的话复述</h3><ol>${lesson.recap.map(x => `<li>${renderInlineMath(x)}</li>`).join('')}</ol></div>`;
}
function renderCourse(index, step) {
  const item = lessons[index], deep = deepDives[item.id], guide = guides[item.id];
  const last = deep.steps.length + 2;
  step = Math.max(0, Math.min(last, step));
  currentCourse = { index, step, item };
  selectedCourseOption = null;
  state[`seen_${item.id}`] = Math.max(Number(state[`seen_${item.id}`]) || 0, step);
  save();
  const labels = ['先看问题', ...deep.steps.map(x => x.title.replace(/^第[一二三四五六七八九十]+步：/, '')), '完整例题', '练习与复述'];
  coursePage.innerHTML = `<div class="course-crumb"><a href="#roadmap">← 返回学习路径</a><span>第 ${item.no} 章 / ${item.stage}</span></div><header class="course-masthead"><div><span class="section-kicker">CHAPTER ${item.no} · GUIDED STUDY</span><h1>${item.title}</h1><p>${guide.question}</p></div><span class="course-step-count">${String(step + 1).padStart(2, '0')} / ${String(last + 1).padStart(2, '0')}</span></header><div class="course-track"><span style="width:${(step + 1) / (last + 1) * 100}%"></span></div><div class="course-layout"><aside class="course-sidebar"><div class="course-side-title">本章学习顺序</div><nav aria-label="本章学习步骤">${labels.map((x, i) => `<a href="${lessonUrl(item.id, i)}" class="${i === step ? 'active' : ''} ${i <= state[`seen_${item.id}`] ? 'seen' : ''}" ${i === step ? 'aria-current="step"' : ''}><span>${String(i + 1).padStart(2, '0')}</span>${x}</a>`).join('')}</nav><div class="course-source"><span>需要时再对照原讲义</span><a href="materials/${item.file}" target="_blank" rel="noopener">第 ${item.no} 章 PDF ↗</a></div></aside><article class="course-article">${renderCourseBody(item, step)}<div class="course-controls">${step > 0 ? `<a class="button button-quiet" href="${lessonUrl(item.id, step - 1)}">← 回看上一步</a>` : '<a class="button button-quiet" href="#roadmap">← 学习路径</a>'}${step < last ? `<a class="button button-dark" href="${lessonUrl(item.id, step + 1)}">继续：${headingFor(step + 1, deep)} <span>→</span></a>` : `<button type="button" class="button button-dark" data-course-complete ${state[`practice_${item.id}`] ? '' : 'disabled'}>${state[item.id] ? '已完成本章 ✓' : '完成本章 ✓'}</button>`}</div>${step === last ? `<div class="course-after">${index < lessons.length - 1 ? `<a href="${lessonUrl(lessons[index + 1].id, 0)}">进入下一章：${lessons[index + 1].title} →</a>` : '<a href="#review">进入综合自测 →</a>'}</div>` : ''}</article></div>`;
  document.title = `${item.title} · 抽样课程`;
  window.scrollTo(0, 0);
}
function routeCourse() {
  const match = /^#learn\/(ch1|ch2|ch3|ch4|ch5|ch5a|ch6)(?:\/(\d+))?$/.exec(location.hash);
  if (!match) {
    homePage.hidden = false;
    coursePage.hidden = true;
    siteFooter.hidden = false;
    document.title = '抽样课程 · 学习与备考';
    currentCourse = null;
    return;
  }
  const index = lessons.findIndex(x => x.id === match[1]);
  homePage.hidden = true;
  coursePage.hidden = false;
  siteFooter.hidden = true;
  renderCourse(index, Number(match[2] || 0));
}
coursePage.addEventListener('click', event => {
  if (!currentCourse) return;
  const option = event.target.closest('[data-course-option]');
  if (option) {
    selectedCourseOption = Number(option.dataset.courseOption);
    coursePage.querySelectorAll('[data-course-option]').forEach(x => x.classList.toggle('selected', Number(x.dataset.courseOption) === selectedCourseOption));
    return;
  }
  if (event.target.closest('[data-course-check]')) {
    const { item } = currentCourse, lesson = lectures[item.id], feedback = coursePage.querySelector('.course-feedback');
    if (selectedCourseOption === null) { feedback.textContent = '先选一个答案，再看解析。'; return; }
    coursePage.querySelectorAll('[data-course-option]').forEach(x => {
      const value = Number(x.dataset.courseOption);
      x.classList.toggle('correct', value === lesson.answer);
      x.classList.toggle('incorrect', value === selectedCourseOption && value !== lesson.answer);
    });
    feedback.textContent = `${selectedCourseOption === lesson.answer ? '答对了。' : '再看一遍关键区别。'}${lesson.explanation}`;
    state[`practice_${item.id}`] = true;
    save();
    coursePage.querySelector('[data-course-complete]').disabled = false;
    return;
  }
  if (event.target.closest('[data-course-complete]')) {
    const { item } = currentCourse;
    state[item.id] = true;
    save();
    const box = document.querySelector(`[data-lesson="${item.id}"]`);
    if (box) box.checked = true;
    const card = document.querySelector(`[data-card="${item.id}"]`);
    if (card) card.classList.add('completed');
    updateProgress();
    coursePage.querySelector('[data-course-complete]').textContent = '已完成本章 ✓';
  }
});
window.addEventListener('hashchange', routeCourse);
routeCourse();
