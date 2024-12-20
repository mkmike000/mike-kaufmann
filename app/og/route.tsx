import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Mike Kaufmann Insights'

  // Dynamically calculate font size based on the length of the title
  let fontSize = 'text-4xl' // Default font size
  if (title.length > 20) {
    fontSize = 'text-3xl'  // Slightly smaller for longer titles
  }
  if (title.length > 40) {
    fontSize = 'text-2xl'  // Further reduced size for very long titles
  }
  if (title.length > 60) {
    fontSize = 'text-xl'   // Smallest size for extremely long titles
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw={`flex flex-col ${fontSize} font-bold tracking-tight text-left`}>
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
