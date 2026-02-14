export const OFFICE_INFO = {
  name: "법률사무소 중평",
  nameEn: "JUNGPYEONG LAW OFFICE",
  subtitle: "개인회생 전문",
  phone: "062-222-6082",
  fax: "062-222-6090",
  email: "gisdksel@daum.net",
  address: "광주광역시 동구 지산로63번길 2, 202호",
  addressShort: "광주 동구 지산로63번길 2",
  hours: "평일 09시~18시 (토·일·공휴일 휴무)",
  attorney: "김치영",
  businessNumber: "547-28-00992",
} as const;

export const NAV_ITEMS = [
  { label: "업무분야", href: "#hero" },
  { label: "성공사례", href: "#cases" },
  { label: "의뢰인후기", href: "#reviews" },
  { label: "사무소소개", href: "#about" },
] as const;

export const SERVICES = [
  {
    id: "personal-recovery",
    title: "개인회생",
    subtitle: "Personal Recovery",
    description:
      "정기적인 소득이 있으나 과도한 채무로 어려움을 겪는 분들을 위한 법적 절차입니다. 법원의 인가를 받아 3~5년간 변제 후 잔여 채무를 면책받을 수 있습니다.",
    features: [
      "월 소득이 있는 분 대상",
      "채무 최대 90%까지 감면",
      "3~5년 변제 계획 수립",
      "강제집행 즉시 중지",
    ],
  },
  {
    id: "personal-bankruptcy",
    title: "개인파산",
    subtitle: "Personal Bankruptcy",
    description:
      "소득이 없거나 채무 변제 능력이 전혀 없는 분들을 위한 법적 절차입니다. 파산 선고 후 면책 결정을 받으면 모든 채무에서 벗어날 수 있습니다.",
    features: [
      "변제 능력이 없는 분 대상",
      "모든 채무 면책 가능",
      "면책 후 새출발 가능",
      "재산 일부 보전 가능",
    ],
  },
  {
    id: "debt-adjustment",
    title: "채무조정·면책",
    subtitle: "Debt Adjustment",
    description:
      "채무 규모와 상황에 따라 최적의 해결 방안을 설계합니다. 개인워크아웃, 채무조정, 신용회복 등 다양한 제도를 활용하여 맞춤형 솔루션을 제공합니다.",
    features: [
      "상황별 맞춤 솔루션",
      "이자 감면 협상",
      "변제기간 연장 조정",
      "신용회복 지원",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "무료상담",
    description: "전화 또는 방문 상담을 통해 현재 상황을 파악하고 최적의 방향을 안내합니다.",
    duration: "당일",
  },
  {
    step: 2,
    title: "서류준비",
    description: "신청에 필요한 서류를 안내하고 작성을 도와드립니다.",
    duration: "1~2주",
  },
  {
    step: 3,
    title: "법원접수",
    description: "준비된 서류를 법원에 접수하고 절차를 개시합니다.",
    duration: "접수 즉시",
  },
  {
    step: 4,
    title: "개시결정",
    description: "법원의 개시결정으로 채권추심과 강제집행이 중지됩니다.",
    duration: "1~2개월",
  },
  {
    step: 5,
    title: "변제계획",
    description: "법원이 인가한 변제계획에 따라 정해진 금액을 납부합니다.",
    duration: "3~5년",
  },
  {
    step: 6,
    title: "면책결정",
    description: "변제계획을 성실히 이행하면 잔여 채무가 면책됩니다.",
    duration: "완료",
  },
] as const;

export const CASES = [
  {
    id: 1,
    type: "개인회생",
    typeColor: "blue",
    debtBefore: "1억 2,000만원",
    result: "월 35만원 변제",
    description:
      "카드빚과 대출이 누적된 30대 직장인. 개인회생 신청을 통해 월 변제금을 대폭 줄이고 안정적인 생활을 되찾았습니다.",
    highlight: "채무 70% 감면",
  },
  {
    id: 2,
    type: "개인파산",
    typeColor: "emerald",
    debtBefore: "3억원",
    result: "면책 결정",
    description:
      "사업 실패 후 거액의 채무를 안고 있던 50대 자영업자. 개인파산 및 면책 결정을 통해 새로운 출발을 할 수 있었습니다.",
    highlight: "전액 면책",
  },
  {
    id: 3,
    type: "개인회생",
    typeColor: "blue",
    debtBefore: "8,000만원",
    result: "월 28만원 변제",
    description:
      "다중채무로 어려움을 겪던 40대 가장. 개인회생을 통해 가정 경제를 정상화하고 평온한 일상을 회복했습니다.",
    highlight: "채무 65% 감면",
  },
  {
    id: 4,
    type: "채무조정",
    typeColor: "amber",
    debtBefore: "5,500만원",
    result: "이자 전액 감면",
    description:
      "고금리 대출이 겹쳐 이자만 내던 20대 직장인. 채무조정을 통해 원금만 분할 상환하게 되었습니다.",
    highlight: "이자 100% 감면",
  },
  {
    id: 5,
    type: "개인파산",
    typeColor: "emerald",
    debtBefore: "2억 5,000만원",
    result: "면책 결정",
    description:
      "보증채무로 인해 갑작스럽게 큰 빚을 지게 된 60대. 개인파산을 통해 노후를 지킬 수 있었습니다.",
    highlight: "전액 면책",
  },
  {
    id: 6,
    type: "개인회생",
    typeColor: "blue",
    debtBefore: "1억 5,000만원",
    result: "월 42만원 변제",
    description:
      "생활비 대출이 누적된 맞벌이 부부. 개인회생으로 가계 부채를 정리하고 저축을 시작할 수 있었습니다.",
    highlight: "채무 72% 감면",
  },
] as const;

export const ATTORNEY = {
  name: "김치영",
  title: "대표 변호사",
  quote: "당신의 일상을 되찾아드리겠습니다.",
  credentials: [
    { label: "경력", value: "대법원 국선변호사", en: "Supreme Court Public Defender" },
    { label: "경력", value: "전남지방노동위원회 권리구제 대리인", en: "Labor Rights Representative" },
    { label: "자문", value: "광주문화재단 고문변호사", en: "Cultural Foundation Counsel" },
    { label: "자문", value: "다수 기관·기업 자문변호사", en: "Institutional & Corporate Advisor" },
    { label: "수상", value: "문화체육부장관 표창", en: "Minister's Commendation" },
    { label: "수상", value: "광주광역시장 표창", en: "Mayor's Commendation" },
  ],
  specialties: ["개인회생", "개인파산", "채무조정", "면책", "신용회복"],
} as const;

export const REVIEWS = [
  {
    id: 1,
    text: "처음 상담받을 때 너무 막막했는데, 김 변호사님이 차분하게 설명해주시고 절차를 하나하나 도와주셨습니다. 개인회생이 승인되어 이제 희망이 생겼습니다.",
    name: "김○○",
    type: "개인회생",
    rating: 5,
  },
  {
    id: 2,
    text: "사업 실패로 3억이 넘는 빚을 지고 있었는데, 파산 면책을 받을 수 있었습니다. 정말 감사합니다. 새 출발할 수 있게 되었습니다.",
    name: "이○○",
    type: "개인파산",
    rating: 5,
  },
  {
    id: 3,
    text: "여러 곳에 상담을 받아봤는데, 중평 법률사무소가 가장 진심으로 도와주신다고 느꼈습니다. 비용도 합리적이고 결과도 만족스럽습니다.",
    name: "박○○",
    type: "개인회생",
    rating: 5,
  },
  {
    id: 4,
    text: "보증채무로 갑자기 큰 빚을 지게 되어 막막했는데, 변호사님께서 파산 절차를 빠르게 진행해주셔서 면책 결정을 받을 수 있었습니다.",
    name: "최○○",
    type: "개인파산",
    rating: 5,
  },
  {
    id: 5,
    text: "상담부터 면책까지 2년 가까이 함께했는데, 한결같이 친절하게 대해주셨습니다. 이제 빚 걱정 없이 살 수 있어서 감사합니다.",
    name: "정○○",
    type: "채무조정",
    rating: 5,
  },
] as const;

export const FAQ_DATA = [
  {
    question: "개인회생과 개인파산의 차이점은 무엇인가요?",
    answer:
      "개인회생은 정기적인 소득이 있는 분이 법원의 허가를 받아 3~5년간 일정 금액을 변제한 뒤 나머지 채무를 면제받는 제도입니다. 개인파산은 소득이 없거나 변제 능력이 전혀 없는 분이 법원의 파산 선고와 면책 결정을 받아 모든 채무에서 벗어나는 제도입니다.",
  },
  {
    question: "개인회생 신청 자격은 어떻게 되나요?",
    answer:
      "급여소득자는 담보채무 10억원, 무담보채무 5억원 이하, 영업소득자는 담보채무 10억원, 무담보채무 5억원 이하인 경우 신청이 가능합니다. 정기적이고 확실한 소득이 있어야 합니다.",
  },
  {
    question: "비용은 얼마나 드나요?",
    answer:
      "법원 납부 비용과 변호사 보수로 구성됩니다. 정확한 비용은 채무 규모와 상황에 따라 달라지므로, 무료 상담을 통해 안내해 드립니다. 분할 납부도 가능합니다.",
  },
  {
    question: "개인회생을 하면 직장에 알려지나요?",
    answer:
      "원칙적으로 직장에 통보되지 않습니다. 다만 급여에서 직접 변제금을 공제하는 방식을 선택할 경우에는 회사에 알려질 수 있으므로, 상담 시 적절한 방법을 함께 논의합니다.",
  },
  {
    question: "신청 후 채권추심이 중단되나요?",
    answer:
      "네, 법원의 개시결정이 나면 채권자의 채권추심과 강제집행이 즉시 중지됩니다. 이후 안정적으로 변제 계획을 이행할 수 있습니다.",
  },
] as const;
