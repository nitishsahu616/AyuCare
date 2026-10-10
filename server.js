const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// In-Memory Data Store (simulated database)
let users = [];
let appointments = [
  { id: 'appt_1', doctorName: 'Dr. Aarti Verma', date: '2026-10-12', time: '10:00 AM', mode: 'Video Call', notes: 'Fever check' }
];
let emergencyContacts = [
  { id: '1', name: 'Primary Guardian', phone: '+91 98765 43210', relation: 'Family' },
  { id: '2', name: 'Family Physician', phone: '+91 98765 11223', relation: 'Doctor' }
];

// Conversational AI endpoint. Configure OPENAI_API_KEY on the server to enable model replies.
// The API key is never sent to the browser. Without a key, project-specific fallback replies remain available.
const PROJECT_CONTEXT = `You are AyuCare's friendly, human-like assistant. Answer questions about the AyuCare website/project in clear, simple language and support Hindi and English. The project interface includes an overview dashboard, symptom triage form, emergency care/SOS guidance, CPR metronome, doctor appointment scheduling, medicine catalog search, account login/sign-up, Hindi-English language toggle, and a separate voice assistant using browser speech features. The server currently has Express endpoints for registration/login, appointments, contacts, and this chat endpoint. Existing account/appointment/contact data stores are in-memory and reset when the server restarts. Do not claim features are clinically validated or that real AI diagnosis is provided. For health concerns, say the website is informational and not a substitute for a qualified clinician. For emergencies in India, call 112 or 108. Never diagnose, prescribe, or recommend a personal medication dose. If asked something unrelated to AyuCare, answer briefly and politely. Keep answers helpful and conversational.`;
function projectFallback(message, language) {
  const q = String(message || '').toLowerCase();
  const hi = language === 'hi' || /[\u0900-\u097F]/.test(message);

  // Short, direct explanations for common health questions when no AI API key is configured.
  // These are general information only, not diagnosis or treatment instructions.
  const healthTopics = [
    { keys: ['diabetes', 'डायबिटीज', 'मधुमेह'], en: 'Diabetes is a condition in which blood sugar stays too high because the body does not make enough insulin or cannot use it well. A clinician can test for it and help manage it.', hi: 'डायबिटीज़ में खून में शुगर का स्तर अधिक रहता है, क्योंकि शरीर पर्याप्त इंसुलिन नहीं बनाता या उसका सही उपयोग नहीं कर पाता। डॉक्टर इसकी जाँच और देखभाल में मदद कर सकते हैं।' },
    { keys: ['blood pressure', 'hypertension', 'बीपी', 'रक्तचाप'], en: 'High blood pressure means blood pushes against artery walls with too much force over time. It often has no clear symptoms, so measurement by a health professional is important.', hi: 'हाई ब्लड प्रेशर में खून धमनियों की दीवारों पर लगातार ज़्यादा दबाव डालता है। इसके अक्सर साफ लक्षण नहीं होते, इसलिए सही तरीके से बीपी जाँचना ज़रूरी है।' },
    { keys: ['asthma', 'दमा', 'अस्थमा'], en: 'Asthma is a long-term condition in which the airways can become inflamed and narrow, causing wheezing, coughing, chest tightness, or trouble breathing. A clinician can help create a treatment plan.', hi: 'अस्थमा में साँस की नलियों में सूजन आ सकती है और वे संकरी हो सकती हैं। इससे घरघराहट, खाँसी, सीने में जकड़न या साँस लेने में परेशानी हो सकती है। डॉक्टर उपचार की योजना बनाने में मदद कर सकते हैं।' },
    { keys: ['anemia', 'anaemia', 'खून की कमी', 'एनीमिया'], en: 'Anemia means the blood has too little healthy hemoglobin or too few healthy red blood cells. It can cause tiredness, weakness, or shortness of breath, and needs assessment to find the cause.', hi: 'एनीमिया यानी खून में स्वस्थ हीमोग्लोबिन या लाल रक्त कोशिकाओं की कमी। इससे थकान, कमजोरी या साँस फूलना हो सकता है। कारण जानने के लिए जाँच ज़रूरी है।' },
    { keys: ['migraine', 'माइग्रेन', 'आधे सिर का दर्द'], en: 'Migraine is a type of headache that may cause throbbing pain, nausea, and sensitivity to light or sound. New, sudden, or unusually severe headache needs urgent medical assessment.', hi: 'माइग्रेन एक प्रकार का सिरदर्द है, जिसमें धड़कता हुआ दर्द, मतली और रोशनी या आवाज़ से परेशानी हो सकती है। अचानक या बहुत तेज़ नया सिरदर्द हो तो तुरंत चिकित्सा सहायता लें।' },
    { keys: ['common cold', 'cold', 'सर्दी', 'जुकाम'], en: 'A common cold is usually a viral infection that can cause a runny or blocked nose, sneezing, sore throat, and cough. Rest and fluids may help; seek medical advice if symptoms are severe or worsening.', hi: 'सामान्य सर्दी-जुकाम अक्सर वायरस के कारण होता है। इसमें नाक बहना या बंद होना, छींक, गले में खराश और खाँसी हो सकती है। आराम और तरल पदार्थ मदद कर सकते हैं; लक्षण गंभीर हों तो डॉक्टर से सलाह लें।' },
    { keys: ['fever', 'बुखार'], en: 'Fever is a rise in body temperature and is often a sign that the body is responding to an infection. Drink fluids and monitor symptoms. Seek medical advice for a high, persistent, or worrying fever.', hi: 'बुखार शरीर का तापमान बढ़ना है और अक्सर संक्रमण के प्रति शरीर की प्रतिक्रिया होता है। तरल पदार्थ लें और लक्षणों पर ध्यान दें। तेज़, लगातार या चिंताजनक बुखार में डॉक्टर से सलाह लें।' },
    { keys: ['paracetamol', 'acetaminophen', 'पैरासिटामोल'], en: 'Paracetamol is a medicine used to reduce pain and fever. Taking too much can seriously harm the liver, so follow the product label and ask a clinician or pharmacist if it is suitable for you. I cannot set a personal dose.', hi: 'पैरासिटामोल दर्द और बुखार कम करने की दवा है। इसकी अधिक मात्रा लिवर को गंभीर नुकसान पहुँचा सकती है, इसलिए पैक पर दिए निर्देश मानें और डॉक्टर या फार्मासिस्ट से पूछें। मैं व्यक्तिगत खुराक तय नहीं कर सकता।' }
  ];
  const healthMatch = healthTopics.find(item => item.keys.some(key => q.includes(key)));
  if (healthMatch) return hi ? healthMatch.hi : healthMatch.en;

  const answers = [
    { keys: ['feature','what can','what is medimitra','about project','project','फीचर','मेदिमित्र क्या','प्रोजेक्ट'], en: 'AyuCare is a bilingual health information website. It brings together symptom triage, a medicine catalog, emergency guidance, doctor appointment scheduling, account forms, and voice assistance in one place.', hi: 'मेदिमित्र हिंदी और अंग्रेज़ी में स्वास्थ्य जानकारी देने वाली वेबसाइट है। इसमें लक्षणों की शुरुआती जाँच, दवाओं की सूची, आपातकालीन सहायता, डॉक्टर की अपॉइंटमेंट और वॉइस असिस्टेंट जैसी सुविधाएँ हैं।' },
    { keys: ['appointment','book doctor','schedule','doctor','अपॉइंटमेंट','डॉक्टर','समय'], en: 'Open “Consult Doctor” in the top navigation, choose a doctor, date, time, and consultation mode, add your concern, then confirm the appointment. This demo stores appointments in server memory, so they reset when the server restarts.', hi: 'ऊपर “Consult Doctor” खोलें, डॉक्टर, तारीख, समय और परामर्श का तरीका चुनें, अपनी समस्या लिखें और अपॉइंटमेंट पक्की करें। यह डेमो अपॉइंटमेंट सर्वर की मेमोरी में रखता है, इसलिए सर्वर रीस्टार्ट होने पर डेटा रीसेट हो जाता है।' },
    { keys: ['medicine','medicines','tablet','drug','दवा','दवाइ'], en: 'Open “Medicines” to search the catalog. Please use medicine information only as general reference; ask a qualified clinician or pharmacist before taking a medicine. I cannot prescribe a medicine or personal dose.', hi: 'दवाओं की सूची खोलने के लिए “Medicines” चुनें। दवा की जानकारी केवल सामान्य जानकारी है; दवा लेने से पहले डॉक्टर या फार्मासिस्ट से पूछें। मैं आपके लिए दवा या खुराक निर्धारित नहीं कर सकता।' },
    { keys: ['symptom','fever','pain','cough','rash','लक्षण','बुखार','दर्द','खांसी'], en: 'Open “Symptom AI”, select relevant symptoms or describe them in the text box, then choose “Run Health Evaluation”. It provides a preliminary information/triage estimate, not a medical diagnosis. Seek professional care for persistent or worrying symptoms.', hi: '“Symptom AI” खोलें, लक्षण चुनें या टेक्स्ट बॉक्स में लिखें, फिर “Run Health Evaluation” दबाएँ। यह केवल शुरुआती जानकारी देता है, अंतिम मेडिकल निदान नहीं। लक्षण बने रहें या चिंता हो तो डॉक्टर से मिलें।' },
    { keys: ['emergency','ambulance','cpr','urgent','आपात','एम्बुलेंस','सीपीआर'], en: 'Open “Emergency SOS” for the emergency guidance and CPR metronome. In an emergency in India, call 112 or 108 immediately. Do not wait for a chat response.', hi: 'आपातकालीन निर्देश और CPR मेट्रोनोम के लिए “Emergency SOS” खोलें। भारत में आपात स्थिति में तुरंत 112 या 108 पर कॉल करें। चैट के जवाब का इंतज़ार न करें।' },
    { keys: ['hindi','language','english','हिंदी','भाषा'], en: 'Use the language button in the top-right area to switch the interface between Hindi and English. You can also type your questions to me in either language.', hi: 'ऊपर दाईं ओर भाषा बटन से वेबसाइट को हिंदी या अंग्रेज़ी में बदलें। आप मुझसे दोनों भाषाओं में सवाल पूछ सकते हैं।' },
    { keys: ['login','sign up','account','password','लॉगिन','खाता'], en: 'Use the sign-in area to log in or create an account. Note: this supplied demo server stores users in memory and does not yet use a production database; do not use a real or reused password.', hi: 'साइन-इन क्षेत्र से लॉगिन करें या नया खाता बनाएँ। ध्यान दें: इस डेमो में उपयोगकर्ता डेटा मेमोरी में रखा जाता है, स्थायी डेटाबेस में नहीं। असली या दूसरे खाते वाला पासवर्ड इस्तेमाल न करें।' },
    { keys: ['technology','built','backend','server','code','तकनीक','बैकएंड','कोड'], en: 'The project uses HTML, CSS, and browser JavaScript for the interface, with Node.js and Express on the backend. The chat can use an AI model when OPENAI_API_KEY is configured on the server; otherwise I use a small project FAQ fallback.', hi: 'इस प्रोजेक्ट के इंटरफ़ेस में HTML, CSS और ब्राउज़र JavaScript तथा बैकएंड में Node.js और Express का उपयोग है। सर्वर पर OPENAI_API_KEY सेट होने पर चैट AI मॉडल इस्तेमाल कर सकती है; नहीं तो सीमित प्रोजेक्ट FAQ से जवाब देती है।' }
  ];
  const match = answers.find(item => item.keys.some(key => q.includes(key)));
  if (match) return hi ? match.hi : match.en;
  return hi
    ? 'मैं मेदिमित्र वेबसाइट और उसकी सुविधाओं के बारे में मदद कर सकता हूँ। आप लक्षण जाँच, दवाओं की सूची, डॉक्टर अपॉइंटमेंट, आपातकालीन सहायता, भाषा बदलने या प्रोजेक्ट की तकनीक के बारे में पूछ सकते हैं।'
    : 'I can help explain AyuCare and how to use its features, including symptom triage, the medicine catalog, doctor appointments, emergency guidance, language settings, and the project technology. For more open-ended AI conversation, configure OPENAI_API_KEY on the server.';
}
app.post('/api/ai/chat', async (req, res) => {
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  const language = req.body?.language === 'hi' ? 'hi' : 'en';
  if (!message) return res.status(400).json({ error: 'Please enter a message.' });
  if (message.length > 2000) return res.status(413).json({ error: 'Message is too long (maximum 2000 characters).' });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.json({ reply: projectFallback(message, language), mode: 'fallback' });
  try {
    const history = Array.isArray(req.body.history) ? req.body.history.slice(-10).filter(m => m && ['user','assistant'].includes(m.role) && typeof m.content === 'string').map(m => ({ role: m.role, content: m.content.slice(0, 2000) })) : [];
    const apiResponse = await fetch(process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', temperature: 0.7, max_tokens: 500,
        messages: [{ role: 'system', content: PROJECT_CONTEXT }, ...history, { role: 'user', content: message }] })
    });
    const data = await apiResponse.json().catch(() => ({}));
    if (!apiResponse.ok) {
      console.error('AI provider returned status', apiResponse.status);
      return res.status(502).json({ error: 'The AI service could not answer right now. Please try again shortly.' });
    }
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error('Empty AI response');
    return res.json({ reply, mode: 'ai' });
  } catch (error) {
    console.error('AI assistant error:', error.message);
    return res.status(502).json({ error: 'The AI assistant is temporarily unavailable. Please try again.' });
  }
});

// Authentication Endpoints
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, bloodGroup, allergies } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }
  const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'Account with this email already exists.' });
  }
  const newUser = {
    id: 'user_' + Date.now(),
    name,
    email: email.toLowerCase(),
    password,
    bloodGroup: bloodGroup || 'O+',
    allergies: allergies || 'None',
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  const { password: _, ...safeUser } = newUser;
  res.status(201).json({ message: 'User registered successfully', user: safeUser });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email.toLowerCase() === email?.toLowerCase() && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }
  const { password: _, ...safeUser } = user;
  res.json({ message: 'Login successful', token: 'mock_jwt_' + user.id, user: safeUser });
});

// Appointment Endpoints
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const { doctorName, date, time, mode, notes } = req.body;
  const newAppt = {
    id: 'appt_' + Date.now(),
    doctorName,
    date,
    time,
    mode: mode || 'Video Call',
    notes: notes || '',
    status: 'Confirmed'
  };
  appointments.push(newAppt);
  res.status(201).json(newAppt);
});

// Emergency Contacts Endpoints
app.get('/api/contacts', (req, res) => {
  res.json(emergencyContacts);
});

app.post('/api/contacts', (req, res) => {
  const { name, phone, relation } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone required' });
  }
  const contact = { id: 'c_' + Date.now(), name, phone, relation: relation || 'Contact' };
  emergencyContacts.push(contact);
  res.status(201).json(contact);
});

app.listen(PORT, () => {
  console.log(`AyuCare Server running at http://localhost:${PORT}`);
});