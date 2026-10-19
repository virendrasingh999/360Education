export default function TopBar() {
  return (
    <div className="bg-[#061126] text-[#e1e8f3] text-[12px] py-2">
      <div className="max-w-[1180px] mx-auto px-4 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-3">
        <span>📍 Lane-5, Himmat Nagar, Star Paper Mill Road, Saharanpur</span>
        <span>
          Call / WhatsApp: <a href="tel:+919536385100" className="hover:text-[#e8bd61]">+91 9536385100</a> · <a href="mailto:360education.consultancy@gmail.com" className="hover:text-[#e8bd61]">Email us</a>
        </span>
      </div>
    </div>
  );
}
