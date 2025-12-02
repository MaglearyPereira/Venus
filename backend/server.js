require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

console.log("🚀 Iniciando servidor...");

// Configuración de Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verificar conexión
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Error Gmail:", error);
  } else {
    console.log("✅ Gmail listo para enviar emails");
  }
});

// Ruta de contacto CON PLANTILLA REAL
app.post("/api/contact", async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    console.log("📨 Recibiendo mensaje de:", nombre);

    // Validaciones
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        success: false,
        message: "Todos los campos son requeridos",
      });
    }

    // PLANTILLA HTML CON ESTILOS INCORPORADOS
    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
      @font-face {
  font-family: 'VenusFont';
  src: url('../src/assets/Gliker-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 40px 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
          @font-face {
  font-family: 'March';
  src: url('../src/assets/Safira March.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
        .header {
          background: #f8ede1;
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
  .header h1 {
          margin: 0;
          font-size: 2.5em;
          font-weight: 700;
          font-bold: 800;
          font-weight: bold;
          color: #866647;
        font-family:Helvetica, Arial, sans-serif;
        }
        .header p {
          margin: 10px 0 0 0;
          opacity: 0.9;
          font-bold: 500;
          color: #000000ff;
          font-family: helvetica, arial, sans-serif;
          font-size: 1.2em;
        }
        .content {
          padding: 40px 30px;
          background: #fafbfc;
        }
        .info-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #866647;
        }
        .field {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }
        .field:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .label {
          font-weight: 600;
          color: #2d3748;
          display: block;
          margin-bottom: 5px;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .value {
          color: #4a5568;
          font-size: 1.1em;
        }
        .message-container {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .message-content {
          background: #f7fafc;
          padding: 20px;
          border-radius: 10px;
          margin-top: 15px;
          border-left: 4px solid #866647;
          font-size: 1.1em;
          line-height: 1.6;
          color: #2d3748;
        }
        .footer {
          background:#f2ebe9;
          color: #866647;
          padding: 30px;
          text-align: center;
        }
        .footer p {
          margin: 5px 0;
          opacity: 0.8;
          color : #866647;
        }
        .highlight {
          color: #866647;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
        <p style="font-size: 2em;">🤎</p>
          <h1>Venus</h1>
          <p>Nuevo Mensaje de Contacto</p>
        </div>
        
        <div class="content">
          <div class="info-card">
            <div class="field">
              <span class="label">👤 Nombre</span>
              <span class="value highlight">${nombre}</span>
            </div>
            <div class="field">
              <span class="label">📧 Email</span>
              <span class="value highlight">${email}</span>
            </div>
            <div class="field">
              <span class="label">🕐 Fecha</span>
              <span class="value">${new Date().toLocaleString("es-ES")}</span>
            </div>
          </div>
          
          <div class="message-container">
            <span class="label">💬 Mensaje</span>
            <div class="message-content">
              ${mensaje.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f0fff4 0%, #f8fffa 100%); border-radius: 15px; border: 2px solid #866647">
            <p style="margin: 0; color: #2d3748; font-size: 1.1em;">
              <strong>🚀 Oportunidad de negocio</strong><br>
              Responde pronto para crear una conexión valiosa
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Venus Store</strong> - Contacto Automático</p>
          <p>✨ Transformando ideas en realidades extraordinarias</p>
          <p style="font-size: 0.9em; margin-top: 15px; opacity: 0.6;">
            Email enviado automáticamente • ${new Date().getFullYear()}
          </p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Configurar y enviar email
    const mailOptions = {
      from: `"Venus Project" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Llega a tu Gmail
      replyTo: email, // Puedes responder directamente
      subject: `🎯 Nuevo mensaje de ${nombre} - Venus Project`,
      html: emailHtml,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email enviado con diseño personalizado");

    res.json({
      success: true,
      message: "Mensaje enviado correctamente. Te contactaremos pronto.",
    });
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    res.status(500).json({
      success: false,
      message: "Error al enviar el mensaje. Intenta nuevamente.",
    });
  }
});

// Ruta de salud
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend funcionando correctamente",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🎉 Servidor corriendo en http://localhost:${PORT}`);
});
