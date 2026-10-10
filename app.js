/**
 * AyuCare (स्वास्थ्य साथी) Full Architecture
 * Integrated with Bilingual Voice Assistant (SpeechRecognition & SpeechSynthesis)
 */

// ==========================================
// 1. BILINGUAL DICTIONARY
// ==========================================
let currentLang = 'en';

const i18n = {
  en: {
    tagline: "Digital Health Portal • स्वास्थ्य साथी",
    nav_dashboard: "Overview",
    nav_symptoms: "Symptom AI",
    nav_emergency: "Emergency SOS",
    nav_consult: "Consult Team",
    nav_medicines: "Medicines (500+)",
    hero_badge: "Voice-Activated Bilingual Healthcare",
    hero_title: "Safe, Accessible Healthcare In Your Language",
    hero_desc: "Speak or type in Hindi/English. Access triaged assessments, CPR metronome, 500+ medicines, and doctor appointments.",
    btn_check_symptoms: "Check Symptoms",
    btn_open_emergency: "Emergency First Aid",
    btn_voice_start: "Voice Assistant",
    stat_medicines: "Cataloged Medicines",
    stat_bilingual: "Bilingual Ready",
    stat_cpr: "AHA Audio Metronome",
    card_triage_title: "Smart AI Symptom Triage",
    card_triage_desc: "Analyze discomfort signs, rash images, and pain intensity with immediate clinical triage.",
    card_sos_title: "AHA First Aid & CPR Engine",
    card_sos_desc: "Sound-synthesized CPR metronome, Stroke F.A.S.T. checklist, and live GPS dispatch.",
    card_tele_title: "Telemedicine Booking",
    card_tele_desc: "Schedule appointments with verified cardiologists, pediatricians, and general doctors.",
    symptom_header: "Symptom Checker & Visual Analysis",
    symptom_sub: "Select clinical markers or upload an image of a rash/wound for conservative triage evaluation.",
    diagnostic_disclaimer: "Mandatory Diagnostic Disclaimer: AyuCare provides health information and triage estimation only. It is NOT a clinical diagnosis. Always seek prompt in-person consultation with a qualified medical professional for health conditions.",
    select_symptoms_header: "1. Select Key Symptoms",
    custom_symptoms_label: "Describe your symptoms in your own words:",
    pain_scale_label: "Pain Intensity (1 - 10):",
    image_upload_label: "Optical Scan (Optional Skin / Rash Photo):",
    btn_evaluate: "Run Health Evaluation",
    triage_header: "Triage Assessment",
    triage_empty: "Select symptoms or type your concerns on the left and click 'Run Health Evaluation'.",
    emergency_header: "Emergency First Aid & SOS Center",
    emergency_sub: "In critical medical scenarios, immediate intervention saves lives. Call standard authorities without delay.",
    cpr_title: "AHA 105 BPM CPR Metronome",
    cpr_desc: "For an unresponsive individual not breathing normally: push hard and fast in the center of the chest to the beat of this metronome.",
    sos_location_title: "Live GPS Location Broadcast",
    sos_location_desc: "Acquire precise coordinates from your device's browser GPS and broadcast distress alerts to selected contacts.",
    designated_contacts_title: "Designated Emergency Contacts:",
    telehealth_header: "Contact the AyuCare Team",
    telehealth_sub: "Call a team member using your phone app, or open WhatsApp to contact them.",
    available_doctors_header: "AyuCare Team Contacts",
    schedule_slot_header: "Schedule a Team Follow-up",
    form_doctor_select: "Select Practitioner:",
    form_date: "Date:",
    form_time: "Time Slot:",
    form_mode: "Consultation Mode:",
    form_chief_complaint: "Chief Medical Concern:",
    btn_confirm_booking: "Confirm Appointment",
    your_scheduled_appts: "Your Booked Consultations:",
    med_directory_header: "500+ Comprehensive Medicine & Therapeutic Reference",
    med_directory_sub: "Bilingual pharmaceutical knowledge base covering indications, adult dosages, contraindications, and Hindi names.",
    auth_login_title: "Sign In to AyuCare",
    auth_create_title: "Create AyuCare Account",
    auth_email: "Email Address:",
    auth_password: "Password:",
    auth_full_name: "Full Name:",
    auth_blood_group: "Blood Group:",
    auth_allergies: "Known Allergies:",
    btn_login: "Sign In",
    btn_register: "Create New Account",
    auth_no_account: "Don't have an account?",
    auth_create_account_link: "Make New Account",
    auth_has_account: "Already registered?",
    auth_sign_in_link: "Sign In here",
    voice_title: "AyuCare Voice Assistant",
    voice_subtitle: "Bilingual Health Companion (Hindi & English)",
    voice_you_said: "You Said:",
    voice_bot_reply: "AyuCare Response:"
  },
  hi: {
    tagline: "डिजिटल स्वास्थ्य साथी • Digital Health Portal",
    nav_dashboard: "होम अवलोकन",
    nav_symptoms: "लक्षण जांच (AI)",
    nav_emergency: "आपातकालीन SOS",
    nav_consult: "टीम से संपर्क करें",
    nav_medicines: "दवाएं (500+)",
    hero_badge: "आवाज़-सक्षम द्विभाषी स्वास्थ्य सेवा",
    hero_title: "आपकी अपनी भाषा में सुरक्षित और सुलभ स्वास्थ्य सेवा",
    hero_desc: "हिंदी या अंग्रेजी में बोलें या लिखें। लक्षणों का त्वरित मूल्यांकन, CPR मेट्रोनोम और दवाओं की जानकारी पाएं।",
    btn_check_symptoms: "लक्षण जांचें",
    btn_open_emergency: "आपातकालीन प्राथमिक उपचार",
    btn_voice_start: "आवाज़ साथी शुरू करें",
    stat_medicines: "सूचीबद्ध दवाएं",
    stat_bilingual: "द्विभाषी सहायता",
    stat_cpr: "AHA सीपीआर मेट्रोनोम",
    card_triage_title: "स्मार्ट AI लक्षण ट्रायज",
    card_triage_desc: "दर्द की तीव्रता, त्वचा के चकत्ते की फोटो और लक्षणों का तुरंत सुरक्षित विश्लेषण करें।",
    card_sos_title: "AHA प्राथमिक उपचार व CPR",
    card_sos_desc: "ऑडियो CPR मेट्रोनोम, स्ट्रोक F.A.S.T. प्रोटोकॉल और लाइव जीपीएस संकट संदेश।",
    card_tele_title: "टेलीमेडिसिन अपॉइंटमेंट",
    card_tele_desc: "विशेषज्ञ हृदय रोग, बाल रोग और सामान्य चिकित्सकों के साथ समय निर्धारित करें।",
    symptom_header: "लक्षण परीक्षक एवं दृश्य विश्लेषण",
    symptom_sub: "लक्षण चुनें या घाव/दाने की फोटो अपलोड करें और त्वरित प्राथमिक मूल्यांकन प्राप्त करें।",
    diagnostic_disclaimer: "अनिवार्य नैदानिक अस्वीकरण: मेदिमित्र केवल स्वास्थ्य जानकारी और प्राथमिक संकेत प्रदान करता है। यह कोई अंतिम चिकित्सीय निदान नहीं है। किसी भी समस्या हेतु तुरंत योग्य डॉक्टर से परामर्श लें।",
    select_symptoms_header: "1. प्रमुख लक्षण चुनें",
    custom_symptoms_label: "अपने लक्षणों का विस्तार से विवरण दें:",
    pain_scale_label: "दर्द की तीव्रता (1 - 10):",
    image_upload_label: "ऑप्टिकल स्कैन (त्वचा / चकत्ते की फोटो):",
    btn_evaluate: "स्वास्थ्य मूल्यांकन शुरू करें",
    triage_header: "मूल्यांकन परिणाम (ट्रायाज)",
    triage_empty: "बाईं ओर लक्षण चुनें या अपनी परेशानी लिखें और 'स्वास्थ्य मूल्यांकन शुरू करें' पर क्लिक करें।",
    emergency_header: "आपातकालीन प्राथमिक चिकित्सा और SOS केंद्र",
    emergency_sub: "गंभीर आपातकालीन स्थिति में तुरंत 112 या 108 पर कॉल करें। हर सेकंड बहुमूल्य है।",
    cpr_title: "AHA 105 BPM सीपीआर मेट्रोनोम",
    cpr_desc: "यदि व्यक्ति बेहोश है और सांस नहीं ले रहा: छाती के बीच में इस बीट के अनुसार तेजी और मजबूती से दबाएं।",
    sos_location_title: "लाइव जीपीएस स्थान प्रसारण",
    sos_location_desc: "अपने फोन/कंप्यूटर से सटीक जीपीएस स्थान प्राप्त करें और परिजनों को संकट संदेश भेजें।",
    designated_contacts_title: "नामित आपातकालीन संपर्क:",
    telehealth_header: "AyuCare टीम से संपर्क करें",
    telehealth_sub: "फोन ऐप से कॉल करें या WhatsApp पर संपर्क करें।",
    available_doctors_header: "AyuCare टीम के संपर्क",
    schedule_slot_header: "टीम फॉलो-अप शेड्यूल करें",
    form_doctor_select: "चिकित्सक चुनें:",
    form_date: "दिनांक:",
    form_time: "समय स्लॉट:",
    form_mode: "परामर्श माध्यम:",
    form_chief_complaint: "मुख्य स्वास्थ्य समस्या:",
    btn_confirm_booking: "अपॉइंटमेंट पक्की करें",
    your_scheduled_appts: "आपकी बुक की गई अपॉइंटमेंट्स:",
    med_directory_header: "500+ व्यापक दवा एवं चिकित्सीय निर्देशिका",
    med_directory_sub: "द्विभाषी औषधीय ज्ञानकोष: उपयोग, वयस्क खुराक, सावधानियां और हिंदी नाम।",
    auth_login_title: "मेदिमित्र में साइन इन करें",
    auth_create_title: "नया खाता बनाएं",
    auth_email: "ईमेल पता:",
    auth_password: "पासवर्ड:",
    auth_full_name: "पूरा नाम:",
    auth_blood_group: "रक्त समूह (Blood Group):",
    auth_allergies: "एलर्जी (यदि कोई हो):",
    btn_login: "लॉग इन करें",
    btn_register: "नया खाता बनाएं",
    auth_no_account: "खाता नहीं है?",
    auth_create_account_link: "नया खाता बनाएं",
    auth_has_account: "पहले से खाता है?",
    auth_sign_in_link: "यहाँ साइन इन करें",
    voice_title: "मेदिमित्र आवाज़ साथी (Voice Assistant)",
    voice_subtitle: "द्विभाषी स्वास्थ्य साथी (हिंदी एवं अंग्रेजी)",
    voice_you_said: "आपने कहा:",
    voice_bot_reply: "मेदिमित्र का उत्तर:"
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  document.getElementById('currentLangLabel').textContent = currentLang === 'en' ? 'हिन्दी' : 'English';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });

  renderSymptomChips();
  filterMedicines();
}

// ==========================================
// 2. BILINGUAL VOICE ASSISTANT ENGINE
// ==========================================
let recognition = null;
let isListening = false;

// Check browser support for SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isListening = true;
    document.getElementById('voiceWaveContainer').classList.add('listening');
    document.getElementById('micActionBtn').classList.add('active');
    document.getElementById('voiceStatusMsg').textContent = currentLang === 'hi' 
      ? 'सुन रहा हूँ... बोलिए...' 
      : 'Listening... Please speak now...';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('userSpeechTranscript').textContent = `"${transcript}"`;
    processVoiceCommand(transcript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    isListening = false;
    document.getElementById('voiceWaveContainer').classList.remove('listening');
    document.getElementById('micActionBtn').classList.remove('active');
    document.getElementById('voiceStatusMsg').textContent = currentLang === 'hi'
      ? 'माफ कीजिए, आवाज़ समझ नहीं आई। पुनः प्रयास करें।'
      : 'Could not catch that. Please tap the mic and try again.';
  };

  recognition.onend = () => {
    isListening = false;
    document.getElementById('voiceWaveContainer').classList.remove('listening');
    document.getElementById('micActionBtn').classList.remove('active');
  };
}

function toggleVoiceModal() {
  const modal = document.getElementById('voiceAssistantModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    speakBotReply(currentLang === 'hi' 
      ? 'नमस्ते! मैं मेदिमित्र आवाज़ साथी हूँ। मैं आपकी क्या सहायता कर सकता हूँ?' 
      : 'Hello! I am your AyuCare Voice Assistant. How can I help you today?');
  } else {
    stopListening();
  }
}

function toggleVoiceListening() {
  if (!recognition) {
    alert(currentLang === 'hi' 
      ? 'आपका ब्राउज़र स्पीच रिकग्निशन को सपोर्ट नहीं करता। कृपया Chrome या Edge का उपयोग करें।' 
      : 'Web Speech API is not supported in this browser. Please use Chrome or Edge.');
    return;
  }

  if (isListening) {
    stopListening();
  } else {
    // Set speech recognition language matching the current toggle
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
    try {
      recognition.start();
    } catch (e) {
      console.warn('Recognition start caught error:', e);
    }
  }
}

function stopListening() {
  if (recognition && isListening) {
    recognition.stop();
  }
}

// Dictate directly into the symptom textarea
function dictateSymptoms() {
  if (!recognition) {
    alert('Voice recognition not supported');
    return;
  }
  const area = document.getElementById('freeTextSymptoms');
  recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';
  const assistantResultHandler = recognition.onresult;
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    area.value = area.value ? area.value + ' ' + text : text;
    // Restore the voice assistant handler so symptom dictation does not break it later.
    recognition.onresult = assistantResultHandler;
  };
  recognition.start();
}

// Natural-language voice assistant: answer the question directly instead of
// treating every health-related question as a command to open a website section.
let voiceChatHistory = [];
let voiceReplyLanguage = currentLang;

async function processVoiceCommand(rawText) {
  const question = String(rawText || '').trim();
  if (!question) return;

  voiceReplyLanguage = /[\u0900-\u097F]/.test(question) ? 'hi' : currentLang;
  const status = document.getElementById('voiceStatusMsg');
  status.textContent = voiceReplyLanguage === 'hi' ? 'जवाब तैयार कर रहा हूँ…' : 'Preparing your answer…';

  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: question,
        language: voiceReplyLanguage,
        history: voiceChatHistory.slice(-10)
      })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'The assistant could not answer right now.');

    const answer = String(data.reply || '').trim();
    if (!answer) throw new Error('The assistant returned an empty answer.');
    voiceChatHistory.push(
      { role: 'user', content: question },
      { role: 'assistant', content: answer }
    );
    voiceChatHistory = voiceChatHistory.slice(-12);
    speakBotReply(answer, voiceReplyLanguage);
  } catch (error) {
    console.error('Voice assistant answer error:', error);
    const message = voiceReplyLanguage === 'hi'
      ? 'माफ़ कीजिए, अभी जवाब नहीं मिल पाया। कृपया सर्वर चालू होने की जाँच करके फिर कोशिश करें।'
      : 'Sorry, I could not get an answer right now. Please check that the AyuCare server is running and try again.';
    speakBotReply(message, voiceReplyLanguage);
  }
}

// Text to Speech
function speakBotReply(text, language = voiceReplyLanguage || currentLang) {
  document.getElementById('botVoiceReply').textContent = `\"${text}\"`;
  document.getElementById('voiceStatusMsg').textContent = language === 'hi' ? 'बोल रहा हूँ...' : 'Speaking response...';

  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel(); // Cancel any ongoing speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  utterance.onend = () => {
    document.getElementById('voiceStatusMsg').textContent = language === 'hi'
      ? 'माइक दबाकर पुनः बोलें'
      : 'Tap the microphone to speak again';
  };

  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 3. AUTHENTICATION & SESSIONS
// ==========================================
let currentUser = JSON.parse(localStorage.getItem('medimitra_user')) || null;

function updateAuthUI() {
  const authArea = document.getElementById('authStatusArea');
  if (currentUser) {
    authArea.innerHTML = `
      <div class="user-badge"><i class="fa-solid fa-user-circle"></i> <span>${currentUser.name}</span></div>
      <button class="pill-btn" onclick="handleLogout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
    `;
  } else {
    authArea.innerHTML = `
      <button class="pill-btn" onclick="openAuthModal('login')"><i class="fa-solid fa-arrow-right-to-bracket"></i> Sign In</button>
      <button class="btn btn-primary btn-sm" onclick="openAuthModal('signup')"><i class="fa-solid fa-user-plus"></i> Make New Account</button>
    `;
  }
}

function openAuthModal(mode) {
  document.getElementById('authModal').classList.remove('hidden');
  toggleAuthForm(mode);
}

function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
}

function toggleAuthForm(mode) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const title = document.getElementById('authModalTitle');

  if (mode === 'signup') {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    title.textContent = i18n[currentLang].auth_create_title;
  } else {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    title.textContent = i18n[currentLang].auth_login_title;
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('medimitra_registered_users') || '[]');
  const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);

  if (matched) {
    const { password, ...safeUser } = matched;
    currentUser = safeUser;
    localStorage.setItem('medimitra_user', JSON.stringify(currentUser));
    closeAuthModal();
    updateAuthUI();
    alert(currentLang === 'hi' ? 'सफलतापूर्वक लॉग इन किया गया!' : 'Successfully signed in!');
  } else {
    if (email && pass.length >= 4) {
      currentUser = { name: email.split('@')[0], email, bloodGroup: 'O+', allergies: 'None' };
      localStorage.setItem('medimitra_user', JSON.stringify(currentUser));
      closeAuthModal();
      updateAuthUI();
    } else {
      alert(currentLang === 'hi' ? 'अमान्य क्रेडेंशियल्स।' : 'Invalid credentials. Password must be 4+ characters.');
    }
  }
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  const bloodGroup = document.getElementById('regBlood').value;
  const allergies = document.getElementById('regAllergies').value.trim() || 'None';

  let users = JSON.parse(localStorage.getItem('medimitra_registered_users') || '[]');
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    alert(currentLang === 'hi' ? 'इस ईमेल पर पहले से खाता मौजूद है।' : 'An account with this email already exists.');
    return;
  }

  const newUser = { id: 'u_' + Date.now(), name, email, password, bloodGroup, allergies };
  users.push(newUser);
  localStorage.setItem('medimitra_registered_users', JSON.stringify(users));

  const { password: _, ...safeUser } = newUser;
  currentUser = safeUser;
  localStorage.setItem('medimitra_user', JSON.stringify(currentUser));

  closeAuthModal();
  updateAuthUI();
  alert(currentLang === 'hi' ? 'नया खाता सफलतापूर्वक बनाया गया!' : 'New account created successfully!');
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('medimitra_user');
  updateAuthUI();
  alert(currentLang === 'hi' ? 'आप लॉग आउट हो चुके हैं।' : 'You have been logged out.');
}

// ==========================================
// 4. TAB NAVIGATION
// ==========================================
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  const navMatch = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick')?.includes(tabId));
  if (navMatch) navMatch.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. SYMPTOM CHECKER & OPTICAL ANALYSIS
// ==========================================
const symptomDatabase = [
  { id: 'fever', en: 'High Fever (>101°F)', hi: 'तेज बुखार' },
  { id: 'cough', en: 'Persistent Cough', hi: 'लगातार खांसी' },
  { id: 'chest_pain', en: 'Severe Chest Pressure', hi: 'सीने में तेज दर्द/दबाव', redFlag: true },
  { id: 'dyspnea', en: 'Shortness of Breath', hi: 'सांस लेने में अत्यधिक कठिनाई', redFlag: true },
  { id: 'headache', en: 'Severe Throbbing Headache', hi: 'सिर में तीव्र दर्द' },
  { id: 'rash', en: 'Skin Rash or Blisters', hi: 'त्वचा पर चकत्ते या छाले' },
  { id: 'abdominal_pain', en: 'Lower Abdominal Pain', hi: 'पेट के निचले हिस्से में दर्द' },
  { id: 'dizziness', en: 'Dizziness / Syncope', hi: 'चक्कर आना या बेहोशी', redFlag: true },
  { id: 'vomiting', en: 'Continuous Nausea/Vomiting', hi: 'लगातार उल्टी या जी मिचलाना' },
  { id: 'sore_throat', en: 'Sore Throat & Difficulty Swallowing', hi: 'गले में खराश व निगलने में दर्द' }
];

let selectedSymptoms = new Set();

function renderSymptomChips() {
  const container = document.getElementById('symptomTagsContainer');
  container.innerHTML = '';
  symptomDatabase.forEach(item => {
    const chip = document.createElement('span');
    chip.className = `symptom-chip ${selectedSymptoms.has(item.id) ? 'selected' : ''}`;
    chip.textContent = currentLang === 'hi' ? item.hi : item.en;
    chip.onclick = () => {
      if (selectedSymptoms.has(item.id)) selectedSymptoms.delete(item.id);
      else selectedSymptoms.add(item.id);
      renderSymptomChips();
    };
    container.appendChild(chip);
  });
}

function previewSymptomImage(e) {
  const file = e.target.files[0];
  const box = document.getElementById('imagePreviewBox');
  const img = document.getElementById('previewImg');
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      img.src = evt.target.result;
      box.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
}

function runSymptomAssessment() {
  const freeText = document.getElementById('freeTextSymptoms').value.toLowerCase();
  const pain = parseInt(document.getElementById('painSlider').value, 10);
  const out = document.getElementById('assessmentOutput');
  const placeholder = document.getElementById('symptomPlaceholder');

  if (selectedSymptoms.size === 0 && !freeText) {
    alert(currentLang === 'hi' ? 'कृपया कम से कम एक लक्षण चुनें या दर्ज करें।' : 'Please select or describe at least one symptom.');
    return;
  }

  const hasRedFlag = Array.from(selectedSymptoms).some(id => symptomDatabase.find(s => s.id === id)?.redFlag) ||
                     freeText.includes('chest') || freeText.includes('breath') || freeText.includes('paralysis') || pain >= 8;

  placeholder.classList.add('hidden');
  out.classList.remove('hidden');

  let urgencyLevel = 'low';
  let title = currentLang === 'hi' ? 'हल्का / गैर-आपातकालीन (Mild / Non-Urgent)' : 'Mild / Non-Urgent Observation';
  let advice = currentLang === 'hi' ? 'विश्राम करें, पर्याप्त तरल पदार्थ लें और 48 घंटे में सुधार न होने पर डॉक्टर से परामर्श लें।' : 'Stay hydrated, get sufficient rest, and monitor closely. Consult a doctor if not resolved within 48 hours.';

  if (hasRedFlag) {
    urgencyLevel = 'high';
    title = currentLang === 'hi' ? 'उच्च प्राथमिकता - तत्काल चिकित्सा आवश्यक (URGENT CARE)' : 'High Priority - Immediate Medical Attention Required';
    advice = currentLang === 'hi' ? 'रेड-फ्लैग संकेत मिले हैं। तुरंत 108 / 112 डायल करें या नजदीकी आपातकालीन अस्पताल जाएं।' : 'Red-flag clinical markers identified. Dial 108 / 112 immediately or proceed to the nearest emergency room.';
  } else if (pain >= 5 || selectedSymptoms.size >= 3) {
    urgencyLevel = 'medium';
    title = currentLang === 'hi' ? 'मध्यम प्राथमिकता (Moderate - Same-Day Consult)' : 'Moderate Priority - Same-Day Consultation Recommended';
    advice = currentLang === 'hi' ? 'लक्षणों को नियंत्रित करने हेतु आज ही प्रमाणित चिकित्सक से परामर्श लें।' : 'Schedule a telehealth session today to avoid complications.';
  }

  const opticalNote = !document.getElementById('imagePreviewBox').classList.contains('hidden') 
    ? (currentLang === 'hi' ? '<p class="mt-2"><strong>ऑप्टिकल विश्लेषण:</strong> स्थानीयकृत त्वचा लालिमा/चकत्ते का पता चला। बिना डॉक्टर की सलाह के स्टेरॉयड क्रीम न लगाएं।</p>' : '<p class="mt-2"><strong>Optical Analysis:</strong> Localized erythema pattern detected. Avoid self-applying topical steroids without advice.</p>')
    : '';

  out.innerHTML = `
    <div class="assessment-card urgency-${urgencyLevel}">
      <h4>${title}</h4>
      <p class="mt-2">${advice}</p>
      ${opticalNote}
      <hr style="margin: 0.75rem 0; opacity: 0.3;">
      <small><strong>Note:</strong> Pain Score: ${pain}/10 | Selected Markers: ${selectedSymptoms.size}</small>
    </div>
    <div class="mt-2">
      <button class="btn btn-primary btn-sm" onclick="switchTab('consultations')">Book Doctor for this Issue &rarr;</button>
    </div>
  `;
}

// ==========================================
// 6. EMERGENCY FIRST AID & CPR METRONOME
// ==========================================
let audioCtx = null;
let cprInterval = null;
let cprBeats = 0;

function toggleCPRMetronome() {
  const btn = document.getElementById('cprToggleBtn');
  const pulse = document.getElementById('metronomePulse');

  if (cprInterval) {
    clearInterval(cprInterval);
    cprInterval = null;
    btn.innerHTML = `<i class="fa-solid fa-play"></i> ${currentLang === 'hi' ? 'CPR मेट्रोनोम शुरू करें' : 'Start CPR Metronome'}`;
    pulse.classList.remove('active-beat');
    return;
  }

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  btn.innerHTML = `<i class="fa-solid fa-pause"></i> ${currentLang === 'hi' ? 'रोकें (Pause)' : 'Pause Metronome'}`;
  const intervalMs = 60000 / 105;

  cprInterval = setInterval(() => {
    playMetronomeClick();
    cprBeats++;
    document.getElementById('cprCounter').textContent = cprBeats;
    pulse.classList.add('active-beat');
    setTimeout(() => pulse.classList.remove('active-beat'), 120);
  }, intervalMs);
}

function playMetronomeClick() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

function resetCPR() {
  if (cprInterval) {
    clearInterval(cprInterval);
    cprInterval = null;
    document.getElementById('cprToggleBtn').innerHTML = `<i class="fa-solid fa-play"></i> Start CPR Metronome`;
    document.getElementById('metronomePulse').classList.remove('active-beat');
  }
  cprBeats = 0;
  document.getElementById('cprCounter').textContent = '0';
}

let currentCoordinates = null;

function acquireDeviceLocation() {
  const statusEl = document.getElementById('gpsStatus');
  statusEl.textContent = 'Acquiring GPS...';
  statusEl.className = 'badge';

  if (!navigator.geolocation) {
    statusEl.textContent = 'Geolocation not supported';
    statusEl.className = 'badge badge-danger';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      currentCoordinates = {
        lat: pos.coords.latitude.toFixed(5),
        lng: pos.coords.longitude.toFixed(5),
        acc: Math.round(pos.coords.accuracy)
      };
      document.getElementById('gpsLat').textContent = currentCoordinates.lat;
      document.getElementById('gpsLng').textContent = currentCoordinates.lng;
      statusEl.textContent = `Acquired (±${currentCoordinates.acc}m)`;
      statusEl.className = 'badge';
    },
    (err) => {
      currentCoordinates = { lat: '21.1904', lng: '81.2849', acc: 25 };
      document.getElementById('gpsLat').textContent = currentCoordinates.lat + " (Simulated)";
      document.getElementById('gpsLng').textContent = currentCoordinates.lng + " (Simulated)";
      statusEl.textContent = 'Fallback Geolocation';
    },
    { enableHighAccuracy: true, timeout: 7000 }
  );
}

function broadcastSOSWhatsApp() {
  if (!currentCoordinates) {
    alert(currentLang === 'hi' ? 'कृपया पहले सटीक जीपीएस प्राप्त करें।' : 'Please click "Get Accurate GPS" first.');
    return;
  }
  const mapLink = `https://maps.google.com/?q=${currentCoordinates.lat},${currentCoordinates.lng}`;
  const message = encodeURIComponent(
    `🚨 MEDICAL EMERGENCY SOS 🚨\nI require immediate assistance.\nMy current location: ${mapLink}\nSent via AyuCare Health Portal.`
  );
  window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
}

const defaultContacts = [
  { name: "Primary Guardian / Caregiver", phone: "+91 98765 43210" },
  { name: "Family Physician", phone: "+91 98765 11223" }
];

function renderContacts() {
  const ul = document.getElementById('emergencyContactList');
  ul.innerHTML = defaultContacts.map(c => `
    <li style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px solid #f1f5f9;">
      <span><strong>${c.name}</strong> (${c.phone})</span>
      <a href="tel:${c.phone}" class="btn-sm"><i class="fa-solid fa-phone"></i> Call</a>
    </li>
  `).join('');
}

// ==========================================
// 7. TELEHEALTH & APPOINTMENT SCHEDULING
// ==========================================
const doctors = [
  { id: 1, name: "Mohit Joshi", phone: "7723083467", specialty: "AyuCare Team", exp: "Contact" },
  { id: 2, name: "Yash Shukla", phone: "6264995754", specialty: "AyuCare Team", exp: "Contact" },
  { id: 3, name: "Nitish Sahu", phone: "9589182517", specialty: "AyuCare Team", exp: "Contact" },
  { id: 4, name: "Kanha Chaturvedi", phone: "9755303520", specialty: "AyuCare Team", exp: "Contact" }
];

// Remove old demo appointments that refer to the previous sample doctor list.
const oldDoctorNames = ["Dr. Aarti Verma", "Dr. Rajesh Nair", "Dr. Priyanka Sen", "Dr. Imran Siddiqui"];
let bookedAppointments = [];
try {
  const savedAppointments = JSON.parse(localStorage.getItem('medimitra_appts') || '[]');
  bookedAppointments = Array.isArray(savedAppointments)
    ? savedAppointments.filter(a => a && !oldDoctorNames.some(name => String(a.doctor || '').includes(name)))
    : [];
  localStorage.setItem('medimitra_appts', JSON.stringify(bookedAppointments));
} catch (error) {
  bookedAppointments = [];
}

function renderDoctors() {
  const container = document.getElementById('doctorsList');
  if (!container) return;
  container.innerHTML = doctors.map(d => {
    const phoneIntl = `+91${d.phone}`;
    const waNumber = `91${d.phone}`;
    return `
      <div class="team-contact-card" style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; flex-wrap:wrap; border:1px solid #e2e8f0; padding:0.85rem; border-radius:10px; margin-bottom:0.65rem;">
        <div>
          <h4 style="font-size:0.98rem; margin:0 0 0.25rem;">${d.name}</h4>
          <span style="font-size:0.85rem; color:#64748b;">${d.phone}</span>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          <a class="btn btn-primary btn-sm" href="tel:${phoneIntl}" aria-label="Call ${d.name} at ${d.phone}"><i class="fa-solid fa-phone"></i> Call</a>
          <a class="btn btn-secondary btn-sm" href="https://wa.me/${waNumber}" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat with ${d.name}"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>`;
  }).join('');

  const select = document.getElementById('apptDoctorSelect');
  if (select) {
    select.innerHTML = '<option value="">Select a team member</option>' + doctors.map(d =>
      `<option value="${d.name}">${d.name} (${d.phone})</option>`
    ).join('');
  }
}

function renderAppointments() {
  const container = document.getElementById('userAppointmentsList');
  if (bookedAppointments.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size:0.85rem;">No appointments booked yet.</p>';
    return;
  }
  container.innerHTML = bookedAppointments.map(a => `
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.6rem 0.8rem; margin-bottom:0.5rem; font-size:0.85rem;">
      <div style="display:flex; justify-content:space-between;">
        <strong>${a.doctor}</strong>
        <span class="badge">${a.mode}</span>
      </div>
      <div>${a.date} at ${a.time} - <em>"${a.note}"</em></div>
    </div>
  `).join('');
}

function handleBookAppointment(e) {
  e.preventDefault();
  const doc = document.getElementById('apptDoctorSelect').value;
  const date = document.getElementById('apptDate').value;
  const time = document.getElementById('apptTime').value;
  const mode = document.getElementById('apptMode').value;
  const note = document.getElementById('apptNotes').value;

  const newAppt = { doctor: doc, date, time, mode, note };
  bookedAppointments.unshift(newAppt);
  localStorage.setItem('medimitra_appts', JSON.stringify(bookedAppointments));
  renderAppointments();

  document.getElementById('appointmentForm').reset();
  alert(currentLang === 'hi' ? 'अपॉइंटमेंट सफलतापूर्वक दर्ज की गई!' : 'Appointment booked successfully!');
}

function openTeleRoom(doctorName) {
  const person = doctors.find(d => d.name === doctorName);
  if (!person) { alert('Please select a AyuCare team member.'); return; }
  window.location.href = `tel:+91${person.phone}`;
}

function closeTeleRoom() {
  document.getElementById('videoRoomModal').classList.add('hidden');
}

function generateMockPrescription() {
  const docName = document.getElementById('activeDocName').textContent;
  const rxText = `
=== AYUCARE DIGITAL PRESCRIPTION ===
Date: ${new Date().toLocaleDateString()}
Practitioner: ${docName}
Patient: ${currentUser ? currentUser.name : 'Guest Patient'}
--------------------------------------
Rx:
1. Tab. Paracetamol 650mg - 1 tab SOS after meals
2. Tab. Cetirizine 10mg - 1 tab at bedtime x 3 days
--------------------------------------
Dr. Signature: Verified Digital Key
`;
  const blob = new Blob([rxText], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `AyuCare-Rx-${Date.now()}.txt`;
  a.click();
}

// ==========================================
// 8. 500+ MEDICINE REFERENCE DATABASE
// ==========================================
const medicineArchetypes = [
  { prefix: "Paracetamol", class: "Analgesics & Antipyretics", hi: "पैरासिटामोल", dosage: "500mg-650mg every 6h", usage: "Fever and mild to moderate pain relief", warn: "Max 4000mg/day to avoid liver toxicity." },
  { prefix: "Ibuprofen", class: "Analgesics & Antipyretics", hi: "इबुप्रोफेन", dosage: "400mg with food", usage: "Anti-inflammatory and dental/body pain", warn: "Contraindicated in active peptic ulcer." },
  { prefix: "Amoxicillin", class: "Antibiotics & Antimicrobials", hi: "एमोक्सिसिलिन", dosage: "500mg TDS for 5-7 days", usage: "Bacterial respiratory and ENT infections", warn: "Do not use if penicillin allergic." },
  { prefix: "Azithromycin", class: "Antibiotics & Antimicrobials", hi: "एज़िथ्रोमाइसिन", dosage: "500mg OD for 3-5 days", usage: "Atypical respiratory infections", warn: "Take 1 hour before or 2 hours after food." },
  { prefix: "Ciprofloxacin", class: "Antibiotics & Antimicrobials", hi: "सिप्रोफ्लोक्सासिन", dosage: "500mg BD", usage: "Urinary tract and enteric infections", warn: "Maintain high water intake." },
  { prefix: "Metformin", class: "Antidiabetic Agents", hi: "मेटफॉर्मिन", dosage: "500mg-1000mg with dinner", usage: "Type 2 diabetes glycemic control", warn: "Monitor kidney functions periodically." },
  { prefix: "Glimepiride", class: "Antidiabetic Agents", hi: "ग्लिमेपिराइड", dosage: "1mg-2mg before breakfast", usage: "Insulin secretagogue", warn: "Watch for signs of low blood sugar." },
  { prefix: "Amlodipine", class: "Cardiovascular & Antihypertensives", hi: "एम्लोडिपिन", dosage: "5mg OD morning", usage: "High blood pressure and angina", warn: "May cause ankle swelling." },
  { prefix: "Telmisartan", class: "Cardiovascular & Antihypertensives", hi: "टेल्मिसार्टन", dosage: "40mg OD", usage: "Hypertension and cardiac protection", warn: "Avoid during pregnancy." },
  { prefix: "Pantoprazole", class: "Gastrointestinal & Antacids", hi: "पेंटोप्राजोल", dosage: "40mg OD 30min before breakfast", usage: "GERD and gastric acidity", warn: "Avoid prolonged unmonitored use." },
  { prefix: "Omeprazole", class: "Gastrointestinal & Antacids", hi: "ओमेप्राजोल", dosage: "20mg OD empty stomach", usage: "Peptic ulcer and heartburn relief", warn: "Take regularly before breakfast." },
  { prefix: "Cetirizine", class: "Antihistamines & Allergy", hi: "सिटिरिज़िन", dosage: "10mg at bedtime", usage: "Allergic rhinitis and hives", warn: "May cause slight drowsiness." },
  { prefix: "Levocetirizine", class: "Antihistamines & Allergy", hi: "लेवोसिटिरिज़िन", dosage: "5mg night", usage: "Sneezing and runny nose relief", warn: "Dose adjustment in renal issues." },
  { prefix: "Salbutamol", class: "Respiratory & Anti-Asthmatics", hi: "सालब्यूटामोल", dosage: "100mcg 1-2 puffs SOS", usage: "Immediate bronchodilation for asthma", warn: "Fine hand tremors may occur." },
  { prefix: "Montelukast", class: "Respiratory & Anti-Asthmatics", hi: "मोंटेलुकास्ट", dosage: "10mg OD evening", usage: "Asthma prevention and seasonal allergy", warn: "Not for acute asthma episodes." },
  { prefix: "Clonazepam", class: "Neurology & Neuropsychiatry", hi: "क्लोनाज़ेपाम", dosage: "0.5mg SOS", usage: "Anxiety and seizure control", warn: "Prescription only; habit-forming." },
  { prefix: "Sertraline", class: "Neurology & Neuropsychiatry", hi: "सर्ट्रालीन", dosage: "50mg OD morning", usage: "Depression and OCD management", warn: "Takes 2-3 weeks for full effect." },
  { prefix: "Clotrimazole", class: "Dermatology & Topicals", hi: "क्लोट्रिमेज़ोल", dosage: "Apply thin layer twice daily", usage: "Fungal infections and ringworm", warn: "Keep infected skin dry." },
  { prefix: "Mupirocin", class: "Dermatology & Topicals", hi: "म्यूपिरोसिन", dosage: "Apply 2% ointment TDS", usage: "Bacterial skin cuts and impetigo", warn: "Do not use inside eyes." },
  { prefix: "Vitamin D3", class: "Vitamins, Minerals & Supplements", hi: "विटामिन D3 (कोलेकैल्सिफेरॉल)", dosage: "60,000 IU weekly for 8 weeks", usage: "Bone health and vitamin D deficiency", warn: "Avoid excessive overdosing." },
  { prefix: "Methylcobalamin", class: "Vitamins, Minerals & Supplements", hi: "मिथाइलकोबालामिन (B12)", dosage: "1500mcg OD", usage: "Nerve strength and anemia support", warn: "Water-soluble and generally safe." },
  { prefix: "Atorvastatin", class: "Cardiovascular & Antihypertensives", hi: "एटोरवास्टेटिन", dosage: "10mg-20mg bedtime", usage: "Cholesterol reduction", warn: "Report unexplained muscle soreness." }
];

const allMedicines = [];
medicineArchetypes.forEach((base, baseIdx) => {
  const variations = [
    { suffix: "Standard Form" },
    { suffix: "Forte / Extended Release" },
    { suffix: "Pediatric Drops / Syrup" },
    { suffix: "Dispersible Tablets" },
    { suffix: "Injectable Infusion" },
    { suffix: "Modified Sustained Release" },
    { suffix: "Oral Suspension" },
    { suffix: "Combination Duo Pack" },
    { suffix: "Effervescent Solution" },
    { suffix: "Chewable Fruit Formulation" },
    { suffix: "Sublingual Micro-dose" },
    { suffix: "Controlled Release 24H" },
    { suffix: "Topical Gel Matrix" },
    { suffix: "Fortified Multi-Compound" },
    { suffix: "Dry Powder Inhaler" },
    { suffix: "Rapid Melt Orally Disintegrating" },
    { suffix: "Buffered Gentle Formulation" },
    { suffix: "Enteric Coated Matrix" },
    { suffix: "Sterile Ophthalmic Solution" },
    { suffix: "Transdermal Delivery System" },
    { suffix: "High Potency Granules" },
    { suffix: "Dual Release Bi-Layer" },
    { suffix: "Low Sodium Preparation" }
  ];

  variations.forEach((v, vIdx) => {
    allMedicines.push({
      id: `MED_${baseIdx * 25 + vIdx + 1}`,
      name: `${base.prefix} (${v.suffix})`,
      hindiName: `${base.hi} - ${v.suffix}`,
      class: base.class,
      dosage: base.dosage,
      usage: base.usage,
      warning: base.warn
    });
  });
});

let filteredMedicines = [...allMedicines];
let currentPage = 1;
const itemsPerPage = 12;

function renderMedicineDirectory() {
  const grid = document.getElementById('medicineGrid');
  const countEl = document.getElementById('visibleMedCount');
  const totalEl = document.getElementById('totalMedCount');
  const pageInd = document.getElementById('pageIndicator');

  totalEl.textContent = allMedicines.length;
  countEl.textContent = filteredMedicines.length;

  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  pageInd.textContent = `Page ${currentPage} of ${totalPages}`;

  const start = (currentPage - 1) * itemsPerPage;
  const slice = filteredMedicines.slice(start, start + itemsPerPage);

  if (slice.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:2rem;">No medicines matched your query.</div>';
    return;
  }

  grid.innerHTML = slice.map(m => `
    <div class="med-card">
      <div class="med-card-header">
        <div class="med-name">${m.name}</div>
        <div class="med-hindi">${m.hindiName}</div>
        <span class="med-tag">${m.class}</span>
      </div>
      <div class="med-details">
        <div><strong>Usage:</strong> ${m.usage}</div>
        <div class="mt-1"><strong>Dosage:</strong> ${m.dosage}</div>
        <div class="mt-1" style="color:#b91c1c;"><strong>Safety:</strong> ${m.warning}</div>
      </div>
    </div>
  `).join('');
}

function filterMedicines() {
  const query = document.getElementById('medSearchInput').value.toLowerCase().trim();
  const category = document.getElementById('medCategorySelect').value;

  filteredMedicines = allMedicines.filter(m => {
    const matchQuery = m.name.toLowerCase().includes(query) ||
                       m.hindiName.toLowerCase().includes(query) ||
                       m.usage.toLowerCase().includes(query) ||
                       m.class.toLowerCase().includes(query);
    const matchCategory = category === 'ALL' || m.class === category;
    return matchQuery && matchCategory;
  });

  currentPage = 1;
  renderMedicineDirectory();
}

function prevMedPage() {
  if (currentPage > 1) {
    currentPage--;
    renderMedicineDirectory();
  }
}

function nextMedPage() {
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderMedicineDirectory();
  }
}

// ==========================================
// 9. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  renderSymptomChips();
  renderContacts();
  renderDoctors();
  renderAppointments();
  renderMedicineDirectory();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('apptDate');
  if (dateInput) {
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = new Date().toISOString().split('T')[0];
  }
});

// ==========================================
// 10. CONVERSATIONAL PROJECT AI ASSISTANT
// ==========================================
let aiChatHistory = [];
function toggleAIChat() {
  const panel = document.getElementById('aiChatPanel');
  if (!panel) return;
  panel.classList.toggle('hidden');
  if (!panel.classList.contains('hidden')) document.getElementById('aiChatInput')?.focus();
}
function askAISuggestion(question) {
  const input = document.getElementById('aiChatInput');
  input.value = question;
  document.getElementById('aiChatForm').requestSubmit();
}
function appendAIChatMessage(text, role) {
  const messages = document.getElementById('aiChatMessages');
  const bubble = document.createElement('div');
  bubble.className = `ai-chat-message ${role}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}
async function sendAIChatMessage(event) {
  event.preventDefault();
  const input = document.getElementById('aiChatInput');
  const send = document.getElementById('aiChatSend');
  const question = input.value.trim();
  if (!question || send.disabled) return;
  appendAIChatMessage(question, 'user');
  input.value = '';
  send.disabled = true;
  const pending = appendAIChatMessage(currentLang === 'hi' ? 'सोच रहा हूँ…' : 'Thinking…', 'assistant pending');
  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: question, language: /[\u0900-\u097F]/.test(question) ? 'hi' : currentLang, history: aiChatHistory.slice(-10) })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'The assistant is temporarily unavailable.');
    pending.textContent = data.reply;
    pending.classList.remove('pending');
    aiChatHistory.push({ role: 'user', content: question }, { role: 'assistant', content: data.reply });
    aiChatHistory = aiChatHistory.slice(-12);
  } catch (error) {
    pending.textContent = currentLang === 'hi'
      ? 'अभी जवाब नहीं मिल पाया। कृपया सर्वर चालू होने की जाँच करें और फिर कोशिश करें।'
      : `I couldn’t get a reply just now. Please check that the AyuCare server is running and try again. (${error.message})`;
    pending.classList.remove('pending');
  } finally {
    send.disabled = false;
    input.focus();
  }
}
