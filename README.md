# LoveOrControl
# ¿Amor o control? 🛡️

Aplicación móvil psicoeducativa para la prevención e identificación temprana de señales de control, manipulación, violencia psicológica y violencia digital en relaciones sexoafectivas.

**Proyecto desarrollado para hackathon** | Basado en el marco de ONU Mujeres

## 🚀 Demo en vivo

[🔗 Ver aplicación desplegada](https://amor-o-control.vercel.app) *(reemplazar con tu URL real)*

## 📋 Descripción

"¿Amor o control?" es una herramienta digital segura, anónima y basada en evidencia que permite:

- ✅ Identificar señales tempranas de control y manipulación
- ✅ Analizar conversaciones y situaciones mediante scanner psicoeducativo
- ✅ Activar modo Guardian para salir de situaciones de riesgo
- ✅ Construir un plan básico de seguridad
- ✅ Acceder a recursos de apoyo y comunidad moderada
- ✅ Aprender mediante módulos educativos con badge en Solana

## 🎙️ Funcionalidad de Voz (ElevenLabs)

La aplicación integra ElevenLabs para ofrecer respuestas del asistente en voz.

### ✨ Modo Demo (sin configuración)

- ✅ **Funciona inmediatamente** al desplegar en Vercel/Netlify
- 🎭 Los botones de audio muestran indicador de modo demo
- 📝 Todo el contenido está disponible en texto
- 🔒 Sin necesidad de API key para evaluación del jurado

### 🔧 Modo Completo (con API key)

Para activar la funcionalidad completa de voz:

1. Ve a tu dashboard de **Vercel** o **Netlify**
2. Selecciona el proyecto `amor-control`
3. Ve a **Settings → Environment Variables**
4. Agrega estas variables:

| Variable | Valor |
|----------|-------|
| `VITE_ELEVENLABS_API_KEY` | `sk_tu_clave_real_aqui` |
| `VITE_ELEVENLABS_VOICE_ID` | `21m00Tcm4TlvDq8ikWAM` |
| `VITE_ELEVENLABS_MODEL_ID` | `eleven_multilingual_v2` |

5. Guarda y la aplicación se redeployará automáticamente

### Consideraciones éticas de la voz

- 🔇 El audio está **desactivado por defecto** (la usuaria debe activarlo)
- 🎭 Modo demo disponible para evaluación sin API key
- 🔒 Ningún dato sensible se envía a servicios externos
- 📝 Fallback automático a texto si el audio falla
- 🎯 Voz calmada y empática (sin dramatismo ni alarmismo)

## 🛠️ Stack Tecnológico

- **Frontend:** React 18 + Vite
- **Estilos:** TailwindCSS
- **Voz:** ElevenLabs API (text-to-speech)
- **Blockchain:** Solana Web3.js (badges educativos en devnet)
- **Despliegue:** Vercel/Netlify

## 📁 Estructura del Proyecto
