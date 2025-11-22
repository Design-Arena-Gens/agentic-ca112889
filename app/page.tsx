'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 1200;

    // Create mysterious dark gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#0a0a1f');
    gradient.addColorStop(0.5, '#1a0f2e');
    gradient.addColorStop(1, '#0f0515');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add cosmic stars
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      const opacity = Math.random() * 0.8 + 0.2;

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw mysterious cosmic eye in the center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2.5;

    // Outer glow
    const glowGradient = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, 200);
    glowGradient.addColorStop(0, 'rgba(138, 43, 226, 0.4)');
    glowGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.2)');
    glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
    ctx.fill();

    // Eye shape
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#1a0f2e';

    // Eye outline - almond shape
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 120, 60, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Iris
    const irisGradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 50);
    irisGradient.addColorStop(0, '#4169e1');
    irisGradient.addColorStop(0.5, '#1e3a8a');
    irisGradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = irisGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
    ctx.fill();

    // Pupil
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
    ctx.fill();

    // Inner light reflection
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(centerX - 10, centerY - 10, 8, 0, Math.PI * 2);
    ctx.fill();

    // Golden rays emanating from eye
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      const startX = centerX + Math.cos(angle) * 130;
      const startY = centerY + Math.sin(angle) * 70;
      const endX = centerX + Math.cos(angle) * 200;
      const endY = centerY + Math.sin(angle) * 100;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Draw mystical symbols around
    const symbols = ['∞', '◉', '◊', '△', '▽', '◈'];
    ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.font = '32px serif';
    ctx.textAlign = 'center';

    symbols.forEach((symbol, index) => {
      const angle = (index * Math.PI * 2) / symbols.length;
      const x = centerX + Math.cos(angle) * 250;
      const y = centerY + Math.sin(angle) * 150;
      ctx.fillText(symbol, x, y);
    });

    // Title text - mysterious and elegant
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 58px serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
    ctx.shadowBlur = 20;

    const titleLines = [
      'أسرار الثراء',
      'و الكون'
    ];

    let titleY = 850;
    titleLines.forEach((line, index) => {
      ctx.fillText(line, centerX, titleY + (index * 70));
    });

    // Reset shadow
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
    ctx.font = '28px serif';
    ctx.fillText('المعرفة المخفية للوفرة الكونية', centerX, 1000);

    // Decorative border
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    // Inner border
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Decorative corners
    ctx.fillStyle = '#d4af37';
    const cornerSize = 30;
    const corners = [
      { x: 30, y: 30 },
      { x: canvas.width - 30, y: 30 },
      { x: 30, y: canvas.height - 30 },
      { x: canvas.width - 30, y: canvas.height - 30 }
    ];

    corners.forEach(corner => {
      ctx.beginPath();
      ctx.arc(corner.x, corner.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Convert to image URL
    const dataUrl = canvas.toDataURL('image/png');
    setImageUrl(dataUrl);
  }, []);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'secrets-of-wealth-universe.png';
    link.href = imageUrl;
    link.click();
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a1f 0%, #1a0f2e 50%, #0f0515 100%)',
      padding: '40px 20px'
    }}>
      <h1 style={{
        color: '#d4af37',
        fontSize: '2.5rem',
        marginBottom: '30px',
        textAlign: 'center',
        textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
        fontFamily: 'serif'
      }}>
        غلاف كتاب أسرار الثراء والكون
      </h1>

      <canvas
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          height: 'auto',
          border: '2px solid #d4af37',
          borderRadius: '8px',
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
        }}
      />

      <button
        onClick={downloadImage}
        style={{
          marginTop: '30px',
          padding: '15px 40px',
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
          color: '#0a0a1f',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
          transition: 'transform 0.2s',
          fontFamily: 'serif'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        تحميل الصورة
      </button>
    </main>
  );
}
