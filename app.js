const LEVELS = [
  {
    id: 1, world: "Dunia 1: Kota Huruf", title: "Padankan Huruf Kecil dan Huruf Besar", icon: "🔤",
    questions: [
      ["Padankan huruf kecil a dengan huruf besar.", "A", ["A", "B", "D", "E"]],
      ["Padankan huruf kecil b dengan huruf besar.", "B", ["P", "D", "B", "R"]],
      ["Padankan huruf kecil c dengan huruf besar.", "C", ["G", "O", "C", "S"]],
      ["Padankan huruf kecil d dengan huruf besar.", "D", ["B", "D", "P", "T"]],
      ["Padankan huruf kecil e dengan huruf besar.", "E", ["F", "A", "E", "I"]]
    ]
  },
  {
    id: 2, world: "Dunia 2: Pulau Suku Kata", title: "Kenali Suku Kata", icon: "🧩",
    questions: [
      ["Pilih suku kata ba.", "ba", ["da", "ba", "ca", "ga"]],
      ["Pilih suku kata ca.", "ca", ["ga", "da", "ba", "ca"]],
      ["Pilih suku kata ga.", "ga", ["ca", "ga", "ba", "da"]],
      ["Pilih suku kata da.", "da", ["ba", "ca", "da", "ga"]],
      ["Pilih suku kata ma.", "ma", ["na", "la", "ma", "pa"]]
    ]
  },
  {
    id: 3, world: "Dunia 3: Rimba Perkataan", title: "Kenali Perkataan", icon: "📖",
    questions: [
      ["Pilih perkataan bom.", "bom", ["dam", "teh", "bom", "gam"]],
      ["Pilih perkataan dam.", "dam", ["bom", "dam", "jam", "teh"]],
      ["Pilih perkataan teh.", "teh", ["gam", "bom", "teh", "dam"]],
      ["Pilih perkataan gam.", "gam", ["jam", "gam", "dam", "bom"]],
      ["Pilih perkataan jam.", "jam", ["teh", "dam", "jam", "gam"]]
    ]
  },
  {
    id: 4, world: "Dunia 4: Bandar Perkataan", title: "Perkataan KV + KV + KV", icon: "🚗",
    questions: [
      ["Pilih perkataan basikal.", "basikal", ["kereta", "ketupat", "basikal", "kelapa"]],
      ["Pilih perkataan ketupat.", "ketupat", ["basikal", "ketupat", "kereta", "tomato"]],
      ["Pilih perkataan kereta.", "kereta", ["kelapa", "kereta", "basikal", "ketupat"]],
      ["Pilih perkataan kelapa.", "kelapa", ["tomato", "basikal", "kelapa", "kereta"]],
      ["Pilih perkataan tomato.", "tomato", ["ketupat", "tomato", "kelapa", "basikal"]]
    ]
  },
  {
    id: 5, world: "Dunia 5: Taman Ayat", title: "Bacaan Ayat Mudah", icon: "✏️",
    questions: [
      ["Saya beli _____ biru.", "pen", ["pen", "buku", "baju", "beg"], "🖊️", "Gambar pen biru"],
      ["Ali menaiki _____ ke sekolah.", "basikal", ["kereta", "basikal", "kapal", "bas"], "🚲", "Gambar basikal"],
      ["Adik memakai _____ merah.", "baju", ["topi", "kasut", "baju", "beg"], "👕", "Gambar baju merah"],
      ["Kakak membaca sebuah _____.", "buku", ["buku", "pen", "meja", "bola"], "📘", "Gambar buku"],
      ["Ibu membawa sebuah _____.", "beg", ["bola", "beg", "buku", "cawan"], "👜", "Gambar beg"]
    ]
  }
];

const TOTAL_LEVELS = LEVELS.length;
const STORAGE_KEY = "bacaquest-state-v2";
const BADGES = LEVELS.map(level => ({ name: level.id === TOTAL_LEVELS ? "Bijak Baca Master" : `${level.title} Hero`, icon: level.icon, level: level.id }));
const DEFAULT_STATE = { name:"Pemain", xp:0, coins:20, unlocked:1, completed:{}, history:{}, powers:{hint:3,shield:2,skip:2,double:1}, streak:0, lastPlayDate:null };

let state = loadState();
let currentLevel = null;
let questions = [];
let qIndex = 0, lives = 3, correct = 0, earnedXp = 0, earnedCoins = 0, timeLeft = 20;
let timer = null, answered = false, shieldActive = false, doubleActive = false;
let selectedMatchLetter = null, matchedLetters = new Set(), matchRound = 0;
const $ = id => document.getElementById(id);

function loadState(){
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const loaded = saved ? {...DEFAULT_STATE, ...JSON.parse(saved)} : structuredClone(DEFAULT_STATE);
    loaded.unlocked = Math.max(1, Math.min(Number(loaded.unlocked)||1, TOTAL_LEVELS));
    return loaded;
  } catch(e){ return structuredClone(DEFAULT_STATE); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}
function completedCount(){ return LEVELS.filter(level=>state.completed[level.id]).length; }
function updateHeader(){
  $("playerNameDisplay").textContent=state.name||"Pemain";
  $("xpDisplay").textContent=state.xp; $("coinDisplay").textContent=state.coins; $("streakDisplay").textContent=state.streak;
  $("playerNameInput").value=state.name==="Pemain"?"":state.name;
  $("dailyProgress").style.width=Math.min(100,completedCount()/TOTAL_LEVELS*100)+"%";
}
function updateStreak(){
  const today=new Date().toISOString().slice(0,10);
  if(!state.lastPlayDate) state.streak=1;
  else if(state.lastPlayDate!==today){
    const days=Math.round((new Date(today+"T00:00:00")-new Date(state.lastPlayDate+"T00:00:00"))/86400000);
    state.streak=days===1?state.streak+1:1;
  }
  state.lastPlayDate=today; saveState();
}

function renderMap(){
  const map=$("worldMap"); map.innerHTML="";
  LEVELS.forEach(level=>{
    const section=document.createElement("div"); section.className="world-section";
    section.innerHTML=`<h3>${level.icon} ${level.world}</h3>`;
    const grid=document.createElement("div"); grid.className="level-grid";
    const unlocked=level.id<=state.unlocked, result=state.completed[level.id];
    const btn=document.createElement("button");
    btn.className="level-card"+(!unlocked?" locked":"")+(result?" completed":""); btn.disabled=!unlocked;
    btn.innerHTML=`<div class="num">Level ${level.id}</div><small>${level.title}</small><div class="stars-mini">${result?"⭐".repeat(result.stars)+"☆".repeat(3-result.stars):(unlocked?"▶ Mula":"🔒 Terkunci")}</div>`;
    btn.onclick=()=>startLevel(level.id); grid.appendChild(btn); section.appendChild(grid); map.appendChild(section);
  });
}
function rankForXp(xp){
  if(xp>=250)return["👑","BIJAK BACA MASTER"];
  if(xp>=175)return["🥇","Pembaca Emas"];
  if(xp>=100)return["🥈","Pembaca Perak"];
  if(xp>=50)return["🥉","Pembaca Gangsa"];
  return["🌱","Pembaca Baharu"];
}
function renderProfile(){
  const [icon,rank]=rankForXp(state.xp);
  $("rankCard").innerHTML=`<h2>${icon} ${rank}</h2><p>${state.name} • ${state.xp} XP • ${completedCount()}/${TOTAL_LEVELS} level selesai</p>`;
  $("badgeGrid").innerHTML="";
  BADGES.forEach(b=>{const won=!!state.completed[b.level],div=document.createElement("div"); div.className="badge"+(won?"":" locked"); div.innerHTML=`<div class="icon">${b.icon}</div><h3>${b.name}</h3><p>${won?"Diperoleh":"Kunci di Level "+b.level}</p>`; $("badgeGrid").appendChild(div);});
}
function renderTeacher(){
  const attempts=Object.values(state.history).reduce((a,h)=>a+(h.attempts||0),0);
  const totalCorrect=Object.values(state.history).reduce((a,h)=>a+(h.correct||0),0);
  const totalQuestions=Object.values(state.history).reduce((a,h)=>a+(h.questions||0),0);
  const accuracy=totalQuestions?Math.round(totalCorrect/totalQuestions*100):0, [icon,rank]=rankForXp(state.xp);
  $("teacherSummary").innerHTML=`<div class="metric"><span>Murid</span><b>${state.name}</b></div><div class="metric"><span>Level Selesai</span><b>${completedCount()}/${TOTAL_LEVELS}</b></div><div class="metric"><span>Ketepatan</span><b>${accuracy}%</b></div><div class="metric"><span>Jumlah Cubaan</span><b>${attempts}</b></div><div class="metric"><span>XP</span><b>${state.xp}</b></div><div class="metric"><span>Rank</span><b>${icon} ${rank}</b></div>`;
  const rows=LEVELS.map(l=>{const h=state.history[l.id]||{},c=state.completed[l.id]; return `<tr><td>${l.id}</td><td>${l.title}</td><td>${c?"⭐".repeat(c.stars):"-"}</td><td>${h.attempts||0}</td><td>${h.correct||0}/${h.questions||0}</td></tr>`;}).join("");
  $("teacherLevelTable").innerHTML=`<table><thead><tr><th>Level</th><th>Topik</th><th>Bintang</th><th>Cubaan</th><th>Betul</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}
function buildQuestions(level){
  if(level.id===1) return [{type:"match",prompt:"Seret dan padankan huruf besar dengan huruf kecil.",letters:"abcdefghijkl".split("")}];
  return level.questions.map(([prompt,answer,options,image,imageLabel])=>({type:"choice",prompt,answer,options:shuffle(options),image,imageLabel}));
}
function startLevel(id){
  currentLevel=LEVELS.find(l=>l.id===id); if(!currentLevel)return;
  questions=buildQuestions(currentLevel); qIndex=0; lives=3; correct=0; earnedXp=0; earnedCoins=0; answered=false; shieldActive=false; doubleActive=false;
  selectedMatchLetter=null; matchedLetters=new Set(); matchRound=0;
  $("levelTitle").textContent=`Level ${id} — ${currentLevel.title}`; $("worldTitle").textContent=currentLevel.world;
  document.querySelector(".power-bar").classList.toggle("hidden",id===1);
  updatePowerUI(); showScreen("gameScreen"); renderQuestion();
}
function updatePowerUI(){ $("hintCount").textContent=state.powers.hint; $("shieldCount").textContent=state.powers.shield; $("skipCount").textContent=state.powers.skip; $("doubleCount").textContent=state.powers.double; }
function renderQuestion(){
  clearInterval(timer); answered=false; $("nextQuestionBtn").classList.add("hidden"); $("feedback").textContent=""; $("feedback").className="feedback";
  $("nextQuestionBtn").textContent="Soalan Seterusnya";
  $("questionCounter").textContent=`${qIndex+1}/${questions.length}`; $("livesDisplay").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives);
  const q=questions[qIndex];
  $("challengeType").textContent=currentLevel.id===1?"🔤 PADANKAN HURUF":currentLevel.id===5?"🖼️ ISI TEMPAT KOSONG":"🎯 PILIH JAWAPAN";
  $("questionText").textContent=q.prompt;
  const image=$("questionImage"); image.textContent=q.image||""; image.setAttribute("role",q.image?"img":"presentation"); image.setAttribute("aria-label",q.imageLabel||""); image.classList.toggle("visible",!!q.image);
  const area=$("answerArea"); area.innerHTML="";
  area.classList.toggle("match-mode",q.type==="match");
  if(q.type==="match"){
    renderMatchBoard(area,q.letters);
    startTimer(120);
    return;
  }
  q.options.forEach(opt=>{const b=document.createElement("button"); b.className="answer-btn"; b.textContent=opt; b.onclick=()=>answerChoice(b,opt,q.answer); area.appendChild(b);});
  startTimer(currentLevel.id===5?30:20);
}
function renderMatchBoard(area,letters){
  area.innerHTML="";
  const roundLetters=letters.slice(matchRound*6,matchRound*6+6);
  const board=document.createElement("div"); board.className="letter-match-board";
  const header=document.createElement("div"); header.className="match-board-header";
  header.innerHTML=`<div class="match-mascot" aria-hidden="true">🦊</div><div><strong>Pusingan ${matchRound+1} daripada 2</strong><span>Padankan 6 huruf dahulu</span></div><div class="match-score">${matchedLetters.size}/12 ⭐</div>`;
  const steps=document.createElement("div"); steps.className="match-steps";
  steps.innerHTML=`<span><b>1</b> Pilih kad kuning</span><span><b>2</b> Cari huruf kecil</span><span><b>3</b> Letak di petak hijau</span>`;
  const targets=document.createElement("div"); targets.className="letter-target-grid";
  roundLetters.forEach(letter=>{
    const pair=document.createElement("div"); pair.className="letter-pair";
    const lower=document.createElement("div"); lower.className="lower-letter-card"; lower.textContent=letter;
    const slot=document.createElement("button"); slot.className="letter-drop-slot"; slot.type="button"; slot.dataset.letter=letter.toUpperCase(); slot.setAttribute("aria-label",`Petak jawapan untuk huruf ${letter}`);
    slot.ondragover=event=>{event.preventDefault();slot.classList.add("drag-over");};
    slot.ondragleave=()=>slot.classList.remove("drag-over");
    slot.ondrop=event=>{event.preventDefault();slot.classList.remove("drag-over");placeMatchLetter(event.dataTransfer.getData("text/plain"),slot,letters);};
    slot.onclick=()=>{if(selectedMatchLetter)placeMatchLetter(selectedMatchLetter,slot,letters);};
    pair.append(lower,slot); targets.appendChild(pair);
  });
  const instruction=document.createElement("p"); instruction.className="match-instruction"; instruction.innerHTML="👆 <strong>Ketik</strong> kad dan petak, atau <strong>seret</strong> kad ke petak hijau.";
  const bank=document.createElement("div"); bank.className="uppercase-bank"; bank.setAttribute("aria-label","Pilihan huruf besar");
  shuffle(roundLetters.map(letter=>letter.toUpperCase())).forEach(letter=>{
    const tile=document.createElement("button"); tile.className="uppercase-tile"; tile.type="button"; tile.textContent=letter; tile.draggable=true; tile.dataset.letter=letter;
    tile.ondragstart=event=>{event.dataTransfer.setData("text/plain",letter);selectMatchTile(tile,letter);};
    tile.onclick=()=>selectMatchTile(tile,letter);
    bank.appendChild(tile);
  });
  board.append(header,steps,targets,instruction,bank); area.appendChild(board);
}
function selectMatchTile(tile,letter){
  document.querySelectorAll(".uppercase-tile").forEach(item=>item.classList.remove("selected"));
  document.querySelectorAll(".letter-drop-slot").forEach(item=>item.classList.toggle("suggested",item.dataset.letter===letter));
  selectedMatchLetter=letter; tile.classList.add("selected");
  playMatchTone(420,.06);
  showFeedback(`Bagus! Kad ${letter} dipilih. Cari huruf kecil yang sama.`,true);
}
function placeMatchLetter(letter,slot,letters){
  if(!letter||answered||matchedLetters.has(letter))return;
  if(slot.dataset.letter!==letter){
    slot.classList.remove("shake"); void slot.offsetWidth; slot.classList.add("shake");
    playMatchTone(180,.12); showFeedback(`Hampir! Cuba cari huruf kecil ${letter.toLowerCase()}.`,false); return;
  }
  matchedLetters.add(letter); selectedMatchLetter=null; slot.textContent=letter; slot.classList.add("filled"); slot.disabled=true;
  document.querySelectorAll(".letter-drop-slot").forEach(item=>item.classList.remove("suggested"));
  document.querySelector(`.uppercase-tile[data-letter="${letter}"]`)?.remove();
  playMatchTone(660,.1); burstMatchStars(slot);
  showFeedback(`🎉 Betul! ${letter.toLowerCase()} dipadankan dengan ${letter}.`,true);
  const roundComplete=(matchRound===0&&matchedLetters.size===6)||(matchRound===1&&matchedLetters.size===12);
  if(roundComplete&&matchedLetters.size<12){
    showFeedback("🌈 Hebat! Pusingan 1 selesai. Jom sambung!",true);
    setTimeout(()=>{matchRound=1;selectedMatchLetter=null;renderMatchBoard($("answerArea"),letters);},900);
  }
  if(matchedLetters.size===12){
    answered=true; clearInterval(timer); correct=1; award(25,10);
    showFeedback("🌟 Hebat! Semua 12 huruf berjaya dipadankan!",true);
    $("nextQuestionBtn").textContent="Lihat Keputusan"; $("nextQuestionBtn").classList.remove("hidden");
  }
}
function playMatchTone(frequency,duration){
  try{const AudioCtx=window.AudioContext||window.webkitAudioContext;const ctx=new AudioCtx(),osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=frequency;gain.gain.setValueAtTime(.08,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+duration);}catch(error){}
}
function burstMatchStars(slot){
  for(let i=0;i<5;i++){const star=document.createElement("span");star.className="match-star";star.textContent=i%2?"⭐":"✨";star.style.setProperty("--x",`${(i-2)*26}px`);slot.appendChild(star);setTimeout(()=>star.remove(),700);}
}
function startTimer(seconds){timeLeft=seconds; $("timerDisplay").textContent=timeLeft; timer=setInterval(()=>{timeLeft--; $("timerDisplay").textContent=timeLeft; if(timeLeft<=0){clearInterval(timer); if(!answered)handleWrong("Masa tamat!");}},1000);}
function award(baseXp,coins=1){earnedXp+=doubleActive?baseXp*2:baseXp; earnedCoins+=coins; doubleActive=false;}
function answerChoice(btn,selected,answer){
  if(answered)return; answered=true; clearInterval(timer); document.querySelectorAll(".answer-btn").forEach(b=>b.disabled=true);
  if(selected===answer){btn.classList.add("correct"); correct++; award(5+(timeLeft>10?2:0),2); showFeedback("✅ Betul! Hebat!",true); $("nextQuestionBtn").classList.remove("hidden"); return;}
  btn.classList.add("wrong"); [...document.querySelectorAll(".answer-btn")].find(b=>b.textContent===answer)?.classList.add("correct"); handleWrong(`❌ Jawapan betul: ${answer}`,true);
}
function handleWrong(msg,alreadyAnswered=false){
  if(!alreadyAnswered)answered=true; clearInterval(timer);
  if(shieldActive){shieldActive=false; showFeedback("🛡️ Shield melindungi nyawa! "+msg,false);}
  else{lives=Math.max(0,lives-1); $("livesDisplay").textContent="❤️".repeat(lives)+"🖤".repeat(3-lives); showFeedback(msg,false);}
  if(lives<=0)setTimeout(()=>finishLevel(false),800); else $("nextQuestionBtn").classList.remove("hidden");
}
function showFeedback(text,ok){$("feedback").textContent=text; $("feedback").className="feedback "+(ok?"ok":"bad");}
function nextQuestion(){if(qIndex<questions.length-1){qIndex++;renderQuestion();}else finishLevel(true);}
function finishLevel(reachedEnd){
  clearInterval(timer); const total=questions.length, stars=correct===total?3:correct>=Math.ceil(total*.6)?2:correct>=Math.ceil(total*.4)?1:0, passed=reachedEnd&&stars>=1;
  if(passed){earnedXp+=10;earnedCoins+=5;state.xp+=earnedXp;state.coins+=earnedCoins;const prev=state.completed[currentLevel.id];if(!prev||stars>prev.stars)state.completed[currentLevel.id]={stars,correct,total};if(currentLevel.id===state.unlocked&&state.unlocked<TOTAL_LEVELS)state.unlocked++;updateStreak();}
  const h=state.history[currentLevel.id]||{attempts:0,correct:0,questions:0};h.attempts++;h.correct+=correct;h.questions+=total;state.history[currentLevel.id]=h;saveState();updateHeader();
  $("resultTitle").textContent=passed?(currentLevel.id===TOTAL_LEVELS?"👑 SEMUA LEVEL SELESAI!":"LEVEL COMPLETE!"):"CUBA LAGI";
  $("resultMessage").textContent=passed?`Tahniah ${state.name}! Anda menamatkan Level ${currentLevel.id}.`:`Anda mendapat ${correct}/${total}. Cuba lagi untuk membuka level seterusnya.`;
  $("resultStars").textContent=stars?"⭐".repeat(stars)+"☆".repeat(3-stars):"☆☆☆"; $("earnedXp").textContent=passed?`+${earnedXp}`:"+0"; $("earnedCoins").textContent=passed?`+${earnedCoins}`:"+0"; $("correctCount").textContent=`${correct}/${total}`;
  $("nextLevelBtn").classList.toggle("hidden",!passed||currentLevel.id===TOTAL_LEVELS);showScreen("resultScreen");
}
function usePower(type){
  if(answered||!currentLevel)return;if((state.powers[type]||0)<=0){showFeedback("Power ini sudah habis.",false);return;}state.powers[type]--;saveState();updatePowerUI();const q=questions[qIndex];
  if(type==="hint")showFeedback(`💡 Hint: jawapan bermula dengan “${q.answer.slice(0,Math.min(2,q.answer.length))}”`,true);
  if(type==="shield"){shieldActive=true;showFeedback("🛡️ Shield aktif untuk soalan ini.",true);} if(type==="skip"){showFeedback("🔄 Soalan dilangkau.",true);setTimeout(nextQuestion,400);} if(type==="double"){doubleActive=true;showFeedback("⚡ XP berganda untuk jawapan betul seterusnya!",true);}
}

$("continueBtn").onclick=()=>startLevel(Math.min(state.unlocked,TOTAL_LEVELS));
$("mapBtn").onclick=()=>{renderMap();showScreen("mapScreen");}; $("profileBtn").onclick=()=>{renderProfile();showScreen("profileScreen");}; $("teacherBtn").onclick=()=>{renderTeacher();showScreen("teacherScreen");};
$("saveNameBtn").onclick=()=>{const v=$("playerNameInput").value.trim();if(v){state.name=v;saveState();updateHeader();}};
$("resetBtn").onclick=()=>{if(confirm("Padam semua kemajuan BACAQUEST pada peranti ini?")){localStorage.removeItem(STORAGE_KEY);state=structuredClone(DEFAULT_STATE);updateHeader();renderMap();}};
document.querySelectorAll(".backBtn").forEach(b=>b.onclick=()=>{clearInterval(timer);updateHeader();showScreen("homeScreen");});
$("nextQuestionBtn").onclick=nextQuestion; $("replayBtn").onclick=()=>startLevel(currentLevel.id); $("nextLevelBtn").onclick=()=>startLevel(Math.min(currentLevel.id+1,TOTAL_LEVELS)); $("resultHomeBtn").onclick=()=>{updateHeader();showScreen("homeScreen");};
document.querySelectorAll(".power-bar button").forEach(b=>b.onclick=()=>usePower(b.dataset.power));
updateHeader(); renderMap();
