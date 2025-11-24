// Text-to-Speech Utility

export const speak = (text: string, language: 'english' | 'urdu' = 'english') => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set language based on selection
  if (language === 'urdu') {
    utterance.lang = 'ur-PK'; // Urdu (Pakistan)
  } else {
    utterance.lang = 'en-US'; // English (US)
  }
  
  // Speech settings
  utterance.rate = 0.9; // Slightly slower for clarity
  utterance.pitch = 1;
  utterance.volume = 1;
  
  // Speak the text
  window.speechSynthesis.speak(utterance);
};

export const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};

// Check if speech synthesis is supported
export const isSpeechSupported = () => {
  return 'speechSynthesis' in window;
};
