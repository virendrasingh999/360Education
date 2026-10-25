import { MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#061126] text-[#e1e8f3] text-[12px] py-2">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3">
        <span className="inline-flex items-center gap-1.5">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
          Serving students across India
        </span>
        <span>
          Call / WhatsApp: <a href="tel:+919536385100" className="hover:text-[#e8bd61]">+91 9536385100</a> · <a href="mailto:saurabhv730@gmail.com" className="hover:text-[#e8bd61]">Email us</a>
        </span>
      </div>
    </div>
  );
}
