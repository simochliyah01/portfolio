import { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaAngular,
  FaCogs,
  FaTimes,
  FaCopy,
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LiveDemo.css";

const dotnetYaml = `name: Final-pip

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name:  Login f Docker Hub
        uses: docker/login-action@v1
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name:  Build w Push Docker image
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: mohamedchliyah01/dotnet-app:latest, mohamedchliyah01/dotnet-app:\${{ github.run_number }}

      - name:  Format Check
        run: dotnet format --verify-no-changes

      - name:  Scan NuGet Vulnerabilities
        run: dotnet list package --vulnerable

      - name: Envoyer Notification Discord (Success)
        if: success()
        run: |
          curl -H "Content-Type: application/json" \\
            -X POST \\
            -d "{\\"content\\": \\"CI Success: Build #\${{ github.run_number }} Success!\\"}" \\
            https://discord.com/api/webhooks/1378739781596614666/qNSqpBzEzJNb961iEtziyqOhQ8Ny4VyDxCicrfXJWoIJXbEBRAq8Nq6Py-ad2W3g9umY

      - name:  Envoyer Notification Discord (Failure)
        if: failure()
        run: |
          curl -H "Content-Type: application/json" \\
            -X POST \\
            -d "{\\"content\\": \\"CI Failed: Build #\${{ github.run_number }} Failure!\\"}" \\
            https://discord.com/api/webhooks/1378739781596614666/qNSqpBzEzJNb961iEtziyqOhQ8Ny4VyDxCicrfXJWoIJXbEBRAq8Nq6Py-ad2W3g9umY
`;

const angularYaml = `name: Final-pip

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  angular-docker:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name:  Lint check
        run: npm run lint

      - name:  Audit vulnerabilities
        run: npm audit --audit-level=moderate

      - name:  Upgrade npm packages
        run: npm update

      - name:  Login f Docker Hub
        uses: docker/login-action@v1
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name:  Build w Push Angular Docker image
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: |
            mohamedchliyah01/angular-app:latest
            mohamedchliyah01/angular-app:\${{ github.run_number }}

      - name:  Discord Notification Success
        if: success()
        run: |
          curl -H "Content-Type: application/json" \\
            -X POST \\
            -d "{\\"content\\": \\"Angular CI Success: Build #\${{ github.run_number }} Success\\"}" \\
            https://discord.com/api/webhooks/1378739781596614666/qNSqpBzEzJNb961iEtziyqOhQ8Ny4VyDxCicrfXJWoIJXbEBRAq8Nq6Py-ad2W3g9umY

      - name: Discord Notification Failure
        if: failure()
        run: |
          curl -H "Content-Type: application/json" \\
            -X POST \\
            -d "{\\"content\\": \\"Angular CI Failed: Build #\${{ github.run_number }} Failure \\"}" \\
            https://discord.com/api/webhooks/1378739781596614666/qNSqpBzEzJNb961iEtziyqOhQ8Ny4VyDxCicrfXJWoIJXbEBRAq8Nq6Py-ad2W3g9umY
`;

function CodeModal({ title, yaml, bullets, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copy = async () => {
    await navigator.clipboard.writeText(yaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className="ld-modal"
      role="dialog"
      aria-modal="true"
      style={{ overflowY: "auto", WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      <button className="ld-close" onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>

      <div className="ld-code-wrap">
        <div className="ld-code-header">
          <h3 className="ld-code-title">{title}</h3>
          <button className="ld-copy" onClick={copy} aria-label="Copy YAML">
            {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="ld-code-grid">
          <pre className="ld-code"><code>{yaml}</code></pre>

          <div className="ld-notes">
            <h4>Pipeline breakdown</h4>
            <ul>
              {bullets.map((b, i) => (
                <li key={i}>
                  <strong>{b.title}:</strong> {b.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ld-code-footer">
          <small>
            Note: keep webhooks and credentials in <b>GitHub Secrets</b>. Do not expose them publicly.
          </small>
        </div>
      </div>
    </div>
  );
}

export default function LiveDemoProject2() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null); // 'angular' | 'dotnet' | null

  const goBackToProjects = () => navigate("/#projects");

  const angularNotes = [
    { title: "Checkout", text: "Fetch repository code." },
    { title: "Install & Lint", text: "Install packages and run ESLint to enforce code style." },
    { title: "Security Audit", text: "Run npm audit (moderate+) to detect vulnerabilities." },
    { title: "Update Packages", text: "Upgrade npm packages for minor/patch updates." },
    { title: "Docker Login", text: "Authenticate to Docker Hub using GitHub Secrets." },
    { title: "Build & Push", text: "Build Angular Docker image and push latest and run-number tags." },
    { title: "Notifications", text: "Send success/failure alerts via Discord webhook." },
  ];

  const dotnetNotes = [
    { title: "Checkout", text: "Fetch repository code." },
    { title: "Docker Login", text: "Authenticate to Docker Hub using GitHub Secrets." },
    { title: "Build & Push", text: "Build image from Dockerfile and push with two tags." },
    { title: "Format Check", text: "Verify .NET formatting (no changes allowed)." },
    { title: "NuGet Vulnerabilities", text: "Scan packages to detect known vulnerabilities." },
    { title: "Notifications", text: "Send success/failure alerts via Discord webhook." },
  ];

  return (
    <section className="ld">
      {/* fixed back arrow */}
      <button
        className="back-fab"
        onClick={goBackToProjects}
        aria-label="Back to Projects"
        title="Back to Projects"
      >
        <FaArrowLeft />
      </button>

      <div className="ld-wrap">
        <h1 className="ld-title">Provincial Web Application — Live Demo</h1>
        <p className="ld-sub">Context and CI/CD pipelines (Angular & .NET)</p>

        <div className="ld-cards">
          <div className="ld-card context" style={{ cursor: "default" }}>
            <FaInfoCircle />
            <span>Project Context</span>
            <small style={{ maxWidth: 760, lineHeight: 1.6 }}>
              This project was delivered within the <b>Provincial Council</b>, and the internal source
              code is not publicly accessible after delivery. To showcase my work, I’m sharing the
              <b> CI/CD pipelines</b> I set up using <b>Azure DevOps / GitHub Actions</b> for both
              <b> Angular</b> and <b>.NET</b>, covering build, test, image creation, push, and notifications.
            </small>
          </div>

          <button className="ld-card angular" onClick={() => setOpen("angular")}>
            <FaAngular />
            <span>Angular CI/CD Pipeline</span>
            <small>Checkout • Lint • Audit • Docker • Build & Push • Alerts</small>
          </button>

          <button className="ld-card dotnet" onClick={() => setOpen("dotnet")}>
            <FaCogs />
            <span>.NET CI/CD Pipeline</span>
            <small>Docker build/push • .NET format • NuGet scan • Alerts</small>
          </button>
        </div>
      </div>

      {open === "angular" && (
        <CodeModal
          title="Angular pipeline (GitHub Actions)"
          yaml={angularYaml}
          bullets={angularNotes}
          onClose={() => setOpen(null)}
        />
      )}

      {open === "dotnet" && (
        <CodeModal
          title=".NET pipeline (GitHub Actions)"
          yaml={dotnetYaml}
          bullets={dotnetNotes}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
