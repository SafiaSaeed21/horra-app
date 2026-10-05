// Game 4: Heritage Wheel of Fortune & Native Keyboard Word Puzzle (عجلة الحظ التراثية والكيبورد الأصلي)

const categorySlices = [
  { id: 0, cat: "🍲 أكلات شعبية", name: "أكلات شعبية" },
  { id: 1, cat: "🧣 أزياء وتراث", name: "أزياء وتراث" },
  { id: 2, cat: "🌿 طبيعة وبركة", name: "طبيعة وبركة" },
  { id: 3, cat: "🕊️ رموز وطنية", name: "رموز وطنية" },
  { id: 4, cat: "🏛️ معالم وعواصم", name: "معالم وعواصم" },
  { id: 5, cat: "🍊 فواكه وبساتين", name: "فواكه وبساتين" },
  { id: 6, cat: "🍇 خيرات الجبال", name: "خيرات الجبال" },
  { id: 7, cat: "🧼 صناعات تراثية", name: "صناعات تراثية" }
];

// 48 RICH EDUCATIONAL PALESTINIAN HERITAGE PUZZLES (6 PUZZLES PER CATEGORY)
const wheelPuzzles = [
  // Slice 0: 🍲 أكلات شعبية (6 Puzzles)
  { catId: 0, cat: "🍲 أكلات شعبية", word: "مسخن", clue: "أكلة تراثية مشهورة بخبز الطابون والدجاج والسمّاق وزيت الزيتون!" },
  { catId: 0, cat: "🍲 أكلات شعبية", word: "مقلوبة", clue: "طبق تراثي لذيذ يطبخ بالباذنجان والزهرة والرز ويقلب عند التقديم!" },
  { catId: 0, cat: "🍲 أكلات شعبية", word: "قدرة", clue: "أكلة خليلية وغزاوية شهيرة تطبخ في قدر فخاري داخل الفرن!" },
  { catId: 0, cat: "🍲 أكلات شعبية", word: "مجدرة", clue: "طبق تراثي أصيل يعتمد على العدس والأرز والبصل المقلي المحمر!" },
  { catId: 0, cat: "🍲 أكلات شعبية", word: "فلافل", clue: "أقراص ذهبية مقرمشة تراثية تصنع من الحمص والبهارات والأعشاب!" },
  { catId: 0, cat: "🍲 أكلات شعبية", word: "مفتول", clue: "حبيبات تراثية تصنع من القمح والبرغل وتطبخ على البخار مع المرق!" },

  // Slice 1: 🧣 أزياء وتراث (6 Puzzles)
  { catId: 1, cat: "🧣 أزياء وتراث", word: "كوفية", clue: "وشاح كنعاني تراثي يرتدى باللونين الأبيض والأسود رمز الصمود!" },
  { catId: 1, cat: "🧣 أزياء وتراث", word: "تطريز", clue: "ثوب فلسطيني أصيل مطرز بغرز التراث الكنعاني الجميل!" },
  { catId: 1, cat: "🧣 أزياء وتراث", word: "قمباز", clue: "رداء تراثي للرجال مفتوح من الأمام يلبس فوق الثوب العربي!" },
  { catId: 1, cat: "🧣 أزياء وتراث", word: "عقال", clue: "حبل أسود تراثي يرتديه الرجال فوق الكوفية لتثبيتها بوقار!" },
  { catId: 1, cat: "🧣 أزياء وتراث", word: "شال", clue: "غطاء رأس تراثي ملون ترتديه النساء مع الثوب المكتنز بالنقوش!" },
  { catId: 1, cat: "🧣 أزياء وتراث", word: "حلي", clue: "مجوهرات فضية تراثية تزيّن ثوب العروس بأجمل النقوش الشعبية!" },

  // Slice 2: 🌿 طبيعة وبركة (6 Puzzles)
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "زيتون", clue: "ثمار الشجرة المباركة الصامدة التي يصنع منها أجود أنواع الزيت!" },
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "ميرمية", clue: "عشبة عطرية تراثية تضاف للشاي وتشتهر بفوائدها في جبال فلسطين!" },
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "زعتر", clue: "نبات بري تراثي يخلط مع السمسم ويؤكل مع زيت الزيتون في الصباح!" },
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "شيح", clue: "نبات صحراوي بري عاطر ينمو في جبال وبادية فلسطين التراثية!" },
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "بابونج", clue: "زهور برية صفراء وبيضاء عاطرة تصنع منها المشروبات الدافئة!" },
  { catId: 2, cat: "🌿 طبيعة وبركة", word: "خبيزة", clue: "نبات بري تراثي يجمع من الحقول ويطهى بزيت الزيتون والبصل!" },

  // Slice 3: 🕊️ رموز وطنية (6 Puzzles)
  { catId: 3, cat: "🕊️ رموز وطنية", word: "عصفور الشمس", clue: "الطائر الوطني الرسمي المميز لأرض فلسطين بجمال ألوانه الشديدة!" },
  { catId: 3, cat: "🕊️ رموز وطنية", word: "حنظلة", clue: "شخصية كرتونية تراثية صممها الفنان ناجي العلي شاهدة على الحق!" },
  { catId: 3, cat: "🕊️ رموز وطنية", word: "مفتاح", clue: "رمز تراثي أصيل يعبر عن تمسك الشعب بأرضه وبيوته التاريخية!" },
  { catId: 3, cat: "🕊️ رموز وطنية", word: "علم", clue: "راية الوطن الشامخة بألوانها الأربعة الأخضر والأبيض والأسود والأحمر!" },
  { catId: 3, cat: "🕊️ رموز وطنية", word: "سوسنة", clue: "زهرة سوسنة الفتح البنفسجية الزاهية النادرة في جبال الجليل!" },
  { catId: 3, cat: "🕊️ رموز وطنية", word: "شجرة الحنون", clue: "زهرة شقائق النعمان الحمراء التراثية التي تكسو جبال فلسطين في الربيع!" },

  // Slice 4: 🏛️ معالم وعواصم (6 Puzzles)
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "القدس", clue: "عاصمة فلسطين الأبدية وعروس المدن الحاضنة للمسجد الأقصى!" },
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "الأقصى", clue: "المسجد المبارك أولى القبلتين وثالث الحرمين الشريفين في القدس!" },
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "القيامة", clue: "كنيسة تاريخية عريقة في قلب القدس القديمة رمز السلام!" },
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "الخليل", clue: "مدينة تراثية عريقة بحرمها الإبراهيمي وبساتين عنبها الفاخر!" },
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "الناصرة", clue: "مدينة الجليل الجميلة الحاضنة لكنيسة البشارة والتاريخ العريق!" },
  { catId: 4, cat: "🏛️ معالم وعواصم", word: "بيسان", clue: "مدينة تراثية تاريخية بشلالاتها وآثارها الكنعانية القديمة!" },

  // Slice 5: 🍊 فواكه وبساتين (6 Puzzles)
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "برتقال", clue: "فاكهة يافا الذهبية الشهيرة التي كانت تُصدر لكل دول العالم!" },
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "ليمون", clue: "ثمار حمضية تعطر بساتين الساحل والجليل والضفة الغربية!" },
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "تين", clue: "فاكهة صيفية حلوة تراثية تجفف وتؤكل مع الجوز في الشتاء!" },
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "رمان", clue: "ثمار تراثية حمراء كالياقوت تشتهر بها بساتين صفد وجنين!" },
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "جوافة", clue: "فاكهة عاطرة مميزة تشتهر بها بساتين قلقيلية وطولكرم!" },
  { catId: 5, cat: "🍊 فواكه وبساتين", word: "صبر", clue: "ثمار صبار صامدة تنمو على حدود الحقول والقرى التراثية!" },

  // Slice 6: 🍇 خيرات الجبال (6 Puzzles)
  { catId: 6, cat: "🍇 خيرات الجبال", word: "عنب", clue: "فاكهة جبال الخليل الفاخرة التي يصنع منها الدبس والملبن التراثي!" },
  { catId: 6, cat: "🍇 خيرات الجبال", word: "لوز", clue: "ثمار جبال رام الله ونابلس الزاهية بزهورها البيضاء في الربيع!" },
  { catId: 6, cat: "🍇 خيرات الجبال", word: "جوز", clue: "ثمار خشبية مقوية تنمو في أشجار جبال نابلس وجنين العريقة!" },
  { catId: 6, cat: "🍇 خيرات الجبال", word: "دبس", clue: "عصير عنب أو تمر مكثف تراثي يطبخ على النار ويؤكل في الشتاء!" },
  { catId: 6, cat: "🍇 خيرات الجبال", word: "ملبن", clue: "حلوى تراثية مصنعة من عصير العنب والنشاء وجوز العين!" },
  { catId: 6, cat: "🍇 خيرات الجبال", word: "سمسم", clue: "بذور ذهبية تراثية تستخدم في الطحينية وعلى خبز الكعك المقدسي!" },

  // Slice 7: 🧼 صناعات تراثية (6 Puzzles)
  { catId: 7, cat: "🧼 صناعات تراثية", word: "صابون", clue: "منتج نابلس التاريخي المصنوع 100% من زيت الزيتون النقي الصافي!" },
  { catId: 7, cat: "🧼 صناعات تراثية", word: "فخار", clue: "أوانٍ وصحون طينية تراثية تصنع بأيدي الحرفيين في غزة والقدس!" },
  { catId: 7, cat: "🧼 صناعات تراثية", word: "زجاج", clue: "صناعة حرفية ملونة عريقة تشتهر بها مدينة الخليل القديمة!" },
  { catId: 7, cat: "🧼 صناعات تراثية", word: "خيزران", clue: "سلال تراثية تحاك من قصب وسيقان النباتات لجمع الثمار!" },
  { catId: 7, cat: "🧼 صناعات تراثية", word: "طابون", clue: "فرن طيني تراثي يستعمل لخَبز أشهى أنواع الخبز البلدي!" },
  { catId: 7, cat: "🧼 صناعات تراثية", word: "حصيرة", clue: "بساط منسوج تراثي يصنع من قصب المياه وأوراق النخيل!" }
];

let currentPuzzle = wheelPuzzles[0];
let guessedLetters = new Set();
let wheelScore = 0;
let currentRotation = 0;
let totalSpinsCount = 0;
let lastAskedPuzzleMap = new Map(); // Track last asked puzzle per category to prevent immediate duplicate

function initWheelGame() {
  wheelScore = 0;
  totalSpinsCount = 0;
  currentRotation = 0;
  lastAskedPuzzleMap.clear();
  document.getElementById('wheel-score').textContent = wheelScore;

  setupNativeKeyboardListeners();
  
  // Default start puzzle (Slice 0: 🍲 أكلات شعبية)
  currentPuzzle = wheelPuzzles[0];
  loadPuzzle();
}

function loadPuzzle() {
  guessedLetters.clear();
  document.getElementById('puzzle-cat').textContent = `⭐ الفئة: ${currentPuzzle.cat}`;
  document.getElementById('puzzle-clue').textContent = `💡 اللغز: ${currentPuzzle.clue}`;

  // Focus native keyboard input field so mobile/laptop keyboard opens immediately
  const inputEl = document.getElementById('native-keyboard-input');
  if (inputEl) {
    inputEl.value = "";
    setTimeout(() => inputEl.focus(), 50);
  }

  renderWordDisplay();
}

function stripDiacritics(text) {
  if (!text) return "";
  return text.replace(/[\u064B-\u0652]/g, "");
}

function normalizeArabic(char) {
  if (!char) return "";
  char = stripDiacritics(char.trim());
  if (char === "أ" || char === "إ" || char === "آ" || char === "ا" || char === "ء" || char === "ئ" || char === "ؤ") return "ا";
  if (char === "ة" || char === "ه") return "ه";
  if (char === "ى" || char === "ي") return "ي";
  return char;
}

function handleLetterInput(typedChar) {
  if (!typedChar || !currentPuzzle) return;
  
  const cleanTyped = stripDiacritics(typedChar.trim());
  if (!cleanTyped) return;

  let matchedChar = null;

  // Match typed char against actual puzzle word characters
  for (let char of currentPuzzle.word) {
    if (char === " ") continue;
    if (char === cleanTyped || normalizeArabic(char) === normalizeArabic(cleanTyped)) {
      matchedChar = char;
      break;
    }
  }

  const charToUse = matchedChar || cleanTyped;

  if (!guessedLetters.has(charToUse)) {
    guessedLetters.add(charToUse);
    playSound('click');
    renderWordDisplay();
  }
}

function renderWordDisplay() {
  if (!currentPuzzle) return;
  const wordContainer = document.getElementById('word-display');
  wordContainer.innerHTML = "";

  let isComplete = true;

  for (let char of currentPuzzle.word) {
    if (char === " ") {
      const spaceSpan = document.createElement("span");
      spaceSpan.className = "letter-space";
      spaceSpan.textContent = " ";
      wordContainer.appendChild(spaceSpan);
    } else {
      const blockSpan = document.createElement("span");
      blockSpan.className = "letter-block-3d";
      
      const normChar = normalizeArabic(char);
      let isGuessed = false;
      for (let g of guessedLetters) {
        if (g === char || normalizeArabic(g) === normChar) {
          isGuessed = true;
          break;
        }
      }

      if (isGuessed) {
        blockSpan.textContent = char;
        blockSpan.classList.add("revealed");
      } else {
        blockSpan.textContent = "_";
        isComplete = false;
      }
      wordContainer.appendChild(blockSpan);
    }
  }

  if (isComplete && currentPuzzle.word.length > 0) {
    playSound('win');
    wheelScore += 20;
    document.getElementById('wheel-score').textContent = wheelScore;

    setTimeout(() => {
      alert(`🎉 أحسنت يا بطل! الكلمة هي "${currentPuzzle.word}". حصلت على 20 نقطة! ✨`);
    }, 450);
  }
}

// SINGLE SOURCE OF TRUTH KEYBOARD LISTENER (NO DOUBLE-TRIGGERING)
function setupNativeKeyboardListeners() {
  const inputEl = document.getElementById('native-keyboard-input');
  const puzzleBox = document.getElementById('puzzle-box');

  // Tap anywhere on puzzle card to re-focus keyboard on mobile/tablet
  if (puzzleBox && inputEl) {
    puzzleBox.onclick = () => {
      inputEl.focus();
    };
  }

  if (inputEl) {
    inputEl.oninput = (e) => {
      const val = inputEl.value;
      if (val && val.length > 0) {
        for (let char of val) {
          handleLetterInput(char);
        }
        inputEl.value = "";
      }
    };

    // Also support mobile IME composition
    inputEl.oncompositionend = (e) => {
      const val = inputEl.value;
      if (val && val.length > 0) {
        for (let char of val) {
          handleLetterInput(char);
        }
        inputEl.value = "";
      }
    };
  }

  // Global Keydown Fallback (ONLY when input is not focused to prevent double input)
  window.onkeydown = (e) => {
    const wheelView = document.getElementById('view-game-wheel');
    if (!wheelView || !wheelView.classList.contains('active')) return;

    // If typing inside input field, let oninput handle it exclusively!
    if (document.activeElement === inputEl) return;

    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      handleLetterInput(e.key);
      if (inputEl) inputEl.focus();
    }
  };
}

// 100% SYNCHRONIZED SPIN WHEEL LOGIC (Landed Slice EXACTLY Matches Puzzle Category!)
function spinWheel() {
  playSound('click');
  const wheel = document.getElementById('wheel');
  const spinBtn = document.getElementById('spin-btn');
  if (!wheel || spinBtn.disabled) return;

  spinBtn.disabled = true;
  totalSpinsCount++;

  // 1. Pick a random slice index (0 to 7)
  const targetSliceIndex = Math.floor(Math.random() * 8); // 0..7

  // 2. Exact Target Angle Calculation for 8 Slices Wheel:
  // Pointer is fixed at top (0°).
  // Slice i center angle = (360 - (i * 45)) % 360.
  const targetSliceBaseAngle = (360 - (targetSliceIndex * 45)) % 360;

  // Add 4 to 6 full rotations (1440° - 2160°) + slight random offset within slice (+- 10deg)
  const fullRotations = (totalSpinsCount * 1440) + 1440;
  const sliceJitter = (Math.random() * 20) - 10; // +- 10deg safety offset inside slice
  const finalDegree = fullRotations + targetSliceBaseAngle + sliceJitter;

  currentRotation = finalDegree;
  wheel.style.transform = `rotate(${currentRotation}deg)`;

  // 3. Pick a RANDOM puzzle among the 6 puzzles of targetSliceIndex (avoiding immediate duplicate if possible)
  const matchingPuzzles = wheelPuzzles.filter(p => p.catId === targetSliceIndex);
  const lastAskedWord = lastAskedPuzzleMap.get(targetSliceIndex);

  let candidatePuzzles = matchingPuzzles.filter(p => p.word !== lastAskedWord);
  if (candidatePuzzles.length === 0) {
    candidatePuzzles = matchingPuzzles;
  }

  const selectedPuzzle = candidatePuzzles[Math.floor(Math.random() * candidatePuzzles.length)] || wheelPuzzles[0];
  lastAskedPuzzleMap.set(targetSliceIndex, selectedPuzzle.word);

  // 4. Update puzzle view after spin completes (3000ms)
  setTimeout(() => {
    playSound('win');
    spinBtn.disabled = false;
    currentPuzzle = selectedPuzzle;
    loadPuzzle();
  }, 3000);
}
