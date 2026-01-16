const countdownTarget = new Date("2026-02-07T00:00:00");

const pad = (value) => String(value).padStart(2, "0");

const updateCountdown = () => {
  const now = new Date();
  const diff = countdownTarget - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
};

const canvas = document.getElementById("code-rain");
const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let columns = [];

const resizeCanvas = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  const columnCount = Math.floor(width / 18);
  columns = Array.from({ length: columnCount }, () => Math.random() * height);
};

const chars = "01<>/{}[]#%$@*";

const drawRain = () => {
  ctx.fillStyle = "rgba(5, 7, 10, 0.18)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(71, 245, 255, 0.6)";
  ctx.font = "16px Aileron, monospace";

  columns.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    const x = i * 18;
    ctx.fillText(text, x, y);
    columns[i] = y > height ? 0 : y + 18;
  });

  requestAnimationFrame(drawRain);
};

updateCountdown();
setInterval(updateCountdown, 1000);

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
requestAnimationFrame(drawRain);
