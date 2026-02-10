import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4a017',
          fontFamily: 'Georgia, serif',
          fontWeight: 'bold',
          letterSpacing: '4px',
          border: '8px solid #d4a017',
          borderRadius: '32px',
        }}
      >
        MZ
      </div>
    ),
    {
      ...size,
    }
  )
}
