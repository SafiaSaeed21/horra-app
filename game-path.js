// Game 3: Studio-Grade Heritage 24-Tile Journey & Keys of Return (رحلة مسار التراث التاريخي 24 محطة)

const pathTilesData = [
  { id: 1, name: "باب القدس", type: "start", icon: "🏛️", title: "البداية" },
  { id: 2, name: "كروم الزيتون", type: "normal", icon: "🌿", title: "زيتون" },
  { id: 3, name: "تحدي التراث 1", type: "quiz", icon: "❓", title: "لغز الشجرة المباركة", q: "ما اسم الشجرة المباركة الرمز الصامد التاريخي لأرض فلسطين؟ 🌳", options: ["شجرة الزيتون المباركة", "شجرة الموز", "شجرة التفاح"], correct: 0 },
  { id: 4, name: "بساتين يافا", type: "normal", icon: "🍊", title: "برتقال يافا" },
  { id: 5, name: "مكتبة القدس", type: "bonus", icon: "📜", title: "+10 نقاط" },
  { id: 6, name: "تحدي المعالم 2", type: "quiz", icon: "❓", title: "لغز عاصمة فلسطين", q: "ما هي عاصمة فلسطين الأبدية وعروس المدن الحاضنة للمسجد الأقصى؟ 🕌", options: ["مدينة القدس الشريف", "مدينة لشبونة", "مدينة مدريد"], correct: 0 },
  { id: 7, name: "مفتاح العودة 1", type: "key", icon: "🗝️", title: "+2 مفتاح" },
  { id: 8, name: "كروم الخليل", type: "normal", icon: "🍇", title: "عنب الخليل" },
  { id: 9, name: "قفزة التراث", type: "boost", icon: "⚡", title: "تقدم خطوتين!" },
  { id: 10, name: "مصابن نابلس", type: "normal", icon: "🧼", title: "صابون نابلس" },
  { id: 11, name: "تحدي الأبطال 3", type: "quiz", icon: "❓", title: "لغز مفتاح العودة", q: "ماذا يرمز مفتاح العودة الفلسطيني الأصيل المورث عبر الأجيال؟ 🗝️", options: ["تمسك الشعب بأرضه وبيوته التاريخية", "فتح الخزانة المنزلية", "تشغيل السيارة"], correct: 0 },
  { id: 12, name: "قلعة بيت لحم", type: "normal", icon: "🏰", title: "بيت لحم" },
  { id: 13, name: "عصفور الشمس", type: "normal", icon: "🕊️", title: "عصفور الشمس" },
  { id: 14, name: "تحدي الأزياء 4", type: "quiz", icon: "❓", title: "لغز الزي التراثي", q: "ما هو الزي الشعبي الجميل المكتنز بالغرز والتطريز اليدوي الكنعاني؟ 👗", options: ["الثوب الفلسطيني المطرز", "القميص الرياضي", "معطف المطر"], correct: 0 },
  { id: 15, name: "مفتاح العودة 2", type: "key", icon: "🗝️", title: "+2 مفتاح" },
  { id: 16, name: "سنابل جنين", type: "normal", icon: "🌾", title: "قمح جنين" },
  { id: 17, name: "ميناء غزة", type: "normal", icon: "🌊", title: "ميناء غزة" },
  { id: 18, name: "تحدي الأكلات 5", type: "quiz", icon: "❓", title: "لغز المأكولات الشعبية", q: "ما هي الأكلة التراثية الشهيرة المكونة من خبز الطابون والدجاج والسمّاق وزيت الزيتون؟ 🍲", options: ["طبق المسخن التراثي", "شطيرة الهمبرغر", "البيتزا الإيطالية"], correct: 0 },
  { id: 19, name: "فخار غزة", type: "normal", icon: "🏺", title: "فخار غزة" },
  { id: 20, name: "سرعة التراث", type: "boost", icon: "🚀", title: "قفزة 3 خطوات!" },
  { id: 21, name: "تحدي الرموز 6", type: "quiz", icon: "❓", title: "لغز الوشاح الوطني", q: "ما اسم الوشاح التراثي ذي اللونين الأبيض والأسود رمز الصمود والكرامة؟ 🧣", options: ["الكوفية الفلسطينية", "القبعة الصوفية", "الربطة الجلدية"], correct: 0 },
  { id: 22, name: "ثوب التطريز", type: "normal", icon: "👑", title: "التطريز الملوكي" },
  { id: 23, name: "مفتاح العودة 3", type: "key", icon: "🗝️", title: "+3 مفتاح" },
  { id: 24, name: "عروس القدس والمسجد الأقصى", type: "end", icon: "🏆", title: "وسام النصر" }
];

let currentTile = 1;
let totalKeys = 0;
let isMoving = false;

function initPathGame() {
  currentTile = 1;
  totalKeys = 0;
  isMoving = false;
  
  const keysEl = document.getElementById('keys-count');
  if (keysEl) keysEl.textContent = totalKeys;
  
  const statusEl = document.getElementById('path-status');
  if (statusEl) statusEl.textContent = 'أهلاً بك في رحلة مسار التراث المكونة من 24 محطة تاريخية! ارمِ النرد للانطلاق 🚀';

  renderBoard();
}

function renderBoard() {
  const board = document.getElementById('board-path');
  if (!board) return;
  board.innerHTML = '';

  pathTilesData.forEach(tileData => {
    const tileEl = document.createElement('div');
    tileEl.className = `path-tile-3d tile-type-${tileData.type}`;
    if (tileData.id === currentTile) {
      tileEl.classList.add('active-player-tile');
    }

    let isPlayerHere = tileData.id === currentTile;
    
    tileEl.innerHTML = `
      <span class="tile-number-badge">${tileData.id}</span>
      <div class="tile-icon-wrapper">${tileData.icon}</div>
      <div class="tile-title-label">${tileData.title}</div>
      ${isPlayerHere ? '<div class="player-hero-avatar-3d"><img src="assets/hero_player_3d.png" alt="بطل حُـرّة" class="player-3d-avatar-img"></div>' : ''}
    `;

    board.appendChild(tileEl);
  });
}

function rollDice() {
  if (isMoving) return;
  
  const diceEl = document.getElementById('dice');
  const rollBtn = document.getElementById('roll-btn');
  if (!diceEl) return;

  isMoving = true;
  if (rollBtn) rollBtn.disabled = true;
  playSound('dice');

  diceEl.classList.add('rolling-anim');

  setTimeout(() => {
    diceEl.classList.remove('rolling-anim');
    const rollValue = Math.floor(Math.random() * 6) + 1;
    const diceIcons = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    diceEl.textContent = diceIcons[rollValue];

    document.getElementById('path-status').textContent = `🎲 رميت النرد وحصلت على الرقم ${rollValue}! يتقدم البطل في المسار...`;

    advanceStepByStep(rollValue);
  }, 600);
}

function advanceStepByStep(stepsLeft) {
  if (stepsLeft <= 0 || currentTile >= 24) {
    isMoving = false;
    const rollBtn = document.getElementById('roll-btn');
    if (rollBtn) rollBtn.disabled = false;
    
    checkTileLandingAction();
    return;
  }

  currentTile++;
  playSound('click');
  renderBoard();

  if (currentTile >= 24) {
    currentTile = 24;
    renderBoard();
    isMoving = false;
    const rollBtn = document.getElementById('roll-btn');
    if (rollBtn) rollBtn.disabled = false;
    
    triggerPathVictory();
    return;
  }

  setTimeout(() => {
    advanceStepByStep(stepsLeft - 1);
  }, 320);
}

function checkTileLandingAction() {
  const currentTileObj = pathTilesData.find(t => t.id === currentTile);
  if (!currentTileObj) return;

  if (currentTileObj.type === 'key') {
    playSound('win');
    totalKeys += 2;
    document.getElementById('keys-count').textContent = totalKeys;
    document.getElementById('path-status').textContent = `✨ عثرت على مفتاح عودة جديد في محطة ${currentTileObj.name}! تمت إضافة 2 مفتاح لرصيدك 🗝️🔑`;
  } else if (currentTileObj.type === 'boost') {
    playSound('win');
    document.getElementById('path-status').textContent = `⚡ قفزة التراث! تتقدم خطوتين إضافيتين للأمام! 🚀`;
    setTimeout(() => {
      advanceStepByStep(2);
    }, 800);
  } else if (currentTileObj.type === 'bonus') {
    playSound('win');
    totalKeys += 3;
    document.getElementById('keys-count').textContent = totalKeys;
    document.getElementById('path-status').textContent = `📜 محطة مكافأة العلوم والتاريخ! حصلت على 3 مفاتيح ذهبية 🔑🔑🔑`;
  } else if (currentTileObj.type === 'quiz') {
    openPathQuizModal(currentTileObj);
  } else if (currentTileObj.type === 'end') {
    triggerPathVictory();
  } else {
    document.getElementById('path-status').textContent = `البطل الآن في محطة "${currentTileObj.name}" (محطة ${currentTile}/24). ارمِ النرد لمواصلة الطريق! 🌿`;
  }
}

function openPathQuizModal(quizTile) {
  const modal = document.getElementById('path-quiz-modal');
  if (!modal) return;

  document.getElementById('quiz-modal-title').textContent = quizTile.title;
  document.getElementById('quiz-question-text').textContent = quizTile.q;

  const optionsContainer = document.getElementById('quiz-options-container');
  optionsContainer.innerHTML = '';

  quizTile.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn-3d';
    btn.textContent = `${idx + 1}. ${optText}`;

    btn.onclick = () => {
      if (idx === quizTile.correct) {
        playSound('win');
        btn.classList.add('correct-ans');
        totalKeys += 2;
        document.getElementById('keys-count').textContent = totalKeys;
        document.getElementById('path-status').textContent = `🎉 إجابة صحيحة وممتازة! حصلت على مفتاحين جديدين للعودة 🔑🔑`;
      } else {
        playSound('click');
        btn.classList.add('wrong-ans');
        document.getElementById('path-status').textContent = `إجابة قريبة! واصل التقدم في المسار 🌿`;
      }

      setTimeout(() => {
        closePathQuizModal();
      }, 950);
    };

    optionsContainer.appendChild(btn);
  });

  modal.classList.add('active');
}

function closePathQuizModal() {
  const modal = document.getElementById('path-quiz-modal');
  if (modal) modal.classList.remove('active');
}

function triggerPathVictory() {
  playSound('win');
  totalKeys += 10;
  document.getElementById('keys-count').textContent = totalKeys;
  document.getElementById('path-status').textContent = '🏆 ألف مبروك بطل حُـرّة العظيم! أتممت رحلة مسار التراث الـ 24 وحصلت على وسام الشرف التاريخي! 🗝️🇵🇸';

  setTimeout(() => {
    alert('🏆 ألف مبروك بطل حُـرّة العظيم! نجحت في إكمال رحلة مسار التراث الـ 24 محطة وجمعت مفاتيح العودة للقدس الشريف! 🔑✨🇵🇸');
  }, 400);
}
