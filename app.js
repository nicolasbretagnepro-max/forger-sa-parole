// ============================================================
// FORGER SA PAROLE — Application v2
// ============================================================

// ── State ────────────────────────────────────────────────────
const STATE = {
  currentScreen: 'home',
  currentSession: null,
  currentDetailTab: 'cours',
  currentVocabFilter: 'Tous',
  flashcardIndex: 0,
  flashcardFlipped: false,
  readingProgress: 0,

  get progress()      { return JSON.parse(localStorage.getItem('fsp_progress') || '{}'); },
  get streak()        { return JSON.parse(localStorage.getItem('fsp_streak')   || '{"count":0,"best":0,"lastDate":null}'); },
  get baselineTotal() { return parseInt(localStorage.getItem('fsp_baseline')   || '0'); },
  get wordsLearned()  { return JSON.parse(localStorage.getItem('fsp_words')    || '[]'); },
  get sessionLog()    { return JSON.parse(localStorage.getItem('fsp_log')      || '[]'); },
};

// ── Persistence ──────────────────────────────────────────────
function saveProgress(sessionId, done) {
  const p = STATE.progress;
  p[sessionId] = done;
  localStorage.setItem('fsp_progress', JSON.stringify(p));
  if (done) appendLog(sessionId);
}

function appendLog(sessionId) {
  const log = STATE.sessionLog;
  log.push({ id: sessionId, date: new Date().toISOString() });
  localStorage.setItem('fsp_log', JSON.stringify(log));
}

function updateStreak() {
  const today = new Date().toDateString();
  let s = STATE.streak;
  if (s.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const wasStreak = s.count;
  const broken = s.lastDate && s.lastDate !== yesterday && s.count > 1;
  s.count = s.lastDate === yesterday ? s.count + 1 : 1;
  s.best  = Math.max(s.best, s.count);
  s.lastDate = today;
  localStorage.setItem('fsp_streak', JSON.stringify(s));
  // Message de compassion si streak perdu
  if (broken) {
    setTimeout(() => showToast(`Streak de ${wasStreak} jours interrompu — mais tu reviens 💪`), 500);
  }
  // Célébration des jalons de streak
  const streakMilestones = { 3: 'Streak de 3 jours 🔥', 7: 'Une semaine de suite ! 🌟', 30: 'Streak de 30 jours — exceptionnel 🏆' };
  if (streakMilestones[s.count]) {
    setTimeout(() => showToast(streakMilestones[s.count]), 1000);
  }
}

function saveBaseline(total) {
  localStorage.setItem('fsp_baseline', total.toString());
}

function markWordLearned(word) {
  const w = STATE.wordsLearned;
  if (!w.includes(word)) {
    w.push(word);
    localStorage.setItem('fsp_words', JSON.stringify(w));
    // Mise à jour de la stat "Mots" sur l'accueil si visible
    const statWords = document.getElementById('stat-words');
    if (statWords) statWords.textContent = w.length;
    // Jalon de mémorisation : toast de félicitation aux seuils clés
    const milestones = [10, 20, 35];
    if (milestones.includes(w.length)) {
      const labels = { 10: '10 mots mémorisés 🎓', 20: '20 mots mémorisés 🔥', 35: 'Vocabulaire maîtrisé ! 🏆' };
      showToast(labels[w.length]);
    }
  }
}

// ── Navigation ───────────────────────────────────────────────
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(screen + '-screen').classList.add('active');
  document.querySelector(`[data-screen="${screen}"]`)?.classList.add('active');
  STATE.currentScreen = screen;
  if (screen === 'home')     renderHome();
  if (screen === 'sessions') renderSessions();
  if (screen === 'vocab')    renderVocab();
  if (screen === 'figures')  renderFigures();
  if (screen === 'quiz')     renderQuiz();
}

// ── HOME ─────────────────────────────────────────────────────
function renderHome() {
  const progress = STATE.progress;
  const done  = Object.values(progress).filter(Boolean).length;
  const total = CONTENT.sessions.length;
  const pct   = Math.round((done / total) * 100);
  const streak = STATE.streak;
  const baseline = STATE.baselineTotal;
  const words = STATE.wordsLearned.length;

  // Progress ring
  const circ = 2 * Math.PI * 36;
  document.getElementById('home-ring-fill').style.strokeDasharray  = circ;
  document.getElementById('home-ring-fill').style.strokeDashoffset = circ - (pct / 100) * circ;
  document.getElementById('home-progress-pct').textContent = pct + '%';

  // Next session
  const next = CONTENT.sessions.find(s => !progress[s.id]);
  document.getElementById('home-next-label').textContent = next
    ? `Session ${next.id} — ${next.theme}`
    : 'Programme terminé 🎉';
  document.getElementById('home-next-desc').textContent = next
    ? `${next.format} · ${next.duration}`
    : 'Reviens aux sessions pour réviser.';
  document.getElementById('home-next-btn').onclick = () => next ? openSession(next.id) : navigate('sessions');
  document.getElementById('home-next-btn').textContent = next ? '▶ Commencer' : '↩ Revoir';

  // Stats
  document.getElementById('stat-sessions').textContent = done;
  document.getElementById('stat-streak').textContent   = streak.count;
  document.getElementById('stat-score').textContent    = baseline > 0 ? baseline + '/100' : '—';
  document.getElementById('stat-words').textContent    = words;

  // Streak
  document.getElementById('streak-count').textContent = streak.count;
  document.getElementById('streak-best').textContent  = `Meilleur : ${streak.best} jour${streak.best !== 1 ? 's' : ''}`;
}

// ── SESSIONS ─────────────────────────────────────────────────
function renderSessions() {
  const progress = STATE.progress;
  const container = document.getElementById('sessions-list');
  container.innerHTML = '';
  const colors = ['#5856D6','#007AFF','#FF2D55','#FF9500','#34C759','#AF52DE','#FF3B30','#0099CC','#5856D6','#FF9F0A'];

  CONTENT.sessions.forEach((session, idx) => {
    const isDone    = !!progress[session.id];
    const isAtelier = session.type === 'atelier';
    const div = document.createElement('div');
    div.className = 'session-card';
    div.innerHTML = `
      <div class="session-icon-wrap" style="background:${colors[idx]}22;">
        <span style="font-size:26px;">${session.icon}</span>
      </div>
      <div class="session-info">
        <div class="session-number">Session ${session.id}</div>
        <div class="session-theme">${session.theme}</div>
        <div class="session-meta">${session.format}</div>
        <div class="session-objective">${session.objectif || ''}</div>
        <div class="session-badges">
          <span class="badge badge-${session.type}">${isAtelier ? '⚡ Atelier' : '📖 Normale'}</span>
          <span class="badge badge-duration">${session.duration}</span>
          ${isDone ? '<span class="badge badge-done">✓ Complétée</span>' : ''}
          ${session.id === 6 && !progress[5] ? '<span class="badge badge-prereq">Après S5</span>' : ''}
          ${session.id === 10 && !progress[9] ? '<span class="badge badge-prereq">Après S9</span>' : ''}
        </div>
      </div>
      ${isDone ? '<div class="session-check">✓</div>' : ''}
    `;
    div.addEventListener('click', () => openSession(session.id));
    container.appendChild(div);
  });
}

// ── SESSION DETAIL ───────────────────────────────────────────
function openSession(sessionId) {
  const session = CONTENT.sessions.find(s => s.id === sessionId);
  if (!session) return;
  STATE.currentSession  = session;
  STATE.currentDetailTab = 'cours';
  STATE.readingProgress  = 0;

  const detail = document.getElementById('session-detail');
  detail.classList.add('open');

  document.getElementById('detail-session-title').textContent = session.theme;
  document.getElementById('detail-session-sub').textContent   = `Session ${session.id} · ${session.format} · ${session.duration}`;
  document.getElementById('detail-objectif').textContent      = session.objectif || '';

  // Reset tabs
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === 'cours'));

  // Show/hide ressources tab
  const resTab = document.querySelector('[data-tab="ressources"]');
  if (resTab) resTab.style.display = session.resources ? '' : 'none';

  renderDetailTab('cours');
  document.querySelector('.detail-body').scrollTop = 0;
  updateReadingProgress();
}

function closeSession() {
  document.getElementById('session-detail').classList.remove('open');
  if (STATE.currentScreen === 'sessions') renderSessions();
  if (STATE.currentScreen === 'home')     renderHome();
}

function switchDetailTab(tab) {
  STATE.currentDetailTab = tab;
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  renderDetailTab(tab);
  document.querySelector('.detail-body').scrollTop = 0;
}

// ── Reading progress bar ──────────────────────────────────────
function updateReadingProgress() {
  const body = document.querySelector('.detail-body');
  if (!body) return;
  const pct = body.scrollHeight <= body.clientHeight ? 100
    : Math.round((body.scrollTop / (body.scrollHeight - body.clientHeight)) * 100);
  const bar = document.getElementById('reading-bar');
  if (bar) bar.style.width = pct + '%';
}

// ── Render tab content ────────────────────────────────────────
function renderDetailTab(tab) {
  const session = STATE.currentSession;
  if (!session) return;
  const isDone = !!STATE.progress[session.id];

  document.querySelectorAll('.detail-tab-content').forEach(c => c.classList.remove('active'));
  const pane = document.getElementById('tab-' + tab);
  if (pane) pane.classList.add('active');

  // ── COURS ──
  if (tab === 'cours') {
    // Connexions inter-sessions
    const connHTML = (session.connections || []).map(id => {
      const s = CONTENT.sessions.find(x => x.id === id);
      return s ? `<button class="conn-btn" onclick="openSession(${id})">${s.icon} S${id}</button>` : '';
    }).join('');

    pane.innerHTML = `
      ${connHTML ? `<div class="connections-row"><span class="conn-label">Connexions :</span>${connHTML}</div>` : ''}
      <div class="course-content">${session.content}</div>
      <div class="anchor-card">
        <div class="anchor-title">⚡ Ancrage flash</div>
        <div class="anchor-text">${session.anchor}</div>
      </div>
      <div class="action-card">
        <div class="action-title">🎯 Action de la semaine</div>
        <div class="action-text">${session.action}</div>
      </div>
      <button class="complete-btn ${isDone ? 'done' : 'todo'}" onclick="toggleComplete(${session.id})">
        ${isDone ? '✓ Session complétée' : 'Marquer comme complétée'}
      </button>
    `;
  }

  // ── EXERCICES ──
  if (tab === 'exercices') {
    let html = '<div style="margin-bottom:12px;">';
    const hasContent = (session.quiz && session.quiz.length) || session.exercise || session.quizMcq || session.writingExercise;

    if (!hasContent) {
      html += `<div class="empty-exercise-msg">
        <div class="empty-exercise-icon">📋</div>
        <div class="empty-exercise-title">Session sans atelier pratique</div>
        <div class="empty-exercise-desc">Cette session est une révision ou un bilan — elle n'a pas d'exercice dédié. Revois les sessions précédentes ou consulte l'onglet Ressources.</div>
      </div>`;
      html += '</div>';
      pane.innerHTML = html;
      return;
    }

    // ── MCQ interactif ──
    if (session.quizMcq && session.quizMcq.length) {
      const sid = session.id;
      html += `<div class="section-label-sm">🎯 Quiz interactif</div>`;
      html += `<div class="mcq-block" id="mcq-block-${sid}">`;
      session.quizMcq.forEach((q, qi) => {
        html += `<div class="mcq-card" id="mcq-${sid}-${qi}">
          <div class="mcq-num">Question ${qi + 1} / ${session.quizMcq.length}</div>
          <div class="mcq-q">${q.q}</div>
          <div class="mcq-options">`;
        q.options.forEach((opt, oi) => {
          html += `<button class="mcq-opt" onclick="window.answerMcq(${sid},${qi},${oi})">${opt}</button>`;
        });
        html += `</div>
          <div class="mcq-explication" id="mcq-expl-${sid}-${qi}" style="display:none">${q.explication}</div>
        </div>`;
      });
      html += `<div class="mcq-score" id="mcq-score-${sid}" style="display:none"></div>`;
      html += `</div>`;
    }

    // ── Quiz flashcards (open Q&A) ──
    if (session.quiz && session.quiz.length) {
      html += '<div class="section-label-sm" style="margin-top:16px;">📖 Questions approfondies</div>';
      session.quiz.forEach((q, i) => {
        html += `
          <div class="quiz-card">
            <div class="quiz-q">${q.q}</div>
            <button class="quiz-reveal-btn" onclick="revealAnswer(this)">Voir la réponse</button>
            <div class="quiz-answer">${q.a}</div>
          </div>`;
      });
    }

    // ── Atelier exercise (cases) ──
    if (session.exercise) {
      const ex = session.exercise;
      if (ex.cases && ex.cases.length) {
        html += `<div class="section-label-sm" style="margin-top:16px;">⚡ Atelier pratique</div>`;
        html += `<div class="exercise-card">
          <div class="exercise-header">
            <span class="exercise-icon">⚡</span>
            <div>
              <div class="exercise-title">${ex.title}</div>
              <div class="exercise-duration">⏱ ${ex.duration}</div>
            </div>
          </div>
          <div class="exercise-instruction">${ex.instruction}</div>`;
        ex.cases.forEach((c, i) => {
          html += `
            <div class="exercise-case">
              <div class="exercise-case-text">${c.text}</div>
              <button class="quiz-reveal-btn" onclick="revealAnswer(this)">Voir la correction</button>
              <div class="quiz-answer">${c.answer}</div>
            </div>`;
        });
        html += `</div>`;
      }
    }

    // ── Exercice d'écriture avec Claude ──
    if (session.writingExercise) {
      const we = session.writingExercise;
      const sid = session.id;
      html += `<div class="section-label-sm" style="margin-top:16px;">✍️ Exercice d'écriture</div>`;
      html += `<div class="writing-exercise-card">
        <div class="we-header">
          <div class="we-title">${we.title}</div>
          <div class="we-duration">⏱ ${we.duration}</div>
        </div>
        <div class="we-instruction">${we.instruction}</div>
        <textarea class="we-textarea" id="we-text-${sid}" placeholder="Rédigez votre réponse ici…" rows="8"></textarea>
        <div class="we-actions">
          <button class="we-claude-btn" onclick="window.copyWritingToClaudePrompt(${sid})">
            🤖 Corriger avec Claude
          </button>
        </div>
        <div class="we-hint">Votre texte + les critères de correction seront copiés dans le presse-papier. Collez dans votre Projet Claude pour obtenir une correction détaillée.</div>
      </div>`;
    }

    html += '</div>';
    pane.innerHTML = html;
  }

  // ── RESSOURCES ──
  if (tab === 'ressources') {
    const r = session.resources;
    if (!r) { pane.innerHTML = '<p style="padding:16px;color:var(--text-secondary)">Pas de ressources pour cette session.</p>'; return; }

    let html = '';

    if (r.extraits && r.extraits.length) {
      html += '<div class="res-section"><div class="res-section-title">📜 Extraits canoniques</div>';
      r.extraits.forEach(e => {
        html += `
          <div class="res-card">
            <div class="res-card-title">${e.titre}</div>
            <div class="res-card-text">${e.texte}</div>
          </div>`;
      });
      html += '</div>';
    }

    if (r.discours && r.discours.length) {
      html += '<div class="res-section"><div class="res-section-title">🎙️ Discours à analyser</div>';
      html += '<div class="res-external-hint">⚠️ Les liens s\'ouvrent dans Safari — glisse depuis le bord gauche pour revenir.</div>';
      r.discours.forEach(d => {
        html += `
          <div class="res-card res-card-link" onclick="openExternal('${d.lien}')">
            <div class="res-card-title">${d.titre} <span class="res-link-icon">↗</span></div>
            <div class="res-card-text">${d.desc}</div>
          </div>`;
      });
      html += '</div>';
    }

    if (r.biblio && r.biblio.length) {
      html += '<div class="res-section"><div class="res-section-title">📚 Bibliographie commentée</div>';
      r.biblio.forEach(b => {
        html += `
          <div class="res-card">
            <div class="res-card-title">${b.titre}</div>
            <div class="res-card-author">${b.auteur}</div>
            <div class="res-card-note">💬 ${b.note}</div>
          </div>`;
      });
      html += '</div>';
    }

    pane.innerHTML = html || '<p style="padding:16px;color:var(--text-secondary)">Ressources à venir.</p>';
  }
}

// ── Claude prompt builder ─────────────────────────────────────
function buildClaudePrompt(session, exercise) {
  return `Tu es mon professeur de rhétorique — exigeant, précis, ancré dans la tradition mais tourné vers l'usage immédiat.

## Contexte
Je travaille sur la Session ${session.id} du programme "Forger sa Parole" : **${session.theme}**.
Objectif de cette session : ${session.objectif}

## Exercice
**${exercise.title}** (${exercise.duration})
${exercise.instruction}

## Ma réponse
[Écris ta réponse ici]

## Consignes de correction
Évalue ma réponse sur 4 axes (note de 1 à 5 pour chacun) :
1. **Clarté** — Est-ce que je m'exprime sans ambiguïté ?
2. **Précision** — Est-ce que j'utilise les bons mots, les bons concepts ?
3. **Profondeur** — Est-ce que je vais au-delà de la surface du sujet ?
4. **Style** — Est-ce que la forme sert le fond ?

Pour chaque axe : note + une phrase d'explication + le mot ou la tournure exacte à corriger si nécessaire.
Puis : 1 point fort et 1 action concrète à appliquer dans les 7 jours.
Ne jamais donner de feedback vague ("c'est bien") — toujours le mot ou la tournure exacte.`;
}

function escapeBacktick(str) {
  return str.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

// ── MCQ interactif ────────────────────────────────────────────
window.answerMcq = function(sessionId, questionIndex, selectedOption) {
  const session = CONTENT.sessions.find(s => s.id === sessionId);
  if (!session || !session.quizMcq) return;
  const q = session.quizMcq[questionIndex];
  if (!q) return;

  const card = document.getElementById(`mcq-${sessionId}-${questionIndex}`);
  if (!card || card.dataset.answered) return;
  card.dataset.answered = '1';

  const opts = card.querySelectorAll('.mcq-opt');
  opts.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('mcq-opt-correct');
    else if (i === selectedOption) btn.classList.add('mcq-opt-wrong');
  });

  const expl = document.getElementById(`mcq-expl-${sessionId}-${questionIndex}`);
  if (expl) expl.style.display = '';

  // Vérifier si toutes les questions ont été répondues
  const block = document.getElementById(`mcq-block-${sessionId}`);
  if (!block) return;
  const allCards = block.querySelectorAll('.mcq-card');
  const answered = block.querySelectorAll('.mcq-card[data-answered]');
  if (answered.length === allCards.length) {
    // Calculer le score
    let correct = 0;
    session.quizMcq.forEach((mq, qi) => {
      const c = document.getElementById(`mcq-${sessionId}-${qi}`);
      if (!c) return;
      const sel = parseInt(c.dataset.answered === '1' ? c.querySelector('.mcq-opt-correct, .mcq-opt-wrong') && (() => {
        const opts2 = c.querySelectorAll('.mcq-opt');
        let sel2 = -1;
        opts2.forEach((b, i) => { if (b.classList.contains('mcq-opt-correct') || (b.classList.contains('mcq-opt-wrong'))) sel2 = i; });
        return sel2;
      })() : -1, 10);
      // Vérifier si la réponse était correcte (option correcte a la classe mcq-opt-correct et n'est pas wronge)
      const correctBtn = c.querySelector('.mcq-opt-correct');
      const wrongBtn = c.querySelector('.mcq-opt-wrong');
      if (correctBtn && !wrongBtn) correct++;
      // ou si l'utilisateur a sélectionné la bonne réponse (pas de wrong)
    });

    // Calcul simplifié : compter les cartes sans mcq-opt-wrong
    correct = 0;
    session.quizMcq.forEach((mq, qi) => {
      const c = document.getElementById(`mcq-${sessionId}-${qi}`);
      if (c && !c.querySelector('.mcq-opt-wrong')) correct++;
    });

    const scoreEl = document.getElementById(`mcq-score-${sessionId}`);
    if (scoreEl) {
      const pct = Math.round((correct / session.quizMcq.length) * 100);
      let msg = pct === 100 ? '🏆 Parfait !' : pct >= 66 ? '✓ Bien !' : '↩ Revoir le cours';
      scoreEl.innerHTML = `<span class="mcq-score-num">${correct}/${session.quizMcq.length}</span> <span class="mcq-score-label">${msg}</span>`;
      scoreEl.style.display = '';
      if (pct === 100) showToast('Quiz parfait ! 🏆');
    }
  }
};

// ── Exercice d'écriture → Claude ─────────────────────────────
window.copyWritingToClaudePrompt = function(sessionId) {
  const session = CONTENT.sessions.find(s => s.id === sessionId);
  if (!session || !session.writingExercise) return;
  const we = session.writingExercise;
  const textarea = document.getElementById(`we-text-${sessionId}`);
  const userText = textarea ? textarea.value.trim() : '';

  const prompt = `Tu es mon professeur de rhétorique et de communication — exigeant, précis, ancré dans la tradition rhétorique mais tourné vers l'usage immédiat.

## Contexte
Je travaille sur la Session ${session.id} du programme "Forger sa Parole" : **${session.theme}**.
Objectif : ${session.objectif}

## Exercice réalisé
**${we.title}** (${we.duration})
${we.instruction}

## Ma réponse
${userText || '[ÉCRIS TA RÉPONSE ICI AVANT DE COPIER]'}

## Consignes de correction
${we.correctionCriteria}

En plus de la grille ci-dessus :
- Identifie la phrase ou le passage le plus fort de ma réponse — et dis pourquoi.
- Identifie la phrase ou le passage le plus faible — et réécris-le en mieux.
- Donne une note globale /20 avec justification en 2 lignes.
- Termine par une action concrète que je peux appliquer dans les 7 prochains jours.

Ne jamais donner de feedback vague ("c'est bien écrit"). Toujours citer le mot ou la tournure exacte à améliorer.`;

  navigator.clipboard.writeText(prompt).then(() => {
    showToast('Prompt copié ! Collez dans votre Projet Claude.');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = prompt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Prompt copié !');
  });
};

function copyToClaudePrompt(prompt) {
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('Prompt copié ! Collez-le dans votre Projet Claude.');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = prompt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Prompt copié !');
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Toggle complete ───────────────────────────────────────────
function toggleComplete(sessionId) {
  const wasDone = !!STATE.progress[sessionId];
  saveProgress(sessionId, !wasDone);
  if (!wasDone) {
    updateStreak();
    // Jalon de progression : toast spécial aux seuils
    const done = Object.values(STATE.progress).filter(Boolean).length;
    const milestones = { 1: 'Première session terminée — bon début ! 🎯', 5: 'Mi-parcours — tu tiens le cap ! 🔥', 10: 'Programme complet ! 🏆 Vir bonus dicendi peritus.' };
    if (milestones[done]) {
      setTimeout(() => showToast(milestones[done]), 1500); // après la célébration
    }
    showCelebration(sessionId);
  }
  renderDetailTab(STATE.currentDetailTab);
}

function showCelebration(sessionId) {
  const session = CONTENT.sessions.find(s => s.id === sessionId);
  const emojis  = ['🎉','🏆','⚡','🔥','💪','🎯','✨','🧠'];
  document.getElementById('cel-emoji').textContent = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById('cel-title').textContent = `Session ${sessionId} complétée !`;
  document.getElementById('cel-desc').textContent  = `"${session ? session.theme : ''}"`;
  document.getElementById('celebration').classList.add('show');
}

function closeCelebration() {
  document.getElementById('celebration').classList.remove('show');
  renderHome();
}

function revealAnswer(btn) {
  const ans = btn.nextElementSibling;
  // Mémoriser le texte d'origine avant de l'écraser
  if (!btn.dataset.originalText) btn.dataset.originalText = btn.textContent;
  ans.classList.toggle('visible');
  btn.textContent = ans.classList.contains('visible') ? 'Masquer' : btn.dataset.originalText;
}

// ── VOCABULARY ───────────────────────────────────────────────
function renderVocab() {
  const filter = STATE.currentVocabFilter;
  const search = (document.getElementById('vocab-search')?.value || '').toLowerCase().trim();
  const learned = STATE.wordsLearned;

  // Category filters
  const cats = ['Tous', ...new Set(CONTENT.vocabulary.map(v => v.category))];
  const fc   = document.getElementById('vocab-filters');
  fc.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('div');
    btn.className = 'cat-filter' + (cat === filter ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => { STATE.currentVocabFilter = cat; renderVocab(); });
    fc.appendChild(btn);
  });

  // Filter words
  const filtered = CONTENT.vocabulary.filter(v => {
    const matchCat    = filter === 'Tous' || v.category === filter;
    const matchSearch = !search || v.word.toLowerCase().includes(search) || v.def.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  // Flashcard
  if (filtered.length > 0) {
    STATE.flashcardIndex = STATE.flashcardIndex % filtered.length;
    renderVocabFlashcard(filtered);
  }

  // Counter
  const counter = document.getElementById('vocab-counter');
  if (counter) counter.textContent = `${filtered.length} mot${filtered.length > 1 ? 's' : ''} · ${learned.length} mémorisé${learned.length > 1 ? 's' : ''}`;

  // List
  const list = document.getElementById('vocab-list');
  list.innerHTML = '';
  filtered.forEach(v => {
    const isLearned = learned.includes(v.word);
    const item = document.createElement('div');
    item.className = 'vocab-item';
    item.innerHTML = `
      <div class="vocab-item-header">
        <div class="vocab-word">${v.word} ${isLearned ? '<span style="color:var(--accent-green);font-size:12px;">✓</span>' : ''}</div>
        <div class="vocab-cat-badge">${v.category}</div>
      </div>
      <div class="vocab-def-preview">${v.def}</div>
    `;
    item.addEventListener('click', () => openVocabModal(v));
    list.appendChild(item);
  });

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">Aucun mot trouvé</div></div>';
  }
}

function renderVocabFlashcard(filtered) {
  STATE.flashcardFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
  const fc = filtered[STATE.flashcardIndex];
  document.getElementById('fc-category').textContent      = fc.category;
  document.getElementById('fc-word').textContent          = fc.word;
  document.getElementById('fc-session').textContent       = fc.session ? `Session ${fc.session}` : '';
  document.getElementById('fc-back-category').textContent = fc.category;
  document.getElementById('fc-def').textContent           = fc.def;
  document.getElementById('fc-example').textContent       = fc.example;
  // Counter — uses the same filtered list passed as parameter (inclut la recherche textuelle)
  document.getElementById('fc-counter').textContent = `${STATE.flashcardIndex + 1} / ${filtered.length}`;
}

function flipFlashcard() {
  STATE.flashcardFlipped = !STATE.flashcardFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', STATE.flashcardFlipped);
  // La mémorisation est volontaire uniquement via le bouton du modal — pas automatique au flip
}

function nextFlashcard() {
  const filtered = CONTENT.vocabulary.filter(v => STATE.currentVocabFilter === 'Tous' || v.category === STATE.currentVocabFilter);
  STATE.flashcardIndex = (STATE.flashcardIndex + 1) % filtered.length;
  renderVocabFlashcard(filtered);
}

function prevFlashcard() {
  const filtered = CONTENT.vocabulary.filter(v => STATE.currentVocabFilter === 'Tous' || v.category === STATE.currentVocabFilter);
  STATE.flashcardIndex = (STATE.flashcardIndex - 1 + filtered.length) % filtered.length;
  renderVocabFlashcard(filtered);
}

function openVocabModal(v) {
  const learned = STATE.wordsLearned;
  document.getElementById('modal-word').textContent     = v.word;
  document.getElementById('modal-category').textContent = v.category;
  document.getElementById('modal-session-ref').textContent = v.session ? `Introduit en Session ${v.session}` : '';
  document.getElementById('modal-def').textContent      = v.def;
  document.getElementById('modal-example').textContent  = v.example;
  const learnBtn = document.getElementById('modal-learn-btn');
  const isAlreadyLearned = learned.includes(v.word);
  learnBtn.textContent = isAlreadyLearned ? '✓ Mémorisé' : 'Marquer comme mémorisé';
  learnBtn.className = 'modal-learn-btn' + (isAlreadyLearned ? ' modal-learn-btn-done' : '');
  learnBtn.onclick = () => {
    if (isAlreadyLearned) { closeVocabModal(); return; }
    markWordLearned(v.word);
    learnBtn.textContent = '✓ Mémorisé !';
    learnBtn.className = 'modal-learn-btn modal-learn-btn-done';
    // Fermeture avec délai pour que l'utilisateur voie la confirmation
    setTimeout(() => { closeVocabModal(); renderVocab(); }, 700);
  };
  document.getElementById('vocab-modal').classList.add('open');
}

function closeVocabModal() { document.getElementById('vocab-modal').classList.remove('open'); }

// ── FIGURES ──────────────────────────────────────────────────
function renderFigures() {
  const grid = document.getElementById('figures-grid');
  grid.innerHTML = '';
  const catColors = {
    'Répétition':'#5856D6','Contraste':'#FF2D55','Structure':'#007AFF',
    'Analogie':'#34C759','Intensité':'#FF9500','Substitution':'#AF52DE','Feinte':'#FF3B30'
  };

  CONTENT.figures.forEach(fig => {
    const color = catColors[fig.category] || '#5856D6';
    const card  = document.createElement('div');
    card.className = 'figure-card';
    card.innerHTML = `
      <div class="figure-icon">${fig.icon}</div>
      <div class="figure-name">${fig.name}</div>
      <div class="figure-category" style="color:${color}">${fig.category}</div>
      <div class="figure-def-preview">${fig.def}</div>
    `;
    card.addEventListener('click', () => openFigureModal(fig, color));
    grid.appendChild(card);
  });
}

function openFigureModal(fig, color) {
  document.getElementById('fig-modal-icon').textContent = fig.icon;
  document.getElementById('fig-modal-name').textContent = fig.name;
  document.getElementById('fig-modal-cat').textContent  = fig.category;
  document.getElementById('fig-modal-cat').style.color  = color || 'var(--accent)';
  document.getElementById('fig-modal-etym').textContent = fig.etymologie || '';
  document.getElementById('fig-modal-def').textContent  = fig.def;
  document.getElementById('fig-modal-effet').textContent = fig.effet;
  document.getElementById('fig-modal-usage').textContent = fig.usage;
  document.getElementById('fig-modal-pieges').textContent = fig.pieges;

  // Exemples (3 types)
  const exDiv = document.getElementById('fig-modal-exemples');
  exDiv.innerHTML = (fig.exemples || []).map(e => `
    <div class="fig-exemple">
      <div class="fig-exemple-type">${e.type}</div>
      <div class="fig-exemple-text">${e.texte}</div>
    </div>`).join('');

  // Réinitialiser le scroll du modal
  const sheet = document.querySelector('.figure-modal-sheet');
  if (sheet) sheet.scrollTop = 0;

  document.getElementById('figure-modal').classList.add('open');
}

function closeFigureModal() {
  document.getElementById('figure-modal').classList.remove('open');
}

// ── QUIZ / BASELINE ───────────────────────────────────────────
function renderQuiz() {
  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';
  const saved = STATE.baselineTotal;

  // Score banner if already done
  if (saved > 0) {
    const sd = CONTENT.baselineScore.find(s => saved >= s.min && saved <= s.max);
    container.innerHTML += `
      <div class="score-banner" style="background:linear-gradient(135deg,${sd.color}cc,${sd.color}88)">
        <div class="score-value">${saved}<span class="score-max">/100</span></div>
        <div class="score-label">${sd.label}</div>
        <div class="score-desc">${sd.desc}</div>
      </div>`;
  }

  // Score input
  container.innerHTML += `
    <div class="card" style="padding:16px;margin-bottom:12px;">
      <div style="font-size:16px;font-weight:700;margin-bottom:6px;">📊 Mon score de diagnostic</div>
      <div style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">Réponds aux questions, révèle les réponses idéales, estime ton score et enregistre-le.</div>
      <div style="display:flex;gap:10px;align-items:center;">
        <input type="number" id="score-input" min="0" max="100" placeholder="0 – 100"
          style="flex:1;padding:11px 14px;background:var(--surface2);border:none;border-radius:10px;font-size:16px;color:var(--text-primary);font-family:var(--font);outline:none;">
        <button onclick="submitScore()"
          style="background:var(--accent);color:white;border:none;border-radius:10px;padding:11px 18px;font-size:15px;font-weight:600;cursor:pointer;white-space:nowrap;">
          Enregistrer
        </button>
      </div>
    </div>`;

  // Questions
  const wrap = document.createElement('div');
  wrap.className = 'quiz-screen-card';
  CONTENT.baseline.forEach(bq => {
    const div = document.createElement('div');
    div.className = 'baseline-question';
    div.innerHTML = `
      <div class="bq-number">
        <span>Q${bq.id}</span>
        <span class="bq-points">${bq.points} pts</span>
      </div>
      <div class="bq-q">${bq.q}</div>
      <div class="bq-criteria">${(bq.criteria || []).map(c => `<span class="bq-criterion">${c}</span>`).join('')}</div>
      <button class="bq-show-btn" onclick="revealBaselineAnswer(this)">Voir la réponse idéale</button>
      <div class="bq-ideal">${bq.ideal}</div>
    `;
    wrap.appendChild(div);
  });
  container.appendChild(wrap);
}

function revealBaselineAnswer(btn) {
  const ideal = btn.nextElementSibling;
  ideal.classList.toggle('visible');
  btn.textContent = ideal.classList.contains('visible') ? 'Masquer' : 'Voir la réponse idéale';
}

function submitScore() {
  const val = parseInt(document.getElementById('score-input').value);
  if (isNaN(val) || val < 0 || val > 100) { showToast('Entre un score entre 0 et 100.'); return; }
  saveBaseline(val);
  renderQuiz();
  showToast('Score enregistré !');
}

function resetAllProgress() {
  if (!confirm('Réinitialiser toute la progression ? Sessions, mots mémorisés, streak et score seront effacés.')) return;
  ['fsp_progress', 'fsp_streak', 'fsp_baseline', 'fsp_words', 'fsp_log'].forEach(k => localStorage.removeItem(k));
  renderQuiz();
  renderHome();
  showToast('Progression réinitialisée.');
}

// ── Révision rapide ───────────────────────────────────────────
function startQuickReview() {
  const learned = STATE.wordsLearned;
  const unlearned = CONTENT.vocabulary.filter(v => !learned.includes(v.word));
  if (!unlearned.length) {
    showToast('Bravo — tous les mots sont mémorisés ! 🏆');
    return;
  }
  // Sélectionner jusqu'à 5 mots aléatoires non mémorisés
  const shuffled = unlearned.sort(() => Math.random() - 0.5).slice(0, 5);
  openQuickReviewModal(shuffled);
}

function openQuickReviewModal(words) {
  let idx = 0;
  let flipped = false;

  const overlay = document.createElement('div');
  overlay.id = 'quick-review-overlay';
  overlay.className = 'qr-overlay';

  function render() {
    const w = words[idx];
    overlay.innerHTML = `
      <div class="qr-sheet">
        <div class="qr-header">
          <div class="qr-close" onclick="document.getElementById('quick-review-overlay').remove()">✕</div>
          <div class="qr-title">Révision rapide</div>
          <div class="qr-progress">${idx + 1} / ${words.length}</div>
        </div>
        <div class="qr-card ${flipped ? 'flipped' : ''}" id="qr-card" onclick="toggleQrFlip()">
          <div class="qr-face qr-front">
            <div class="qr-cat">${w.category}</div>
            <div class="qr-word">${w.word}</div>
            <div class="qr-hint">Touche pour révéler</div>
          </div>
          <div class="qr-face qr-back">
            <div class="qr-cat">${w.category}</div>
            <div class="qr-def">${w.def}</div>
            <div class="qr-example">${w.example}</div>
          </div>
        </div>
        <div class="qr-actions">
          <button class="qr-btn qr-btn-skip" onclick="qrNext()">→ Suivant</button>
          <button class="qr-btn qr-btn-learn" onclick="qrMarkAndNext('${w.word}')">✓ Mémorisé</button>
        </div>
        <div class="qr-dots">${words.map((_, i) => `<div class="qr-dot ${i < idx ? 'done' : i === idx ? 'active' : ''}"></div>`).join('')}</div>
      </div>`;
    flipped = false;
  }

  window.toggleQrFlip = () => {
    flipped = !flipped;
    document.getElementById('qr-card')?.classList.toggle('flipped', flipped);
  };

  window.qrNext = () => {
    idx++;
    if (idx >= words.length) { overlay.remove(); showToast('Révision terminée ! 💪'); return; }
    render();
  };

  window.qrMarkAndNext = (word) => {
    markWordLearned(word);
    idx++;
    if (idx >= words.length) { overlay.remove(); showToast('Révision terminée — mots mémorisés ! 🎓'); renderVocab(); return; }
    render();
  };

  render();
  document.body.appendChild(overlay);
}

// ── Lien externe (iOS PWA safe) ───────────────────────────────
function openExternal(url) {
  // Sur iOS en mode PWA, window.open peut quitter l'app
  // On utilise un lien <a> créé dynamiquement pour garder le contexte
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ── Swipe (flashcard) ─────────────────────────────────────────
let touchStartX = 0, touchStartY = 0;
function initSwipe(el, onLeft, onRight) {
  el.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; }, { passive: true });
  el.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) dx < 0 ? onLeft() : onRight();
  }, { passive: true });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.screen));
  });

  // Detail tabs
  document.querySelectorAll('.detail-tab').forEach(tab => {
    tab.addEventListener('click', () => switchDetailTab(tab.dataset.tab));
  });

  // Back btn
  document.getElementById('back-btn').addEventListener('click', closeSession);

  // Vocab search
  document.getElementById('vocab-search')?.addEventListener('input', () => renderVocab());

  // Flashcard
  document.getElementById('flashcard')?.addEventListener('click', flipFlashcard);
  const fcContainer = document.getElementById('flashcard-container');
  if (fcContainer) initSwipe(fcContainer, nextFlashcard, prevFlashcard);
  document.getElementById('fc-prev')?.addEventListener('click', prevFlashcard);
  document.getElementById('fc-next')?.addEventListener('click', nextFlashcard);

  // Modal close on backdrop
  document.getElementById('vocab-modal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('vocab-modal')) closeVocabModal();
  });
  document.getElementById('figure-modal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('figure-modal')) closeFigureModal();
  });

  // Reading progress
  document.querySelector('.detail-body')?.addEventListener('scroll', updateReadingProgress, { passive: true });

  // Initial
  renderHome();
  navigate('home');
});
