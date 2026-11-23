export default function Footer({ profile }) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div>
          <h2 className="footer-title">გაქვთ იდეა ან პროექტი?</h2>
          <p className="footer-text">მომწერეთ ელფოსტაზე: {profile.email}</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{profile.fullName} — {year}</span>
        <span>აწყობილია React კომპონენტებით</span>
      </div>
    </footer>
  );
}