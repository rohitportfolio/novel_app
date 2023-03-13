export const NOVEL_DATA = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    imgSrc:
      'https://m.media-amazon.com/images/I/51myt0GXIUL._SX328_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    title: 'The Mahabharata Secret',
    imgSrc:
      'https://m.media-amazon.com/images/P/B01H38SA9O.01._SCLZZZZZZZ_SX500_.jpg',
  },
  {
    id: 3,
    title: 'Hobbit - Graphic Novel',
    imgSrc:
      'https://m.media-amazon.com/images/I/617vEIOCZSL._SX498_BO1,204,203,200_.jpg',
  },
  {
    id: 4,
    title: 'The Black Universe',
    imgSrc:
      'https://marketplace.canva.com/EAFEbtlNK2Q/1/0/1003w/canva-double-exposure-artistic-background-novel-book-cover-sTAyOpO_rTI.jpg',
  },
  {
    id: 5,
    title: 'Black Of Death',
    imgSrc:
      'https://covers.bookcoverzone.com/slir/w450/png24-front/bookcover0025173.jpg',
  },
  {
    id: 6,
    title: 'The Past Is Rising',
    imgSrc:
      'https://i.pinimg.com/474x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg',
  },
  {
    id: 7,
    title: 'Seeds Of Hatred',
    imgSrc:
      'https://damonza.com/wp-content/uploads/portfolio/fiction/Seeds-of-Hatred_1b.jpg',
  },
  {
    id: 8,
    title: 'World Whisperer',
    imgSrc:
      'https://damonza.com/wp-content/uploads/portfolio/fiction/World-Whisperer.jpg',
  },
  {
    id: 9,
    title: 'Water & Flame',
    imgSrc:
      'https://damonza.com/wp-content/uploads/portfolio/fiction/Water%20&%20Flame%2006.jpg',
  }
];

export const HOME_FEATURED = [
  {
    id: 1,
    type: `Reader's Choice`,
    content: {
      'horizontal-scroll-view': {
        count: 8,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 2,
    type: `Daily trending`,
    content: {
      'gallery-view': {
        row: 3,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 3,
    type: `Popular Romance`,
    content: {
      'horizontal-scroll-view': {
        count: 8,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 4,
    type: `Rasing Werewolf`,
    content: {
      'horizontal-scroll-view': {
        count: 8,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 5,
    type: `Chief Editor's Pick`,
    content: {
      'vertical-card-detail-view': {
        count: 2,
        size: 'large',
        data: NOVEL_DATA
      },
      'gallery-view': {
        row: 2,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 6,
    type: `Must-Read Werewolf`,
    content: {
      'vertical-card-detail-view': {
        count: 1,
        size: 'large',
        data: NOVEL_DATA
      },
      'gallery-view': {
        row: 2,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 7,
    type: `Must-Read Romance`,
    content: {
      'vertical-card-detail-view': {
        count: 2,
        size: 'large',
        data: NOVEL_DATA
      },
      'gallery-view': {
        row: 2,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 8,
    type: `Lady's Choice`,
    content: {
      'vertical-card-detail-view': {
        count: 2,
        size: 'large',
        data: NOVEL_DATA
      },
      'gallery-view': {
        row: 2,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 9,
    type: `Men's Choice`,
    content: {
      'vertical-card-detail-view': {
        count: 2,
        size: 'large',
        data: NOVEL_DATA
      },
      'gallery-view': {
        row: 2,
        col: 3,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 10,
    type: `Editor's Like`,
    content: {
      'gallery-view': {
        row: 2,
        col: 4,
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 11,
    type: `Classic`,
    content: {
      'vertical-card-detail-view': {
        count: 5,
        size: 'small',
        data: NOVEL_DATA
      }
    }
  },
  {
    id: 12,
    type: `Top Fantasy`,
    content: {
      'horizontal-scroll-view': {
        count: 3,
        data: NOVEL_DATA
      }
    }
  }
]