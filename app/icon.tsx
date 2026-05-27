import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

const portraitUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31E90E58-0693-4B00-8891-03A4811FEB4A.JPG-54w7w8Mfsd8PG5pDcXZfrsCS1l6KR7.jpeg'

async function getPortraitDataUrl() {
  const response = await fetch(portraitUrl)

  if (!response.ok) {
    throw new Error('Failed to load portrait for favicon generation')
  }

  const mimeType = response.headers.get('content-type') ?? 'image/jpeg'
  const bytes = Buffer.from(await response.arrayBuffer()).toString('base64')

  return `data:${mimeType};base64,${bytes}`
}

export default async function Icon() {
  const portraitSrc = await getPortraitDataUrl()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          background: '#b8c8c3',
          borderRadius: '12%',
        }}
      >
        <img
          src={portraitSrc}
          alt="Claudia Alfonso"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 24%',
          }}
        />
      </div>
    ),
    size,
  )
}
