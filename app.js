// Core Application Router & Audio Engine for Horra (حُرّة)

let soundEnabled = true;
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'win') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'dice') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(200, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    }
  } catch (e) {
    console.log("Audio play error:", e);
  }
}

function toggleAudio() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('sound-btn');
  btn.textContent = soundEnabled ? '🔊' : '🔇';
}

function showView(viewId) {
  playSound('click');
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));

  // Remove active state from all nav buttons
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  if (viewId === 'home') {
    document.getElementById('view-home').classList.add('active');
    document.getElementById('nav-home').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function scrollToGames() {
  playSound('click');
  
  // Activate home view
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));
  document.getElementById('view-home').classList.add('active');

  // STRICT NAV BUTTON ACTIVE MANAGEMENT
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));
  document.getElementById('nav-games').classList.add('active');

  // Scroll to position section title right below fixed header
  const section = document.getElementById('games-section');
  const header = document.querySelector('.main-header');
  const headerHeight = header ? header.offsetHeight : 70;
  
  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight - 12;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function openGame(gameKey) {
  playSound('click');
  const views = document.querySelectorAll('.view');
  views.forEach(v => v.classList.remove('active'));

  // Clear nav buttons active state when inside a game
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  const targetView = document.getElementById(`view-game-${gameKey}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (gameKey === 'heroes' && typeof initHeroesGame === 'function') {
      initHeroesGame();
    } else if (gameKey === 'path' && typeof initPathGame === 'function') {
      initPathGame();
    } else if (gameKey === 'wheel' && typeof initWheelGame === 'function') {
      initWheelGame();
    } else if (gameKey === 'map' && typeof initMapGame === 'function') {
      initMapGame();
    }
  }
}

function openContactModal() {
  playSound('click');
  document.getElementById('contact-modal').classList.add('active');
}

function closeContactModal() {
  playSound('click');
  document.getElementById('contact-modal').classList.remove('active');
}

function handleContactSubmit(e) {
  e.preventDefault();
  playSound('win');
  alert("شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنقوم بالرد قريباً 🕊️");
  closeContactModal();
}
