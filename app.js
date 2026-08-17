
const LEVELS = [{"id": 1, "world": "Dunia 1: Vokal Kingdom", "title": "Huruf Vokal", "items": ["a", "e", "i", "o", "u"]}, {"id": 2, "world": "Dunia 1: Vokal Kingdom", "title": "Vokal & Gambar", "items": ["ayam", "ikan", "ular", "epal", "obor", "emak"]}, {"id": 3, "world": "Dunia 1: Vokal Kingdom", "title": "Huruf Kecil", "items": ["a", "i", "u", "o", "e", "m", "n", "r", "s", "b", "c", "d"]}, {"id": 4, "world": "Dunia 1: Vokal Kingdom", "title": "Huruf Besar", "items": ["A", "I", "U", "O", "E", "M", "N", "R", "S", "B", "C", "D"]}, {"id": 5, "world": "Dunia 2: Suku Kata Island", "title": "Suku Kata Asas", "items": ["ba", "ca", "da", "fa", "ga", "ha", "ja", "ka", "la", "ma", "na", "pa", "qa", "ra", "sa", "ta", "va", "wa", "ya", "za"]}, {"id": 6, "world": "Dunia 2: Suku Kata Island", "title": "Suku Kata Lanjutan", "items": ["no", "po", "qo", "ro", "so", "to", "vo", "wo", "yo", "zo", "bu", "cu", "du", "fu", "gu", "hu", "ju", "ku", "lu", "mu", "be", "ce", "de", "fe", "ge"]}, {"id": 7, "world": "Dunia 3: Word Jungle", "title": "Perkataan 1", "items": ["bal", "bon", "cik", "rak", "cam", "har", "kun", "mat", "pin", "lam", "man", "pur", "kur", "sum", "tim"]}, {"id": 8, "world": "Dunia 3: Word Jungle", "title": "Perkataan 2", "items": ["bom", "dam", "teh", "gam", "jam", "pam", "dan", "kon", "cap", "pin", "sen", "tan", "bas", "das", "gas"]}, {"id": 9, "world": "Dunia 3: Word Jungle", "title": "Perkataan 3", "items": ["ada", "apa", "api", "abu", "adu", "aku", "alu", "eja", "ela", "emu", "ini", "iri", "isi", "ibu", "itu"]}, {"id": 10, "world": "Dunia 3: Word Jungle", "title": "Perkataan 4", "items": ["baca", "bapa", "lima", "dada", "tiga", "kaca", "kaya", "lada", "lama", "lava", "mata", "nama", "raja", "rata", "saya", "sate", "bayi", "jari", "kaki", "bola", "kota", "roda", "cuka", "guru", "yoyo", "sofa", "meja", "bayi", "peta", "sawi"]}, {"id": 11, "world": "Dunia 3: Word Jungle", "title": "Perkataan 5", "items": ["adik", "adil", "aduh", "ahad", "ajak", "akar", "asah", "asap", "atap", "awan", "awas", "ayah", "ayat", "akal", "akan", "alat", "anak", "atas", "atur", "enak", "ejek", "ekor", "emak", "emas", "enam", "iban", "ikan", "ikut", "itik", "oren"]}, {"id": 12, "world": "Dunia 3: Word Jungle", "title": "Perkataan 6", "items": ["badak", "ketam", "benar", "leher", "cakar", "mawar", "cakap", "masuk", "dalam", "panas", "cerek", "datuk", "hujan", "jarum", "kapas", "penat", "fakir", "rumah", "tujuh", "senam", "lapan", "kasut", "badan", "catur", "telur", "sabun", "tayar", "sifar", "tutup", "wisel"]}, {"id": 13, "world": "Dunia 3: Word Jungle", "title": "Perkataan 7", "items": ["baldi", "bantu", "binti", "bomba", "camca", "cikgu", "hantu", "harga", "henti", "jambu", "janji", "warna", "waktu", "mimpi", "minta", "mesti", "manja", "mandi", "makna", "lumba", "lembu", "lampu", "laksa", "kunci", "kerja", "jumpa", "gincu", "cikgu", "senja", "garpu"]}, {"id": 14, "world": "Dunia 3: Word Jungle", "title": "Perkataan 8", "items": ["bantal", "hantar", "gambar", "landak", "pantas", "rakyat", "sampah", "cantik", "kahwin", "kantin", "mancis", "cantum", "rambut", "rumput", "tanduk", "bandar", "hendak", "kertas", "rendah", "tembak", "pensel", "bersih", "cerdik", "cermin", "jernih", "tempat", "cincin", "biskut", "coklat", "pondok"]}, {"id": 15, "world": "Dunia 3: Word Jungle", "title": "Perkataan 9", "items": ["jong", "wang", "gong", "tong", "abang", "orang", "udang", "burung", "dulang", "jagung", "kucing", "cacing", "banglo", "jingga", "mangga", "nangka", "rangka", "tungku", "bendang", "gunting", "jantung", "jengking", "bangsal", "pingpong", "cangkul", "pinggang", "pinggan"]}, {"id": 16, "world": "Dunia 4: Word Master City", "title": "Perkataan Panjang 1", "items": ["cahaya", "bahaya", "bahasa", "dahaga", "pahala", "puteri", "lelaki", "rebana", "kepala", "bateri", "keladi", "negeri", "pelita", "berita", "cerita", "delima", "petani", "kerani", "kebaya", "cedera", "pegaga", "boneka", "tomato", "kerabu", "muruku", "kerapu", "gerudi", "petola", "putera", "sutera"]}, {"id": 17, "world": "Dunia 4: Word Master City", "title": "Perkataan Panjang 2", "items": ["basikal", "ketupat", "pejabat", "selipar", "telefon", "zirafah", "belajar", "sekolah", "nelayan", "pelepah", "sedekah", "tetikus", "pelajar", "pelukis", "ketupat", "telefon", "belatuk", "piramid", "kelawar", "sejadah", "pulasan", "sepuluh", "ketuhar", "cendawan", "komputer", "jambatan", "tempayan", "pembaris", "cempedak", "sembilan"]}, {"id": 18, "world": "Dunia 4: Word Master City", "title": "Diftong Dalam Perkataan", "items": ["pai", "bau", "bakau", "danau", "gurau", "kicau", "limau", "pulau", "pisau", "silau", "balai", "canai", "gulai", "kedai", "misai", "petai", "serai", "tupai", "surau", "kaloi", "koboi", "lemau", "tapai", "sekoi", "sepoi", "tampoi", "pagau", "amboi", "laici", "angpau"]}, {"id": 19, "world": "Dunia 4: Word Master City", "title": "Vokal Berganding", "items": ["air", "dua", "dia", "gua", "hias", "taip", "kiub", "riuh", "tiup", "buah", "luar", "luas", "kuat", "tuan", "suam", "duit", "kuih", "buih", "radio", "halia", "buaya", "tuala", "piala", "piano", "kuali", "muara", "durian", "jadual", "tebu", "kaunter"]}, {"id": 20, "world": "Dunia 4: Word Master City", "title": "Konsonan Berganding", "items": ["aiskrim", "drama", "flat", "grafik", "krayon", "klinik", "plastik", "stesen", "stoking", "troli", "trak", "traktor", "trompet", "stadium", "proton", "bangau", "bunga", "minyak", "nyanyi", "nyonya", "nyamuk", "sungai", "singa", "tarikh", "khamis", "ungu", "tangan", "syampu", "monyet", "kunyit"]}, {"id": 21, "world": "Dunia 4: Word Master City", "title": "Kata Kerja", "items": ["bercuti", "tarian", "memotong", "beratur", "berlari", "mainan", "terbakar", "senaman", "mendengar", "memandu", "menjahit", "terjatuh", "berkebun", "makanan", "alatan", "berbual", "mencari", "bertanya", "terlanggar", "memancing"]}, {"id": 22, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 1", "items": ["Rina beli beg baru.", "Itu bas Baba.", "Bot Ali kelabu.", "Itu sos cili Suraya.", "Saya beli pen biru.", "Ini tin susu Nana.", "Saya beli gam.", "Itu cat kelabu Siti."]}, {"id": 23, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 2", "items": ["Ayah bela itik dan ayam.", "Ikan itu ada tiga.", "Ular itu ada bisa.", "Adik saya ada lima gigi.", "Emak bakar kek guna oven.", "Itu ulat.", "Baba beli ubat luka.", "Atap itu kelabu."]}, {"id": 24, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 3", "items": ["Emak masak ketam cili padi.", "Katil saya sudah patah.", "Ayah beli tilam baru.", "Kotak itu ada sepatu.", "Ibu masak nasi lemak ayam.", "Nani siram pokok cili merah.", "Dalam bakul itu ada tali.", "Ayah suka masak ikan tiga rasa."]}, {"id": 25, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 4", "items": ["Saya beli sebiji jambu batu.", "Lampu bilik saya sudah rosak.", "Ramli sukan makan nasi.", "Adik ada tanda lahir di bahu kiri.", "Ayah pandu kereta sewa.", "Nona manis ini sedap.", "Kakak bawa sebiji baldi merah.", "Nama saya Fendi bin Ramli."]}, {"id": 26, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 5", "items": ["Pak Ali beri saya pensel warna.", "Ibu beri saya cincin emas.", "Ramli suka makan nasi.", "Rasa coklat ini sedap sekali.", "Cermin muka itu sudah pecah.", "Biskut ini rapuh dan manis.", "Saya jalan kaki pergi masjid.", "Datuk beli lima kotak mancis.", "Rumput itu nampak segar.", "Rosmeni itu bawa surat Kamala.", "Nina minta ibu beli senduk baru.", "Ramlan jalan kaki jumpa doktor."]}, {"id": 27, "world": "Dunia 5: Sentence Land", "title": "Ayat Mudah 6", "items": ["Saya pergi sekolah jalan kaki.", "Kelawar itu warna hitam.", "Kakak beli telefon bimbit warna merah.", "Karipap itu pedas.", "Bibi beli selipar kelabu.", "Saya beli basikal biru.", "Zirafah ada di Zoo Negara.", "Perabot di rumah Datuk Ali mahal mahal.", "Kelopak ros itu gugur.", "Saya suka makan kerepek ubi.", "Ani beli lima pelikat baru.", "Pasu seramik itu sudah pecah.", "Didi selamat daripada dibuli."]}, {"id": 28, "world": "Dunia 5: Sentence Land", "title": "Bacaan Lancar", "items": ["Kakak suka sayur sawi.", "Roslan pergi ke hospital.", "Suraya memakai baju kurung baharu.", "Dia mengayuh basikal dengan laju.", "Saya dan adik membina istana pasir.", "Emak masak makanan yang berkhasiat.", "Cikgu Syarifah seorang yang penyayang."]}, {"id": 29, "world": "Dunia 6: Diftong Battle", "title": "Diftong: Pisau", "items": ["pisau", "hijau", "limau", "tauhu", "pulau"]}, {"id": 30, "world": "Dunia 6: Diftong Battle", "title": "Diftong: Kaloi & Pulau", "items": ["kaloi", "sisik", "cantik", "pulau", "indah", "kelapa", "daun", "hijau"]}, {"id": 31, "world": "Dunia 7: Digraf Challenge", "title": "Digraf", "items": ["ghazal", "khabar", "khusus", "bunga", "nyanyi", "bunyi", "syarikat"]}, {"id": 32, "world": "Dunia 8: Vokal Power", "title": "Vokal Berganding", "items": ["piano", "radio", "buih", "tebu", "seluar", "periuk", "fail"]}, {"id": 33, "world": "Dunia Akhir: Reading Boss", "title": "Konsonan Berganding", "items": ["krayon", "syiling", "brokoli", "plastik", "plaster", "stadium", "spageti"]}];

const WORLD_META = {
  "Dunia 1: Vokal Kingdom": "🔵",
  "Dunia 2: Suku Kata Island": "🟡",
  "Dunia 3: Word Jungle": "🟢",
  "Dunia 4: Word Master City": "🟣",
  "Dunia 5: Sentence Land": "🩷",
  "Dunia 6: Diftong Battle": "⚔️",
  "Dunia 7: Digraf Challenge": "💎",
  "Dunia 8: Vokal Power": "🔥",
  "Dunia Akhir: Reading Boss": "👑"
};

const BADGES = [
  {id:"vokal", name:"Vokal Hero", icon:"🔵", level:4},
  {id:"suku", name:"Suku Kata Hero", icon:"🟡", level:6},
  {id:"word", name:"Word Hunter", icon:"🟢", level:15},
  {id:"master", name:"Word Master", icon:"🟣", level:21},
  {id:"sentence", name:"Sentence Master", icon:"🩷", level:28},
  {id:"diftong", name:"Diftong Warrior", icon:"⚔️", level:30},
  {id:"digraf", name:"Digraf Master", icon:"💎", level:31},
  {id:"vokal2", name:"Vokal Power", icon:"🔥", level:32},
  {id:"final", name:"Bijak Baca Master", icon:"👑", level:33}
];

const DEFAULT_STATE = {
  name:"Pemain",
  xp:0,
  coins:20,
  unlocked:1,
  completed:{},
  history:{},
  powers:{hint:3, shield:2, skip:2, double:1},
  streak:0,
  lastPlayDate:null
};

let state = loadState();
let currentLevel = null;
let questions = [];
let qIndex = 0;
let lives = 3;
let correct = 0;
let earnedXp = 0;
let earnedCoins = 0;
let timer = null;
let timeLeft = 20;
let answered = false;
let shieldActive = false;
let doubleActive = false;

const $ = id => document.getElementById(id);

function loadState(){
  try {
    const saved = localStorage.getItem("bacaquest-state");
    return saved ? {...DEFAULT_STATE, ...JSON.parse(saved)} : structuredClone(DEFAULT_STATE);
  } catch(e) {
    return structuredClone(DEFAULT_STATE);
  }
}
function saveState(){ localStorage.setItem("bacaquest-state", JSON.stringify(state)); }
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function updateHeader(){
  $("playerNameDisplay").textContent = state.name || "Pemain";
  $("xpDisplay").textContent = state.xp;
  $("coinDisplay").textContent = state.coins;
  $("streakDisplay").textContent = state.streak;
  $("playerNameInput").value = state.name === "Pemain" ? "" : state.name;
  $("dailyProgress").style.width = Math.min(100, Object.keys(state.completed).length/33*100)+"%";
}

function updateStreak(){
  const today = new Date().toISOString().slice(0,10);
  if (!state.lastPlayDate) {
    state.streak = 1;
  } else if (state.lastPlayDate !== today) {
    const prev = new Date(state.lastPlayDate+"T00:00:00");
    const now = new Date(today+"T00:00:00");
    const diff = Math.round((now-prev)/86400000);
    state.streak = diff === 1 ? state.streak + 1 : 1;
  }
  state.lastPlayDate = today;
  saveState();
}

function renderMap(){
  const map = $("worldMap");
  map.innerHTML = "";
  const groups = {};
  LEVELS.forEach(l => (groups[l.world] ||= []).push(l));
  Object.entries(groups).forEach(([world, levels]) => {
    const section = document.createElement("div");
    section.className = "world-section";
    section.innerHTML = `<h3>${WORLD_META[world] || "🎮"} ${world}</h3>`;
    const grid = document.createElement("div");
    grid.className = "level-grid";
    levels.forEach(l => {
      const unlocked = l.id <= state.unlocked;
      const result = state.completed[l.id];
      const btn = document.createElement("button");
      btn.className = "level-card" + (!unlocked ? " locked":"") + (result ? " completed":"");
      btn.disabled = !unlocked;
      btn.innerHTML = `
        <div class="num">Level ${l.id}</div>
        <small>${l.title}</small>
        <div class="stars-mini">${result ? "⭐".repeat(result.stars)+"☆".repeat(3-result.stars) : (unlocked ? "▶ Mula" : "🔒 Terkunci")}</div>
      `;
      btn.onclick = () => startLevel(l.id);
      grid.appendChild(btn);
    });
    section.appendChild(grid);
    map.appendChild(section);
  });
}

function rankForXp(xp){
  if (xp >= 1200) return ["👑","BIJAK BACA MASTER"];
  if (xp >= 800) return ["💎","Diamond Reader"];
  if (xp >= 500) return ["🥇","Gold Reader"];
  if (xp >= 250) return ["🥈","Silver Reader"];
  if (xp >= 100) return ["🥉","Bronze Reader"];
  return ["🌱","Rookie Reader"];
}

function renderProfile(){
  const [icon, rank] = rankForXp(state.xp);
  $("rankCard").innerHTML = `<h2>${icon} ${rank}</h2><p>${state.name} • ${state.xp} XP • ${Object.keys(state.completed).length}/33 level selesai</p>`;
  $("badgeGrid").innerHTML = "";
  BADGES.forEach(b => {
    const won = !!state.completed[b.level];
    const div = document.createElement("div");
    div.className = "badge" + (won ? "" : " locked");
    div.innerHTML = `<div class="icon">${b.icon}</div><h3>${b.name}</h3><p>${won ? "Diperoleh" : "Kunci di Level "+b.level}</p>`;
    $("badgeGrid").appendChild(div);
  });
}

function renderTeacher(){
  const completed = Object.keys(state.completed).length;
  const attempts = Object.values(state.history).reduce((a,h)=>a+(h.attempts||0),0);
  const totalCorrect = Object.values(state.history).reduce((a,h)=>a+(h.correct||0),0);
  const totalQuestions = Object.values(state.history).reduce((a,h)=>a+(h.questions||0),0);
  const accuracy = totalQuestions ? Math.round(totalCorrect/totalQuestions*100) : 0;
  const [icon, rank] = rankForXp(state.xp);
  $("teacherSummary").innerHTML = `
    <div class="metric"><span>Murid</span><b>${state.name}</b></div>
    <div class="metric"><span>Level Selesai</span><b>${completed}/33</b></div>
    <div class="metric"><span>Ketepatan</span><b>${accuracy}%</b></div>
    <div class="metric"><span>Jumlah Cubaan</span><b>${attempts}</b></div>
    <div class="metric"><span>XP</span><b>${state.xp}</b></div>
    <div class="metric"><span>Rank</span><b>${icon} ${rank}</b></div>
  `;
  let rows = LEVELS.map(l => {
    const h = state.history[l.id] || {};
    const c = state.completed[l.id];
    return `<tr>
      <td>${l.id}</td><td>${l.title}</td>
      <td>${c ? "⭐".repeat(c.stars) : "-"}</td>
      <td>${h.attempts||0}</td><td>${h.correct||0}/${h.questions||0}</td>
    </tr>`;
  }).join("");
  $("teacherLevelTable").innerHTML = `<table><thead><tr><th>Level</th><th>Topik</th><th>Bintang</th><th>Cubaan</th><th>Betul</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }
function sample(arr,n){ return shuffle(arr).slice(0,Math.min(n,arr.length)); }

function buildQuestions(level){
  const items = level.items;
  const isSentence = level.id >= 22 && level.id <= 28;
  const isEarlyVowel = level.id <= 4;
  const pool = sample(items, 5);
  return pool.map((answer, idx) => {
    if (isSentence) {
      return {
        type:"read",
        prompt:"Baca ayat ini dengan jelas:",
        answer,
        options:[]
      };
    }
    const distractors = sample(items.filter(x=>x!==answer),3);
    const prompt = level.id <= 2 ? `Pilih jawapan yang betul: ${answer}` : `Cari dan pilih: ${answer}`;
    return {
      type:"choice",
      prompt,
      answer,
      options:shuffle([answer,...distractors])
    };
  });
}

function startLevel(id){
  currentLevel = LEVELS.find(l=>l.id===id);
  questions = buildQuestions(currentLevel);
  qIndex=0; lives=3; correct=0; earnedXp=0; earnedCoins=0; answered=false;
  shieldActive=false; doubleActive=false;
  $("levelTitle").textContent = `Level ${id} — ${currentLevel.title}`;
  $("worldTitle").textContent = currentLevel.world;
  updatePowerUI();
  showScreen("gameScreen");
  renderQuestion();
}

function updatePowerUI(){
  $("hintCount").textContent = state.powers.hint;
  $("shieldCount").textContent = state.powers.shield;
  $("skipCount").textContent = state.powers.skip;
  $("doubleCount").textContent = state.powers.double;
}

function renderQuestion(){
  clearInterval(timer);
  answered=false;
  $("nextQuestionBtn").classList.add("hidden");
  $("feedback").textContent="";
  $("feedback").className="feedback";
  $("questionCounter").textContent = `${qIndex+1}/${questions.length}`;
  $("livesDisplay").textContent = "❤️".repeat(lives) + "🖤".repeat(3-lives);
  const q = questions[qIndex];
  $("challengeType").textContent = q.type==="read" ? "🎤 READ ALOUD" : "🎯 PILIH JAWAPAN";
  $("questionText").textContent = q.type==="read" ? q.answer : q.prompt;
  $("questionImage").textContent = "";
  const area = $("answerArea");
  area.innerHTML = "";

  if(q.type==="choice"){
    q.options.forEach(opt=>{
      const b=document.createElement("button");
      b.className="answer-btn";
      b.textContent=opt;
      b.onclick=()=>answerChoice(b,opt,q.answer);
      area.appendChild(b);
    });
  } else {
    const box=document.createElement("div");
    box.className="read-aloud";
    box.innerHTML=`<p>Guru/ibu bapa dengar bacaan murid, kemudian pilih keputusan:</p>
      <div class="teacher-check">
        <button class="answer-btn" data-score="2">⭐⭐⭐ Lancar</button>
        <button class="answer-btn" data-score="1">⭐⭐ Baik</button>
        <button class="answer-btn" data-score="0">⭐ Perlu Bimbingan</button>
      </div>`;
    box.querySelectorAll("button").forEach(btn=>btn.onclick=()=>answerRead(Number(btn.dataset.score)));
    area.appendChild(box);
  }
  startTimer(q.type==="read" ? 30 : 20);
}

function startTimer(seconds){
  timeLeft=seconds;$("timerDisplay").textContent=timeLeft;
  timer=setInterval(()=>{
    timeLeft--;$("timerDisplay").textContent=timeLeft;
    if(timeLeft<=0){
      clearInterval(timer);
      if(!answered) handleWrong("Masa tamat!");
    }
  },1000);
}

function award(baseXp, coins=1){
  const xp = doubleActive ? baseXp*2 : baseXp;
  earnedXp += xp; earnedCoins += coins;
  doubleActive=false;
}

function answerChoice(btn, selected, answer){
  if(answered) return;
  answered=true; clearInterval(timer);
  document.querySelectorAll(".answer-btn").forEach(b=>b.disabled=true);
  if(selected===answer){
    btn.classList.add("correct");
    correct++; award(5 + (timeLeft>10?2:0),2);
    showFeedback("✅ Betul! Hebat!",true);
  } else {
    btn.classList.add("wrong");
    [...document.querySelectorAll(".answer-btn")].find(b=>b.textContent===answer)?.classList.add("correct");
    handleWrong(`❌ Jawapan betul: ${answer}`, true);
    return;
  }
  $("nextQuestionBtn").classList.remove("hidden");
}

function answerRead(score){
  if(answered) return;
  answered=true; clearInterval(timer);
  if(score>0){
    correct++;
    award(score===2 ? 8 : 5, score===2 ? 3 : 2);
    showFeedback(score===2 ? "🌟 Bacaan lancar!" : "✅ Bacaan baik!",true);
  } else {
    handleWrong("💡 Cuba baca semula dengan bimbingan.", true);
    return;
  }
  $("nextQuestionBtn").classList.remove("hidden");
}

function handleWrong(msg, alreadyAnswered=false){
  if(!alreadyAnswered) answered=true;
  clearInterval(timer);
  if(shieldActive){
    shieldActive=false;
    showFeedback("🛡️ Shield melindungi nyawa! "+msg,false);
  } else {
    lives=Math.max(0,lives-1);
    $("livesDisplay").textContent = "❤️".repeat(lives) + "🖤".repeat(3-lives);
    showFeedback(msg,false);
  }
  if(lives<=0){
    setTimeout(()=>finishLevel(false),800);
  } else {
    $("nextQuestionBtn").classList.remove("hidden");
  }
}

function showFeedback(text,ok){
  $("feedback").textContent=text;
  $("feedback").className="feedback "+(ok?"ok":"bad");
}

function nextQuestion(){
  if(qIndex < questions.length-1){
    qIndex++; renderQuestion();
  } else finishLevel(true);
}

function finishLevel(reachedEnd){
  clearInterval(timer);
  const total = questions.length;
  const stars = correct===total ? 3 : correct>=Math.ceil(total*.6) ? 2 : correct>=Math.ceil(total*.4) ? 1 : 0;
  const passed = reachedEnd && stars>=1;
  if(passed){
    earnedXp += 10;
    earnedCoins += 5;
    state.xp += earnedXp;
    state.coins += earnedCoins;
    const prev = state.completed[currentLevel.id];
    if(!prev || stars>prev.stars) state.completed[currentLevel.id]={stars,correct,total};
    if(currentLevel.id===state.unlocked && state.unlocked<33) state.unlocked++;
    updateStreak();
  }
  const h = state.history[currentLevel.id] || {attempts:0,correct:0,questions:0};
  h.attempts++; h.correct += correct; h.questions += total;
  state.history[currentLevel.id]=h;
  saveState(); updateHeader();

  $("resultTitle").textContent = passed ? (currentLevel.id===33 ? "👑 FINAL BOSS DIKALAHKAN!" : "LEVEL COMPLETE!") : "CUBA LAGI";
  $("resultMessage").textContent = passed
    ? `Tahniah ${state.name}! Anda menamatkan Level ${currentLevel.id}.`
    : `Anda mendapat ${correct}/${total}. Cuba lagi untuk membuka level seterusnya.`;
  $("resultStars").textContent = stars ? "⭐".repeat(stars)+"☆".repeat(3-stars) : "☆☆☆";
  $("earnedXp").textContent = passed ? `+${earnedXp}` : "+0";
  $("earnedCoins").textContent = passed ? `+${earnedCoins}` : "+0";
  $("correctCount").textContent = `${correct}/${total}`;
  $("nextLevelBtn").classList.toggle("hidden", !passed || currentLevel.id===33);
  showScreen("resultScreen");
}

function usePower(type){
  if(answered || !currentLevel) return;
  if((state.powers[type]||0)<=0){ showFeedback("Power ini sudah habis.",false);return; }
  state.powers[type]--; saveState(); updatePowerUI();
  const q=questions[qIndex];
  if(type==="hint"){
    showFeedback(`💡 Hint: jawapan bermula dengan "${q.answer.slice(0, Math.min(2,q.answer.length))}"`,true);
  }
  if(type==="shield"){
    shieldActive=true; showFeedback("🛡️ Shield aktif untuk soalan ini.",true);
  }
  if(type==="skip"){
    showFeedback("🔄 Soalan dilangkau.",true);
    setTimeout(nextQuestion,400);
  }
  if(type==="double"){
    doubleActive=true; showFeedback("⚡ XP berganda untuk jawapan betul seterusnya!",true);
  }
}

$("continueBtn").onclick=()=>startLevel(Math.min(state.unlocked,33));
$("mapBtn").onclick=()=>{renderMap();showScreen("mapScreen");};
$("profileBtn").onclick=()=>{renderProfile();showScreen("profileScreen");};
$("teacherBtn").onclick=()=>{renderTeacher();showScreen("teacherScreen");};
$("saveNameBtn").onclick=()=>{
  const v=$("playerNameInput").value.trim();
  if(v){state.name=v;saveState();updateHeader();}
};
$("resetBtn").onclick=()=>{
  if(confirm("Padam semua kemajuan BACAQUEST pada peranti ini?")){
    localStorage.removeItem("bacaquest-state");
    state=structuredClone(DEFAULT_STATE);updateHeader();renderMap();
  }
};
document.querySelectorAll(".backBtn").forEach(b=>b.onclick=()=>{clearInterval(timer);updateHeader();showScreen("homeScreen");});
$("nextQuestionBtn").onclick=nextQuestion;
$("replayBtn").onclick=()=>startLevel(currentLevel.id);
$("nextLevelBtn").onclick=()=>startLevel(Math.min(currentLevel.id+1,33));
$("resultHomeBtn").onclick=()=>{updateHeader();showScreen("homeScreen");};
document.querySelectorAll(".power-bar button").forEach(b=>b.onclick=()=>usePower(b.dataset.power));

updateHeader();
renderMap();
