"use client";

import { useState, useRef, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/51937481094";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowTyping(true), 1000);
      return () => clearTimeout(timer);
    }
    setShowTyping(false);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    const text = message.trim();
    const url = text
      ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
      : WHATSAPP_URL;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in origin-bottom-right">
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm shrink-0">
              C
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Asesor Comercial</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-green-200">En línea</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-[#e5ddd5] p-4 min-h-[260px] max-h-[300px] overflow-y-auto space-y-3">
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-sm">¡Hola! 👋</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-sm">
                  Bienvenido a <strong>Calderon Group S.A.C</strong>
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-2.5 max-w-[85%] shadow-sm">
                <p className="text-gray-800 text-sm">
                  Soy tu asesor comercial. ¿En qué puedo ayudarte?
                </p>
              </div>
            </div>
            {showTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white rounded-lg rounded-bl-none px-3.5 py-3 max-w-[85%] shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            {message.trim() && (
              <div className="flex justify-end animate-fade-in">
                <div className="bg-[#DCF8C6] rounded-lg rounded-br-none px-3.5 py-2.5 max-w-[85%] shadow-sm">
                  <p className="text-gray-800 text-sm">{message}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 border-t border-gray-100 px-3 py-3 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#075E54]/30 focus:border-[#075E54] placeholder:text-gray-400 transition-all"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-[#075E54] hover:bg-[#054D44] rounded-full flex items-center justify-center transition-colors shrink-0"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-end gap-3">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="relative animate-chat-bubble bg-white/95 backdrop-blur-sm text-gray-800 text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg border border-white/10 select-none cursor-pointer hover:bg-white transition-colors
              after:content-[''] after:absolute after:-bottom-2 after:right-[22px]
              after:border-l-[6px] after:border-l-transparent
              after:border-r-[6px] after:border-r-transparent
              after:border-t-[8px] after:border-t-white/95"
          >
            Escríbenos, te atendemos{" "}
            <span className="text-[#25D366] font-bold">inmediato</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 animate-pulse-subtle hover:scale-110 shrink-0"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
