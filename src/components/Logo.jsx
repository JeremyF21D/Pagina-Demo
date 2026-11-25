import React from 'react';

export default function Logo({ darkText = true, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2L5 8.5V19.5C5 29.2 11.4 38.1 20 40C28.6 38.1 35 29.2 35 19.5V8.5L20 2Z" fill="#FF6600" fillOpacity="0.15" />
        <path d="M20 4L8 9.2V14.2L25.5 21.8L32 19V9.2L20 4Z" fill="#FF6600" />
        <path d="M8 17.5V21.5L22.5 27.8L29.5 24.8L8 17.5Z" fill="#FF6600" />
        <path d="M9.5 25.2C11.8 30.8 15.6 35.1 20 36.8C22.4 35.8 24.6 34.1 26.4 32L9.5 25.2Z" fill="#FF6600" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-wider text-lg ${darkText ? 'text-slate-900' : 'text-white'}`}>
          SECURITY
        </span>
        <span className="text-[10px] font-bold tracking-[0.28em] text-[#FF6600] mt-0.5">
          IMPORT
        </span>
      </div>
    </div>
  );
}
