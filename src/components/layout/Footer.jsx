export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061126] text-[#c7d3e5] py-[29px]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <div>
            <div className="font-[900] text-white">360 Education & Consultancy</div>
            <small className="text-[#c7d3e5]">Sapno Ko Direction Do, Career Ko 360 Solution Do.</small>
          </div>
          <div className="flex gap-4 flex-wrap text-[11px]">
            <a href="#admissions" className="hover:text-[#e8bd61]">Admissions</a>
            <a href="#courses" className="hover:text-[#e8bd61]">Courses</a>
            <a href="#universities" className="hover:text-[#e8bd61]">Universities</a>
            <a href="#privacy" className="hover:text-[#e8bd61]">Privacy</a>
            <a href="#contact" className="hover:text-[#e8bd61]">Contact</a>
          </div>
          <small className="text-[11px]">© {currentYear} 360 Education & Consultancy</small>
        </div>
      </div>
    </footer>
  );
}
