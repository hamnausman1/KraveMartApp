# Voice Input Implementation Guide for KraveMart

## Overview
This guide documents the implementation of voice input functionality across all screens with microphone icons in the KraveMart app.

## ✅ Completed Implementation

### 1. Voice Input Utility (`/utils/voiceInput.ts`)
Created a comprehensive voice input utility that handles:
- Browser compatibility checking
- Speech recognition in both English and Urdu
- Error handling with user-friendly messages
- Start/stop functionality

### 2. SearchScreen (`/components/SearchScreen.tsx`)  
✅ **IMPLEMENTED** - Voice input for search queries
- Mic icon is clickable
- Converts speech to text and populates search field
- Supports both English and Urdu languages
- Shows "Listening..." toast notification
- Displays search results based on voice input

## 🔄 Screens Requiring Implementation

### 3. ChatBot (`/components/ChatBot.tsx`)
**Location:** Line 324 - `<Mic className="w-5 h-5" />`  
**Implementation Needed:**
```typescript
// Add imports
import { startVoiceInput, isSpeechRecognitionSupported } from '../utils/voiceInput';
import { toast } from 'sonner@2.0.3';

// Add state
const [isListening, setIsListening] = useState(false);

// Add handler
const handleVoiceInput = () => {
  if (!isSpeechRecognitionSupported()) {
    toast.info('Voice input not supported in this browser');
    return;
  }

  setIsListening(true);
  toast.info('Listening...');

  startVoiceInput({
    onResult: (transcript) => {
      setMessage(transcript); // Set the message input
      setIsListening(false);
      toast.success('Voice input received');
    },
    onError: (error) => {
      setIsListening(false);
      toast.error(error);
    },
    language: language === 'urdu' ? 'ur-PK' : 'en-US'
  });
};

// Update mic button
<button onClick={handleVoiceInput} className="text-[#37474f] opacity-70">
  <Mic className="w-5 h-5" />
</button>
```

### 4. ContactUsScreen (if exists)
**Check for:** Mic icons in customer support/contact screens
**Implementation:** Similar to ChatBot

### 5. AppSettingsScreen (`/components/AppSettingsScreen.tsx`)
**Note:** Line 270 shows a Mic icon but this is for "Enable Voice Over" toggle setting, NOT for voice input. This should remain as-is.

## Implementation Pattern

For any screen with a mic icon for voice input:

### Step 1: Add Imports
```typescript
import { startVoiceInput, isSpeechRecognitionSupported } from '../utils/voiceInput';
import { toast } from 'sonner@2.0.3';
import { useLanguage } from '../contexts/LanguageContext';
```

### Step 2: Add State
```typescript
const [isListening, setIsListening] = useState(false);
const { language } = useLanguage();
```

### Step 3: Create Handler
```typescript
const handleVoiceInput = () => {
  if (!isSpeechRecognitionSupported()) {
    toast.info('Voice input not supported in this browser');
    return;
  }

  setIsListening(true);
  toast.info('Listening...');

  startVoiceInput({
    onResult: (transcript) => {
      // Set the input field value
      setYourInputField(transcript);
      setIsListening(false);
      toast.success('Voice input received');
    },
    onError: (error) => {
      setIsListening(false);
      toast.error(error);
    },
    language: language === 'urdu' ? 'ur-PK' : 'en-US'
  });
};
```

### Step 4: Update Mic Button
```typescript
<button onClick={handleVoiceInput} className="your-classes">
  <Mic className="w-5 h-5" />
</button>
```

## Features of Voice Input Utility

### Browser Support Detection
```typescript
isSpeechRecognitionSupported()
```
Returns `true` if browser supports speech recognition.

### Language Support
- **English:** `'en-US'`
- **Urdu:** `'ur-PK'`

### Error Handling
Automatically handles:
- No speech detected
- Microphone not found
- Permission denied
- Network errors

### User Experience
- Shows "Listening..." toast when starting
- Shows success message with transcribed text
- Shows error messages when something goes wrong
- Automatically stops after receiving input

## Testing Checklist

For each screen with voice input:
- [ ] Mic icon is clickable
- [ ] Shows "Listening..." toast on click
- [ ] Converts speech to text correctly
- [ ] Handles permission denial gracefully
- [ ] Works in both English and Urdu
- [ ] Shows error messages appropriately
- [ ] Populates the correct input field
- [ ] Visual feedback during listening

## Browser Compatibility

**Supported:**
- Chrome/Chromium browsers
- Edge
- Safari (with limitations)

**Not Supported:**
- Firefox (no Web Speech API support)
- IE11

## Security & Privacy

- Requires user permission to access microphone
- Speech processing happens on-device (not sent to external servers in most browsers)
- No audio is recorded or stored
- Users can deny permission and app continues to work with text input

## Future Enhancements

Potential improvements:
1. Visual indicator (animated mic icon) during listening
2. Cancel button to stop listening mid-speech
3. Continuous listening mode for hands-free operation
4. Support for voice commands (e.g., "add to cart", "search for")
5. Offline speech recognition
6. Custom wake words

## Files Modified

1. ✅ `/utils/voiceInput.ts` - Created
2. ✅ `/components/SearchScreen.tsx` - Voice input implemented
3. 🔄 `/components/ChatBot.tsx` - Needs implementation

## Files to Check

Search for mic icons in these files:
- `/imports/Search.tsx`
- `/imports/Search-8-12742.tsx`
- `/imports/SearchSearchResult.tsx`
- `/imports/SearchSearchResultNotAvailabale.tsx`
- `/imports/CustomerSupport.tsx`
- `/imports/CustomerSupportChat.tsx`
- `/imports/CustomerSupportChatKeyboard.tsx`

**Note:** These are import files and may not need changes if they're not actively used in the app.
