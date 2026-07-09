// Generate beautiful placeholder images for products
export const generateProductImage = (productName: string, category: string, color: string = '#f0e6d3'): string => {
  const textColor = '#4a3728'
  const borderColor = '#d4b896'

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e8d4c0;stop-opacity:1" />
        </linearGradient>
        <pattern id="pattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <path d="M0,10 l10,-10 M10,10 l10,-10 M-10,10 l10,-10 M0,20 l10,-10" stroke="${borderColor}" stroke-width="0.5" fill="none" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#grad)"/>
      <rect width="400" height="400" fill="url(#pattern)"/>

      <!-- Border -->
      <rect x="10" y="10" width="380" height="380" fill="none" stroke="${borderColor}" stroke-width="2"/>

      <!-- Decorative corner elements -->
      <circle cx="20" cy="20" r="3" fill="${borderColor}"/>
      <circle cx="380" cy="20" r="3" fill="${borderColor}"/>
      <circle cx="20" cy="380" r="3" fill="${borderColor}"/>
      <circle cx="380" cy="380" r="3" fill="${borderColor}"/>

      <!-- Category label -->
      <text x="200" y="80" font-family="serif" font-size="14" fill="${borderColor}" text-anchor="middle" font-style="italic" letter-spacing="2">
        ${category.toUpperCase()}
      </text>

      <!-- Product name -->
      <text x="200" y="200" font-family="serif" font-size="24" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
        <tspan x="200" dy="0">${productName.substring(0, 20)}</tspan>
        ${productName.length > 20 ? `<tspan x="200" dy="30">${productName.substring(20, 40)}</tspan>` : ''}
      </text>

      <!-- Brand -->
      <text x="200" y="340" font-family="serif" font-size="16" fill="${borderColor}" text-anchor="middle" font-style="italic">
        SAGE COUTURE
      </text>

      <!-- Price label space -->
      <rect x="50" y="360" width="300" height="25" fill="${borderColor}" opacity="0.1" rx="3"/>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const getProductImageUrl = (productName: string, category: string, index: number): string => {
  // Color scheme for different categories
  const colors: { [key: string]: string } = {
    lehengas: '#ffe6cc',
    'indo-western': '#ffd9b3',
    'mens-wear': '#e8d5c7',
    suits: '#f0e6d3',
    'coord-sets': '#ffc9a3',
    drapes: '#f5e6d9',
    gowns: '#ffe0d6',
  }

  const categoryKey = category.toLowerCase().replace(/&/g, '')
  const color = colors[categoryKey] || '#f0e6d3'

  return generateProductImage(productName, category, color)
}

// Luxury fashion colors
export const categoryColors = {
  lehengas: { bg: '#ffe6cc', accent: '#d4b896' },
  'indo-western': { bg: '#ffd9b3', accent: '#c9a878' },
  'mens-wear': { bg: '#e8d5c7', accent: '#b5a896' },
  suits: { bg: '#f0e6d3', accent: '#d4b896' },
  'coord-sets': { bg: '#ffc9a3', accent: '#d9956e' },
  drapes: { bg: '#f5e6d9', accent: '#d9c4a8' },
  gowns: { bg: '#ffe0d6', accent: '#e8a8a8' },
}
