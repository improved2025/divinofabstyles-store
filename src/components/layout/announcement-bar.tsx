export function AnnouncementBar() {
  const text =
    "Dress the Culture, Own the Moment • Premium African Fashion for Men and Women • New Arrivals • Featured Styles • Shop Women • Shop Men";

  return (
    <div className="overflow-hidden border-b border-[rgba(90,52,122,0.12)] bg-[#f7f2fb]">
      <div className="announcement-track whitespace-nowrap py-2">
        <span className="announcement-text">
          {text} &nbsp;&nbsp;&nbsp; {text} &nbsp;&nbsp;&nbsp; {text}
        </span>
      </div>
    </div>
  );
}