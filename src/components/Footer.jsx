export function Footer() {
  return (
   <footer id="footer">
      <div className="footer-info-container">
        <p>
          Built by <a href="https://justisdavis.netlify.app" target="_blank">Justis Davis</a>
        </p>
        <p >
          <a className="social-links" href="https://github.com/davisjustis3" target="_blank">GitHub</a>
          |
          <a className="social-links" href="https://www.linkedin.com/in/justis-davis/" target="_blank">LinkedIn</a>
          |
          <a className="social-links" href="mailto:davisjustis3@gmail.com">Email Me</a>
        </p>
        <p>
          Data sourced from <a href="https://www.weatherapi.com/" target="_blank">Weather API</a>.
        </p>
        <p>&copy; 2025 Justis Davis. All rights reserved.</p>
      </div>
</footer>
  )
}