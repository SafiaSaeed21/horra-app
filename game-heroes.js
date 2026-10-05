// Game 2: Advanced Heroes Memory Game (Exact Jerusalem Stone Arch Cover Image Render)

const allHeroesDatabase = [
  // Level 1 Heroes (1-8)
  { id: 1, name: "غسان كنفاني", icon: "📚", info: "أديب المقاومة وكاتب رواية عائد إلى حيفا وأرض الزيتون", level: 1 },
  { id: 2, name: "ناجي العلي", icon: "🎨", info: "رسام الكاريكاتير المبدع ومبتكر شخصية حنظلة الشاهدة على الحق", level: 1 },
  { id: 3, name: "محمود درويش", icon: "✍️", info: "شاعر الوطن والقضية وأحد أهم الشعراء العرب في العصر الحديث", level: 1 },
  { id: 4, name: "عبد القادر الحسيني", icon: "🛡️", info: "القائد البطل في معركة القسطل الشديد البأس في الدفاع عن القدس", level: 1 },
  { id: 5, name: "دلال المغربي", icon: "🇵🇸", info: "مناضلة شجاعة خُلد اسمها في تاريخ الثورة والنضال الوطني", level: 1 },
  { id: 6, name: "فدوى طوقان", icon: "📜", info: "شاعرة فلسطين الكبيرة المسماة بشاعرة الجبل والوطن", level: 1 },
  { id: 7, name: "إدوارد سعيد", icon: "🎓", info: "المفكر العالمي والناقد صاحب كتاب الاستشراق الشهير", level: 1 },
  { id: 8, name: "شيرين أبو عاقلة", icon: "🎙️", info: "صوت الحقيقة والإعلامية البطلة التي نقلت صوت فلسطين للعالم", level: 1 },

  // Level 2 Heroes (9-16)
  { id: 9, name: "إبراهيم طوقان", icon: "🎵", info: "شاعر الوطن الفذ ومؤلف نشيد موطني التراثي الخالد", level: 2 },
  { id: 10, name: "خليل السكاكيني", icon: "📖", info: "الأديب والعلامة رائد التعليم والتربية الحديثة في فلسطين", level: 2 },
  { id: 11, name: "مي زيادة", icon: "🖋️", info: "الكاتبة والناقدة المبدعة النابتة في مدينة الناصرة التراثية", level: 2 },
  { id: 12, name: "عز الدين القسام", icon: "⚔️", info: "الشيخ والمناضل الكبير في الثورة ضد الاحتلال الاستعماري", level: 2 },
  { id: 13, name: "إسماعيل شموط", icon: "🎨", info: "فنان التشكيل الرائد وموثق التراث الفلسطيني باللوحات الزيتية", level: 2 },
  { id: 14, name: "سلمى الخضراء الجيوسي", icon: "📚", info: "الشاعرة والمترجمة التي نقلت الأدب العربي والتاريخ للعالم", level: 2 },
  { id: 15, name: "توفيق زياد", icon: "✊", info: "شاعر الأرض ورئيس بلدية الناصرة وصاحب أناديكم وأشد على أياديكم", level: 2 },
  { id: 16, name: "معين بسيسو", icon: "📜", info: "الشاعر والكاتب المسرحي وصوت النضال في غزة وفلسطين", level: 2 },

  // Level 3 Heroes (17-24)
  { id: 17, name: "ليلى خالد", icon: "🕊️", info: "رمز المناضلات وشخصية بارزة في تاريخ النضال الوطني", level: 3 },
  { id: 18, name: "سليمان المنصور", icon: "🖼️", info: "الفنان التشكيل صاحب لوحة جمل المحامل الوطنية الشهيرة", level: 3 },
  { id: 19, name: "كمال ناصر", icon: "📝", info: "الشاعر والمناضل وضمير الثورة الفلسطينية والناطق باسمها", level: 3 },
  { id: 20, name: "ريم بنا", icon: "🎤", info: "الفنانة والمغنية التي أحيت أغاني التراث وأهازيج فلسطين", level: 3 },
  { id: 21, name: "جورج حبش", icon: "⚕️", info: "الطبيب والمناضل والمفكر الوطني الفلسطيني", level: 3 },
  { id: 22, name: "سميح القاسم", icon: "📖", info: "شاعر المقاومة الكبير وصاحب قصيدة منتصب القامة أمشي", level: 3 },
  { id: 23, name: "مصطفى الحلاج", icon: "🎨", info: "الفنان التشكيل والغرافيك رائد الجرافيك التراثي الفلسطيني", level: 3 },
  { id: 24, name: "فاطمة شبشير", icon: "🧵", info: "حافظة التطريز الفلسطيني ورائدة التراث الكنعاني الأصيل", level: 3 },

  // Level 4 Heroes (25-32)
  { id: 25, name: "ياسر عرفات", icon: "🇵🇸", info: "القائد الرمز والكوفية الفلسطينية الخالدة في الذاكرة العربية", level: 4 },
  { id: 26, name: "أبو إياد (صلاح خلف)", icon: "🛡️", info: "القائد والسياسي المفكر صاحب كتاب فلسطيني بلا هوية", level: 4 },
  { id: 27, name: "شريف العلمي", icon: "💡", info: "الإعلامي ومقدم البرامج الثقافية الشهيرة عن جغرافيا وتاريخ فلسطين", level: 4 },
  { id: 28, name: "عصام السرطاوي", icon: "🕊️", info: "الطبيب والدبلوماسي الساعي لنشر الحق والعدالة الدولية", level: 4 },
  { id: 29, name: "عطية أبو العطا", icon: "🌿", info: "المزارع والمناضل المتمسك بأرضه وبساتين الزيتون والليمون", level: 4 },
  { id: 30, name: "نهاد علي", icon: "📖", info: "الباحثة والمؤرخة للتراث الشفهي الفلسطيني والأمثال الشعبية", level: 4 },
  { id: 31, name: "محيي الدين اللباد", icon: "🎨", info: "الفنان والمصمم الرائد في رسومات أدب الأطفال والتراث", level: 4 },
  { id: 32, name: "سلوى العاص", icon: "🎶", info: "المطربة الشعبية لصوت أغنيات الحصاد والتراث الفلسطيني", level: 4 },

  // Level 5 Heroes (33-40)
  { id: 33, name: "راشد حسين", icon: "✍️", info: "شاعر القرية والأرض والصوت الهادر بالحب لفلسطين", level: 5 },
  { id: 34, name: "حنا أبو حنا", icon: "🎓", info: "المفكر والأديب رائد الحركة الثقافية في فلسطين", level: 5 },
  { id: 35, name: "نبوية موسى", icon: "👩‍🏫", info: "المربية والمعلمة التي أسست المدارس في يافا والقدس", level: 5 },
  { id: 36, name: "وليد الخالدي", icon: "📚", info: "المؤرخ الكبير وصاحب كتاب كي لا ننسى عن المدن والقرى", level: 5 },
  { id: 37, name: "كمال بلاطة", icon: "🎨", info: "الفنان التشكيلي والمؤرخ للفن الإستراتيجي والتراث", level: 5 },
  { id: 38, name: "فوزي القاوقجي", icon: "⚔️", info: "قائد جيش الإنقاذ في الدفاع عن ثرى فلسطين عام 1948", level: 5 },
  { id: 39, name: "عارف العارف", icon: "📖", info: "المؤرخ والمؤلف لكتب تاريخ القدس وغزة والنجب", level: 5 },
  { id: 40, name: "بشير البرغوثي", icon: "📰", info: "الصحفي والأديب مؤسس الجرائد والمجلات الوطنية", level: 5 },

  // Level 6 Heroes (41-48)
  { id: 41, name: "جمال الحسيني", icon: "📜", info: "السياسي والدبلوماسي المدافع عن القضية في المحافل الدولية", level: 6 },
  { id: 42, name: "أحمد حلمي عبد الباقي", icon: "🏦", info: "المؤسس للبنك العربي والمشجع للاقتصاد والتعليم الوطني", level: 6 },
  { id: 43, name: "أمين الحسيني", icon: "🕌", info: "مفتي القدس الشريف ورئيس المجلس الإسلامي الأعلى", level: 6 },
  { id: 44, name: "كلثوم عرابي", icon: "🎨", info: "الفنانة التطريزية وحافظة أثواب الخليل ونابلس ورام الله", level: 6 },
  { id: 45, name: "أحمد أسعد الشقيري", icon: "🕊️", info: "مؤسس منظمة التحرير الفلسطينية وأول رئيس لها", level: 6 },
  { id: 46, name: "حبيب قهوجي", icon: "📖", info: "الأديب والباحث الكنعاني الموثق لتاريخ مدن الجليل", level: 6 },
  { id: 47, name: "عمر العمد", icon: "🍞", info: "رائد الصناعات الغذائية والمخبوزات التراثية في نابلس", level: 6 },
  { id: 48, name: "مريم الشافعي", icon: "🧵", info: "حافظة ثوب الكوفية والزي التراثي الغزاوي الأصيل", level: 6 },

  // Level 7 Heroes (49-56)
  { id: 49, name: "شفيق الحوت", icon: "🎙️", info: "الكاتب والسياسي وصوت القدس ويافا في بيروت والعالم", level: 7 },
  { id: 50, name: "عبد اللطيف عقل", icon: "✍️", info: "الشاعر والأكاديمي عميد الأدب والتراث الفلسطيني", level: 7 },
  { id: 51, name: "يوسف الهيكل", icon: "🏙️", info: "رئيس بلدية يافا التاريخي والمؤسس لمدارسها ومكتباتها", level: 7 },
  { id: 52, name: "نجوى كرم", icon: "🎶", info: "حافظة أهازيج وفلكلور الدبكة والتراث الفلسطيني", level: 7 },
  { id: 53, name: "سعد الدين العلمي", icon: "🕌", info: "مفتي القدس الشريف المدافع عن المسجد الأقصى", level: 7 },
  { id: 54, name: "نجلاء ناصر", icon: "👩‍⚕️", info: "الطبيبة الأولى المكرسة لحياة الأطفال والرعاية الصحية", level: 7 },
  { id: 55, name: "مصطفى مراد الدباغ", icon: "🗺️", info: "المؤلف لموسوعة بلادنا فلسطين التراثية والجغرافية", level: 7 },
  { id: 56, name: "أكرم زعيتر", icon: "📜", info: "المؤرخ والدبلوماسي الموثق للثورة الفلسطينية الكبرى", level: 7 }
];

// State Variables
let currentLevel = 1;
let currentLevelMatches = 0;
let flippedCards = [];
let lockBoard = false;
let unlockedStickersSet = new Set();
let unlockedPoolHeroes = [];
let countdownTimer = null;

function initHeroesGame() {
  currentLevel = 1;
  unlockedStickersSet.clear();
  unlockedPoolHeroes = [];
  clearInterval(countdownTimer);
  closeAllOverlays();

  updateHeaderUI();
  loadLevel(currentLevel);
}

function updateHeaderUI() {
  const levelEl = document.getElementById('heroes-level-label');
  if (levelEl) levelEl.textContent = `المستوى ${currentLevel} من 7`;
}

function loadLevel(lvl) {
  currentLevelMatches = 0;
  flippedCards = [];
  lockBoard = false;
  clearInterval(countdownTimer);
  closeAllOverlays();
  updateHeaderUI();

  // Reset Album at start of level
  unlockedStickersSet.clear();
  const albumContainer = document.getElementById('stickers-container');
  if (albumContainer) {
    albumContainer.innerHTML = `<div class="empty-album-msg">طابق كروت الأبطال لإلغاء القفل عن ملصقات أبطال المستوى ${lvl}!</div>`;
  }

  // Pick 4 NEW heroes for this level
  const newHeroes = allHeroesDatabase.filter(h => h.level === lvl).slice(0, 4);

  // Pick 4 REPEATED heroes randomly from previous levels if lvl > 1
  let repeatedHeroes = [];
  if (lvl > 1 && unlockedPoolHeroes.length >= 4) {
    const shuffledPool = [...unlockedPoolHeroes].sort(() => Math.random() - 0.5);
    repeatedHeroes = shuffledPool.slice(0, 4);
  } else if (lvl > 1) {
    const prevHeroes = allHeroesDatabase.filter(h => h.level < lvl);
    repeatedHeroes = prevHeroes.sort(() => Math.random() - 0.5).slice(0, 4);
  } else {
    const l1Heroes = allHeroesDatabase.filter(h => h.level === 1).slice(0, 8);
    newHeroes.length = 0;
    newHeroes.push(...l1Heroes);
  }

  // Combine 4 new + 4 repeated = 8 heroes total (16 cards total)
  const levelHeroes = [...newHeroes, ...repeatedHeroes];

  // Add to pool
  newHeroes.forEach(h => {
    if (!unlockedPoolHeroes.some(item => item.id === h.id)) {
      unlockedPoolHeroes.push(h);
    }
  });

  // Build 16 Cards: 8 Photo Cards + 8 Info/Achievement Cards
  let deck = [];
  levelHeroes.forEach(h => {
    deck.push({
      heroId: h.id,
      type: 'photo',
      name: h.name,
      icon: h.icon,
      text: h.name,
      heroObj: h
    });
    deck.push({
      heroId: h.id,
      type: 'info',
      name: h.name,
      icon: h.icon,
      text: h.info,
      heroObj: h
    });
  });

  // Shuffle Deck
  deck.sort(() => Math.random() - 0.5);

  // Render 2 Equal Rows
  renderEqualTwoRowsGrid(deck);
}

function renderEqualTwoRowsGrid(deck) {
  const grid = document.getElementById('memory-grid');
  grid.innerHTML = '';
  grid.className = 'memory-grid';

  const topRow = deck.slice(0, 8);
  const bottomRow = deck.slice(8, 16);

  const topRowEl = document.createElement('div');
  topRowEl.className = 'cards-row-8';

  const bottomRowEl = document.createElement('div');
  bottomRowEl.className = 'cards-row-8';

  topRow.forEach(cardData => {
    topRowEl.appendChild(createCardElement(cardData));
  });

  bottomRow.forEach(cardData => {
    bottomRowEl.appendChild(createCardElement(cardData));
  });

  grid.appendChild(topRowEl);
  grid.appendChild(bottomRowEl);
}

// Render Exact Jerusalem Card Cover Selected by User
function createCardElement(cardData) {
  const card = document.createElement('div');
  card.className = `memory-card ${cardData.type}-card jerusalem-card-style`;
  card.dataset.heroId = cardData.heroId;
  card.dataset.type = cardData.type;

  const isPhoto = cardData.type === 'photo';

  if (isPhoto) {
    // PHOTO CARD: Exact requested user format (صورة الشخصية + اسم البطل)
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front jerusalem-front">
          <img src="assets/jerusalem_card_cover.jpg" alt="غلاف القدس - أبطال حُـرّة" class="jerusalem-cover-img">
        </div>
        <div class="card-back back-photo jerusalem-back">
          <div class="photo-card-label">صورة الشخصية</div>
          <div class="hero-card-name-title">${cardData.name}</div>
        </div>
      </div>
    `;
  } else {
    // ACHIEVEMENT CARD: Exact requested format (أبرز إنجاز + النص الكامل)
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front jerusalem-front">
          <img src="assets/jerusalem_card_cover.jpg" alt="غلاف القدس - أبطال حُـرّة" class="jerusalem-cover-img">
        </div>
        <div class="card-back back-info jerusalem-back">
          <div class="info-card-label">أبرز إنجاز</div>
          <div class="hero-card-achievement-text">${cardData.text}</div>
        </div>
      </div>
    `;
  }

  card.addEventListener('click', () => handleCardClick(card, cardData));
  return card;
}

function handleCardClick(card, cardData) {
  if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  playSound('click');
  card.classList.add('flipped');
  flippedCards.push({ card, data: cardData });

  if (flippedCards.length === 2) {
    checkPairMatch();
  }
}

function checkPairMatch() {
  lockBoard = true;
  const [item1, item2] = flippedCards;

  const isSameHero = item1.data.heroId === item2.data.heroId;
  const isDifferentType = item1.data.type !== item2.data.type;

  if (isSameHero && isDifferentType) {
    // MATCH SUCCESSFUL!
    playSound('win');
    item1.card.classList.add('matched');
    item2.card.classList.add('matched');
    currentLevelMatches++;

    // Add Full-Width Row to Sticker Album
    unlockStickerInAlbum(item1.data.heroObj);

    flippedCards = [];
    lockBoard = false;

    // Check Level Completion (8 matches needed)
    if (currentLevelMatches === 8) {
      setTimeout(() => {
        if (currentLevel < 7) {
          triggerLevelTransitionOverlay();
        } else {
          triggerGameCompletionOverlay();
        }
      }, 400);
    }
  } else {
    // WRONG MATCH -> Flip back after 1s
    setTimeout(() => {
      item1.card.classList.remove('flipped');
      item2.card.classList.remove('flipped');
      flippedCards = [];
      lockBoard = false;
    }, 1000);
  }
}

function unlockStickerInAlbum(heroObj) {
  if (unlockedStickersSet.has(heroObj.id)) return;
  unlockedStickersSet.add(heroObj.id);

  const container = document.getElementById('stickers-container');
  if (unlockedStickersSet.size === 1) {
    container.innerHTML = '';
    container.className = 'stickers-grid-4';
  }

  const sticker = document.createElement('div');
  sticker.className = 'sticker-badge-card';
  sticker.innerHTML = `
    <div class="sticker-icon">${heroObj.icon}</div>
    <h4 class="sticker-name">${heroObj.name}</h4>
    <p class="sticker-info">${heroObj.info}</p>
    <div class="sticker-unlocked-badge">✨ محرر</div>
  `;
  container.appendChild(sticker);
}

// Top Floating Banner Transition
function triggerLevelTransitionOverlay() {
  playSound('win');
  let secondsLeft = 10;

  const banner = document.getElementById('level-transition-banner');
  const countEl = document.getElementById('countdown-seconds');
  const msgEl = document.getElementById('transition-msg');
  
  msgEl.textContent = `🎉 أبطال! أكملت ألبوم أبطال المستوى ${currentLevel} بنجاح!`;
  countEl.textContent = secondsLeft;
  banner.classList.add('active');

  const albumEl = document.querySelector('.sticker-album');
  if (albumEl) {
    albumEl.scrollIntoView({ behavior: 'smooth' });
  }

  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    secondsLeft--;
    countEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(countdownTimer);
      proceedToNextLevel();
    }
  }, 1000);
}

function proceedToNextLevel() {
  clearInterval(countdownTimer);
  closeAllOverlays();
  currentLevel++;
  loadLevel(currentLevel);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function triggerGameCompletionOverlay() {
  playSound('win');
  const overlay = document.getElementById('game-complete-modal');
  overlay.classList.add('active');
}

function closeAllOverlays() {
  const banner = document.getElementById('level-transition-banner');
  if (banner) banner.classList.remove('active');
  document.querySelectorAll('.modal-overlay-heroes').forEach(m => m.classList.remove('active'));
}

function restartAllHeroesLevels() {
  playSound('click');
  initHeroesGame();
}

function exitHeroesGame() {
  playSound('click');
  showView('home');
}
