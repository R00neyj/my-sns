export type Post = {
  id: number
  author: string
  content: string
  images: string[]
  created_at: string
}

// 최신 글이 1번. created_at 은 아래로 갈수록 과거
export const samplePosts: Post[] = [
  {
    id: 1,
    author: '소금빵러버',
    content: '망원동 골목 끝 작은 빵집. 소금빵 나오는 아침 8시에 맞춰 갔더니 아직 따끈했어요.',
    images: [
      'https://picsum.photos/seed/saltbread1/600/600',
      'https://picsum.photos/seed/saltbread2/600/600',
      'https://picsum.photos/seed/saltbread3/600/600',
    ],
    created_at: '2026-10-10T08:20:00+09:00',
  },
  {
    id: 2,
    author: '아침식빵',
    content: '출근길 단골집 우유식빵. 결대로 찢어 먹는 게 제일 맛있어요.',
    images: ['https://picsum.photos/seed/milkbread1/600/600'],
    created_at: '2026-10-09T19:45:00+09:00',
  },
  {
    id: 3,
    author: '빵지도그리는사람',
    content: '새로 생긴 바게트 전문점. 겉은 바삭, 속은 쫀득. 반 개만 사려다 두 개 샀습니다.',
    images: [
      'https://picsum.photos/seed/baguette1/600/600',
      'https://picsum.photos/seed/baguette2/600/600',
    ],
    created_at: '2026-10-09T12:10:00+09:00',
  },
  {
    id: 4,
    author: '크루아상수집가',
    content:
      '이번 주말엔 동네 빵집 네 곳의 크루아상을 비교해 봤어요.\n' +
      '첫 번째 집은 버터 향이 진하고 겹이 아주 얇았고, 두 번째 집은 조금 더 묵직하고 고소했어요. ' +
      '세 번째 집은 아몬드 크루아상이 유명한데 시럽이 넉넉해서 촉촉했고, 네 번째 집은 크기는 작지만 가격이 착했습니다.\n' +
      '개인적으로는 첫 번째 집이 제일이었어요. 다음엔 뺑오쇼콜라로 비교해 볼게요!',
    images: [
      'https://picsum.photos/seed/croissant1/600/600',
      'https://picsum.photos/seed/croissant2/600/600',
      'https://picsum.photos/seed/croissant3/600/600',
      'https://picsum.photos/seed/croissant4/600/600',
    ],
    created_at: '2026-10-08T21:30:00+09:00',
  },
  {
    id: 5,
    author: '단팥이좋아',
    content: '시장 입구 할머니 빵집 단팥빵. 팥이 꽉 차 있어서 한 개로도 든든해요.',
    images: ['https://picsum.photos/seed/anpan1/600/600'],
    created_at: '2026-10-08T15:05:00+09:00',
  },
  {
    id: 6,
    author: '소금빵러버',
    content: '비 오는 날엔 역시 갓 구운 소보로. 사장님이 하나 더 얹어 주셨어요.',
    images: [
      'https://picsum.photos/seed/soboro1/600/600',
      'https://picsum.photos/seed/soboro2/600/600',
    ],
    created_at: '2026-10-07T17:40:00+09:00',
  },
  {
    id: 7,
    author: '주말베이커리투어',
    content: '연남동 사워도우 빵집. 시큼한 맛이 강하지 않아서 처음 먹는 분께도 추천해요.',
    images: [
      'https://picsum.photos/seed/sourdough1/600/600',
      'https://picsum.photos/seed/sourdough2/600/600',
      'https://picsum.photos/seed/sourdough3/600/600',
    ],
    created_at: '2026-10-07T10:15:00+09:00',
  },
  {
    id: 8,
    author: '아침식빵',
    content: '오늘 아침은 베이글에 크림치즈. 동네 베이글집이 문을 일찍 열어서 고마워요.',
    images: ['https://picsum.photos/seed/bagel1/600/600'],
    created_at: '2026-10-06T08:30:00+09:00',
  },
  {
    id: 9,
    author: '빵지도그리는사람',
    content: '카눌레 맛집 발견! 바닐라, 얼그레이, 초코, 말차 네 가지 다 먹어봤어요. 얼그레이가 1등.',
    images: [
      'https://picsum.photos/seed/canele1/600/600',
      'https://picsum.photos/seed/canele2/600/600',
      'https://picsum.photos/seed/canele3/600/600',
      'https://picsum.photos/seed/canele4/600/600',
    ],
    created_at: '2026-10-05T16:50:00+09:00',
  },
  {
    id: 10,
    author: '스콘한입',
    content: '스콘은 반으로 갈라서 잼이랑 버터 듬뿍. 이 집 클로티드 크림은 따로 팔아요.',
    images: [
      'https://picsum.photos/seed/scone1/600/600',
      'https://picsum.photos/seed/scone2/600/600',
    ],
    created_at: '2026-10-05T11:20:00+09:00',
  },
  {
    id: 11,
    author: '단팥이좋아',
    content: '오래된 동네 빵집의 꽈배기. 설탕 묻은 손가락까지 맛있습니다.',
    images: ['https://picsum.photos/seed/twistdonut1/600/600'],
    created_at: '2026-10-04T18:00:00+09:00',
  },
  {
    id: 12,
    author: '크루아상수집가',
    content: '뺑오쇼콜라 비교 1탄. 초콜릿 막대가 두 줄 들어간 집이 확실히 만족도가 높아요.',
    images: [
      'https://picsum.photos/seed/painchocolat1/600/600',
      'https://picsum.photos/seed/painchocolat2/600/600',
      'https://picsum.photos/seed/painchocolat3/600/600',
    ],
    created_at: '2026-10-04T09:45:00+09:00',
  },
  {
    id: 13,
    author: '주말베이커리투어',
    content: '포카치아 위에 올리브랑 방울토마토가 가득. 점심으로 딱이었어요.',
    images: [
      'https://picsum.photos/seed/focaccia1/600/600',
      'https://picsum.photos/seed/focaccia2/600/600',
    ],
    created_at: '2026-10-03T13:10:00+09:00',
  },
  {
    id: 14,
    author: '빵순이일기',
    content:
      '이사 오고 나서 동네 빵집 지도를 만들기 시작했어요.\n' +
      '걸어서 10분 안에 빵집이 일곱 곳이나 있더라고요. 아침 일찍 여는 곳, 오후에 빵이 나오는 곳, 월요일에 쉬는 곳을 정리해 두니 산책 코스가 생겼습니다.\n' +
      '오늘은 그중 네 곳을 돌았는데, 모두 시그니처 빵이 달라서 비교하는 재미가 있었어요. 하나씩 따로 기록해 둘게요.',
    images: [
      'https://picsum.photos/seed/bakerymap1/600/600',
      'https://picsum.photos/seed/bakerymap2/600/600',
      'https://picsum.photos/seed/bakerymap3/600/600',
      'https://picsum.photos/seed/bakerymap4/600/600',
    ],
    created_at: '2026-10-02T20:25:00+09:00',
  },
  {
    id: 15,
    author: '스콘한입',
    content: '마들렌 한 봉지. 레몬 향이 은은해서 커피랑 잘 어울려요.',
    images: ['https://picsum.photos/seed/madeleine1/600/600'],
    created_at: '2026-10-02T15:35:00+09:00',
  },
  {
    id: 16,
    author: '소금빵러버',
    content: '휘낭시에 다섯 가지 맛 세트. 브라운버터 향이 진해서 하나씩 아껴 먹는 중이에요.',
    images: [
      'https://picsum.photos/seed/financier1/600/600',
      'https://picsum.photos/seed/financier2/600/600',
      'https://picsum.photos/seed/financier3/600/600',
    ],
    created_at: '2026-10-01T16:00:00+09:00',
  },
  {
    id: 17,
    author: '아침식빵',
    content: '에그타르트는 나오자마자 먹어야 해요. 가게 앞 벤치에서 바로 한 입.',
    images: [
      'https://picsum.photos/seed/eggtart1/600/600',
      'https://picsum.photos/seed/eggtart2/600/600',
    ],
    created_at: '2026-10-01T10:05:00+09:00',
  },
  {
    id: 18,
    author: '빵순이일기',
    content: '마늘빵 냄새에 끌려 들어간 집. 버터 마늘 소스가 바닥까지 배어 있어요.',
    images: ['https://picsum.photos/seed/garlicbread1/600/600'],
    created_at: '2026-09-30T18:40:00+09:00',
  },
  {
    id: 19,
    author: '주말베이커리투어',
    content: '치아바타 샌드위치 네 종류. 바질 페스토랑 모차렐라 조합이 제일 맛있었어요.',
    images: [
      'https://picsum.photos/seed/ciabatta1/600/600',
      'https://picsum.photos/seed/ciabatta2/600/600',
      'https://picsum.photos/seed/ciabatta3/600/600',
      'https://picsum.photos/seed/ciabatta4/600/600',
    ],
    created_at: '2026-09-29T12:30:00+09:00',
  },
  {
    id: 20,
    author: '단팥이좋아',
    content: '쌀로 만든 식빵이라 더 쫀득해요. 토스트하면 겉이 바삭해져서 또 다른 맛.',
    images: [
      'https://picsum.photos/seed/ricebread1/600/600',
      'https://picsum.photos/seed/ricebread2/600/600',
      'https://picsum.photos/seed/ricebread3/600/600',
    ],
    created_at: '2026-09-28T09:15:00+09:00',
  },
  {
    id: 21,
    author: '크루아상수집가',
    content: '퀸아망은 겉의 캐러멜 층이 생명. 이 집은 설탕이 바삭하게 잘 녹아 있어요.',
    images: [
      'https://picsum.photos/seed/kouignamann1/600/600',
      'https://picsum.photos/seed/kouignamann2/600/600',
    ],
    created_at: '2026-09-27T15:50:00+09:00',
  },
  {
    id: 22,
    author: '스콘한입',
    content: '시나몬롤 위 크림치즈 아이싱이 넉넉해요. 따뜻하게 데워 먹는 걸 추천.',
    images: ['https://picsum.photos/seed/cinnamonroll1/600/600'],
    created_at: '2026-09-26T17:20:00+09:00',
  },
  {
    id: 23,
    author: '빵지도그리는사람',
    content: '프레첼 전문점이 동네에 생겼어요. 버터 프레첼, 소금 프레첼, 크림치즈 프레첼까지.',
    images: [
      'https://picsum.photos/seed/pretzel1/600/600',
      'https://picsum.photos/seed/pretzel2/600/600',
      'https://picsum.photos/seed/pretzel3/600/600',
    ],
    created_at: '2026-09-25T13:00:00+09:00',
  },
  {
    id: 24,
    author: '빵순이일기',
    content: '추석 선물로 동네 빵집 카스텔라 세트. 상자 열자마자 달걀 향이 퍼졌어요.',
    images: [
      'https://picsum.photos/seed/castella1/600/600',
      'https://picsum.photos/seed/castella2/600/600',
      'https://picsum.photos/seed/castella3/600/600',
      'https://picsum.photos/seed/castella4/600/600',
    ],
    created_at: '2026-09-24T11:30:00+09:00',
  },
  {
    id: 25,
    author: '주말베이커리투어',
    content: '호밀빵은 얇게 썰어서 버터만 발라도 충분해요. 오래 씹을수록 고소해요.',
    images: [
      'https://picsum.photos/seed/ryebread1/600/600',
      'https://picsum.photos/seed/ryebread2/600/600',
    ],
    created_at: '2026-09-23T08:45:00+09:00',
  },
  {
    id: 26,
    author: '아침식빵',
    content: '동네 빵집 브리오슈. 달걀이랑 버터가 듬뿍이라 프렌치토스트용으로 샀어요.',
    images: ['https://picsum.photos/seed/brioche1/600/600'],
    created_at: '2026-09-22T19:10:00+09:00',
  },
  {
    id: 27,
    author: '소금빵러버',
    content: '메론빵 겉 쿠키가 바삭바삭. 속은 생각보다 촉촉해서 놀랐어요.',
    images: [
      'https://picsum.photos/seed/melonpan1/600/600',
      'https://picsum.photos/seed/melonpan2/600/600',
      'https://picsum.photos/seed/melonpan3/600/600',
    ],
    created_at: '2026-09-21T14:25:00+09:00',
  },
  {
    id: 28,
    author: '단팥이좋아',
    content: '팥빵, 완두앙금빵, 고구마빵, 밤빵. 오늘은 앙금빵의 날이었습니다.',
    images: [
      'https://picsum.photos/seed/redbean1/600/600',
      'https://picsum.photos/seed/redbean2/600/600',
      'https://picsum.photos/seed/redbean3/600/600',
      'https://picsum.photos/seed/redbean4/600/600',
    ],
    created_at: '2026-09-20T16:40:00+09:00',
  },
  {
    id: 29,
    author: '빵순이일기',
    content: '옥수수빵 안에 옥수수 알갱이가 톡톡. 아이들이 제일 좋아하는 빵이에요.',
    images: [
      'https://picsum.photos/seed/cornbread1/600/600',
      'https://picsum.photos/seed/cornbread2/600/600',
    ],
    created_at: '2026-09-19T10:00:00+09:00',
  },
  {
    id: 30,
    author: '빵지도그리는사람',
    content: '빵지순례 첫 기록. 집 앞 빵집의 크림빵부터 시작합니다.',
    images: ['https://picsum.photos/seed/creambread1/600/600'],
    created_at: '2026-09-18T09:00:00+09:00',
  },
]
