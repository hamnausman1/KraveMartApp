// Voice Input Utility
// Handles voice recognition across the app

interface VoiceInputOptions {
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
  language?: 'en-US' | 'ur-PK';
  continuous?: boolean;
}

// Check if browser supports speech recognition
export const isSpeechRecognitionSupported = (): boolean => {
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
};

// Start voice input
export const startVoiceInput = ({
  onResult,
  onError,
  language = 'en-US',
  continuous = false,
}: VoiceInputOptions): (() => void) => {
  if (!isSpeechRecognitionSupported()) {
    onError?.('Speech recognition is not supported in this browser');
    return () => {};
  }

  // @ts-ignore - webkitSpeechRecognition is not in TypeScript types
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = continuous;
  recognition.interimResults = false;
  recognition.lang = language;

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onerror = (event: any) => {
    let errorMessage = 'Voice recognition error';
    
    switch (event.error) {
      case 'no-speech':
        errorMessage = 'No speech detected. Please try again.';
        break;
      case 'audio-capture':
        errorMessage = 'Microphone not found. Please check your device.';
        break;
      case 'not-allowed':
        errorMessage = 'Microphone access denied. Click the lock icon in the address bar and allow microphone access, then refresh the page.';
        break;
      case 'network':
        errorMessage = 'Network error. Please check your connection.';
        break;
      default:
        errorMessage = `Voice recognition error: ${event.error}`;
    }
    
    onError?.(errorMessage);
  };

  recognition.onend = () => {
    // Recognition ended
  };

  try {
    recognition.start();
  } catch (error) {
    onError?.('Failed to start voice recognition');
  }

  // Return stop function
  return () => {
    try {
      recognition.stop();
    } catch (error) {
      // Already stopped
    }
  };
};

// Hook for voice input with state management
export const useVoiceInput = () => {
  let stopFunction: (() => void) | null = null;

  const startListening = (options: VoiceInputOptions) => {
    // Stop any existing recognition
    if (stopFunction) {
      stopFunction();
    }
    
    stopFunction = startVoiceInput(options);
  };

  const stopListening = () => {
    if (stopFunction) {
      stopFunction();
      stopFunction = null;
    }
  };

  return { startListening, stopListening, isSupported: isSpeechRecognitionSupported() };
};