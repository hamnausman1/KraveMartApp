import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-ptxcd30mk0";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgAvatar from "figma:asset/b30b831465a254517e6511f7e1fb632c97b32da7.png";
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-m1x4x";
import { Camera, Mic, Send } from 'lucide-react';
import { useOrders } from '../contexts/OrderContext';
import { useLanguage } from '../contexts/LanguageContext';
import { startVoiceInput, isSpeechRecognitionSupported } from '../utils/voiceInput';
import { toast } from 'sonner@2.0.3';
import { speak } from '../utils/textToSpeech';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function Group11() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group11 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.06%] top-[74.69%]">
      <div className="absolute bottom-[-0.03%] flex items-center justify-center left-0 right-[-0.06%] top-[74.69%]">
        <div className="flex-none h-[375.296px] rotate-[90deg] skew-x-[358.836deg] w-[198.125px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.108px_-606.356px] mask-size-[374.954px_811.834px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.06%] top-[54.31%]">
      <Group10 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-[0.01%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.107px_-440.834px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[54.31%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <Group12 />
      <Group13 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
      <svg className="block size-full" fill="none" viewBox="0 0 25 13">
        <rect height="11.6314" opacity="0.35" rx="2.16667" stroke="black" width="21" x="0.5" y="0.500115" />
        <path d={svgPaths.p3c85c980} fill="black" opacity="0.4" />
        <rect fill="black" height="8.17323" rx="1.33333" width="18" x="2" y="2.22918" />
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.7px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[93.96%] left-0 right-0 top-0">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]">
        <svg className="block size-full" fill="none" viewBox="0 0 16 13">
          <path d={svgPaths.p2897e100} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]">
        <svg className="block size-full" fill="none" viewBox="0 0 17 12">
          <path d={svgPaths.p11ae0c00} fill="black" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatGreeting'),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { orders } = useOrders();

  const quickReplies = [
    t('chatSuggestion1'),
    t('chatSuggestion2'),
    t('chatSuggestion3'),
    t('chatSuggestion4')
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
    setShowQuickReplies(false);
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      speak(botResponse);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('refund')) {
      return 'Please provide complete details about your refund request. Which order would you like to request a refund for?';
    } else if (lowerMessage.includes('delivery') || lowerMessage.includes('late')) {
      return 'I understand your concern about the delivery. Let me see how I can help you. Can you please share your order number?';
    } else if (lowerMessage.includes('track')) {
      return 'I can help you track your order. Please share your order number or check the My Orders section in your account.';
    } else if (lowerMessage.includes('order')) {
      return 'Please provide your order number so I can assist you better.';
    } else if (lowerMessage.includes('missing') || lowerMessage.includes('item')) {
      return 'That would be helpful. Don\'t worry, we will resolve your issue. Can you share a picture of what you received?';
    } else {
      return 'Thank you for contacting us. How else can I assist you today?';
    }
  };

  const handleEndChat = () => {
    onClose();
    setMessages([
      {
        id: '1',
        text: t('chatGreeting'),
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setShowQuickReplies(true);
  };

  const handleVoiceInput = () => {
    if (!isSpeechRecognitionSupported()) {
      toast.info('Voice input not supported in this browser');
      return;
    }

    toast.info('Listening...');

    startVoiceInput({
      onResult: (transcript) => {
        setInputMessage(transcript);
        toast.success('Voice input received');
      },
      onError: (error) => {
        toast.error(error);
      },
      language: language === 'urdu' ? 'ur-PK' : 'en-US'
    });
  };

  const handleSpeakerClick = () => {
    const chatContent = messages.map(msg => 
      `${msg.sender === 'bot' ? 'Support' : 'You'}: ${msg.text}`
    ).join('. ');
    
    const text = language === 'english'
      ? `Chat Support. ${chatContent}. You can send messages, use voice input, or end the chat.`
      : `چیٹ سپورٹ۔ ${chatContent}۔ آپ پیغامات بھیج سکتے ہیں، وائس ان پٹ استعمال کر سکتے ہیں، یا چیٹ ختم کر سکتے ہیں۔`;
    
    speak(text, language);
  };

  if (!isOpen) return null;

  const latestOrder = orders.length > 0 ? orders[0] : null;
  const messagesTopPosition = latestOrder ? 'top-[210px]' : 'top-[110px]';

  return (
    <div className="absolute inset-0 z-50 bg-white overflow-hidden">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-0 w-full z-20">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('chatWithUs')}</p>
        <button onClick={onClose} className="absolute left-[16px] size-[24px] top-[47.32px] z-30">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p6a58300} fill="#37474F" />
          </svg>
        </button>
        <button 
          onClick={handleSpeakerClick}
          className="absolute left-[342px] size-[16px] top-[54px] cursor-pointer bg-transparent border-none p-0 z-30"
          aria-label="Read chat messages"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
        </button>
      </div>

      {/* Order Card */}
      {latestOrder && (
        <div className="absolute left-[16px] right-[16px] top-[100px] bg-[rgba(243,122,32,0.14)] rounded-[12px] p-[16px] z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[12px]">
              <div className="bg-[#F37A20] rounded-full size-[44px] flex items-center justify-center flex-shrink-0">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p30cae750} fill="white" fillRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f]">
                  Order #{latestOrder.orderId}
                </p>
                <p className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#ffd037] capitalize">
                  {latestOrder.status}
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[rgba(55,71,79,0.72)] capitalize">
                  {latestOrder.date}
                </p>
              </div>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#f37a20] flex-shrink-0">
              Rs {latestOrder.total}
            </p>
          </div>
        </div>
      )}

      {/* Messages Container */}
      <div className={`absolute left-0 right-0 ${messagesTopPosition} bottom-[180px] overflow-y-auto px-[16px] space-y-3 pb-4`}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
          >
            {message.sender === 'bot' && (
              <img alt="" className="size-[33px] rounded-full flex-shrink-0" src={imgAvatar} />
            )}
            <div
              className={`max-w-[75%] rounded-[9px] p-[12px] ${
                message.sender === 'user'
                  ? 'bg-[#236cd9] text-white'
                  : 'bg-[#ffd037] text-white'
              }`}
            >
              <p className="font-['Poppins:Regular',sans-serif] text-[16px] leading-[normal]">
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {showQuickReplies && messages.length === 1 && (
        <div className="absolute left-[16px] right-[16px] bottom-[190px] flex flex-wrap gap-2 justify-center">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="bg-[#ffd037] px-[17px] py-[8px] rounded-[26.5px]"
            >
              <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-white whitespace-nowrap">
                {reply}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="absolute left-[16px] right-[16px] bottom-[118px] z-20">
        <div className="bg-[#f0f1f2] rounded-[8px] h-[48px] px-[16px] flex items-center gap-[12px]">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={t('writeMessage')}
            className="flex-1 bg-transparent outline-none font-['Poppins:Regular',sans-serif] text-[16px] text-[#37474f]"/>
          <button className="text-[#37474f] opacity-70">
            <Camera className="w-5 h-5" />
          </button>
          <button
            className="text-[#37474f] opacity-70"
            onClick={handleVoiceInput}
          >
            <Mic className="w-5 h-5" />
          </button>
          <button onClick={() => handleSendMessage()} className="text-[#37474f]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* End Chat Button */}
      <button
        onClick={handleEndChat}
        className="absolute left-[16px] right-[16px] bottom-[58px] bg-[#f37a20] h-[48px] rounded-[8px] flex items-center justify-center z-20"
      >
        <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-white">{t('endChat')}</p>
      </button>

      {/* Home Indicator */}
      <div className="absolute bottom-[12px] left-1/2 translate-x-[-50%] z-30">
        <div className="bg-black h-[5px] rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}