/* ==========================================================================
   UI/UX STYLEPEDIA — APPLICATION SCRIPT & DATABASE
   ========================================================================== */

const STYLES_DATA = [
    // ==========================================================================
    // CLASSIC FOUNDATIONS
    // ==========================================================================
    {
        id: 'flat',
        name: 'Flat Design',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Clean colors, sharp 2D edges, and minimal decoration with zero depth or shadows.',
        tagline: 'The uncompromising 2D aesthetic that killed skeuomorphism.',
        history: 'Emerging in the late 2000s and peaking in the early 2010s, Flat Design was a direct rebellion against the heavy, faux-realistic textures of skeuomorphism. Pioneered by Swiss/International Typographic Style principles, it championed digital purity—acknowledging that screens are 2D surfaces.',
        usecases: [
            'Informational websites and editorial platforms needing extreme visual clarity.',
            'Responsive web apps where fast loading and scalable vector graphics are paramount.',
            'Universal operating systems looking for an uncluttered, timeless visual language.'
        ],
        pitfalls: 'Without shadows or gradients, establishing visual hierarchy and distinguishing clickable elements from static boxes can be notoriously difficult (often called the "clickability problem").',
        palette: [
            { name: 'Pure Blue', hex: '#3b82f6', bg: '#3b82f6' },
            { name: 'Slate Gray', hex: '#64748b', bg: '#64748b' },
            { name: 'Light Backdrop', hex: '#f1f5f9', bg: '#f1f5f9' },
            { name: 'Dark Slate', hex: '#0f172a', bg: '#0f172a' }
        ],
        cssProps: [
            { prop: 'box-shadow: none;', desc: 'Ensures absolute 2D flatness across all containers and buttons.' },
            { prop: 'background-color: #3b82f6;', desc: 'Employs solid, vibrant fills instead of gradients or textures.' },
            { prop: 'border: 1px solid #cbd5e1;', desc: 'Crisp, single-pixel borders provide container structure.' }
        ],
        typography: 'Highly legible, clean sans-serif fonts (such as Inter, Roboto, or Open Sans) with strong variations in font-weight to establish hierarchy in the absence of depth.',
        className: 'style-flat',
        snippet: `<div class="flat-container" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 24px;">
  <h3 style="color: #0f172a; margin-bottom: 12px; font-family: sans-serif;">Flat Component</h3>
  <button style="background: #3b82f6; color: white; border: none; padding: 12px 20px; border-radius: 4px; font-weight: 600; cursor: pointer;">Flat Action</button>
</div>`,
        stitchPrompt: `Generate a gorgeous, fully responsive web interface adhering strictly to the 'Flat Design' UI/UX styling category.
Key design constraints:
1. All elements must have 0 depth: strictly no box-shadows, no text-shadows, and no gradients.
2. Use solid, vibrant primary colors (e.g., #3b82f6 blue) against clean neutral backgrounds (#f1f5f9).
3. Containers should rely on crisp 1px borders (#cbd5e1) and generous inner padding.
4. Typography must be a clean sans-serif with distinct weight jumps (e.g., regular 400 for body, bold 700 for headings) to provide clear hierarchy.`
    },
    {
        id: 'skeuomorphic',
        name: 'Skeuomorphic',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Mimics real-world textures and physics — leather, metallic trim, paper, and glossy specular highlights.',
        tagline: 'Bridging the physical and digital worlds through tangible realism.',
        history: 'Skeuomorphism dominated early personal computing (especially early iOS and Mac OS X). By making digital calculators look like plastic pocket calculators and notes look like yellow legal pads, designers provided instant familiarity to users who were new to digital interfaces.',
        usecases: [
            'Audio production software (DAWs, synthesizers, plugins) where users expect physical knobs and metallic faders.',
            'Premium watch faces, digital compasses, and simulation instruments.',
            'High-end lifestyle or heritage luxury branding looking for artisanal digital craftsmanship.'
        ],
        pitfalls: 'Faux textures can easily look dated or cluttered if overdone. Furthermore, heavy raster textures can impair web performance and prove difficult to scale responsively.',
        palette: [
            { name: 'Gloss Blue', hex: '#2563eb', bg: 'linear-gradient(to bottom, #60a5fa, #2563eb)' },
            { name: 'Metallic Trim', hex: '#e2e8f0', bg: 'linear-gradient(to bottom, #ffffff, #cbd5e1)' },
            { name: 'Rich Dark Slate', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Embossed Red', hex: '#b91c1c', bg: 'linear-gradient(to bottom, #ef4444, #b91c1c)' }
        ],
        cssProps: [
            { prop: 'box-shadow: inset 0 1px 1px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.4);', desc: 'Combines bright top inner highlights with rich outer drop shadows to simulate 3D mass.' },
            { prop: 'background: linear-gradient(to bottom, #60a5fa, #2563eb);', desc: 'Recreates the natural curved specular reflection of a physical button.' },
            { prop: 'text-shadow: 0 -1px 1px rgba(0,0,0,0.5);', desc: 'Embosses or debosses typography directly into the surface material.' }
        ],
        typography: 'Classic, highly polished typography often augmented with subtle 1px drop shadows or inset text highlights to mimic engraved or printed lettering.',
        className: 'style-skeuomorphic',
        snippet: `<div class="skeuomorphic-box" style="background: linear-gradient(to bottom, #f8fafc, #e2e8f0); border: 1px solid #94a3b8; border-radius: 16px; padding: 28px; box-shadow: inset 0 1px 0 #ffffff, 0 10px 25px rgba(0,0,0,0.5);">
  <h3 style="color: #0f172a; text-shadow: 0 1px 1px #ffffff; margin-bottom: 16px; font-family: sans-serif;">Skeuomorphic Panel</h3>
  <button style="background: linear-gradient(to bottom, #60a5fa, #2563eb); border: 1px solid #1d4ed8; border-radius: 24px; color: white; padding: 12px 24px; font-weight: 700; box-shadow: inset 0 1px 1px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.4); text-shadow: 0 -1px 1px rgba(0,0,0,0.5); cursor: pointer;">Tactile Button</button>
</div>`,
        stitchPrompt: `Generate an exquisite, tactile screen design adhering to the 'Skeuomorphic' UI/UX styling category.
Key design constraints:
1. Emulate realistic materials, lighting, and textures (e.g., brushed metal, smooth plastic, leather trim).
2. Use rich linear-gradients on all clickable surfaces to create specular highlights.
3. Every container and button must feature dual box-shadows: an inner top white highlight (inset 0 1px 1px rgba(255,255,255,0.6)) and a rich outer shadow.
4. Apply subtle text-shadows to headers and button text to simulate physical engraving or stamping.`
    },
    {
        id: 'material',
        name: 'Material Design',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Google\'s systematic design language — digital paper surfaces, standardized elevation, and realistic motion cues.',
        tagline: 'Adding physics, light, and tangible surfaces to flat design.',
        history: 'Introduced by Google in 2014, Material Design sought to unify interfaces across mobile and web. It acts as an elegant compromise between flat design and skeuomorphism, treating digital components as tactile sheets of "smart paper" residing at various elevations above a digital stage.',
        usecases: [
            'Complex web applications and SaaS suites requiring highly structured, predictable navigation.',
            'Cross-platform mobile applications (Android/Flutter) prioritizing consistent interaction models.',
            'Productivity tools, email clients, and document management platforms.'
        ],
        pitfalls: 'Because Material Design is so strongly associated with Google\'s ecosystem, using it out-of-the-box can sometimes make an independent app feel like a generic Google product rather than a unique brand.',
        palette: [
            { name: 'Primary Purple', hex: '#6200ea', bg: '#6200ea' },
            { name: 'Material Surface', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Material Background', hex: '#e2e8f0', bg: '#e2e8f0' },
            { name: 'On-Surface Dark', hex: '#1e293b', bg: '#1e293b' }
        ],
        cssProps: [
            { prop: 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);', desc: 'Simulates physical elevation (dp) casting soft, realistic ambient and directional shadows.' },
            { prop: 'border-radius: 8px;', desc: 'Subtle, consistent corner rounding across card surfaces.' },
            { prop: 'text-transform: uppercase;', desc: 'Traditionally applied to material button labels to establish visual prominence.' }
        ],
        typography: 'Roboto or Inter, utilizing strict modular scale guidelines and clean vertical rhythm to optimize scannability.',
        className: 'style-material',
        snippet: `<div class="material-card" style="background: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); padding: 24px;">
  <h3 style="color: #0f172a; margin-bottom: 12px; font-family: sans-serif; font-weight: 600;">Material Surface</h3>
  <button style="background: #6200ea; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); cursor: pointer;">Raised Button</button>
</div>`,
        stitchPrompt: `Generate a highly polished web screen adhering to Google's 'Material Design' UI/UX styling category.
Key design constraints:
1. Treat all containers as crisp white digital paper sheets (#ffffff) floating above a neutral grey backdrop (#e2e8f0).
2. Utilize strict elevation shadows (box-shadow) to communicate the vertical hierarchy of cards, dialogs, and buttons.
3. Feature a vibrant primary accent color (e.g., #6200ea purple) for primary actions and Floating Action Buttons (FABs).
4. Button labels should utilize medium/bold weight with subtle letter-spacing, housed in softly rounded 4px containers.`
    },
    {
        id: 'minimalist',
        name: 'Minimalist',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Whitespace rules. Strips everything to bare function where only essential elements survive.',
        tagline: 'Perfection is achieved when there is nothing left to take away.',
        history: 'Rooted in 20th-century minimalist art and Dieter Rams\' "Less, but better" philosophy, digital minimalism aggressively removes unnecessary chrome, dividing lines, borders, and decorative illustrations. It relies entirely on negative space and typography for structure.',
        usecases: [
            'High-end architecture firms, luxury fashion brands, and boutique design agency portfolios.',
            'Distraction-free reading and writing environments.',
            'Photography and art galleries where the content must speak entirely for itself.'
        ],
        pitfalls: 'Requires absolute mastery of typography and spacing. If whitespace is poorly balanced, a minimalist page can feel broken, empty, or uninspired rather than premium.',
        palette: [
            { name: 'Stark White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Absolute Black', hex: '#000000', bg: '#000000' },
            { name: 'Muted Slate', hex: '#64748b', bg: '#64748b' },
            { name: 'Delicate Border', hex: '#e2e8f0', bg: '#e2e8f0' }
        ],
        cssProps: [
            { prop: 'padding: 48px;', desc: 'Expansive internal whitespace acts as the primary layout buffer.' },
            { prop: 'border: 1px solid #e2e8f0;', desc: 'Delicate, whisper-thin borders used only when absolutely necessary.' },
            { prop: 'border-radius: 0px;', desc: 'Embraces sharp, geometric perfection over friendly curves.' }
        ],
        typography: 'Exquisite attention to typography. Often pairs stark geometric sans-serifs or high-contrast serifs with generous line-height and meticulous tracking.',
        className: 'style-minimalist',
        snippet: `<div class="minimalist-box" style="background: #ffffff; border: 1px solid #e2e8f0; padding: 48px; text-align: left;">
  <h3 style="color: #000000; font-weight: 400; letter-spacing: -0.5px; font-size: 24px; margin-bottom: 16px; font-family: sans-serif;">Essential Element</h3>
  <button style="background: #000000; color: #ffffff; border: 1px solid #000000; padding: 14px 28px; font-weight: 400; font-size: 14px; cursor: pointer;">Execute Action</button>
</div>`,
        stitchPrompt: `Generate an elegant, ultra-premium screen adhering to the 'Minimalist' UI/UX styling category.
Key design constraints:
1. Maximize negative space (whitespace) as the primary organizing principle. Do not overcrowd containers.
2. Rely on a strict monochromatic palette (pure white #ffffff backgrounds, stark black #000000 text and buttons).
3. Completely eliminate drop shadows, decorative background patterns, and unnecessary dividing lines.
4. Utilize flawless typography with stark size contrast between titles and body text.`
    },
    {
        id: 'metro',
        name: 'Metro (Flat 2.0)',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Microsoft\'s tile-based grid, bold typography, vibrant solid colors, and zero chrome.',
        tagline: 'Content before chrome in a perfectly structured digital grid.',
        history: 'Originally developed by Microsoft for Windows Phone 7 and Windows 8, Metro was inspired by the clean, iconographic signs found in public transit systems. It prioritized authentic digital typography and live content tiles over faux 3D buttons.',
        usecases: [
            'Digital signage, kiosk interfaces, and large-screen information dashboards.',
            'Media center interfaces and smart TV navigation menus.',
            'Enterprise internal hubs requiring dense, predictable tile-based access to tools.'
        ],
        pitfalls: 'The strict horizontal and vertical grid alignment can feel rigid or boxy if content lengths vary wildly. Early Windows 8 adoption suffered from users missing traditional clickable button affordances.',
        palette: [
            { name: 'Metro Blue', hex: '#0078d7', bg: '#0078d7' },
            { name: 'Dark Tile', hex: '#1f1f1f', bg: '#1f1f1f' },
            { name: 'Deep Background', hex: '#111111', bg: '#111111' },
            { name: 'Crisp White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'border-left: 6px solid #0078d7;', desc: 'Uses thick solid color accent bars to highlight active tiles and headers.' },
            { prop: 'border-radius: 0px;', desc: 'Strict adherence to sharp 90-degree tile edges.' },
            { prop: 'transition: transform 0.1s ease;', desc: 'Fast, snappy scale transformations simulate physical tile presses.' }
        ],
        typography: 'Bold, prominent sans-serif typography (classically Segoe UI or Inter) where headers often act as interactive navigation elements.',
        className: 'style-metro',
        snippet: `<div class="metro-tile" style="background: #1f1f1f; border-left: 6px solid #0078d7; padding: 32px; color: #ffffff; font-family: sans-serif;">
  <h3 style="font-weight: 700; font-size: 24px; margin-bottom: 16px;">Metro Live Tile</h3>
  <button style="background: #0078d7; color: white; border: 2px solid transparent; padding: 12px 24px; font-weight: 700; font-size: 15px; cursor: pointer;">Action Tile</button>
</div>`,
        stitchPrompt: `Generate a bold, tile-based dashboard interface adhering to Microsoft's 'Metro (Flat 2.0)' UI/UX styling category.
Key design constraints:
1. Arrange elements in a strict, sharp-edged rectangular tile grid (border-radius: 0px).
2. Use a high-contrast dark background (#111111) with solid dark tiles (#1f1f1f) and vibrant accent colors (#0078d7 blue).
3. No shadows, no gradients, and no rounded corners.
4. Rely on prominent, clean typography where large text elements act as clear wayfinding anchors.`
    },

    // ==========================================================================
    // MODERN & POPULAR
    // ==========================================================================
    {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Frosted glass panels, background blur, semi-transparent borders, and soft colorful gradients beneath.',
        tagline: 'Translucent elegance that brings deep, multi-layered dimensionality to modern web apps.',
        history: 'Reaching mainstream popularity around 2020 (popularized heavily by macOS Big Sur and Windows 11 Fluent Design), Glassmorphism relies on the CSS `backdrop-filter` property. It simulates frosted glass floating above vibrant, blurred background shapes.',
        usecases: [
            'Modern SaaS application dashboards looking for a state-of-the-art, premium feel.',
            'Fintech app landing pages displaying virtual credit cards and dynamic asset charts.',
            'AI tool suites where futuristic translucency complements advanced technology.'
        ],
        pitfalls: 'Can severely impact readability and accessibility (WCAG contrast ratios) if the background elements are too complex or if the text lacks proper solid shading.',
        palette: [
            { name: 'Glass Panel', hex: 'rgba(255,255,255,0.2)', bg: 'rgba(255,255,255,0.2)' },
            { name: 'Vivid Pink', hex: '#ec4899', bg: '#ec4899' },
            { name: 'Electric Blue', hex: '#3b82f6', bg: '#3b82f6' },
            { name: 'Bright Violet', hex: '#8b5cf6', bg: '#8b5cf6' }
        ],
        cssProps: [
            { prop: 'backdrop-filter: blur(16px);', desc: 'Diffuses and blurs the graphical elements directly behind the element.' },
            { prop: 'background: rgba(255, 255, 255, 0.2);', desc: 'Provides the semi-transparent frosted base layer.' },
            { prop: 'border: 1px solid rgba(255, 255, 255, 0.3);', desc: 'Acts as the physical glass edge highlight reflecting ambient light.' },
            { prop: 'box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);', desc: 'Casts a soft, deep ambient shadow separating the glass from the backdrop.' }
        ],
        typography: 'Crisp, modern sans-serifs with drop shadows or stark solid fills to ensure readability against complex blurred backgrounds.',
        className: 'style-glassmorphism',
        snippet: `<div class="glass-card" style="background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37); padding: 32px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Glassmorphic Card</h3>
  <button style="background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.4); box-shadow: 0 4px 12px rgba(0,0,0,0.15); color: white; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer;">Frosted Button</button>
</div>`,
        stitchPrompt: `Generate a breathtaking, futuristic web application screen adhering to the 'Glassmorphism' UI/UX styling category.
Key design constraints:
1. Set a vibrant, multi-color mesh gradient background (#3b82f6, #8b5cf6, #ec4899).
2. All primary containers and cards must be translucent frosted glass panels (background: rgba(255,255,255,0.2), backdrop-filter: blur(16px)).
3. Apply delicate semi-transparent white borders (border: 1px solid rgba(255,255,255,0.3)) to define container edges.
4. Guarantee high text legibility by using clean white typography with subtle drop shadows.`
    },
    {
        id: 'neumorphism',
        name: 'Neumorphism',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Soft embossed and debossed UI — elements appear extruded directly from the background using dual shadows.',
        tagline: 'Extruding digital elements from a seamless, monochromatic plastic stage.',
        history: 'Gaining immense viral traction in 2019-2020 as a portmanteau of "New Skeuomorphism," Neumorphism abandons real-world textures but retains physical 3D mass. By pairing a bright top-left highlight with a dark bottom-right shadow, widgets look like they are molded from the same continuous material as the background.',
        usecases: [
            'High-concept smart home automation dashboards and remote control interfaces.',
            'Cryptocurrency wallets and sleek personal finance widgets.',
            'Media players and interactive touch-screen hardware kiosks.'
        ],
        pitfalls: 'Notoriously tricky for WCAG accessibility. Because the element background matches the stage background exactly, visually impaired users can struggle to perceive element boundaries.',
        palette: [
            { name: 'Neumorphic Base', hex: '#e0e5ec', bg: '#e0e5ec' },
            { name: 'Light Highlight', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Dark Shadow', hex: '#bebebe', bg: '#bebebe' },
            { name: 'Slate Accent', hex: '#2b6cb0', bg: '#2b6cb0' }
        ],
        cssProps: [
            { prop: 'box-shadow: 9px 9px 16px #bebebe, -9px -9px 16px #ffffff;', desc: 'Extrudes the element by pairing a dark bottom-right shadow with a bright top-left highlight.' },
            { prop: 'box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;', desc: 'Creates an indented, recessed well for active button states and input fields.' },
            { prop: 'background-color: #e0e5ec;', desc: 'Matches the stage background perfectly to create the seamless molded effect.' }
        ],
        typography: 'Clean, medium-weight sans-serifs with high contrast text colors (#2d3748) to compensate for the low-contrast containers.',
        className: 'style-neumorphism',
        snippet: `<div class="neumorphic-card" style="background: #e0e5ec; border-radius: 24px; box-shadow: 9px 9px 16px #bebebe, -9px -9px 16px #ffffff; padding: 36px; color: #2d3748; font-family: sans-serif;">
  <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: #1a202c;">Neumorphic Extrusion</h3>
  <button style="background: #e0e5ec; color: #2b6cb0; border-radius: 12px; box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff; border: none; padding: 14px 28px; font-weight: 700; cursor: pointer;">Molded Button</button>
</div>`,
        stitchPrompt: `Generate an ultra-modern, soft-embossed dashboard screen adhering to the 'Neumorphism' UI/UX styling category.
Key design constraints:
1. The background and all component containers must share the exact same neutral background color (#e0e5ec).
2. Form all cards and buttons using dual outer box-shadows: a bright white highlight top-left (-9px -9px 16px #ffffff) and a soft dark shadow bottom-right (9px 9px 16px #bebebe).
3. Active button states and input fields must use inset dual box-shadows to appear recessed into the surface.
4. Keep typography clear, sharp, and high-contrast (#2d3748).`
    },
    {
        id: 'claymorphism',
        name: 'Claymorphism',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Inflated 3D shapes, fluffy outer drop shadows, soft inner insets, and a friendly pastel palette.',
        tagline: 'Playful, tactile 3D realism that feels like soft digital clay.',
        history: 'Following the wake of Neumorphism, Claymorphism emerged around 2021 as a friendlier, more accessible alternative. By introducing solid container colors, bright pastel palettes, and dual inner inset shadows, it creates a cheerful, inflated 3D aesthetic reminiscent of claymation or high-end 3D icon packs.',
        usecases: [
            'Edtech platforms, gamified learning apps, and modern educational tools.',
            'Web3 and crypto onboarding apps wanting to appear highly approachable and fun.',
            'Task management tools and friendly social collaboration platforms.'
        ],
        pitfalls: 'The bouncy, playful aesthetic can feel un-serious or overly juvenile if applied to formal enterprise or high-security banking applications.',
        palette: [
            { name: 'Pastel Sky', hex: '#e0f2fe', bg: '#e0f2fe' },
            { name: 'Vivid Cyan', hex: '#0ea5e9', bg: '#0ea5e9' },
            { name: 'Playful Violet', hex: '#a855f7', bg: '#a855f7' },
            { name: 'White Clay', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'box-shadow: 15px 15px 35px rgba(0,0,0,0.1), inset -10px -10px 20px rgba(0,0,0,0.08), inset 10px 10px 20px rgba(255,255,255,0.9);', desc: 'Combines an outer drop shadow with a dark inner inset bottom-right and a bright inner inset top-left to achieve the 3D inflated curve.' },
            { prop: 'border-radius: 36px;', desc: 'Highly exaggerated, bubbly corner rounding.' }
        ],
        typography: 'Bold, friendly, rounded geometric sans-serifs (such as Outfit, Poppins, or Quicksand) that match the bubbly physical aesthetic.',
        className: 'style-claymorphism',
        snippet: `<div class="clay-card" style="background: #ffffff; border-radius: 36px; box-shadow: 15px 15px 35px rgba(0,0,0,0.1), inset -10px -10px 20px rgba(0,0,0,0.08), inset 10px 10px 20px rgba(255,255,255,0.9); padding: 36px; color: #1e293b; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px; color: #0f172a;">Claymorphic Container</h3>
  <button style="background: #0ea5e9; color: white; border-radius: 24px; box-shadow: 6px 6px 16px rgba(14,165,233,0.3), inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.4); border: none; padding: 14px 28px; font-weight: 700; cursor: pointer;">Inflated Button</button>
</div>`,
        stitchPrompt: `Generate a playful, welcoming web screen adhering to the 'Claymorphism' UI/UX styling category.
Key design constraints:
1. Use a soft pastel background (#e0f2fe).
2. Containers should be bright white (#ffffff) with highly rounded corners (border-radius: 36px).
3. Apply complex triple box-shadows to achieve the inflated 3D clay look: an outer drop shadow, an inner bottom-right dark inset shadow, and an inner top-left white inset highlight.
4. Utilize vibrant pastel accent colors (#0ea5e9 cyan, #a855f7 purple) for clickable components.`
    },
    {
        id: 'darkmode',
        name: 'Dark Mode',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Deep OLED backgrounds, glowing neon accents, high contrast typography, and sleek elevated surfaces.',
        tagline: 'The undisputed champion of developer tools and modern late-night productivity.',
        history: 'While early green-screen terminals were technically dark, the modern Dark Mode movement emerged as a formal system with OLED display technology and OS-level toggles. It reduces eye strain in low-light environments and significantly preserves battery life on OLED screens.',
        usecases: [
            'Developer tools, IDEs, code editors, and technical dashboards.',
            'Media streaming platforms and cinema apps where the UI must fade away during playback.',
            'Crypto trading platforms and real-time analytics terminal tools.'
        ],
        pitfalls: 'Pure black (#000000) backgrounds paired with pure white (#ffffff) text can cause severe halation (astigmatism edge blurring). Successful dark modes rely on dark navy/grey surfaces (#111827) and off-white typography (#f9fafb).',
        palette: [
            { name: 'OLED Navy', hex: '#090d16', bg: '#090d16' },
            { name: 'Elevated Surface', hex: '#111827', bg: '#111827' },
            { name: 'Neon Blue', hex: '#3b82f6', bg: '#3b82f6' },
            { name: 'Off-White Text', hex: '#f9fafb', bg: '#f9fafb' }
        ],
        cssProps: [
            { prop: 'background-color: #090d16;', desc: 'Provides the deep, light-absorbing base layer.' },
            { prop: 'box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);', desc: 'Replaces traditional dark drop shadows with outer neon color glows for active states.' },
            { prop: 'border: 1px solid #374151;', desc: 'Subtle dark grey borders prevent elements from bleeding into the void.' }
        ],
        typography: 'Crisp sans-serifs with carefully optimized font-weights and letter-spacing to prevent glowing edge bleed on dark backdrops.',
        className: 'style-darkmode',
        snippet: `<div class="dark-card" style="background: #111827; border: 1px solid #374151; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.8); padding: 32px; color: #f9fafb; font-family: sans-serif;">
  <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: #ffffff;">Dark Mode Surface</h3>
  <button style="background: #3b82f6; color: white; border-radius: 8px; box-shadow: 0 0 15px rgba(59,130,246,0.4); border: none; padding: 12px 24px; font-weight: 600; cursor: pointer;">Glow Action</button>
</div>`,
        stitchPrompt: `Generate a sleek, professional web dashboard adhering to the 'Dark Mode' UI/UX styling category.
Key design constraints:
1. Utilize deep OLED navy/grey backgrounds (#090d16).
2. Component surfaces should sit on elevated dark gray layers (#111827) bounded by subtle borders (#374151).
3. Primary buttons and active states must feature vibrant neon blue fills (#3b82f6) with outer glowing drop shadows (box-shadow: 0 0 15px rgba(59,130,246,0.4)).
4. Use crisp off-white text (#f9fafb) to ensure high contrast without eye strain.`
    },
    {
        id: 'apple',
        name: 'Apple HIG',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Pill-shaped buttons, Apple system blue, SF-style typography, generous padding, and crisp dividers.',
        tagline: 'The refined, human-centered design language powering the world\'s premium hardware.',
        history: 'Formulated and continuously evolved by Apple through their Human Interface Guidelines (HIG), this aesthetic defines modern iOS, iPadOS, and macOS. It champions clarity, deference to content, and depth through elegant blurs and flawless micro-interactions.',
        usecases: [
            'Native iOS and macOS companion web applications.',
            'High-end consumer tech landing pages and premium product showcases.',
            'Health, wellness, and lifestyle apps requiring absolute trust and user comfort.'
        ],
        pitfalls: 'Requires extreme discipline in spacing and alignment. If font weights or margins are inconsistent, the Apple feel breaks down instantly.',
        palette: [
            { name: 'System Blue', hex: '#0071e3', bg: '#0071e3' },
            { name: 'Apple Gray', hex: '#f5f5f7', bg: '#f5f5f7' },
            { name: 'Content Black', hex: '#1d1d1f', bg: '#1d1d1f' },
            { name: 'System Green', hex: '#34c759', bg: '#34c759' }
        ],
        cssProps: [
            { prop: 'border-radius: 100px;', desc: 'Generates the signature pill-shaped geometry for buttons and badges.' },
            { prop: 'box-shadow: 0 4px 20px rgba(0,0,0,0.08);', desc: 'Exceedingly delicate, diffused shadows provide non-intrusive card elevation.' },
            { prop: 'border: 1px solid rgba(0,0,0,0.04);', desc: 'Extremely subtle borders create crisp edge definition.' }
        ],
        typography: 'San Francisco (SF Pro) or high-quality equivalents like Inter, featuring tight tracking on titles and generous leading on body copy.',
        className: 'style-apple',
        snippet: `<div class="apple-card" style="background: #ffffff; border: 1px solid rgba(0,0,0,0.04); border-radius: 18px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); padding: 32px; color: #1d1d1f; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 16px;">Apple HIG Card</h3>
  <button style="background: #0071e3; color: white; border-radius: 100px; box-shadow: none; border: none; padding: 14px 28px; font-weight: 600; font-size: 15px; cursor: pointer;">Pill Button</button>
</div>`,
        stitchPrompt: `Generate a beautifully clean, premium web interface adhering to the 'Apple HIG' UI/UX styling category.
Key design constraints:
1. Rely on a clean, light grey backdrop (#f5f5f7) with crisp white component cards (#ffffff).
2. Buttons must be perfectly rounded pill shapes (border-radius: 100px) utilizing Apple System Blue (#0071e3).
3. Keep card shadows incredibly light and diffused (box-shadow: 0 4px 20px rgba(0,0,0,0.08)).
4. Employ clean, bold sans-serif headers with tight letter-spacing (-0.5px) and pristine vertical alignment.`
    },
    {
        id: 'aurora',
        name: 'Aurora / Cosmic',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Deep space dark backgrounds with vibrant pink, purple, and cyan animated mesh gradient glows.',
        tagline: 'The mesmerizing, celestial aesthetic defining the next generation of AI and Web3 platforms.',
        history: 'A breakout evolution of dark mode and glassmorphism, Aurora/Cosmic gained immense popularity alongside the rise of Generative AI tools (Midjourney, OpenAI, Jasper) and advanced SaaS platforms. It uses luminous, blurred color pools to simulate the Aurora Borealis in deep space.',
        usecases: [
            'AI prompt interfaces, generative art dashboards, and futuristic AI tools.',
            'Next-gen SaaS platforms wanting a cutting-edge, high-tech identity.',
            'Web3, metaverse, and immersive gaming community portals.'
        ],
        pitfalls: 'If the background gradient animations are overly complex or poorly optimized, they can cause heavy CPU/GPU throttling and lag on mobile devices.',
        palette: [
            { name: 'Deep Cosmic', hex: '#0d0b18', bg: '#0d0b18' },
            { name: 'Neon Fuchsia', hex: '#ec4899', bg: '#ec4899' },
            { name: 'Cosmic Violet', hex: '#a855f7', bg: '#a855f7' },
            { name: 'Translucent Card', hex: 'rgba(20,15,38,0.65)', bg: 'rgba(20,15,38,0.65)' }
        ],
        cssProps: [
            { prop: 'background: radial-gradient(circle at 20% 30%, #4a00e0, #8e2de2, #0d0b18);', desc: 'Generates the deep celestial pools of light behind the UI.' },
            { prop: 'background: linear-gradient(135deg, #a855f7, #ec4899);', desc: 'Employs rich fuchsia-to-violet gradients on interactive buttons.' },
            { prop: 'backdrop-filter: blur(24px);', desc: 'Heavy background blur creates deep atmospheric separation.' }
        ],
        typography: 'Bold, futuristic sans-serifs (such as Outfit, Syne, or Plus Jakarta Sans), frequently utilizing gradient text clips for primary headlines.',
        className: 'style-aurora',
        snippet: `<div class="aurora-box" style="background: rgba(20, 15, 38, 0.65); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); padding: 36px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px; background: linear-gradient(to right, #ffffff, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Cosmic AI Card</h3>
  <button style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.5); border: 1px solid rgba(255, 255, 255, 0.3); font-weight: 700; padding: 14px 28px; cursor: pointer;">Initialize Aurora</button>
</div>`,
        stitchPrompt: `Generate a stunning, celestial web application screen adhering to the 'Aurora / Cosmic' UI/UX styling category.
Key design constraints:
1. The background must be a deep space dark canvas (#0d0b18) featuring vibrant, blurred pools of purple and fuchsia light.
2. Component cards should be dark translucent panels (background: rgba(20, 15, 38, 0.65), backdrop-filter: blur(24px)) with fine white borders.
3. Primary buttons must use vibrant linear-gradients (#a855f7 to #ec4899) casting outer pink drop shadows.
4. Feature gradient-clipped text for primary headers.`
    },
    {
        id: 'liquidglass',
        name: 'Liquid Glass',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Translucent fluid droplets, animated amorphous geometry, floating background blobs, and frosted refraction.',
        tagline: 'Morphing, organic translucency that feels like breathing droplets of liquid glass.',
        history: 'A state-of-the-art evolution combining Glassmorphism with Fluid/Organic Morphism, Liquid Glass emerged as designers sought to break free from static rounded rectangles. By animating complex multi-value CSS border-radii over glowing, blurred background shapes, UI elements mimic liquid droplets resting on a glass stage.',
        usecases: [
            'Immersive Web3 and AI landing pages looking for a mesmerizing, futuristic identity.',
            'Creative agency portfolios and high-end interactive digital art galleries.',
            'Next-generation virtual reality (VR) and spatial computing web interfaces.'
        ],
        pitfalls: 'Continuous border-radius morphing animations can trigger GPU re-painting if not properly optimized, potentially impacting battery life on mobile devices.',
        palette: [
            { name: 'Deep Slate', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Fluid Cyan', hex: '#06b6d4', bg: '#06b6d4' },
            { name: 'Amorphous Purple', hex: '#a855f7', bg: '#a855f7' },
            { name: 'Frosted Droplet', hex: 'rgba(255,255,255,0.15)', bg: 'rgba(255,255,255,0.15)' }
        ],
        cssProps: [
            { prop: 'border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;', desc: 'Complex multi-value border radii create the amorphous liquid droplet shape.' },
            { prop: 'backdrop-filter: blur(20px) saturate(150%);', desc: 'Refracts and saturates the floating background color blobs beneath the glass.' },
            { prop: 'animation: liquidMorph 10s ease-in-out infinite alternate;', desc: 'Smoothly morphs the border-radius values to simulate breathing fluid motion.' }
        ],
        typography: 'Clean, futuristic sans-serifs with strong structural integrity to balance the fluid, shifting nature of the containers.',
        className: 'style-liquidglass',
        snippet: `<div class="liquid-glass-box" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(20px) saturate(150%); -webkit-backdrop-filter: blur(20px) saturate(150%); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; box-shadow: 0 10px 30px 0 rgba(31, 38, 135, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.4); padding: 40px 36px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px; text-shadow: 0 2px 6px rgba(0,0,0,0.3);">Liquid Glass Droplet</h3>
  <button style="background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); box-shadow: 0 6px 20px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5); color: white; padding: 14px 28px; border-radius: 50% 30% 60% 40% / 40% 50% 30% 60%; font-weight: 700; cursor: pointer;">Fluid Action</button>
</div>`,
        stitchPrompt: `Generate a mesmerizing, futuristic web application screen adhering to the 'Liquid Glass' UI/UX styling category.
Key design constraints:
1. Use a deep dark slate background (#0f172a) featuring large, blurred floating color blobs (#06b6d4 cyan, #a855f7 purple).
2. Primary containers must be translucent frosted glass panels (background: rgba(255,255,255,0.15), backdrop-filter: blur(20px) saturate(150%)).
3. Use amorphous, liquid-like border-radii (e.g., border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%) for cards and buttons.
4. Keep typography crisp, bright white, and highly legible with subtle text shadows.`
    },

    // ==========================================================================
    // EXPERIMENTAL & ARTISTIC
    // ==========================================================================
    {
        id: 'brutalism',
        name: 'Brutalism',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Raw HTML feel — bold harsh borders, clashing vibrant colors, stark drop shadows, and zero polish.',
        tagline: 'Unapologetic, raw digital architecture that demands attention.',
        history: 'Taking its name from the architectural movement of Le Corbusier (béton brut / raw concrete), digital brutalism strips away corporate polish. It celebrates the raw, unadorned building blocks of the early web: thick black borders, default system fonts, and stark clashing color blocks.',
        usecases: [
            'Avant-garde design agencies, streetwear fashion brands, and edgy portfolio websites.',
            'Underground music labels, indie zines, and youth-culture publications.',
            'Event pages and festival websites looking for high-impact, disruptive branding.'
        ],
        pitfalls: 'Can feel overwhelming, aggressive, or unpolished to traditional users. If navigation hierarchy is ignored, it can severely damage usability.',
        palette: [
            { name: 'Acid Yellow', hex: '#facc15', bg: '#facc15' },
            { name: 'Stark White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Harsh Black', hex: '#000000', bg: '#000000' },
            { name: 'Clashing Red', hex: '#ef4444', bg: '#ef4444' }
        ],
        cssProps: [
            { prop: 'border: 4px solid #000000;', desc: 'Thick, uncompromising black borders define every layout element.' },
            { prop: 'box-shadow: 10px 10px 0px #000000;', desc: 'Solid, sharp-edged drop shadows with zero blur create brutalist depth.' },
            { prop: 'border-radius: 0px;', desc: 'Rejects modern smooth curves in favor of harsh rectangular cuts.' }
        ],
        typography: 'Monospaced system fonts or bold, commanding sans-serifs, often presented in stark uppercase with heavy black underlines.',
        className: 'style-brutalism',
        snippet: `<div class="brutalist-card" style="background: #ffffff; border: 4px solid #000000; box-shadow: 10px 10px 0px #000000; padding: 36px; color: #000000; font-family: monospace;">
  <h3 style="font-size: 24px; font-weight: 900; text-transform: uppercase; border-bottom: 3px solid #000; padding-bottom: 8px; margin-bottom: 16px;">Brutalist Container</h3>
  <button style="background: #000000; color: #ffffff; border: 4px solid #000000; box-shadow: 6px 6px 0px #ef4444; font-weight: 900; text-transform: uppercase; padding: 14px 28px; cursor: pointer;">Raw Action</button>
</div>`,
        stitchPrompt: `Generate a bold, high-impact web screen adhering strictly to the 'Brutalism' UI/UX styling category.
Key design constraints:
1. Use an aggressive, high-contrast palette (e.g., acid yellow #facc15 background, pure white containers, harsh black #000000 borders).
2. Every container and button must feature thick 4px black borders and solid, sharp drop shadows with 0 blur (box-shadow: 10px 10px 0px #000000).
3. Strictly zero border-radius; all corners must be sharp 90-degree angles.
4. Rely on bold, uppercase typography with heavy underlines and prominent dividing lines.`
    },
    {
        id: 'cyberpunk',
        name: 'Cyberpunk / Neon',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Neon glows on dark backgrounds, grid textures, angled cut corners, and retro-futurist type.',
        tagline: 'High tech, low life. The vibrant visual language of a dystopian neon future.',
        history: 'Inspired by 80s anime (Akira, Ghost in the Shell), sci-fi cinema (Blade Runner), and video games (Cyberpunk 2077), this aesthetic marries dark gritty grid textures with blinding neon highlights. It relies heavily on CSS `clip-path` for futuristic cut corners.',
        usecases: [
            'Gaming community portals, esports organization hubs, and streaming overlay dashboards.',
            'Crypto/NFT launchpads and immersive sci-fi entertainment websites.',
            'Tech hardware landing pages (GPUs, gaming monitors, mechanical keyboards).'
        ],
        pitfalls: 'The intense neon colors and complex angular geometries can quickly cause visual fatigue if used for text-heavy reading environments.',
        palette: [
            { name: 'Dark Void', hex: '#090914', bg: '#090914' },
            { name: 'Neon Cyan', hex: '#06b6d4', bg: '#06b6d4' },
            { name: 'Cyber Yellow', hex: '#fcee09', bg: '#fcee09' },
            { name: 'Hot Pink', hex: '#ec4899', bg: '#ec4899' }
        ],
        cssProps: [
            { prop: 'clip-path: polygon(...);', desc: 'Chops off container and button corners to achieve the futuristic octagonal sci-fi look.' },
            { prop: 'box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);', desc: 'Creates vibrant neon glows radiating from borders and text.' },
            { prop: 'background: linear-gradient(...) background-size: 40px 40px;', desc: 'Generates the classic retro-futuristic blueprint grid backdrop.' }
        ],
        typography: 'Aggressive, boxy monospaced or futuristic display fonts, heavily stylized with neon text-shadows and uppercase tracking.',
        className: 'style-cyberpunk',
        snippet: `<div class="cyber-box" style="background: #0d0f26; border: 2px solid #06b6d4; box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 25px 100%, 0 calc(100% - 25px)); padding: 36px; color: white; font-family: monospace;">
  <h3 style="color: #06b6d4; font-size: 24px; font-weight: 700; text-shadow: 0 0 8px rgba(6,182,212,0.6); margin-bottom: 16px;">CYBERPUNK // SYSTEM</h3>
  <button style="background: #fcee09; color: #000000; border: none; clip-path: polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%); box-shadow: 0 0 15px rgba(252, 238, 9, 0.6); padding: 14px 28px; font-weight: 800; font-size: 15px; cursor: pointer;">EXECUTE NEON</button>
</div>`,
        stitchPrompt: `Generate an immersive, sci-fi interface adhering strictly to the 'Cyberpunk / Neon' UI/UX styling category.
Key design constraints:
1. Apply a dark blueprint grid background (#090914 with #06b6d4 gridlines).
2. Primary containers must be dark blue/black panels (#0d0f26) bounded by glowing neon cyan borders (#06b6d4).
3. Use CSS clip-path to slice off the corners of cards and buttons for an angular, futuristic geometry.
4. Highlight primary actions with intense cyber yellow (#fcee09) or hot pink (#ec4899) fills casting neon outer glows.`
    },
    {
        id: 'swiss',
        name: 'Swiss / Editorial',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Grid-strict layout, bold Helvetica typography, extreme size contrasts, and thick horizontal rules.',
        tagline: 'Flawless typography and strict modular grids derived from legendary print design.',
        history: 'Originating in Switzerland in the 1950s (the International Typographic Style), this aesthetic revolutionized graphic design with its emphasis on cleanliness, readability, and asymmetrical layouts anchored by mathematical grids. On the web, it feels like a premium print magazine brought to life.',
        usecases: [
            'Digital newspapers, high-end magazines, and long-form journalism platforms.',
            'Art museum archives, design institution portals, and premium corporate annual reports.',
            'High-end fashion brand catalogs and architecture firm compendiums.'
        ],
        pitfalls: 'Requires a flawless, disciplined underlying grid. If text alignment or font scaling falls out of harmony, the editorial illusion collapses.',
        palette: [
            { name: 'Paper White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Deep Charcoal', hex: '#000000', bg: '#000000' },
            { name: 'Editorial Red', hex: '#b91c1c', bg: '#b91c1c' },
            { name: 'Neutral Backdrop', hex: '#f8fafc', bg: '#f8fafc' }
        ],
        cssProps: [
            { prop: 'border-top: 8px solid #b91c1c;', desc: 'Heavy solid color horizontal rules provide immediate structural framing.' },
            { prop: 'box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05);', desc: 'Virtually flat containers with highly diffused, elegant elevation.' },
            { prop: 'border-radius: 0px;', desc: 'Maintains the sharp, rectangular boundaries of print publishing.' }
        ],
        typography: 'Exceptional emphasis on classic sans-serifs (Helvetica, Neue Haas Grotesk, Inter) featuring massive scale jumps between large titles and dense body copy.',
        className: 'style-swiss',
        snippet: `<div class="swiss-card" style="background: #ffffff; border: none; border-top: 8px solid #b91c1c; border-bottom: 2px solid #000000; padding: 48px 40px; color: #000000; font-family: sans-serif;">
  <h3 style="font-size: 28px; font-weight: 800; letter-spacing: -1px; margin-bottom: 16px;">Swiss Typography Grid</h3>
  <p style="color: #334155; font-size: 16px; line-height: 1.6; border-bottom: 1px solid #e2e8f0; padding-bottom: 24px; margin-bottom: 24px;">Flawless asymmetrical alignment derived from legendary 20th-century print design.</p>
  <button style="background: #b91c1c; color: white; border: none; padding: 14px 28px; font-weight: 700; font-size: 16px; cursor: pointer;">Read Dispatch</button>
</div>`,
        stitchPrompt: `Generate an elegant, magazine-like interface adhering to the 'Swiss / Editorial' UI/UX styling category.
Key design constraints:
1. Arrange elements on a strict, mathematically precise grid against a crisp neutral background (#f8fafc).
2. Containers should be pure white (#ffffff) with sharp corners (border-radius: 0px), framed by heavy horizontal rules (e.g., border-top: 8px solid #b91c1c red).
3. Maximize typography contrast: pair massive, bold sans-serif headlines with clean, perfectly leaded body copy.
4. Use a highly disciplined palette: stark white, deep black, and vibrant primary red accents (#b91c1c).`
    },
    {
        id: 'organic',
        name: 'Organic / Biomorphic',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Irregular fluid shapes, earthy muted tones, asymmetrical borders, and nature-inspired forms.',
        tagline: 'Soft, natural asymmetry that breaks free from the rigid digital box.',
        history: 'Biomorphic design takes inspiration from trees, pebbles, flowing water, and organic cellular structures. As web CSS advanced to support complex, multi-value border-radii and fluid animations, designers embraced this warm, welcoming aesthetic to counteract cold digital corporate boxes.',
        usecases: [
            'Eco-friendly product landing pages, sustainability reports, and environmental non-profits.',
            'Mental health apps, meditation platforms, and wellness retreats.',
            'Boutique cosmetic brands, organic food delivery, and artisanal lifestyle shops.'
        ],
        pitfalls: 'Asymmetrical containers can make aligning standard rectangular elements (like data tables or video players) highly challenging.',
        palette: [
            { name: 'Warm Sand', hex: '#e7e5e4', bg: '#e7e5e4' },
            { name: 'Soft Pebble', hex: '#f5f5f4', bg: '#f5f5f4' },
            { name: 'Sage Green', hex: '#3f6212', bg: '#3f6212' },
            { name: 'Deep Umber', hex: '#78350f', bg: '#78350f' }
        ],
        cssProps: [
            { prop: 'border-radius: 50% 30% 60% 40% / 40% 50% 30% 60%;', desc: 'Employs complex multi-value border radii to achieve fluid, pebble-like asymmetry.' },
            { prop: 'box-shadow: 10px 15px 40px rgba(120,113,108,0.25);', desc: 'Casts a warm, earthy diffused shadow.' },
            { prop: 'transition: border-radius 0.5s ease;', desc: 'Enables smooth fluid morphing when the user hovers over the organic blob.' }
        ],
        typography: 'Warm, humanistic sans-serifs or elegant soft serifs (such as Lora, Recoleta, or Nunito) that mirror the gentle curves of the containers.',
        className: 'style-organic',
        snippet: `<div class="organic-box" style="background: #f5f5f4; border-radius: 50% 30% 60% 40% / 40% 50% 30% 60%; box-shadow: 10px 15px 40px rgba(120, 113, 108, 0.25); padding: 56px 48px; color: #292524; font-family: sans-serif;">
  <h3 style="font-size: 26px; font-weight: 700; margin-bottom: 16px;">Organic Pebble Container</h3>
  <button style="background: #78350f; color: white; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; border: none; padding: 16px 32px; font-weight: 600; box-shadow: 0 6px 15px rgba(120,53,15,0.3); cursor: pointer;">Fluid Action</button>
</div>`,
        stitchPrompt: `Generate a warm, welcoming web interface adhering to the 'Organic / Biomorphic' UI/UX styling category.
Key design constraints:
1. Utilize an earthy, nature-inspired palette (warm sand #e7e5e4 background, soft pebble #f5f5f4 containers, sage green #3f6212 accents).
2. Apply complex, asymmetrical border-radii (e.g., border-radius: 50% 30% 60% 40% / 40% 50% 30% 60%) to create fluid, pebble-like card shapes.
3. Use warm, diffused drop shadows to create soft depth.
4. Employ soft, humanistic typography with elegant spacing.`
    },

    // ==========================================================================
    // PLATFORM & INDUSTRY-SPECIFIC
    // ==========================================================================
    {
        id: 'terminal',
        name: 'Retro / Terminal',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Monospaced fonts, glowing green/amber text on pitch black, scanlines, and blinking cursors.',
        tagline: 'The uncompromising, nostalgic command-line aesthetic of early computing.',
        history: 'Before graphical user interfaces (GUIs), the command line was the only way to interact with computers. CRT monitors displayed monospaced phosphor characters in glowing green or amber against pitch black. Today, this aesthetic evokes supreme technical wizardry and cyberpunk nostalgia.',
        usecases: [
            'Interactive developer portfolios, CLI tool documentation, and cybersecurity platforms.',
            'Capture-the-flag (CTF) gaming websites and puzzle/mystery marketing experiences.',
            'AI prompt engineering sandboxes wanting an authentic hacker aesthetic.'
        ],
        pitfalls: 'Strict monospaced layouts and bright glowing text can impair reading speed for non-technical audiences.',
        palette: [
            { name: 'Pitch Black', hex: '#050b05', bg: '#050b05' },
            { name: 'Terminal Green', hex: '#22c55e', bg: '#22c55e' },
            { name: 'Phosphor Glow', hex: '#86efac', bg: '#86efac' },
            { name: 'Dark Void', hex: '#000000', bg: '#000000' }
        ],
        cssProps: [
            { prop: 'font-family: "Fira Code", monospace;', desc: 'Ensures strict character alignment across all structural components.' },
            { prop: 'box-shadow: 0 0 20px rgba(34,197,94,0.4);', desc: 'Emulates the glowing phosphor bleed of vintage CRT monitors.' },
            { prop: 'border: 2px solid #22c55e;', desc: 'Sharp green border framing reminiscent of vintage console windows.' }
        ],
        typography: 'Strictly monospaced fonts (Fira Code, Courier New, JetBrains Mono) featuring simulated blinking block cursors and ASCII formatting.',
        className: 'style-terminal',
        snippet: `<div class="terminal-card" style="background: #020602; border: 2px solid #22c55e; border-radius: 4px; box-shadow: 0 0 20px rgba(34,197,94,0.4); padding: 32px; color: #22c55e; font-family: monospace;">
  <h3 style="font-size: 22px; font-weight: 700; text-shadow: 0 0 8px rgba(34,197,94,0.6); margin-bottom: 16px;">> SYS_INIT // TERMINAL</h3>
  <button style="background: #000000; color: #22c55e; border: 2px solid #22c55e; box-shadow: 0 0 12px rgba(34,197,94,0.5); font-family: monospace; font-weight: 700; padding: 12px 24px; cursor: pointer;">> RUN_CMD</button>
</div>`,
        stitchPrompt: `Generate a retro hacker interface adhering strictly to the 'Retro / Terminal' UI/UX styling category.
Key design constraints:
1. Apply a pitch black background (#050b05) with subtle horizontal scanline overlays.
2. All containers must be dark console windows (#020602) framed by bright green borders (#22c55e) casting outer phosphor glows.
3. Strictly utilize monospaced typography (Fira Code / monospace) for every text element.
4. Emulate command-line prompts (e.g., prefixing headers with '>' and simulating blinking cursors).`
    },
    {
        id: 'pixel',
        name: 'Pixel Art / Game UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Chunky 8-bit borders, limited arcade palettes, game-style stat bars, and retro sprite aesthetics.',
        tagline: 'Ready player one. Bringing the golden age of arcade gaming to web interfaces.',
        history: 'Born out of the strict memory and resolution limits of 8-bit and 16-bit gaming consoles (NES, SNES, Sega Genesis), pixel art turned technological limitation into a beloved art form. In web UI, it evokes immediate fun, nostalgia, and gamified engagement.',
        usecases: [
            'Indie game studio websites, game promotion landing pages, and retro arcade databases.',
            'Gamified productivity apps, habit trackers, and Web3 pixel avatar projects.',
            'Merchandise shops for gaming creators and chiptune music artists.'
        ],
        pitfalls: 'Chunky pixelated text can become unreadable at small font sizes. Care must be taken to pair pixel headers with highly legible body fonts.',
        palette: [
            { name: 'Arcade Purple', hex: '#3b0764', bg: '#3b0764' },
            { name: 'Console Blue', hex: '#2563eb', bg: '#2563eb' },
            { name: 'Coin Yellow', hex: '#facc15', bg: '#facc15' },
            { name: 'Retro Red', hex: '#ef4444', bg: '#ef4444' }
        ],
        cssProps: [
            { prop: 'box-shadow: 8px 8px 0px #000000;', desc: 'Recreates the chunky, unblurred drop shadow of vintage sprite graphics.' },
            { prop: 'font-family: "Press Start 2P", monospace;', desc: 'Provides the iconic, blocky 8-bit arcade typography.' },
            { prop: 'border: 4px solid #000000;', desc: 'Thick, uncompromising black framing around console containers.' }
        ],
        typography: 'Iconic 8-bit display fonts (Press Start 2P, VT323) paired with clean blocky secondary fonts to balance retro flavor with readability.',
        className: 'style-pixel',
        snippet: `<div class="pixel-card" style="background: #2563eb; border: 4px solid #000000; box-shadow: 8px 8px 0px #000000; padding: 36px; color: #ffffff; font-family: monospace;">
  <h3 style="color: #facc15; font-size: 20px; text-shadow: 3px 3px 0px #000000; margin-bottom: 16px;">ARCADE STAGE 1</h3>
  <button style="background: #facc15; color: #000000; border: 4px solid #000000; box-shadow: 4px 4px 0px #000000; font-family: monospace; font-weight: 800; padding: 14px 24px; cursor: pointer;">PRESS START</button>
</div>`,
        stitchPrompt: `Generate a fun, gamified web screen adhering strictly to the 'Pixel Art / Game UI' UI/UX styling category.
Key design constraints:
1. Use a rich arcade purple background (#3b0764).
2. All component cards must be vibrant solid boxes (#2563eb blue) bounded by thick 4px black borders and chunky black drop shadows (box-shadow: 8px 8px 0px #000000).
3. Utilize retro 8-bit arcade typography (e.g., 'Press Start 2P' or chunky monospace) with solid text shadows.
4. Primary buttons should be bright arcade coin yellow (#facc15) with tactile pressed animations.`
    },
    {
        id: 'dashboard',
        name: 'Dashboard UI/UX',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'KPI cards, dense structured tables, status indicator badges, and highly scannable layouts.',
        tagline: 'High-density, professional visual engineering designed for complex decision making.',
        history: 'As digital enterprises shifted to cloud analytics and massive SaaS platforms, a dedicated dashboard aesthetic emerged. It prioritizes rapid visual scanning, strict data hierarchy, clear status colors (green/yellow/red), and professional compact density.',
        usecases: [
            'Enterprise resource planning (ERP) systems, CRM software, and cloud infrastructure monitoring.',
            'Financial trading terminals, stock market analytics, and business intelligence hubs.',
            'Server management consoles and logistics fleet tracking platforms.'
        ],
        pitfalls: 'If visual hierarchy is weak or if padding is too cramped, data density turns into cognitive overload for the user.',
        palette: [
            { name: 'Dashboard Slate', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Panel Surface', hex: '#1e293b', bg: '#1e293b' },
            { name: 'Enterprise Blue', hex: '#0284c7', bg: '#0284c7' },
            { name: 'Success Green', hex: '#047857', bg: '#047857' }
        ],
        cssProps: [
            { prop: 'border: 1px solid #334155;', desc: 'Clean, professional framing ensures structured separation between dense KPI panels.' },
            { prop: 'box-shadow: 0 4px 20px rgba(0,0,0,0.3);', desc: 'Diffused, enterprise-grade shadows elevate interactive analytics cards.' },
            { prop: 'border-radius: 12px;', desc: 'Professional, restrained corner rounding.' }
        ],
        typography: 'Highly legible, space-efficient sans-serifs (Inter, Segoe UI, Roboto) utilizing strict tabular lining for numbers to ensure perfect vertical alignment in data tables.',
        className: 'style-dashboard',
        snippet: `<div class="dashboard-panel" style="background: #1e293b; border: 1px solid #334155; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); padding: 32px; color: #f8fafc; font-family: sans-serif;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <h3 style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 0;">Server Load KPI</h3>
    <span style="background: #047857; color: #a7f3d0; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px;">ONLINE</span>
  </div>
  <button style="background: #0284c7; color: white; border-radius: 6px; border: none; font-weight: 600; padding: 12px 24px; cursor: pointer;">Export Analytics</button>
</div>`,
        stitchPrompt: `Generate a highly professional analytics dashboard screen adhering to the 'Dashboard UI/UX' UI/UX styling category.
Key design constraints:
1. Utilize a professional dark slate background (#0f172a) with structured component panels (#1e293b).
2. Bound all panels with clean, subtle borders (#334155) and professional corner radii (12px).
3. Emphasize data clarity: include live status badges (#047857 green) and clean structural alignment.
4. Highlight primary action buttons with professional enterprise blue (#0284c7).`
    },
    {
        id: 'ecommerce',
        name: 'E-commerce',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Action-optimized product cards, review star ratings, high-urgency badges, and high-conversion CTAs.',
        tagline: 'Relentlessly optimized visual engineering designed to maximize customer conversion.',
        history: 'Refined over decades of multi-million dollar A/B testing by giants like Amazon, Shopify, and Nike, the E-commerce aesthetic is built to build trust, communicate value instantly, and remove every possible friction point on the path to purchase.',
        usecases: [
            'Direct-to-consumer (DTC) brand stores, online marketplaces, and boutique shops.',
            'Hotel booking platforms, flight reservation systems, and event ticket sales.',
            'SaaS pricing pages and checkout funnels.'
        ],
        pitfalls: 'If urgency badges ("Only 1 left!") or popups are overused, the site can feel untrustworthy, manipulative, or spammy.',
        palette: [
            { name: 'Crisp Neutral', hex: '#f8fafc', bg: '#f8fafc' },
            { name: 'Product Card', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Conversion Orange', hex: '#ea580c', bg: '#ea580c' },
            { name: 'Urgency Yellow', hex: '#fef3c7', bg: '#fef3c7' }
        ],
        cssProps: [
            { prop: 'box-shadow: 0 4px 12px rgba(234,88,12,0.3);', desc: 'Applies a vibrant, attention-grabbing shadow specifically to the primary conversion CTA button.' },
            { prop: 'border: 1px solid #e2e8f0;', desc: 'Crisp, clean boundaries put the focus entirely on the product imagery.' },
            { prop: 'border-radius: 12px;', desc: 'Friendly, accessible corner geometry designed for maximum consumer comfort.' }
        ],
        typography: 'High-legibility, reassuring sans-serifs with strong price tag weight emphasis and clear hierarchical sizing.',
        className: 'style-ecommerce',
        snippet: `<div class="ecom-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding: 32px; color: #0f172a; font-family: sans-serif; position: relative;">
  <span style="background: #fef3c7; color: #d97706; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 100px; border: 1px solid #fde68a; margin-bottom: 12px; display: inline-block;">🔥 1 Left in Stock</span>
  <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 16px;">Premium Wireless Headphones</h3>
  <button style="background: #ea580c; color: white; border-radius: 8px; border: none; font-weight: 700; padding: 14px 28px; font-size: 15px; box-shadow: 0 4px 12px rgba(234,88,12,0.3); cursor: pointer;">ADD TO CART — $299</button>
</div>`,
        stitchPrompt: `Generate a conversion-optimized web store interface adhering to the 'E-commerce' UI/UX styling category.
Key design constraints:
1. Rely on a clean, light neutral backdrop (#f8fafc) with crisp white product cards (#ffffff).
2. Incorporate prominent urgency/trust badges (e.g., '🔥 High Demand' in yellow #fef3c7 pills) to encourage action.
3. Make the primary call-to-action button highly prominent using high-conversion orange (#ea580c) casting a vibrant outer drop shadow.
4. Keep typography bold, clear, and reassuring with strong price emphasis.`
    },
    // ==========================================================================
    // CLASSIC FOUNDATIONS (ADDITIONS)
    // ==========================================================================
    {
        id: 'skeuominimalism',
        name: 'Skeuominimalism',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Hybrid of skeuomorphic realism with minimalist restraint — clean layouts with highly tactile hero controls.',
        tagline: 'Tactile realism meets modern minimalist restraint.',
        history: 'As digital design matured past the hyper-flat era, designers realized that completely flat interfaces lacked tactile affordances. Skeuominimalism emerged as an elegant middle ground: keeping the uncluttered whitespace of minimalism but introducing ultra-realistic, beautifully rendered knobs, sliders, or hero buttons.',
        usecases: [
            'Premium smart home apps and high-end audio controller interfaces.',
            'Digital watch faces and luxury automotive dashboard displays.',
            'High-end professional photography and video editing software tools.'
        ],
        pitfalls: 'If the realistic elements clash with the minimalist background, the interface can feel disjointed. Balance is key.',
        palette: [
            { name: 'Clean Surface', hex: '#f8fafc', bg: '#f8fafc' },
            { name: 'Tactile Dial', hex: '#e2e8f0', bg: 'linear-gradient(to bottom, #ffffff, #cbd5e1)' },
            { name: 'Brushed Slate', hex: '#334155', bg: '#334155' },
            { name: 'Active LED Blue', hex: '#0284c7', bg: '#0284c7' }
        ],
        cssProps: [
            { prop: 'box-shadow: 0 4px 10px rgba(0,0,0,0.1), inset 0 1px 0 #ffffff;', desc: 'Provides a crisp, subtle 3D lift without overwhelming the minimalist canvas.' },
            { prop: 'background: linear-gradient(to bottom, #ffffff, #f1f5f9);', desc: 'Simulates a gently curved, high-quality physical material.' },
            { prop: 'border: 1px solid #cbd5e1;', desc: 'Clean, precise manufacturing tolerances for digital widgets.' }
        ],
        typography: 'Crisp, technical sans-serifs like Inter or Roboto Mono, reflecting high-precision engineering.',
        className: 'style-skeuominimalism',
        snippet: `<div class="skeuomini-card" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 36px; color: #0f172a; font-family: sans-serif;">
  <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 20px;">Skeuominimal Dial</h3>
  <button style="background: linear-gradient(to bottom, #ffffff, #e2e8f0); border: 1px solid #94a3b8; border-radius: 12px; color: #0f172a; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 10px rgba(0,0,0,0.1), inset 0 1px 0 #ffffff; cursor: pointer;">Tactile Control</button>
</div>`,
        stitchPrompt: `Generate an elegant, high-precision web interface adhering to the 'Skeuominimalism' UI/UX styling category.
Key design constraints:
1. Maintain a pristine, minimalist white background (#ffffff) with generous whitespace.
2. Feature tactile, beautifully rendered controls with subtle linear gradients and crisp 3D highlights (inset box-shadows).
3. Keep the overall layout restrained, avoiding unnecessary decorative elements.
4. Utilize sharp, clean technical sans-serif typography.`
    },
    {
        id: 'lineart',
        name: 'Line Art UI',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Thin elegant outlines, monochrome vector graphics, clean wireframe aesthetics, and absolute minimalism.',
        tagline: 'The architectural beauty of pure vector linework.',
        history: 'Deriving its aesthetic from architectural blueprints, wireframes, and minimalist print illustration, Line Art UI celebrates the raw beauty of vector paths. It strips away fills, gradients, and shadows to rely entirely on uniform stroke widths.',
        usecases: [
            'Architecture firm portfolios and industrial design studios.',
            'High-concept fashion catalogs and avant-garde digital magazines.',
            'Minimalist mobile apps wanting a distinctive, lightweight visual identity.'
        ],
        pitfalls: 'Relying entirely on thin lines can cause accessibility and clickability issues if interactive elements are not properly emphasized.',
        palette: [
            { name: 'Architectural White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Ink Black', hex: '#000000', bg: '#000000' },
            { name: 'Drafting Gray', hex: '#94a3b8', bg: '#94a3b8' },
            { name: 'Blueprint Slate', hex: '#1e293b', bg: '#1e293b' }
        ],
        cssProps: [
            { prop: 'border: 1px solid #000000;', desc: 'Strict adherence to a uniform 1px outline for every container, button, and rule.' },
            { prop: 'background-color: transparent;', desc: 'Avoids solid color fills in favor of pure negative space.' },
            { prop: 'box-shadow: none;', desc: 'Zero elevation or depth.' }
        ],
        typography: 'Classic geometric sans-serifs or sophisticated monospaced drafting fonts with clean letter-spacing.',
        className: 'style-lineart',
        snippet: `<div class="lineart-box" style="background: #ffffff; border: 1px solid #000000; padding: 40px; color: #000000; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 400; border-bottom: 1px solid #000000; padding-bottom: 12px; margin-bottom: 24px;">Line Art Component</h3>
  <button style="background: transparent; color: #000000; border: 1px solid #000000; padding: 14px 28px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;">Outline Action</button>
</div>`,
        stitchPrompt: `Generate a sophisticated, wireframe-like web interface adhering to the 'Line Art UI' UI/UX styling category.
Key design constraints:
1. Rely entirely on clean 1px black borders (#000000) against a pure white background (#ffffff).
2. Avoid solid color fills, gradients, and drop shadows completely.
3. Feature custom monochrome outline illustrations and icons.
4. Utilize elegant geometric sans-serif typography with prominent dividing lines.`
    },
    {
        id: 'corporate',
        name: 'Corporate UI',
        category: 'classic',
        badge: 'Classic',
        shortDesc: 'Conservative, professional, brand-safe layouts with deep navy tones, crisp cards, and absolute clarity.',
        tagline: 'Enterprise-grade visual engineering designed for maximum trust and reliability.',
        history: 'The quintessential professional web aesthetic, refined over decades by Fortune 500 companies, top-tier financial institutions, and global B2B enterprises. It prioritizes accessibility, clear corporate blue/navy branding, and structured information density.',
        usecases: [
            'Global banking portals, insurance platforms, and enterprise legal portals.',
            'B2B SaaS corporate homepages and investor relations hubs.',
            'Management consulting firm archives and corporate governance systems.'
        ],
        pitfalls: 'Can easily feel sterile, generic, or boring if the typography and layout lack proper spacing and high-quality imagery.',
        palette: [
            { name: 'Corporate Navy', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Trust Blue', hex: '#0284c7', bg: '#0284c7' },
            { name: 'Executive Slate', hex: '#475569', bg: '#475569' },
            { name: 'Pristine Neutral', hex: '#f8fafc', bg: '#f8fafc' }
        ],
        cssProps: [
            { prop: 'border: 1px solid #e2e8f0;', desc: 'Standardized, crisp container framing.' },
            { prop: 'box-shadow: 0 4px 15px rgba(0,0,0,0.05);', desc: 'Restrained, professional card elevation.' },
            { prop: 'border-radius: 8px;', desc: 'Conservative corner geometry.' }
        ],
        typography: 'Highly professional, universally legible sans-serifs (Inter, Segoe UI, Arial) with highly structured heading hierarchies.',
        className: 'style-corporate',
        snippet: `<div class="corporate-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding: 36px; color: #0f172a; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Enterprise Strategy</h3>
  <p style="color: #475569; font-size: 15px; margin-bottom: 24px;">Scalable, secure, and brand-safe architecture designed for mission-critical operations.</p>
  <button style="background: #0284c7; color: white; border: none; border-radius: 6px; padding: 14px 28px; font-weight: 600; font-size: 15px; cursor: pointer;">Contact Sales</button>
</div>`,
        stitchPrompt: `Generate a highly professional enterprise screen adhering to the 'Corporate UI' UI/UX styling category.
Key design constraints:
1. Utilize a pristine light neutral backdrop (#f8fafc) with structured white component cards (#ffffff).
2. Emphasize trust and clarity by using corporate navy (#0f172a) for text and executive blue (#0284c7) for primary actions.
3. Keep shadows light and restrained (box-shadow: 0 4px 15px rgba(0,0,0,0.05)).
4. Rely on highly structured, clear sans-serif typography with strict grid alignment.`
    },

    // ==========================================================================
    // MODERN & POPULAR (ADDITIONS)
    // ==========================================================================
    {
        id: 'frosted',
        name: 'Frosted UI',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Heavy blur and translucency effects — ultra-diffuse backgrounds with frosted glass overlay panels.',
        tagline: 'Immersive atmospheric depth through extreme backdrop blurring.',
        history: 'While Glassmorphism introduced frosted glass cards, Frosted UI takes the concept to its absolute extreme. Emerging in advanced desktop OS shells and highly immersive mobile apps (like modern weather apps), it blurs entire photographic or dynamic backgrounds into beautiful, diffused pools of light.',
        usecases: [
            'Immersive weather applications and environmental monitors.',
            'Advanced desktop operating system shells and widget overlays.',
            'Ambient music players and immersive media center navigation.'
        ],
        pitfalls: 'Requires highly optimized CSS backdrop-filter rendering to avoid performance lag on lower-end mobile devices.',
        palette: [
            { name: 'Ultra Frost', hex: 'rgba(255,255,255,0.3)', bg: 'rgba(255,255,255,0.3)' },
            { name: 'Deep Diffuse', hex: '#1e293b', bg: '#1e293b' },
            { name: 'Crystal White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Icy Cyan', hex: '#38bdf8', bg: '#38bdf8' }
        ],
        cssProps: [
            { prop: 'backdrop-filter: blur(40px) saturate(180%);', desc: 'Provides intense background blurring and color saturation for extreme frost realism.' },
            { prop: 'background: rgba(255, 255, 255, 0.25);', desc: 'Generates the dense frosted base layer.' },
            { prop: 'border: 1px solid rgba(255, 255, 255, 0.4);', desc: 'Simulates the polished, refractive outer glass rim.' }
        ],
        typography: 'Clean, bold modern sans-serifs with drop shadows to maintain perfect readability against heavy frosted backdrops.',
        className: 'style-frosted',
        snippet: `<div class="frosted-panel" style="background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(40px) saturate(180%); -webkit-backdrop-filter: blur(40px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 24px; box-shadow: 0 12px 40px 0 rgba(0,0,0,0.2); padding: 40px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 26px; font-weight: 700; text-shadow: 0 2px 8px rgba(0,0,0,0.3); margin-bottom: 16px;">Frosted Overlay</h3>
  <button style="background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.6); color: white; padding: 14px 28px; border-radius: 14px; font-weight: 700; box-shadow: 0 4px 15px rgba(0,0,0,0.15); cursor: pointer;">Verify Frost</button>
</div>`,
        stitchPrompt: `Generate an immersive, beautiful web screen adhering to the 'Frosted UI' UI/UX styling category.
Key design constraints:
1. Utilize a vibrant, colorful dynamic background (#38bdf8 cyan to #8b5cf6 purple).
2. All primary interface panels must be heavy frosted glass (background: rgba(255,255,255,0.25), backdrop-filter: blur(40px) saturate(180%)).
3. Apply prominent semi-transparent white borders (border: 1px solid rgba(255,255,255,0.4)) to define container rims.
4. Keep typography crisp, white, and highly legible with deep text shadows.`
    },
    {
        id: 'gradient',
        name: 'Gradient UI',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Bold, multi-color gradients as primary backgrounds, vibrant mesh fills, and high-energy aesthetics.',
        tagline: 'High-energy color engineering that breaks free from monochromatic monotony.',
        history: 'Emerging with the popularization of CSS3 linear and mesh gradients (heavily celebrated by Instagram\'s rebrand and modern energetic SaaS startups), Gradient UI turns color transitions into the primary design hero.',
        usecases: [
            'Creative SaaS tools and modern marketing landing pages.',
            'Vibrant music streaming apps and energetic lifestyle platforms.',
            'Fitness and sports performance dashboards wanting a high-energy visual punch.'
        ],
        pitfalls: 'If gradient colors clash or lack smooth transition stops, the design can look garish or unprofessional.',
        palette: [
            { name: 'Sunset Pink', hex: '#ff416c', bg: '#ff416c' },
            { name: 'Vibrant Orange', hex: '#ff4b2b', bg: '#ff4b2b' },
            { name: 'Rich Violet', hex: '#8a2387', bg: '#8a2387' },
            { name: 'Pristine White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'background: linear-gradient(135deg, #ff416c, #ff4b2b);', desc: 'Employs rich, energetic multi-color gradients on primary backgrounds and buttons.' },
            { prop: 'box-shadow: 0 10px 25px rgba(255, 65, 108, 0.5);', desc: 'Casts a vibrant, color-matched outer drop shadow.' },
            { prop: 'border: none;', desc: 'Relies entirely on vibrant color contrast rather than structural borders.' }
        ],
        typography: 'Bold, punchy display sans-serifs with absolute white fills to stand out against high-energy background gradients.',
        className: 'style-gradient',
        snippet: `<div class="gradient-card" style="background: linear-gradient(135deg, #8a2387, #e94057, #f27121); border-radius: 20px; box-shadow: 0 12px 35px rgba(233, 64, 87, 0.4); padding: 40px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">Vibrant Gradient Panel</h3>
  <button style="background: #ffffff; color: #e94057; border: none; border-radius: 12px; font-weight: 800; padding: 14px 28px; box-shadow: 0 6px 20px rgba(0,0,0,0.15); cursor: pointer;">High Energy CTA</button>
</div>`,
        stitchPrompt: `Generate a vibrant, high-energy web application screen adhering to the 'Gradient UI' UI/UX styling category.
Key design constraints:
1. Employ a stunning multi-color linear or mesh gradient for primary backgrounds (e.g., #8a2387 to #e94057 to #f27121).
2. Contrast the vibrant backgrounds with clean white component panels (#ffffff) or deep solid cards.
3. Feature vibrant gradient buttons casting color-matched outer drop shadows.
4. Utilize bold, punchy sans-serif typography with stark white or dark fills.`
    },
    {
        id: 'morphing',
        name: 'Morphing UI',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Animated shapes that transform fluidly, continuous organic morphing, and dynamic state transitions.',
        tagline: 'Interfaces that feel alive through fluid, continuous geometric transformation.',
        history: 'As web animation libraries and advanced CSS keyframe support matured, designers realized that static shapes were no longer mandatory. Morphing UI introduces continuous, organic shape shifting and seamless transitions where buttons expand into cards and backgrounds breathe fluidly.',
        usecases: [
            'Next-gen AI assistant splash screens and interactive voice command hubs.',
            'Cutting-edge digital design studio portfolios and interactive showreels.',
            'Premium meditation and wellness apps featuring breathing visual guides.'
        ],
        pitfalls: 'Overusing morphing animations can be highly distracting and cause cognitive overload or motion sickness for sensitive users.',
        palette: [
            { name: 'Morphing Purple', hex: '#6366f1', bg: '#6366f1' },
            { name: 'Shifting Pink', hex: '#d946ef', bg: '#d946ef' },
            { name: 'Fluid Neutral', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Soft Backdrop', hex: '#f8fafc', bg: '#f8fafc' }
        ],
        cssProps: [
            { prop: 'animation: shapeMorph 8s ease-in-out infinite alternate;', desc: 'Continuously animates border-radius geometry to create living, breathing digital elements.' },
            { prop: 'transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);', desc: 'Provides hyper-smooth fluid transitions between interactive states.' },
            { prop: 'box-shadow: 0 10px 40px rgba(99,102,241,0.3);', desc: 'Casts a rich, shifting ambient shadow.' }
        ],
        typography: 'Smooth, elegant geometric sans-serifs that complement fluid, shifting structural geometries.',
        className: 'style-morphing',
        snippet: `<div class="morphing-box" style="background: linear-gradient(135deg, #6366f1, #d946ef); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; box-shadow: 0 12px 40px rgba(99,102,241,0.4); padding: 50px 40px; color: white; font-family: sans-serif; text-align: center;">
  <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">Morphing Container</h3>
  <button style="background: #ffffff; color: #6366f1; border: none; border-radius: 25px; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); cursor: pointer;">Transform State</button>
</div>`,
        stitchPrompt: `Generate a fluid, living web application screen adhering to the 'Morphing UI' UI/UX styling category.
Key design constraints:
1. Utilize fluid, organic containers with complex, asymmetrical border-radii (e.g., 60% 40% 30% 70% / 60% 30% 70% 40%).
2. Apply vibrant linear gradients (#6366f1 purple to #d946ef pink) to interactive containers.
3. Feature rich outer drop shadows that elevate the morphing shapes above a clean backdrop.
4. Maintain clean, bold sans-serif typography.`
    },
    {
        id: 'minimaldark',
        name: 'Minimal Dark UI',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Hybrid of minimalism and dark mode — absolute black backgrounds, crisp white type, and extreme restraint.',
        tagline: 'The ultimate luxury aesthetic: pure darkness meets exquisite minimalist restraint.',
        history: 'Marrying the battery-saving elegance of dark mode with the uncompromising negative space of minimalism, Minimal Dark UI has become the signature aesthetic of elite design agencies and luxury technology brands.',
        usecases: [
            'High-end design studio homepages and award-winning creative portfolios.',
            'Luxury technology hardware landing pages and elite architectural showcases.',
            'Minimalist developer portfolios wanting an ultra-premium, zero-clutter identity.'
        ],
        pitfalls: 'Without borders or background card shades, organizing dense information grids requires absolute mastery of typography and spacing.',
        palette: [
            { name: 'Absolute Void', hex: '#000000', bg: '#000000' },
            { name: 'Stark White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Whisper Gray', hex: '#71717a', bg: '#71717a' },
            { name: 'Border Slate', hex: '#27272a', bg: '#27272a' }
        ],
        cssProps: [
            { prop: 'background-color: #000000;', desc: 'Provides the absolute light-absorbing void backdrop.' },
            { prop: 'border: 1px solid #27272a;', desc: 'Ultra-subtle dark border lines used only for essential framing.' },
            { prop: 'box-shadow: none;', desc: 'Completely eliminates drop shadows in favor of stark contrast.' }
        ],
        typography: 'Exquisite attention to premium geometric sans-serifs or sophisticated serifs with perfect kerning and generous line-height.',
        className: 'style-minimaldark',
        snippet: `<div class="minimal-dark-box" style="background: #000000; border: 1px solid #27272a; border-radius: 8px; padding: 48px; color: #ffffff; font-family: sans-serif;">
  <h3 style="font-size: 24px; font-weight: 400; letter-spacing: -0.5px; margin-bottom: 16px;">Pure Monochromatic Void</h3>
  <p style="color: #71717a; font-size: 15px; margin-bottom: 28px;">Extreme restraint, generous negative space, and absolute typography precision.</p>
  <button style="background: #ffffff; color: #000000; border: none; border-radius: 4px; padding: 14px 28px; font-weight: 600; font-size: 14px; cursor: pointer;">Explore Void</button>
</div>`,
        stitchPrompt: `Generate an ultra-premium, dark minimalist screen adhering to the 'Minimal Dark UI' UI/UX styling category.
Key design constraints:
1. Rely on an absolute black background (#000000) with extensive negative space.
2. Maintain a strict monochromatic palette: pure white text (#ffffff) and subtle gray accents (#71717a).
3. Completely eliminate drop shadows and decorative background elements.
4. Utilize pristine, elegant typography with sharp size contrast between headings and body copy.`
    },
    {
        id: 'luxury',
        name: 'Luxury UI',
        category: 'modern',
        badge: 'Modern',
        shortDesc: 'Gold accents, premium textures, elegant serif typography, generous spacing, and bespoke craftsmanship.',
        tagline: 'Digital craftsmanship tailored for the world\'s most exclusive brands.',
        history: 'Derived from high-end print magazines, luxury horology catalogs, and fine jewelry branding, Luxury UI translates premium physical materials (gold foil, rich marble, deep velvet) into pristine digital screens.',
        usecases: [
            'High-end hospitality, luxury resort booking, and private aviation platforms.',
            'Fine jewelry, haute couture fashion, and luxury watchmaker catalogs.',
            'Premium real estate developer showcases and bespoke concierge apps.'
        ],
        pitfalls: 'Faux gold gradients can easily look cheap or tacky if they lack subtle, elegant lighting stops and proper typography pairing.',
        palette: [
            { name: 'Rich Midnight', hex: '#0a0a0a', bg: '#0a0a0a' },
            { name: 'Bespoke Gold', hex: '#d4af37', bg: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7)' },
            { name: 'Velvet Slate', hex: '#1c1c1c', bg: '#1c1c1c' },
            { name: 'Pristine Cream', hex: '#fdfbf7', bg: '#fdfbf7' }
        ],
        cssProps: [
            { prop: 'background: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728);', desc: 'Employs exquisite metallic gold foil gradients for primary buttons and accents.' },
            { prop: 'border: 1px solid #d4af37;', desc: 'Provides elegant gold framing around premium container cards.' },
            { prop: 'letter-spacing: 2px;', desc: 'Generous uppercase letter-spacing imparts high-end editorial elegance.' }
        ],
        typography: 'Sophisticated high-contrast serif fonts (such as Playfair Display, Cinzel, or Bodoni) paired with pristine, clean sans-serif secondary copy.',
        className: 'style-luxury',
        snippet: `<div class="luxury-card" style="background: #0a0a0a; border: 1px solid #d4af37; border-radius: 12px; padding: 48px; color: #fdfbf7; font-family: serif; text-align: center;">
  <h3 style="font-size: 28px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; color: #d4af37;">Bespoke Excellence</h3>
  <p style="font-family: sans-serif; color: #a3a3a3; font-size: 14px; letter-spacing: 1px; margin-bottom: 32px;">Uncompromising digital craftsmanship tailored for exclusive heritage brands.</p>
  <button style="background: linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7); color: #0a0a0a; border: none; border-radius: 4px; padding: 14px 32px; font-family: sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer;">Reserve Experience</button>
</div>`,
        stitchPrompt: `Generate an exquisite, ultra-premium screen adhering to the 'Luxury UI' UI/UX styling category.
Key design constraints:
1. Utilize a rich midnight black background (#0a0a0a) with elegant gold accents (#d4af37).
2. Primary buttons and active states must feature rich metallic gold linear gradients.
3. Feature elegant high-contrast serif typography for headings with generous uppercase letter-spacing (letter-spacing: 2px).
4. Maintain expansive whitespace and perfect symmetry across all premium cards.`
    },

    // ==========================================================================
    // EXPERIMENTAL & ARTISTIC (ADDITIONS)
    // ==========================================================================
    {
        id: 'memphis',
        name: 'Memphis Design UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Geometric shapes, bold clashing colors, playful randomness, squiggly lines, and 80s pop aesthetics.',
        tagline: 'A joyful rebellion of geometric patterns and clashing 80s pop colors.',
        history: 'Originating from the influential Memphis Group art movement founded by Ettore Sottsass in 1981, this aesthetic broke all rules of functional minimalism. In web UI, it combines bold primary color blocks, playful squiggles, dots, grids, and joyful geometric randomness.',
        usecases: [
            'Creative agency homepages and edgy design portfolios.',
            'Youth marketing campaigns, festival websites, and pop-culture event pages.',
            'Fun interactive quizzes and vibrant experiential web apps.'
        ],
        pitfalls: 'The intense visual noise and clashing patterns can make standard navigation elements difficult to discover if visual hierarchy is not carefully managed.',
        palette: [
            { name: 'Pop Pink', hex: '#ff007f', bg: '#ff007f' },
            { name: 'Electric Cyan', hex: '#00e5ff', bg: '#00e5ff' },
            { name: 'Banana Yellow', hex: '#ffea00', bg: '#ffea00' },
            { name: 'Harsh Black', hex: '#000000', bg: '#000000' }
        ],
        cssProps: [
            { prop: 'border: 4px solid #000000;', desc: 'Thick comic-style black borders define vibrant geometric containers.' },
            { prop: 'box-shadow: 8px 8px 0px #000000;', desc: 'Solid black drop shadows anchor the playful, clashing color boxes.' },
            { prop: 'background-image: radial-gradient(#000 15%, transparent 16%);', desc: 'Employs classic 80s pop art dot grid background patterns.' }
        ],
        typography: 'Playful, bold, quirky display fonts paired with clean blocky secondary type, often presented in vibrant contrasting boxes.',
        className: 'style-memphis',
        snippet: `<div class="memphis-card" style="background: #00e5ff; border: 4px solid #000000; box-shadow: 8px 8px 0px #000000; padding: 40px; color: #000000; font-family: sans-serif; position: relative;">
  <div style="background: #ffea00; border: 3px solid #000000; padding: 6px 14px; font-weight: 800; display: inline-block; margin-bottom: 16px;">POP ART 81</div>
  <h3 style="font-size: 26px; font-weight: 900; text-transform: uppercase; margin-bottom: 24px;">Memphis Design Panel</h3>
  <button style="background: #ff007f; color: white; border: 4px solid #000000; box-shadow: 4px 4px 0px #000000; font-weight: 900; text-transform: uppercase; padding: 14px 28px; font-size: 15px; cursor: pointer;">Rad Action</button>
</div>`,
        stitchPrompt: `Generate a fun, vibrant web screen adhering strictly to the 'Memphis Design UI' UI/UX styling category.
Key design constraints:
1. Utilize a playful, high-contrast palette of 80s pop colors (e.g., #ff007f pink, #00e5ff cyan, #ffea00 yellow).
2. Every card and button must feature thick 4px black borders (#000000) and solid black drop shadows (box-shadow: 8px 8px 0px #000000).
3. Include playful background elements like geometric squiggles, dots, and bold angled shapes.
4. Keep typography bold, quirky, and uppercase.`
    },
    {
        id: 'cartoon',
        name: 'Cartoon / Comic UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Hand-drawn aesthetics, comic-style speech bubbles, halftone dot textures, and playful illustrations.',
        tagline: 'Bringing the joyful, hand-drawn magic of comic books to digital screens.',
        history: 'Inspired by comic book panels, graphic novels, and vintage animation, this aesthetic brings a human, hand-crafted touch to web applications. It embraces speech bubbles, hand-drawn line art, halftone dot textures, and playful typographic sound effects.',
        usecases: [
            'Webcomic publishing platforms and graphic novel promotion sites.',
            'Playful SaaS tools, creative portfolios, and children\'s educational software.',
            'Gaming community portals and creative storytelling websites.'
        ],
        pitfalls: 'Hand-drawn elements can look messy or unaligned if they are not anchored by a solid underlying layout grid.',
        palette: [
            { name: 'Comic Yellow', hex: '#fde047', bg: '#fde047' },
            { name: 'Action Red', hex: '#ef4444', bg: '#ef4444' },
            { name: 'Ink Black', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Paper White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'border: 3px solid #0f172a;', desc: 'Simulates thick, hand-inked comic book panel borders.' },
            { prop: 'box-shadow: 6px 6px 0px #0f172a;', desc: 'Solid dark drop shadows provide bold comic panel elevation.' },
            { prop: 'border-radius: 16px 16px 16px 0px;', desc: 'Creates the classic comic speech bubble geometry.' }
        ],
        typography: 'Fun, comic-style display fonts (such as Bangers, Comic Neue, or Patrick Hand) paired with highly legible bold sans-serifs.',
        className: 'style-cartoon',
        snippet: `<div class="comic-card" style="background: #ffffff; border: 3px solid #0f172a; border-radius: 20px 20px 20px 0px; box-shadow: 8px 8px 0px #0f172a; padding: 36px; color: #0f172a; font-family: sans-serif;">
  <span style="background: #ef4444; color: white; font-weight: 800; padding: 4px 12px; border-radius: 100px; border: 2px solid #0f172a; display: inline-block; margin-bottom: 16px;">KAPOW!</span>
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Comic Speech Bubble</h3>
  <button style="background: #fde047; color: #0f172a; border: 3px solid #0f172a; border-radius: 12px; font-weight: 800; padding: 14px 28px; box-shadow: 4px 4px 0px #0f172a; cursor: pointer;">Action Click</button>
</div>`,
        stitchPrompt: `Generate a fun, hand-drawn comic screen adhering to the 'Cartoon / Comic UI' UI/UX styling category.
Key design constraints:
1. Utilize bright comic book colors (#fde047 yellow, #ef4444 red, #ffffff white).
2. Frame all cards and buttons with thick 3px black borders (#0f172a) and solid black drop shadows (box-shadow: 6px 6px 0px #0f172a).
3. Feature playful speech bubble geometries (e.g., border-radius: 20px 20px 20px 0px).
4. Employ fun, bold comic typography with prominent action badges.`
    },
    {
        id: 'emoji',
        name: 'Emoji UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Heavy use of emoji as primary iconography, playful layouts, cheerful colors, and friendly navigation.',
        tagline: 'The universal, expressive visual language of the modern social web.',
        history: 'As Unicode emoji support became universally standardized across all operating systems, modern social platforms, community hubs, and Gen-Z apps embraced emoji as their primary iconographic language. It provides instant emotional context and zero-latency icon rendering.',
        usecases: [
            'Social community tools, Discord companion apps, and modern forum platforms.',
            'Feedback collection widgets and interactive customer satisfaction surveys.',
            'Gen-Z lifestyle apps and fun productivity trackers.'
        ],
        pitfalls: 'System emoji render differently across iOS, Windows, Android, and macOS. Reliance on exact emoji details can lead to unexpected visual discrepancies across devices.',
        palette: [
            { name: 'Joyful Yellow', hex: '#fef08a', bg: '#fef08a' },
            { name: 'Happy Blue', hex: '#38bdf8', bg: '#38bdf8' },
            { name: 'Exciting Pink', hex: '#f472b6', bg: '#f472b6' },
            { name: 'Deep Slate', hex: '#0f172a', bg: '#0f172a' }
        ],
        cssProps: [
            { prop: 'font-size: 32px;', desc: 'Puts massive system emoji front and center as primary hero graphics.' },
            { prop: 'background: #ffffff;', desc: 'Provides a clean, high-contrast canvas for vibrant multi-color emoji sprites.' },
            { prop: 'border-radius: 24px;', desc: 'Soft, friendly corner geometry complements cheerful emoji expressions.' }
        ],
        typography: 'Clean, friendly, modern sans-serifs like Inter or Poppins, fully optimized for pristine inline emoji rendering.',
        className: 'style-emoji',
        snippet: `<div class="emoji-card" style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); padding: 36px; color: #0f172a; font-family: sans-serif; text-align: center;">
  <div style="font-size: 48px; margin-bottom: 16px;">🚀✨🌟</div>
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px;">Emoji-Powered Component</h3>
  <p style="color: #64748b; font-size: 15px; margin-bottom: 24px;">High-fidelity, universal Unicode expressions for maximum social engagement 💬🎉</p>
  <button style="background: #38bdf8; color: white; border: none; border-radius: 100px; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 15px rgba(56,189,248,0.3); cursor: pointer;">Explore Magic 🔮</button>
</div>`,
        stitchPrompt: `Generate a friendly, cheerful web screen adhering to the 'Emoji UI' UI/UX styling category.
Key design constraints:
1. Feature system emoji prominently as the primary iconographic elements across all cards and buttons.
2. Utilize a clean, bright background (#ffffff) with cheerful pastel accent colors (#38bdf8 blue, #fef08a yellow).
3. Keep containers softly rounded (border-radius: 24px) with subtle, friendly drop shadows.
4. Employ clean, modern sans-serif typography with generous spacing.`
    },
    {
        id: 'isometric',
        name: 'Isometric UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: '3D isometric illustrations, angled structural layouts, architectural depth, and technical precision.',
        tagline: 'Elevating 2D interfaces into precise, architectural 3D isometric planes.',
        history: 'Rooted in technical engineering drawing and legendary isometric video games, Isometric UI gained immense popularity in the SaaS and Web3 space. By tilting components onto a strict 30-degree isometric grid, web pages display complex architectures, server clusters, and workflows with beautiful architectural depth.',
        usecases: [
            'Cloud infrastructure platforms, cybersecurity suites, and DevOps management dashboards.',
            'Web3 architecture diagrams and crypto protocol visualizers.',
            'Logistics fleet tracking and smart city management hubs.'
        ],
        pitfalls: 'Interactive forms or text-heavy paragraphs tilted onto an isometric plane are extremely difficult to read and interact with. Isometric styling should be reserved for hero graphics and overview cards.',
        palette: [
            { name: 'Isometric Blue', hex: '#2563eb', bg: '#2563eb' },
            { name: 'Structural Gray', hex: '#e2e8f0', bg: '#e2e8f0' },
            { name: 'Deep Perspective', hex: '#1e293b', bg: '#1e293b' },
            { name: 'Grid White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'transform: rotateX(60deg) rotateZ(-45deg);', desc: 'Tilts the DOM element onto a strict 3D isometric plane.' },
            { prop: 'box-shadow: -10px 10px 20px rgba(0,0,0,0.2);', desc: 'Casts an angled, realistic shadow adhering to the isometric light source.' },
            { prop: 'border: 1px solid #cbd5e1;', desc: 'Defines the structural geometric edges of the isometric block.' }
        ],
        typography: 'Sharp, technical sans-serifs like Roboto or Inter, optimized for clear tabular data display.',
        className: 'style-isometric',
        snippet: `<div class="isometric-box" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: -10px 10px 30px rgba(0,0,0,0.15); padding: 40px; color: #1e293b; font-family: sans-serif; transform: perspective(1000px) rotateX(15deg) rotateY(-15deg); transition: transform 0.4s ease;">
  <div style="background: #2563eb; color: white; padding: 4px 12px; font-weight: 700; border-radius: 4px; display: inline-block; margin-bottom: 16px;">ISO // 30° PLANE</div>
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Isometric Architecture</h3>
  <button style="background: #1e293b; color: white; border: none; border-radius: 6px; font-weight: 700; padding: 14px 28px; box-shadow: -4px 4px 12px rgba(0,0,0,0.2); cursor: pointer;">Deploy Stack</button>
</div>`,
        stitchPrompt: `Generate a technical, architectural web interface adhering to the 'Isometric UI' UI/UX styling category.
Key design constraints:
1. Feature 3D isometric illustrations and angled component planes against a clean structural background (#e2e8f0).
2. Utilize crisp white component boxes (#ffffff) casting angled isometric drop shadows (-10px 10px 20px rgba(0,0,0,0.2)).
3. Highlight primary structural elements with technical blue (#2563eb).
4. Rely on sharp, clean technical typography.`
    },
    {
        id: 'futuristic',
        name: 'Futuristic / HUD UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Sci-fi inspired holographic panels, Heads-Up Displays (HUD), glowing cyan reticles, and data readouts.',
        tagline: 'Step into the bridge of a starship: advanced sci-fi HUD visual engineering.',
        history: 'Directly inspired by legendary sci-fi cinema (Iron Man\'s JARVIS, Minority Report, Star Trek), Futuristic UI brings advanced Heads-Up Display (HUD) mechanics to web applications. It features glowing reticles, circular data rings, and translucent holographic data windows.',
        usecases: [
            'Virtual reality (VR) companion web apps and advanced gaming portals.',
            'Next-generation AI hardware configuration dashboards.',
            'High-concept tech brand homepages and immersive promotional experiences.'
        ],
        pitfalls: 'Busy HUD reticles and decorative data rings can create immense visual noise, distracting users from the primary call to action.',
        palette: [
            { name: 'HUD Void', hex: '#030712', bg: '#030712' },
            { name: 'Holo Cyan', hex: '#06b6d4', bg: '#06b6d4' },
            { name: 'Warning Amber', hex: '#f59e0b', bg: '#f59e0b' },
            { name: 'Tactical Blue', hex: '#1d4ed8', bg: '#1d4ed8' }
        ],
        cssProps: [
            { prop: 'border: 1px solid #06b6d4;', desc: 'Laser-sharp glowing cyan framing defines holographic data windows.' },
            { prop: 'box-shadow: 0 0 15px rgba(6,182,212,0.5), inset 0 0 15px rgba(6,182,212,0.3);', desc: 'Provides dual outer and inner holographic glows.' },
            { prop: 'background: rgba(6, 182, 212, 0.05);', desc: 'Simulates a whisper-thin translucent holographic light field.' }
        ],
        typography: 'Futuristic technical fonts or sharp monospaced readouts with bright glowing text-shadows.',
        className: 'style-futuristic',
        snippet: `<div class="hud-card" style="background: rgba(6, 182, 212, 0.05); border: 1px solid #06b6d4; border-radius: 8px; box-shadow: 0 0 15px rgba(6,182,212,0.5), inset 0 0 15px rgba(6,182,212,0.3); padding: 40px; color: #06b6d4; font-family: monospace; position: relative;">
  <div style="position: absolute; top: 10px; right: 10px; font-size: 12px; border: 1px solid #06b6d4; padding: 2px 6px;">HUD // 98.4%</div>
  <h3 style="font-size: 24px; font-weight: 700; text-shadow: 0 0 10px rgba(6,182,212,0.8); margin-bottom: 16px;">[SYS.HUD.ONLINE]</h3>
  <button style="background: #06b6d4; color: #030712; border: none; border-radius: 4px; font-family: monospace; font-weight: 800; padding: 14px 28px; box-shadow: 0 0 20px rgba(6,182,212,0.8); cursor: pointer;">INITIALIZE LINK</button>
</div>`,
        stitchPrompt: `Generate an advanced sci-fi HUD screen adhering to the 'Futuristic / HUD UI' UI/UX styling category.
Key design constraints:
1. Utilize a deep dark space void background (#030712).
2. All interface containers must be translucent holographic windows framed by glowing cyan borders (#06b6d4) with inner and outer box-shadow glows.
3. Incorporate sci-fi HUD elements like technical data readouts, brackets, and reticle graphics.
4. Rely on sharp, technical monospaced typography with bright glowing text shadows.`
    },
    {
        id: 'retrofuturism',
        name: 'Retro-Futurism UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Mix of vintage 80s synthwave aesthetics and futuristic elements — chrome logos, neon grids, and sunset gradients.',
        tagline: 'The future as imagined by the glorious 1980s synthwave movement.',
        history: 'Retro-futurism (specifically Outrun / Synthwave aesthetics) celebrates how the 1980s envisioned the distant future. It combines glowing neon wireframe grids, chrome/metallic logo treatments, vibrant magenta sunset gradients, and vintage sports car aesthetics.',
        usecases: [
            'Synthwave music label portals and indie game studio homepages.',
            'Vintage arcade databases and retro pop-culture merchandise shops.',
            'Creative portfolio websites wanting an unforgettable, nostalgic visual punch.'
        ],
        pitfalls: 'Intense magenta and violet color combinations can cause visual fatigue if applied to long-form reading articles or standard enterprise tools.',
        palette: [
            { name: 'Synthwave Purple', hex: '#2e0854', bg: '#2e0854' },
            { name: 'Neon Magenta', hex: '#ff007f', bg: '#ff007f' },
            { name: 'Sunset Orange', hex: '#ff7700', bg: '#ff7700' },
            { name: 'Cyan Wireframe', hex: '#00e5ff', bg: '#00e5ff' }
        ],
        cssProps: [
            { prop: 'background: linear-gradient(to bottom, #2e0854, #18042c);', desc: 'Establishes the deep, moody synthwave night sky backdrop.' },
            { prop: 'border: 2px solid #ff007f;', desc: 'Laser-sharp magenta neon framing around interface modules.' },
            { prop: 'box-shadow: 0 0 20px rgba(255,0,127,0.6);', desc: 'Casts a rich neon glow reminiscent of vintage neon signage.' }
        ],
        typography: 'Bold 80s chrome display fonts paired with crisp, technical monospaced wireframe readouts.',
        className: 'style-retrofuturism',
        snippet: `<div class="retrofuturism-card" style="background: #18042c; border: 2px solid #ff007f; border-radius: 12px; box-shadow: 0 0 25px rgba(255,0,127,0.5); padding: 40px; color: white; font-family: sans-serif;">
  <h3 style="font-size: 26px; font-weight: 900; color: #00e5ff; text-shadow: 0 0 10px rgba(0,229,255,0.7); margin-bottom: 16px;">OUTRUN // SYNTHWAVE</h3>
  <button style="background: linear-gradient(to right, #ff007f, #ff7700); color: white; border: none; border-radius: 6px; font-weight: 800; padding: 14px 28px; box-shadow: 0 4px 15px rgba(255,119,0,0.5); cursor: pointer;">ENGAGE WARP</button>
</div>`,
        stitchPrompt: `Generate a gorgeous 80s synthwave interface adhering to the 'Retro-Futurism UI' UI/UX styling category.
Key design constraints:
1. Utilize a deep synthwave purple background (#2e0854) with subtle wireframe grid patterns.
2. Frame all cards with glowing neon magenta borders (#ff007f) and rich outer drop shadows.
3. Feature vibrant sunset linear gradients (#ff007f to #ff7700) for primary action buttons.
4. Keep typography bold, high-contrast, and futuristic with neon cyan (#00e5ff) text glows.`
    },
    {
        id: 'skeuofuturism',
        name: 'Skeuofuturism',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Realistic physical textures blended with neon sci-fi vibes — metallic cockpit dials with glowing neon LED displays.',
        tagline: 'Physical engineering meets cyberpunk neon lighting.',
        history: 'A cutting-edge hybrid aesthetic where high-precision physical skeuomorphism (brushed metal faders, carbon fiber panels, knurled knobs) is augmented with futuristic cyberpunk elements (blinding neon LED readouts, glowing cyan wiring, holographic overlays).',
        usecases: [
            'Premium digital synthesizer plugins and advanced DAW controller interfaces.',
            'Futuristic sim-racing dashboard displays and custom PC tuning software.',
            'Gaming peripheral software (RGB lighting controllers, mechanical keyboard managers).'
        ],
        pitfalls: 'Rendering heavy metallic textures alongside complex neon drop shadows requires highly optimized CSS or SVG assets to maintain buttery smooth UI interactions.',
        palette: [
            { name: 'Brushed Titanium', hex: '#334155', bg: 'linear-gradient(to bottom, #475569, #1e293b)' },
            { name: 'Neon Laser Cyan', hex: '#06b6d4', bg: '#06b6d4' },
            { name: 'Active Crimson', hex: '#ef4444', bg: '#ef4444' },
            { name: 'Deep Carbon', hex: '#0f172a', bg: '#0f172a' }
        ],
        cssProps: [
            { prop: 'background: linear-gradient(to bottom, #475569, #1e293b);', desc: 'Simulates heavy, high-quality brushed titanium metal panels.' },
            { prop: 'box-shadow: inset 0 1px 1px rgba(255,255,255,0.4), 0 0 20px rgba(6,182,212,0.5);', desc: 'Combines physical metallic inner edge highlights with glowing neon outer LED shadows.' },
            { prop: 'border: 1px solid #06b6d4;', desc: 'Provides laser-sharp glowing neon framing around physical metallic chassis.' }
        ],
        typography: 'Crisp technical monospaced LED readouts paired with engraved or embossed physical label fonts.',
        className: 'style-skeuofuturism',
        snippet: `<div class="skeuofuture-card" style="background: linear-gradient(to bottom, #475569, #1e293b); border: 1px solid #06b6d4; border-radius: 16px; box-shadow: inset 0 1px 1px rgba(255,255,255,0.4), 0 0 20px rgba(6,182,212,0.5); padding: 40px; color: #f8fafc; font-family: sans-serif;">
  <div style="background: #0f172a; border: 1px solid #06b6d4; border-radius: 6px; padding: 8px 16px; font-family: monospace; color: #06b6d4; text-shadow: 0 0 8px rgba(6,182,212,0.8); display: inline-block; margin-bottom: 20px;">[LED_READOUT // ACTIVE]</div>
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 20px; text-shadow: 0 1px 1px #000000;">Titanium Chassis Panel</h3>
  <button style="background: #06b6d4; color: #0f172a; border: none; border-radius: 8px; font-weight: 800; padding: 14px 28px; box-shadow: 0 0 15px rgba(6,182,212,0.6); cursor: pointer;">Trigger Hydraulics</button>
</div>`,
        stitchPrompt: `Generate a breathtaking skeuofuturistic interface adhering to the 'Skeuofuturism' UI/UX styling category.
Key design constraints:
1. Emulate high-precision physical materials (e.g., brushed titanium panels #334155, dark carbon fiber chassis #0f172a).
2. Integrate glowing neon LED displays and laser cyan borders (#06b6d4) directly into the physical metallic panels.
3. Employ dual box-shadows: inner white metallic edge highlights and outer glowing neon shadows.
4. Utilize crisp monospaced LED typography for data readouts.`
    },
    {
        id: 'dynamic',
        name: 'Dynamic UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Motion-heavy layouts, animated transitions everywhere, micro-animations, and living interactions.',
        tagline: 'Choreographing the digital stage with beautiful, continuous motion engineering.',
        history: 'Emerging as web browsers gained hardware-accelerated CSS animations and high-performance JavaScript motion engines (like Framer Motion and GSAP), Dynamic UI treats motion as a primary design system pillar. Nothing appears instantly; everything enters and exits with elegant choreographies.',
        usecases: [
            'Award-winning interactive design agency showreels and homepages.',
            'High-end consumer product landing pages featuring immersive scroll choreographies.',
            'Interactive museum exhibits and cutting-edge digital art installations.'
        ],
        pitfalls: 'Unsynchronized or excessively long animation durations can severely frustrate users who want rapid access to information.',
        palette: [
            { name: 'Dynamic Indigo', hex: '#4f46e5', bg: '#4f46e5' },
            { name: 'Energetic Coral', hex: '#f43f5e', bg: '#f43f5e' },
            { name: 'Smooth Void', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Crisp Surface', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);', desc: 'Employs premium bouncy cubic-bezier timing functions for hyper-smooth widget interactions.' },
            { prop: 'animation: pulseGlow 3s infinite ease-in-out;', desc: 'Provides living, continuous background micro-animations.' },
            { prop: 'transform: translateY(-4px);', desc: 'Delightful hover elevation choreographies.' }
        ],
        typography: 'Crisp, modern geometric sans-serifs optimized for buttery smooth scaling and translation transformations.',
        className: 'style-dynamic',
        snippet: `<div class="dynamic-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 40px; color: #0f172a; font-family: sans-serif; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Living Interactive Module</h3>
  <p style="color: #64748b; font-size: 15px; margin-bottom: 24px;">Hover and interact to experience premium cubic-bezier physics and fluid motion.</p>
  <button style="background: #4f46e5; color: white; border: none; border-radius: 10px; font-weight: 700; padding: 14px 28px; box-shadow: 0 6px 20px rgba(79,70,229,0.3); transition: transform 0.2s ease; cursor: pointer;">Engage Motion</button>
</div>`,
        stitchPrompt: `Generate an interactive, motion-heavy web screen adhering to the 'Dynamic UI' UI/UX styling category.
Key design constraints:
1. Utilize a clean, high-contrast background (#0f172a or #ffffff) with elegant floating cards.
2. Every card and button must feature premium hover transitions and bouncy cubic-bezier micro-animations.
3. Feature vibrant accent colors (#4f46e5 indigo, #f43f5e coral) for interactive elements.
4. Maintain clean, highly legible sans-serif typography.`
    },
    {
        id: 'immersive3d',
        name: 'Immersive 3D UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'WebGL and AR/VR-inspired interactive 3D elements, floating objects, spatial depth, and high realism.',
        tagline: 'Breaking the 2D plane with stunning WebGL spatial computing mechanics.',
        history: 'With the advent of WebGL, Three.js, and modern spatial computing headsets (Apple Vision Pro, Meta Quest), web design has expanded into the third dimension. Immersive 3D UI introduces floating 3D objects, dynamic environmental lighting, and real-time interactive physics.',
        usecases: [
            'Interactive 3D product configurators (automotive showrooms, custom furniture builders).',
            'Metaverse portals and advanced Web3 virtual real estate platforms.',
            'High-end fashion brand virtual boutiques and immersive digital exhibitions.'
        ],
        pitfalls: 'Loading massive 3D models and WebGL shaders can cause heavy initial page load times and battery drain on mobile devices.',
        palette: [
            { name: 'Spatial Void', hex: '#09090b', bg: '#09090b' },
            { name: 'Glass Overlay', hex: 'rgba(255,255,255,0.1)', bg: 'rgba(255,255,255,0.1)' },
            { name: 'Neon Specular', hex: '#a855f7', bg: '#a855f7' },
            { name: 'Ambient Slate', hex: '#27272a', bg: '#27272a' }
        ],
        cssProps: [
            { prop: 'transform-style: preserve-3d;', desc: 'Enables genuine 3D perspective rendering for child DOM elements.' },
            { prop: 'transform: perspective(1000px) rotateY(10deg);', desc: 'Provides beautiful spatial floating tilt mechanics.' },
            { prop: 'box-shadow: 0 20px 50px rgba(0,0,0,0.6);', desc: 'Casts a deep ambient shadow beneath the floating 3D canvas.' }
        ],
        typography: 'Crisp, clean modern sans-serifs that hover above the 3D background canvas with excellent legibility.',
        className: 'style-immersive3d',
        snippet: `<div class="threed-card" style="background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); padding: 48px; color: white; font-family: sans-serif; transform: perspective(1000px) rotateY(10deg) rotateX(5deg); transform-style: preserve-3d; transition: transform 0.5s ease;">
  <div style="transform: translateZ(30px); background: #a855f7; color: white; padding: 4px 12px; font-weight: 700; border-radius: 6px; display: inline-block; margin-bottom: 16px;">SPATIAL // Z-AXIS</div>
  <h3 style="transform: translateZ(40px); font-size: 28px; font-weight: 800; margin-bottom: 16px;">Immersive 3D Canvas</h3>
  <button style="transform: translateZ(50px); background: white; color: #09090b; border: none; border-radius: 12px; font-weight: 800; padding: 14px 28px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); cursor: pointer;">Interact Spatial</button>
</div>`,
        stitchPrompt: `Generate a breathtaking spatial computing screen adhering to the 'Immersive 3D UI' UI/UX styling category.
Key design constraints:
1. Utilize a deep dark space background (#09090b) with ambient environmental lighting.
2. All primary cards must be floating glass panels (background: rgba(255,255,255,0.08), backdrop-filter: blur(20px)) tilted in 3D perspective.
3. Apply genuine 3D depth by having text and buttons float above the glass surface (translateZ).
4. Maintain clean, crisp sans-serif typography with stark white fills.`
    },
    {
        id: 'interactivesvg',
        name: 'Interactive SVG UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Vector-based animations, scalable SVG paths, morphing icons, and zero-raster crispness.',
        tagline: 'Infinite scalability and crisp vector physics powered by pure SVG geometry.',
        history: 'As responsive web design demanded graphics that looked flawless on both 4K monitors and tiny mobile screens, Interactive SVG UI emerged. It leverages inline SVG paths, CSS transitions on stroke/fill properties, and vector morphing to create infinitely scalable, interactive interfaces.',
        usecases: [
            'Interactive infographics and digital journalism data stories.',
            'High-fidelity educational web platforms and interactive diagrams.',
            'SaaS dashboards requiring infinitely scalable vector UI elements.'
        ],
        pitfalls: 'Excessively complex SVG DOM trees with thousands of nodes can cause rendering lag if not properly optimized or simplified.',
        palette: [
            { name: 'Vector Blue', hex: '#2563eb', bg: '#2563eb' },
            { name: 'Path Slate', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Node White', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Stroke Gray', hex: '#cbd5e1', bg: '#cbd5e1' }
        ],
        cssProps: [
            { prop: 'stroke: #2563eb; stroke-width: 2px;', desc: 'Styles inline SVG paths with crisp, infinitely scalable vector strokes.' },
            { prop: 'transition: stroke-dashoffset 0.6s ease;', desc: 'Enables beautiful, dynamic line drawing animations when widgets appear.' },
            { prop: 'fill: currentColor;', desc: 'Inherits parent text color for flawless theme switching.' }
        ],
        typography: 'Crisp, highly legible sans-serifs that match the geometric precision of the vector paths.',
        className: 'style-interactivesvg',
        snippet: `<div class="svg-card" style="background: #ffffff; border: 2px solid #2563eb; border-radius: 16px; padding: 40px; color: #0f172a; font-family: sans-serif; position: relative;">
  <div style="margin-bottom: 20px;">
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#2563eb" stroke-width="4">
      <circle cx="30" cy="30" r="24" stroke-dasharray="150" stroke-dashoffset="0" />
      <polyline points="20,30 28,38 42,22" />
    </svg>
  </div>
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Interactive Vector Module</h3>
  <button style="background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 700; padding: 14px 28px; cursor: pointer;">Execute Vector</button>
</div>`,
        stitchPrompt: `Generate a crisp, infinitely scalable web interface adhering to the 'Interactive SVG UI' UI/UX styling category.
Key design constraints:
1. Rely entirely on clean, scalable vector elements and crisp white containers (#ffffff).
2. Frame cards with vibrant vector blue borders (#2563eb).
3. Integrate prominent inline SVG illustrations and animated icons.
4. Keep typography clean, geometric, and perfectly aligned with the vector paths.`
    },
    {
        id: 'voicegesture',
        name: 'Voice + Gesture UI',
        category: 'experimental',
        badge: 'Experimental',
        shortDesc: 'Multimodal interactions beyond clicks/taps — glowing listening reticles, waveform visuals, and large tap targets.',
        tagline: 'Designing for the multimodal future of voice commands and spatial gestures.',
        history: 'With the rise of smart home assistants (Alexa, Google Assistant), automotive infotainment displays, and touchless kiosk interfaces, web UI expanded beyond the mouse and keyboard. Voice + Gesture UI prioritizes glowing listening rings, real-time audio waveforms, and massive, easy-to-target tap modules.',
        usecases: [
            'Smart home hub web controllers and automotive dashboard companion apps.',
            'Touchless public information kiosks and accessible healthcare check-in systems.',
            'Multimodal AI assistant web interfaces requiring real-time voice feedback.'
        ],
        pitfalls: 'Without clear visual feedback (like active waveforms or glowing rings), users will not know if the system is actively listening or processing their gesture.',
        palette: [
            { name: 'Listening Dark', hex: '#0a0f1d', bg: '#0a0f1d' },
            { name: 'Waveform Cyan', hex: '#00f2fe', bg: '#00f2fe' },
            { name: 'Active Glow', hex: '#4facfe', bg: '#4facfe' },
            { name: 'Whisper White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'animation: listeningPulse 2s infinite ease-in-out;', desc: 'Animates a beautiful glowing outer ring to indicate active voice listening.' },
            { prop: 'border-radius: 50%;', desc: 'Embraces circular geometries for natural voice assistant tap targets.' },
            { prop: 'box-shadow: 0 0 30px rgba(0,242,254,0.6);', desc: 'Provides the bright holographic glow of an active multimodal assistant.' }
        ],
        typography: 'Clean, bold, oversized sans-serif typography designed to be readable from several feet away (10-foot UI).',
        className: 'style-voicegesture',
        snippet: `<div class="voice-card" style="background: #0a0f1d; border: 1px solid #1e293b; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); padding: 48px; color: white; font-family: sans-serif; text-align: center;">
  <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #00f2fe, #4facfe); border-radius: 50%; margin: 0 auto 24px; box-shadow: 0 0 30px rgba(0,242,254,0.6); display: flex; align-items: center; justify-content: center; font-size: 32px;">🎙️</div>
  <h3 style="font-size: 26px; font-weight: 700; margin-bottom: 12px;">"Hey Assistant, execute code"</h3>
  <p style="color: #94a3b8; font-size: 15px; margin-bottom: 32px;">Listening for voice commands and spatial hand gestures...</p>
  <button style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 100px; font-weight: 600; padding: 12px 28px; cursor: pointer;">Mute Microphone</button>
</div>`,
        stitchPrompt: `Generate a multimodal AI assistant screen adhering to the 'Voice + Gesture UI' UI/UX styling category.
Key design constraints:
1. Utilize a deep dark background (#0a0f1d) optimized for high contrast.
2. Feature prominent circular voice listening modules casting vibrant cyan glows (#00f2fe).
3. Include real-time audio waveform graphics and large, accessible tap targets.
4. Employ bold, oversized sans-serif typography designed for long-distance legibility.`
    },

    // ==========================================================================
    // PLATFORM & INDUSTRY-SPECIFIC (ADDITIONS)
    // ==========================================================================
    {
        id: 'typography',
        name: 'Typography-Centric UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Fonts as the hero element — massive display type, strict vertical rhythm, and zero decorative clutter.',
        tagline: 'Uncompromising typographic architecture where words become the primary interface.',
        history: 'Deriving from legendary print typography and elite type foundry homepages, Typography-Centric UI strips away illustrative imagery and heavy color fills. It relies entirely on the structural beauty of massive display letterforms, perfect kerning, and strict vertical rhythm.',
        usecases: [
            'Digital type foundry archives and elite graphic design portfolios.',
            'High-end editorial magazines and bold corporate landing pages.',
            'Author homepages and literary publishing platforms.'
        ],
        pitfalls: 'Requires absolute mastery of responsive font scaling (e.g., clamp() functions). If massive text overflows or collides on small mobile screens, the layout fails immediately.',
        palette: [
            { name: 'Editorial Cream', hex: '#fbfaf7', bg: '#fbfaf7' },
            { name: 'Charcoal Ink', hex: '#111111', bg: '#111111' },
            { name: 'Accent Ochre', hex: '#b45309', bg: '#b45309' },
            { name: 'Border Gray', hex: '#e7e5e4', bg: '#e7e5e4' }
        ],
        cssProps: [
            { prop: 'font-size: clamp(3rem, 8vw, 7rem);', desc: 'Employs fluid typography scaling to ensure massive hero letterforms adapt flawlessly across all screen sizes.' },
            { prop: 'line-height: 0.9;', desc: 'Ultra-tight leading on massive display titles creates solid typographic blocks.' },
            { prop: 'border-bottom: 2px solid #111111;', desc: 'Strict typographic dividing rules provide structure.' }
        ],
        typography: 'Exquisite pairing of massive, character-rich display serifs or bold geometric sans-serifs with pristine secondary copy.',
        className: 'style-typography',
        snippet: `<div class="typography-card" style="background: #fbfaf7; border: 1px solid #e7e5e4; padding: 56px 48px; color: #111111; font-family: serif;">
  <h3 style="font-size: 42px; font-weight: 400; line-height: 1.0; letter-spacing: -1px; border-bottom: 2px solid #111111; padding-bottom: 20px; margin-bottom: 28px;">TYPOGRAPHY AS HERO</h3>
  <p style="font-family: sans-serif; color: #57534e; font-size: 16px; line-height: 1.6; margin-bottom: 36px;">Uncompromising structural layout relying entirely on the physical beauty of massive display letterforms.</p>
  <button style="background: #111111; color: #fbfaf7; border: none; font-family: sans-serif; font-weight: 700; padding: 16px 32px; letter-spacing: 1px; cursor: pointer;">READ PUBLICATION</button>
</div>`,
        stitchPrompt: `Generate an elegant, editorial screen adhering to the 'Typography-Centric UI' UI/UX styling category.
Key design constraints:
1. Maintain a pristine editorial cream background (#fbfaf7) with solid charcoal ink text (#111111).
2. Put massive display typography front and center as the primary visual hero element.
3. Completely avoid decorative background illustrations, gradients, and drop shadows.
4. Utilize strict horizontal dividing lines to establish editorial structure.`
    },
    {
        id: 'illustration',
        name: 'Illustration-Based UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Custom drawings, playful visuals, friendly character guides, and warm illustrated empty states.',
        tagline: 'Humanizing complex digital workflows through warm, custom illustration.',
        history: 'Championed heavily by companies like Mailchimp, Duolingo, and Headspace, Illustration-Based UI replaces cold stock photos and generic icons with custom, whimsical illustrations. It builds immediate brand affinity and turns stressful workflows into friendly experiences.',
        usecases: [
            'B2C SaaS onboarding flows and friendly customer dashboards.',
            'Educational web platforms and language learning applications.',
            'Mental health apps and playful personal finance trackers.'
        ],
        pitfalls: 'If illustration styles are inconsistent across different pages, the app can feel like a patchwork of conflicting assets rather than a cohesive brand.',
        palette: [
            { name: 'Warm Apricot', hex: '#ffedd5', bg: '#ffedd5' },
            { name: 'Playful Coral', hex: '#f97316', bg: '#f97316' },
            { name: 'Charcoal Text', hex: '#1e293b', bg: '#1e293b' },
            { name: 'Pristine Card', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'background-color: #ffedd5;', desc: 'Provides a warm, inviting apricot background canvas.' },
            { prop: 'border-radius: 20px;', desc: 'Friendly, welcoming corner rounding for illustrated cards.' },
            { prop: 'box-shadow: 0 10px 30px rgba(249,115,22,0.15);', desc: 'Casts a warm, cheerful drop shadow.' }
        ],
        typography: 'Friendly, approachable rounded sans-serifs like Quicksand, Outfit, or Sniglet that harmonize with illustrated curves.',
        className: 'style-illustration',
        snippet: `<div class="illustration-card" style="background: #ffffff; border-radius: 20px; box-shadow: 0 10px 30px rgba(249,115,22,0.15); padding: 40px; color: #1e293b; font-family: sans-serif; text-align: center;">
  <div style="font-size: 56px; margin-bottom: 20px;">🎨🧭⛵</div>
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px;">Let's Explore Your Dashboard</h3>
  <p style="color: #64748b; font-size: 15px; margin-bottom: 28px;">Custom illustrated character guides make onboarding an absolute joy!</p>
  <button style="background: #f97316; color: white; border: none; border-radius: 12px; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 15px rgba(249,115,22,0.3); cursor: pointer;">Start Journey</button>
</div>`,
        stitchPrompt: `Generate a warm, welcoming onboarding screen adhering to the 'Illustration-Based UI' UI/UX styling category.
Key design constraints:
1. Utilize a warm, inviting pastel background (#ffedd5) with crisp white containers (#ffffff).
2. Feature prominent custom illustrations or highly descriptive icon arrangements as the visual anchor.
3. Highlight primary buttons with cheerful coral/orange accents (#f97316).
4. Rely on friendly, approachable sans-serif typography with generous spacing.`
    },
    {
        id: 'microinteraction',
        name: 'Micro-Interaction UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Small animations for feedback — satisfying button clicks, active loader states, and delightful hover physics.',
        tagline: 'The difference between an ordinary product and an unforgettable one is in the micro-interactions.',
        history: 'Micro-interactions are the functional, subtle animations that communicate state changes: the wiggle of an incorrect password field, the satisfying fill of a "heart" like button, or the smooth morphing of a submit button into a success checkmark. This aesthetic prioritizes absolute tactile responsiveness.',
        usecases: [
            'High-engagement mobile apps and social platform transactional flows.',
            'Premium UI kits and advanced e-commerce checkout systems.',
            'High-end SaaS dashboards wanting a buttery smooth, hyper-responsive feel.'
        ],
        pitfalls: 'Animations that take longer than 300ms can make the interface feel sluggish. Micro-interactions must be snappy and purposeful.',
        palette: [
            { name: 'Tactile Slate', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Active Teal', hex: '#0d9488', bg: '#0d9488' },
            { name: 'Focus Glow', hex: '#2dd4bf', bg: '#2dd4bf' },
            { name: 'Clean Base', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'transform: scale(0.97); transition: transform 0.1s ease;', desc: 'Provides immediate, satisfying tactile depression mechanics when buttons are pressed.' },
            { prop: 'animation: successPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);', desc: 'Employs delightful bouncy timing curves for success state confirmations.' },
            { prop: 'box-shadow: 0 0 0 4px rgba(45,212,191,0.4);', desc: 'Generates a crisp, gorgeous outer focus ring when widgets are activated.' }
        ],
        typography: 'Crisp, high-performance sans-serifs like Inter, fully optimized for rapid state changes and numerical tickers.',
        className: 'style-microinteraction',
        snippet: `<div class="micro-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 40px; color: #0f172a; font-family: sans-serif; transition: transform 0.2s ease;">
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px;">Interactive Micro-State</h3>
  <p style="color: #64748b; font-size: 15px; margin-bottom: 28px;">Experience instant, satisfying tactile feedback and gorgeous bouncy physics.</p>
  <button style="background: #0d9488; color: white; border: none; border-radius: 8px; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 15px rgba(13,148,136,0.3); cursor: pointer;">Execute Tactile Pop</button>
</div>`,
        stitchPrompt: `Generate a hyper-responsive, interactive screen adhering to the 'Micro-Interaction UI' UI/UX styling category.
Key design constraints:
1. Utilize a clean, professional background with structured white cards (#ffffff).
2. Every interactive component must feature crisp focus rings, active states, and snappy hover transformations.
3. Highlight primary actions with active teal (#0d9488) casting subtle drop shadows.
4. Maintain sharp, clear sans-serif typography.`
    },
    {
        id: 'cardbased',
        name: 'Card-Based UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Modular cards (Pinterest, Trello) — independent content containers, masonry grids, and highly flexible layouts.',
        tagline: 'The ultimate modular organizing principle of the modern responsive web.',
        history: 'Pioneered heavily by Pinterest, Trello, and Google Keep, Card-Based UI organizes disparate media types (images, videos, text, actions) into independent, standardized rectangular modules. It allows layouts to adapt flawlessly from massive desktop multi-column masonry grids down to a single mobile column.',
        usecases: [
            'Content discovery feeds, news aggregation portals, and social media walls.',
            'Project management kanban boards (Trello/Jira equivalents).',
            'E-commerce product catalogs and digital recipe archives.'
        ],
        pitfalls: 'If card padding or typography hierarchies vary wildly between adjacent cards, a masonry grid can quickly look cluttered and disorganized.',
        palette: [
            { name: 'Masonry Neutral', hex: '#f1f5f9', bg: '#f1f5f9' },
            { name: 'Modular Card', hex: '#ffffff', bg: '#ffffff' },
            { name: 'Card Title', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Kanban Blue', hex: '#2563eb', bg: '#2563eb' }
        ],
        cssProps: [
            { prop: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));', desc: 'Establishes the foundational modular responsive card grid.' },
            { prop: 'border: 1px solid #e2e8f0; border-radius: 12px;', desc: 'Provides crisp, standardized modular containment for disparate content types.' },
            { prop: 'box-shadow: 0 4px 15px rgba(0,0,0,0.05);', desc: 'Restrained elevation separates independent cards from the masonry backdrop.' }
        ],
        typography: 'Clean, highly scannable sans-serifs with strong title weighting to anchor independent content modules.',
        className: 'style-cardbased',
        snippet: `<div class="card-module" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden; font-family: sans-serif;">
  <div style="background: #e2e8f0; height: 120px; width: 100%; display: flex; align-items: center; justify-content: center; color: #64748b; font-weight: 700;">[CAROUSEL MEDIA]</div>
  <div style="padding: 24px;">
    <h3 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Modular Card Container</h3>
    <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Independent, standardized containment for flexible responsive grid flows.</p>
    <button style="background: #2563eb; color: white; border: none; border-radius: 6px; font-weight: 600; padding: 10px 20px; cursor: pointer;">Action Link</button>
  </div>
</div>`,
        stitchPrompt: `Generate a modular, masonry-grid screen adhering to the 'Card-Based UI' UI/UX styling category.
Key design constraints:
1. Utilize a clean neutral background (#f1f5f9) hosting a multi-column modular card grid.
2. Cards must be crisp white containers (#ffffff) bounded by subtle borders (#e2e8f0) and rounded corners (12px).
3. Each card should act as an independent content module with its own clear media, text, and action hierarchy.
4. Highlight primary card actions with kanban blue (#2563eb).`
    },
    {
        id: 'storytelling',
        name: 'Immersive Storytelling UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Parallax effects, scroll-triggered animations, dramatic full-screen imagery, and sequential narrative flows.',
        tagline: 'Transforming web browsing into a cinematic, sequential narrative journey.',
        history: 'Originating with award-winning digital journalism pieces (like the New York Times\' "Snow Fall") and elite Apple product homepages, Immersive Storytelling UI breaks away from static grids. It ties typography, dramatic background fades, and animations directly to the user\'s scroll progress.',
        usecases: [
            'Award-winning digital journalism and long-form investigative reports.',
            'High-end consumer product release homepages (e.g., Apple iPhone announcements).',
            'Corporate anniversary archives and immersive brand history journeys.'
        ],
        pitfalls: 'Scroll hijacking (altering the natural browser scroll speed) is universally loathed by users. Successful storytelling ties animations to scroll progress without locking the scroll wheel.',
        palette: [
            { name: 'Cinematic Void', hex: '#000000', bg: '#000000' },
            { name: 'Parchment White', hex: '#f8fafc', bg: '#f8fafc' },
            { name: 'Narrative Slate', hex: '#334155', bg: '#334155' },
            { name: 'Gold Accent', hex: '#eab308', bg: '#eab308' }
        ],
        cssProps: [
            { prop: 'background-attachment: fixed;', desc: 'Provides classic parallax background fixation as foreground narrative blocks scroll upward.' },
            { prop: 'opacity: 1; transition: opacity 1s ease;', desc: 'Enables cinematic fade-in transitions for narrative text modules.' },
            { prop: 'border-left: 4px solid #eab308;', desc: 'Elegant accent bars anchor dramatic pull-quotes and key narrative points.' }
        ],
        typography: 'Exquisite editorial serifs paired with pristine sans-serif body copy, presented with generous line-height for effortless reading.',
        className: 'style-storytelling',
        snippet: `<div class="story-card" style="background: #000000; border: 1px solid #334155; border-radius: 16px; padding: 56px 48px; color: #f8fafc; font-family: serif; position: relative;">
  <div style="border-left: 4px solid #eab308; padding-left: 20px; margin-bottom: 28px;">
    <h3 style="font-size: 28px; font-weight: 400; font-family: sans-serif; letter-spacing: 1px; margin: 0;">Cinematic Narrative Block</h3>
  </div>
  <p style="color: #cbd5e1; font-size: 17px; line-height: 1.8; margin-bottom: 36px;">As the user scrolls, dramatic background vistas parallax upward while exquisite typography fades into view, transforming a standard web page into an unforgettable cinematic journey.</p>
  <button style="background: #eab308; color: #000000; border: none; border-radius: 4px; font-family: sans-serif; font-weight: 700; padding: 14px 28px; cursor: pointer;">Continue Scrolling</button>
</div>`,
        stitchPrompt: `Generate a cinematic, narrative-driven screen adhering to the 'Immersive Storytelling UI' UI/UX styling category.
Key design constraints:
1. Utilize a deep cinematic black background (#000000) with dramatic full-screen narrative blocks.
2. Emphasize exquisite, high-contrast typography with generous line-height.
3. Feature elegant gold accent bars (#eab308) to highlight pull-quotes and primary actions.
4. Ensure containers are spaced generously to allow for dramatic scroll-triggered reveals.`
    },
    {
        id: 'eco',
        name: 'Eco / Sustainable UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Earth tones, recycled-paper textures, nature motifs, organic sage greens, and clean sustainable layouts.',
        tagline: 'Digital design that respects our planet: earthy, honest, and organic.',
        history: 'As global consciousness shifted toward sustainability, environmental protection, and clean energy, a dedicated Eco UI aesthetic emerged. It abandons glossy plastic blues and artificial neons in favor of honest earth tones, muted sage greens, warm sand backgrounds, and organic botanical motifs.',
        usecases: [
            'Clean energy startups, solar power platforms, and environmental non-profits.',
            'Sustainable fashion brands and organic skincare boutiques.',
            'Corporate ESG (Environmental, Social, and Governance) report portals.'
        ],
        pitfalls: 'If contrast between muted earthy greens and warm sand backgrounds is too low, the page can fail WCAG accessibility standards.',
        palette: [
            { name: 'Earthy Sand', hex: '#fbf8f2', bg: '#fbf8f2' },
            { name: 'Organic Sage', hex: '#4d7c5b', bg: '#4d7c5b' },
            { name: 'Deep Forest', hex: '#1b3b22', bg: '#1b3b22' },
            { name: 'Recycled Clay', hex: '#d97706', bg: '#d97706' }
        ],
        cssProps: [
            { prop: 'background-color: #fbf8f2;', desc: 'Provides a warm, natural earthy sand canvas resembling recycled paper.' },
            { prop: 'border: 1px solid #4d7c5b;', desc: 'Crisp organic sage green framing for sustainable modules.' },
            { prop: 'box-shadow: 0 10px 30px rgba(77,124,91,0.1);', desc: 'Casts a soft, natural botanical shadow.' }
        ],
        typography: 'Warm, humanistic sans-serifs or beautiful organic serifs like Lora or Recoleta that evoke natural honesty.',
        className: 'style-eco',
        snippet: `<div class="eco-card" style="background: #ffffff; border: 1px solid #4d7c5b; border-radius: 16px; box-shadow: 0 10px 30px rgba(77,124,91,0.1); padding: 40px; color: #1b3b22; font-family: sans-serif;">
  <div style="background: #fbf8f2; color: #4d7c5b; border: 1px solid #4d7c5b; border-radius: 100px; padding: 4px 14px; font-weight: 700; font-size: 12px; display: inline-block; margin-bottom: 16px;">🌱 100% SUSTAINABLE</div>
  <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Organic Botanical Module</h3>
  <p style="color: #4b5563; font-size: 15px; margin-bottom: 28px;">Honest earth tones, recycled textures, and clean architectural design that respects our planet.</p>
  <button style="background: #4d7c5b; color: white; border: none; border-radius: 8px; font-weight: 700; padding: 14px 28px; box-shadow: 0 4px 15px rgba(77,124,91,0.2); cursor: pointer;">Offset Carbon</button>
</div>`,
        stitchPrompt: `Generate an earthy, sustainable web screen adhering to the 'Eco / Sustainable UI' UI/UX styling category.
Key design constraints:
1. Utilize a warm earthy sand background (#fbf8f2) with clean white component cards (#ffffff).
2. Feature organic sage green (#4d7c5b) for primary buttons, borders, and botanical badges.
3. Keep container shadows soft and natural (box-shadow: 0 10px 30px rgba(77,124,91,0.1)).
4. Rely on warm, honest typography with generous spacing.`
    },
    {
        id: 'playful',
        name: 'Playful UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Rounded shapes, vibrant pop colors, gamified interactions, bouncy physics, and cheerful layouts.',
        tagline: 'Putting pure joy and gamified delight back into digital products.',
        history: 'Championed by modern edtech giants, habit trackers, and next-gen productivity apps, Playful UI rebels against stiff corporate boredom. It utilizes bubbly rounded geometry, bright pop color palettes, energetic micro-animations, and delightful gamified feedback loops.',
        usecases: [
            'Language learning apps, habit trackers, and gamified edtech platforms.',
            'Children\'s entertainment portals and interactive puzzle games.',
            'Modern consumer apps wanting a joyful, highly approachable identity.'
        ],
        pitfalls: 'If applied to serious contexts (like corporate finance or medical record software), a playful UI can feel highly inappropriate or unprofessional.',
        palette: [
            { name: 'Bubbly Pink', hex: '#f43f5e', bg: '#f43f5e' },
            { name: 'Bright Sunshine', hex: '#facc15', bg: '#facc15' },
            { name: 'Playful Purple', hex: '#a855f7', bg: '#a855f7' },
            { name: 'Happy Blue', hex: '#0ea5e9', bg: '#0ea5e9' }
        ],
        cssProps: [
            { prop: 'border-radius: 28px;', desc: 'Embraces highly exaggerated, bubbly corner rounding for a friendly aesthetic.' },
            { prop: 'box-shadow: 0 10px 25px rgba(244,63,94,0.3);', desc: 'Casts a vibrant, energetic pop drop shadow.' },
            { prop: 'border: 3px solid #0f172a;', desc: 'Thick, bold contrasting borders make UI elements pop off the screen.' }
        ],
        typography: 'Bold, cheerful rounded sans-serifs like Outfit, Fredoka, or Sniglet that match the bubbly physical aesthetic.',
        className: 'style-playful',
        snippet: `<div class="playful-card" style="background: #ffffff; border: 3px solid #0f172a; border-radius: 28px; box-shadow: 0 12px 30px rgba(244,63,94,0.2); padding: 40px; color: #0f172a; font-family: sans-serif;">
  <span style="background: #facc15; color: #0f172a; font-weight: 800; padding: 6px 16px; border-radius: 100px; border: 2px solid #0f172a; display: inline-block; margin-bottom: 16px;">🎯 LEVEL UP</span>
  <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">Playful Interactive Container</h3>
  <button style="background: #f43f5e; color: white; border: 3px solid #0f172a; border-radius: 20px; font-weight: 800; padding: 14px 32px; box-shadow: 0 6px 0px #0f172a; cursor: pointer;">Claim Rewards 🎁</button>
</div>`,
        stitchPrompt: `Generate a fun, joyful web screen adhering to the 'Playful UI' UI/UX styling category.
Key design constraints:
1. Utilize a bright, cheerful background with crisp white component boxes (#ffffff).
2. Bubbly rounded corners (border-radius: 28px) and bold 3px black borders (#0f172a) must frame every container.
3. Highlight primary buttons with vibrant pop pink (#f43f5e) casting solid tactile drop shadows.
4. Employ bold, cheerful rounded typography with gamified badge accents.`
    },
    {
        id: 'splitscreen',
        name: 'Split-Screen UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Two panels side by side — dual user journeys, bold visual contrast, and high-conversion landing pages.',
        tagline: 'Perfect visual duality: dividing the screen into two powerful, equal hero experiences.',
        history: 'As desktop screens grew wider, designers realized that spanning a single paragraph of text across 1920 pixels was ergonomically terrible. Split-Screen UI emerged as an elegant solution: dividing the viewport down the middle into two high-contrast panels. It is exceptionally effective for dual user journeys (e.g., "I am a Buyer" vs. "I am a Seller").',
        usecases: [
            'High-conversion product landing pages featuring hero imagery on the left and checkout on the right.',
            'Dual user onboarding flows (e.g., Student vs. Teacher / Driver vs. Rider).',
            'High-concept fashion catalogs comparing two distinct seasonal looks side by side.'
        ],
        pitfalls: 'On mobile screens, a side-by-side split screen must stack vertically. Care must be taken to ensure the stacked order makes perfect narrative sense.',
        palette: [
            { name: 'Dark Split', hex: '#0f172a', bg: '#0f172a' },
            { name: 'Light Split', hex: '#f8fafc', bg: '#f8fafc' },
            { name: 'Accent Indigo', hex: '#6366f1', bg: '#6366f1' },
            { name: 'Crisp White', hex: '#ffffff', bg: '#ffffff' }
        ],
        cssProps: [
            { prop: 'display: grid; grid-template-columns: 1fr 1fr;', desc: 'Establishes the foundational side-by-side split screen architecture.' },
            { prop: 'height: 100vh;', desc: 'Creates an immersive, full-screen dual hero experience.' },
            { prop: 'box-shadow: 20px 0 50px rgba(0,0,0,0.2);', desc: 'Casts a dramatic shadow from one panel over the other to establish powerful visual hierarchy.' }
        ],
        typography: 'Bold, commanding sans-serifs with high contrast fills tailored specifically to each panel\'s background color.',
        className: 'style-splitscreen',
        snippet: `<div class="split-container" style="display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #cbd5e1; border-radius: 16px; overflow: hidden; font-family: sans-serif;">
  <div style="background: #0f172a; padding: 48px 40px; color: white; display: flex; flex-direction: column; justify-content: center;">
    <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">I Am A Developer</h3>
    <p style="color: #94a3b8; font-size: 15px; margin-bottom: 28px;">Deploy scalable, high-performance architecture with zero friction.</p>
    <button style="background: #6366f1; color: white; border: none; border-radius: 8px; font-weight: 700; padding: 14px 28px; width: fit-content; cursor: pointer;">Documentation</button>
  </div>
  <div style="background: #f8fafc; padding: 48px 40px; color: #0f172a; display: flex; flex-direction: column; justify-content: center;">
    <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 16px;">I Am A Designer</h3>
    <p style="color: #64748b; font-size: 15px; margin-bottom: 28px;">Craft exquisite, state-of-the-art interfaces with pixel-perfect precision.</p>
    <button style="background: #0f172a; color: white; border: none; border-radius: 8px; font-weight: 700; padding: 14px 28px; width: fit-content; cursor: pointer;">Design System</button>
  </div>
</div>`,
        stitchPrompt: `Generate an immersive split-screen landing page adhering to the 'Split-Screen UI' UI/UX styling category.
Key design constraints:
1. Divide the main viewport into two equal, side-by-side hero panels (display: grid; grid-template-columns: 1fr 1fr).
2. Emphasize powerful visual contrast: make one panel dark corporate navy (#0f172a) and the other light pristine neutral (#f8fafc).
3. Provide distinct, high-contrast calls to action for each user journey.
4. Utilize clean, bold sans-serif typography with generous padding.`
    },
    {
        id: 'magazine',
        name: 'Magazine / Editorial UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Newspaper-style grids, multi-column reading flows, prominent drop caps, and classic editorial typography.',
        tagline: 'The timeless elegance of legendary print journalism brought to digital screens.',
        history: 'Translating the multi-column grids of iconic newspapers and fashion magazines into responsive web layouts, Magazine UI prioritizes long-form reading comfort. It embraces prominent drop caps, bold pull-quotes, elegant dividing rules, and pristine serif typography.',
        usecases: [
            'Modern digital newspapers and long-form cultural critique journals.',
            'High-end fashion publications and architectural compendiums.',
            'Corporate thought-leadership blogs and executive whitepapers.'
        ],
        pitfalls: 'Multi-column text flows (`column-count: 2`) can be frustrating on web pages if users have to scroll up and down to read a single article. Editorial grids must be structured into comfortable horizontal sections.',
        palette: [
            { name: 'Newsprint White', hex: '#fdfcf7', bg: '#fdfcf7' },
            { name: 'Editorial Ink', hex: '#0c0a09', bg: '#0c0a09' },
            { name: 'Burgundy Accent', hex: '#9f1239', bg: '#9f1239' },
            { name: 'Rule Gray', hex: '#d7d5d0', bg: '#d7d5d0' }
        ],
        cssProps: [
            { prop: 'border-top: 4px solid #0c0a09;', desc: 'Thick black horizontal rules establish immediate editorial headline framing.' },
            { prop: 'float: left; font-size: 3.5rem;', desc: 'Styles classic drop caps at the start of leading editorial paragraphs.' },
            { prop: 'border-left: 2px solid #9f1239;', desc: 'Elegant burgundy accent rules frame prominent pull-quotes.' }
        ],
        typography: 'Exquisite pairing of classic serifs (like Georgia, Garamond, or Playfair Display) with clean, structural sans-serif bylines.',
        className: 'style-magazine',
        snippet: `<div class="magazine-card" style="background: #fdfcf7; border: 1px solid #d7d5d0; border-top: 6px solid #0c0a09; padding: 48px 40px; color: #0c0a09; font-family: serif;">
  <div style="font-family: sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #9f1239; margin-bottom: 12px; letter-spacing: 1px;">CULTURAL CRITIQUE // VOL. 14</div>
  <h3 style="font-size: 32px; font-weight: 700; line-height: 1.1; margin-bottom: 20px; font-family: serif;">The Digital Resurgence of Classic Print Architecture</h3>
  <p style="font-family: sans-serif; color: #44403c; font-size: 16px; line-height: 1.7; border-bottom: 1px solid #d7d5d0; padding-bottom: 28px; margin-bottom: 28px;"><span style="float: left; font-size: 42px; font-weight: 700; line-height: 0.8; padding-right: 8px; font-family: serif; color: #9f1239;">A</span>s digital publishing matures, the multi-column grids and exquisite typographic hierarchy of legendary 20th-century print journalism are being enthusiastically resurrected on modern web displays.</p>
  <button style="background: #0c0a09; color: #fdfcf7; border: none; font-family: sans-serif; font-weight: 700; padding: 14px 28px; font-size: 14px; letter-spacing: 1px; cursor: pointer;">READ ARTICLE</button>
</div>`,
        stitchPrompt: `Generate an elegant digital magazine screen adhering to the 'Magazine / Editorial UI' UI/UX styling category.
Key design constraints:
1. Utilize a pristine newsprint white background (#fdfcf7) with deep editorial ink text (#0c0a09).
2. Frame headlines with thick black horizontal rules (border-top: 6px solid #0c0a09).
3. Integrate classic editorial elements like prominent drop caps and burgundy pull-quote bars (#9f1239).
4. Feature exquisite serif typography for headlines paired with clean sans-serif bylines.`
    },
    {
        id: 'timeline',
        name: 'Timeline UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Chronological layouts for history or projects — vertical connecting lines, milestone nodes, and sequential steps.',
        tagline: 'Structuring complex histories and project roadmaps into beautiful chronological flows.',
        history: 'Whether displaying the 100-year history of an enterprise corporation, tracking the live delivery status of a package, or laying out a multi-phase software release roadmap, Timeline UI provides absolute structural clarity through connected milestone nodes.',
        usecases: [
            'Corporate history archives and founding anniversary journeys.',
            'Product roadmap trackers (SaaS feature releases / Web3 development phases).',
            'Live logistics tracking and multi-step e-commerce checkout indicators.'
        ],
        pitfalls: 'If milestone text descriptions are excessively long on one side of a center-aligned timeline, the layout can feel severely lopsided. Left-aligned vertical timelines are often more robust for web apps.',
        palette: [
            { name: 'Milestone Blue', hex: '#2563eb', bg: '#2563eb' },
            { name: 'Connecting Track', hex: '#e2e8f0', bg: '#e2e8f0' },
            { name: 'Active Node', hex: '#10b981', bg: '#10b981' },
            { name: 'Node Slate', hex: '#0f172a', bg: '#0f172a' }
        ],
        cssProps: [
            { prop: 'border-left: 3px solid #2563eb;', desc: 'Forms the foundational vertical connecting track between sequential milestones.' },
            { prop: 'position: absolute; left: -9px;', desc: 'Positions the beautiful circular milestone nodes perfectly over the connecting track.' },
            { prop: 'box-shadow: 0 0 0 6px #eff6ff;', desc: 'Generates a pristine outer focus glow around active milestone nodes.' }
        ],
        typography: 'Clean, highly structured sans-serifs with prominent date/time weighting to anchor chronological progress.',
        className: 'style-timeline',
        snippet: `<div class="timeline-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px; color: #0f172a; font-family: sans-serif;">
  <div style="border-left: 3px solid #2563eb; padding-left: 28px; position: relative;">
    <div style="width: 16px; height: 16px; background: #2563eb; border-radius: 50%; position: absolute; left: -9px; top: 0; box-shadow: 0 0 0 6px #eff6ff;"></div>
    <span style="color: #2563eb; font-weight: 700; font-size: 13px; text-transform: uppercase; display: inline-block; margin-bottom: 8px;">Q4 2026 // MILESTONE 1</span>
    <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 12px;">Architecture Deployment</h3>
    <p style="color: #64748b; font-size: 15px; margin-bottom: 24px;">Complete foundation infrastructure established with flawless chronological tracking mechanics.</p>
    <button style="background: #0f172a; color: white; border: none; border-radius: 6px; font-weight: 600; padding: 10px 20px; cursor: pointer;">View Phase Details</button>
  </div>
</div>`,
        stitchPrompt: `Generate a structured chronological screen adhering to the 'Timeline UI' UI/UX styling category.
Key design constraints:
1. Utilize a clean neutral background with structured white cards (#ffffff).
2. Feature a prominent vertical connecting track (border-left: 3px solid #2563eb blue) anchoring sequential milestone nodes.
3. Include active circular milestone indicators with pristine outer focus glows.
4. Employ clean, highly legible sans-serif typography with prominent date/time badges.`
    },
    {
        id: 'gamified',
        name: 'Gamified UI',
        category: 'platform',
        badge: 'Platform',
        shortDesc: 'Progress bars, achievement badges, streak counters, unlockable rewards, and highly engaging feedback loops.',
        tagline: 'Unlocking human motivation through legendary video game mechanics.',
        history: 'Mastered by platforms like Duolingo, Forest, and Apple Fitness, Gamified UI integrates proven behavioral psychology and video game feedback loops directly into non-gaming web applications. It uses streak counters, level progress bars, achievement badges, and celebratory animations to turn tedious daily tasks into addictive habits.',
        usecases: [
            'Language learning applications and daily habit trackers.',
            'Fitness and health monitoring platforms featuring activity completion rings.',
            'Developer onboarding platforms and interactive educational hubs.'
        ],
        pitfalls: 'If rewards are handed out too frequently or feel meaningless, the gamification loses its psychological impact and becomes annoying visual noise.',
        palette: [
            { name: 'XP Emerald', hex: '#10b981', bg: '#10b981' },
            { name: 'Trophy Gold', hex: '#f59e0b', bg: '#f59e0b' },
            { name: 'Action Violet', hex: '#8b5cf6', bg: '#8b5cf6' },
            { name: 'Gamified Dark', hex: '#0f172a', bg: '#0f172a' }
        ],
        cssProps: [
            { prop: 'width: 78%; background: #10b981;', desc: 'Renders gorgeous, satisfying horizontal XP progress bars.' },
            { prop: 'box-shadow: 0 4px 20px rgba(16,185,129,0.4);', desc: 'Casts an energetic emerald glow around level-up progress indicators.' },
            { prop: 'animation: trophyBounce 2s infinite ease;', desc: 'Provides delightful celebratory micro-animations for earned achievement badges.' }
        ],
        typography: 'Bold, energetic sans-serifs like Outfit, Inter, or Poppins, fully optimized for numerical level tickers and streak counters.',
        className: 'style-gamified',
        snippet: `<div class="gamified-card" style="background: #0f172a; border: 2px solid #334155; border-radius: 20px; box-shadow: 0 12px 35px rgba(0,0,0,0.5); padding: 40px; color: white; font-family: sans-serif;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <span style="background: #f59e0b; color: #0f172a; font-weight: 800; font-size: 12px; padding: 4px 12px; border-radius: 100px;">🔥 14 DAY STREAK</span>
    <span style="color: #10b981; font-weight: 700; font-size: 14px;">LEVEL 5 // 780 XP</span>
  </div>
  <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Daily Quest: Code Optimization</h3>
  <div style="width: 100%; height: 12px; background: #1e293b; border-radius: 100px; overflow: hidden; margin-bottom: 28px;">
    <div style="width: 78%; height: 100%; background: #10b981; box-shadow: 0 0 12px rgba(16,185,129,0.6);"></div>
  </div>
  <button style="background: #8b5cf6; color: white; border: none; border-radius: 12px; font-weight: 800; padding: 14px 28px; box-shadow: 0 4px 15px rgba(139,92,246,0.4); cursor: pointer;">CLAIM 50 XP 💎</button>
</div>`,
        stitchPrompt: `Generate an engaging, gamified web dashboard adhering to the 'Gamified UI' UI/UX styling category.
Key design constraints:
1. Utilize a dark gamified background (#0f172a) with structured component panels.
2. Put progress bars (#10b981 emerald) and streak indicators (#f59e0b gold) front and center as primary motivational anchors.
3. Feature vibrant action buttons (#8b5cf6 violet) casting energetic drop shadows.
4. Employ bold, energetic sans-serif typography with prominent level tickers.`
    }
];

/* ==========================================================================
   APPLICATION LOGIC & EVENT ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gridContainer = document.getElementById('style-grid-container');
    const gridFilterNav = document.getElementById('grid-filter-nav');
    const styleGridView = document.getElementById('style-grid-view');
    const sandboxView = document.getElementById('sandbox-view');
    const logoHomeBtn = document.getElementById('logo-home-btn');
    const backToGridBtn = document.getElementById('back-to-grid-btn');
    
    const sandboxCategoryBadge = document.getElementById('sandbox-category-badge');
    const sandboxStyleName = document.getElementById('sandbox-style-name');
    const styleQuickSwitcher = document.getElementById('style-quick-switcher');
    const interactiveStage = document.getElementById('interactive-stage');
    
    const inspectorTitle = document.getElementById('inspector-title');
    const inspectorTagline = document.getElementById('inspector-tagline');
    const inspectorHistory = document.getElementById('inspector-history');
    const inspectorUsecases = document.getElementById('inspector-usecases');
    const inspectorPitfalls = document.getElementById('inspector-pitfalls');
    const paletteDisplay = document.getElementById('palette-display');
    const cssPropertiesList = document.getElementById('css-properties-list');
    const inspectorTypography = document.getElementById('inspector-typography');
    const codeSnippetBlock = document.getElementById('code-snippet-block');
    const stitchPromptBlock = document.getElementById('stitch-prompt-block');
    
    const logContent = document.getElementById('log-content');
    const openAboutBtn = document.getElementById('open-about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    const copyCodeBtn = document.getElementById('copy-code-btn');
    const copyStitchBtn = document.getElementById('copy-stitch-btn');

    let currentSelectedStyle = STYLES_DATA[0];

    // ==========================================================================
    // 1. RENDER STYLE GRID
    // ==========================================================================
    function renderGrid(filter = 'all') {
        gridContainer.innerHTML = '';
        const filteredStyles = filter === 'all' ? STYLES_DATA : STYLES_DATA.filter(s => s.category === filter);
        
        filteredStyles.forEach(style => {
            const card = document.createElement('div');
            card.className = 'style-card';
            card.dataset.styleId = style.id;
            
            // Create a custom mini preview for the card using the actual style class
            card.innerHTML = `
                <div class="style-card-preview ${style.className}">
                    <!-- Render a live miniature component to instantly showcase the aesthetic -->
                    <div class="demo-card" style="padding: 16px; width: 85%; max-width: 280px; gap: 12px;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <span style="font-size: 14px; font-weight: 700; font-family: var(--font-sans);">${style.name}</span>
                            <span class="card-badge" style="font-size: 9px; padding: 2px 8px;">Demo</span>
                        </div>
                        <button class="demo-btn" style="padding: 8px 16px; font-size: 12px; width: 100%;">Interactive</button>
                    </div>
                </div>
                <div class="style-card-info">
                    <div class="style-meta">
                        <span class="style-badge">${style.badge}</span>
                    </div>
                    <h3>${style.name}</h3>
                    <p>${style.shortDesc}</p>
                    <button class="explore-btn">Explore Sandbox <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            `;
            
            card.addEventListener('click', () => openSandbox(style));
            gridContainer.appendChild(card);
        });
    }

    // ==========================================================================
    // 2. FILTER HANDLERS
    // ==========================================================================
    if (gridFilterNav) {
        const filterBtns = gridFilterNav.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderGrid(btn.dataset.filter);
            });
        });
    }

    // ==========================================================================
    // 3. OPEN SANDBOX VIEW
    // ==========================================================================
    function openSandbox(style) {
        currentSelectedStyle = style;
        
        // Switch Views
        styleGridView.classList.remove('active');
        sandboxView.classList.add('active');
        document.body.className = `sandbox-active ${style.className}`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update Header & Badge
        sandboxCategoryBadge.textContent = style.badge;
        sandboxStyleName.textContent = style.name;
        
        // Apply Style Class to Interactive Stage
        interactiveStage.className = `interactive-stage ${style.className}`;
        
        // Populate Inspector Data
        inspectorTitle.textContent = style.name;
        inspectorTagline.textContent = style.tagline;
        inspectorHistory.textContent = style.history;
        
        inspectorUsecases.innerHTML = style.usecases.map(uc => `<li>${uc}</li>`).join('');
        inspectorPitfalls.textContent = style.pitfalls;
        
        // Populate Palette Swatches
        paletteDisplay.innerHTML = style.palette.map(sw => `
            <div class="color-swatch">
                <div class="swatch-box" style="background: ${sw.bg};"></div>
                <div class="swatch-info">
                    <span class="swatch-name">${sw.name}</span>
                    <span class="swatch-hex">${sw.hex}</span>
                </div>
            </div>
        `).join('');
        
        // Populate CSS Properties
        cssPropertiesList.innerHTML = style.cssProps.map(cp => `
            <div class="css-prop-item">
                <div class="css-prop-name">${cp.prop}</div>
                <div class="css-prop-desc">${cp.desc}</div>
            </div>
        `).join('');
        
        inspectorTypography.textContent = style.typography;
        codeSnippetBlock.textContent = style.snippet;
        stitchPromptBlock.textContent = style.stitchPrompt;
        
        // Build Quick Switcher
        buildQuickSwitcher();
        
        // Add Event Log
        addLogItem(`Loaded ${style.name} sandbox. Feel the custom widget interactions below!`, true);
    }

    // ==========================================================================
    // 4. BUILD QUICK SWITCHER
    // ==========================================================================
    const STYLE_ICONS = {
        flat: 'fa-solid fa-layer-group',
        skeuomorphic: 'fa-solid fa-cube',
        material: 'fa-solid fa-paper-plane',
        minimalist: 'fa-solid fa-feather-pointed',
        metro: 'fa-solid fa-table-cells-large',
        glassmorphism: 'fa-solid fa-clone',
        neumorphism: 'fa-solid fa-arrows-down-to-line',
        claymorphism: 'fa-solid fa-cloud',
        darkmode: 'fa-solid fa-moon',
        apple: 'fa-brands fa-apple',
        aurora: 'fa-solid fa-wand-magic-sparkles',
        liquidglass: 'fa-solid fa-droplet',
        brutalism: 'fa-solid fa-hammer',
        cyberpunk: 'fa-solid fa-bolt',
        swiss: 'fa-solid fa-newspaper',
        organic: 'fa-solid fa-leaf',
        terminal: 'fa-solid fa-terminal',
        pixel: 'fa-solid fa-gamepad',
        dashboard: 'fa-solid fa-chart-pie',
        ecommerce: 'fa-solid fa-cart-shopping',
        skeuominimalism: 'fa-solid fa-gem',
        lineart: 'fa-solid fa-pen-nib',
        corporate: 'fa-solid fa-briefcase',
        frosted: 'fa-solid fa-cubes-stacked',
        gradient: 'fa-solid fa-rainbow',
        morphing: 'fa-solid fa-circle-nodes',
        minimaldark: 'fa-solid fa-circle-half-stroke',
        luxury: 'fa-solid fa-crown',
        memphis: 'fa-solid fa-shapes',
        cartoon: 'fa-solid fa-comment-dots',
        emoji: 'fa-solid fa-face-laugh-beam',
        isometric: 'fa-solid fa-cube',
        futuristic: 'fa-solid fa-shield-halved',
        retrofuturism: 'fa-solid fa-rocket',
        skeuofuturism: 'fa-solid fa-vr-cardboard',
        dynamic: 'fa-solid fa-arrows-spin',
        immersive3d: 'fa-solid fa-boxes-stacked',
        interactivesvg: 'fa-solid fa-vector-square',
        voicegesture: 'fa-solid fa-hand-sparkles',
        typography: 'fa-solid fa-font',
        illustration: 'fa-solid fa-paintbrush',
        microinteraction: 'fa-solid fa-bolt-lightning',
        cardbased: 'fa-solid fa-grip',
        storytelling: 'fa-solid fa-scroll',
        eco: 'fa-solid fa-earth-americas',
        playful: 'fa-solid fa-face-grin-stars',
        splitscreen: 'fa-solid fa-table-columns',
        magazine: 'fa-solid fa-book-open',
        timeline: 'fa-solid fa-timeline',
        gamified: 'fa-solid fa-trophy'
    };

    function buildQuickSwitcher() {
        styleQuickSwitcher.innerHTML = '';
        STYLES_DATA.forEach(s => {
            const btn = document.createElement('button');
            btn.className = `quick-switch-btn ${s.id === currentSelectedStyle.id ? 'active' : ''}`;
            btn.title = s.name;
            btn.innerHTML = `
                <i class="${STYLE_ICONS[s.id] || 'fa-solid fa-palette'}"></i>
                <span class="quick-switch-text">${s.name}</span>
            `;
            btn.addEventListener('click', () => openSandbox(s));
            styleQuickSwitcher.appendChild(btn);
        });
    }

    // ==========================================================================
    // 5. TACTILE EVENT LOGGER & WIDGET HANDLERS
    // ==========================================================================
    function addLogItem(text, isDefault = false) {
        const item = document.createElement('span');
        item.className = `log-item ${isDefault ? 'default-log' : ''}`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        item.textContent = `[${time}] ${text}`;
        
        logContent.insertBefore(item, logContent.firstChild);
        
        // Keep log clean (max 10 items)
        if (logContent.children.length > 15) {
            logContent.removeChild(logContent.lastChild);
        }
    }

    // Setup live widget interactive handlers
    const demoBtnAction = document.getElementById('demo-btn-action');
    const demoToggleInput = document.getElementById('demo-toggle-input');
    const demoInputField = document.getElementById('demo-input-field');
    const demoRangeSlider = document.getElementById('demo-range-slider');
    const sliderValDisplay = document.getElementById('slider-val-display');

    if (demoBtnAction) {
        demoBtnAction.addEventListener('click', () => {
            addLogItem(`👉 Button clicked! Felt the tactile press & physics of ${currentSelectedStyle.name}.`);
        });
    }

    if (demoToggleInput) {
        demoToggleInput.addEventListener('change', (e) => {
            addLogItem(`🔄 Toggle switched to: ${e.target.checked ? 'ON' : 'OFF'} (${currentSelectedStyle.name} style)`);
        });
    }

    if (demoInputField) {
        demoInputField.addEventListener('focus', () => {
            addLogItem(`⌨️ Input focused. Check the custom highlight border/glow.`);
        });
        demoInputField.addEventListener('input', (e) => {
            if (e.target.value.length % 5 === 0 && e.target.value.length > 0) {
                addLogItem(`✍️ Typing... current length: ${e.target.value.length} characters.`);
            }
        });
    }

    if (demoRangeSlider) {
        demoRangeSlider.addEventListener('input', (e) => {
            sliderValDisplay.textContent = e.target.value;
            addLogItem(`🎚️ Range slider dragged to: ${e.target.value}%`);
        });
    }

    // ==========================================================================
    // 6. INSPECTOR TABS HANDLER
    // ==========================================================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetPane = document.getElementById(btn.dataset.tab);
            if (targetPane) targetPane.classList.add('active');
        });
    });

    // ==========================================================================
    // 7. MODAL & NAVIGATION HANDLERS
    // ==========================================================================
    if (logoHomeBtn) {
        logoHomeBtn.addEventListener('click', () => {
            sandboxView.classList.remove('active');
            styleGridView.classList.add('active');
            document.body.className = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (backToGridBtn) {
        backToGridBtn.addEventListener('click', () => {
            sandboxView.classList.remove('active');
            styleGridView.classList.add('active');
            document.body.className = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (openAboutBtn && aboutModal) {
        openAboutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.classList.add('active');
        });
    }

    if (closeModalBtn && aboutModal) {
        closeModalBtn.addEventListener('click', () => {
            aboutModal.classList.remove('active');
        });
    }

    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.remove('active');
            }
        });
    }

    // Footer Links Interaction
    const footerLinks = document.querySelectorAll('.footer-links li');
    footerLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if we are in sandbox view and return to grid if so
            if (sandboxView && sandboxView.classList.contains('active')) {
                sandboxView.classList.remove('active');
                if (styleGridView) styleGridView.classList.add('active');
                document.body.className = '';
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const text = link.textContent.trim().toLowerCase();
            
            // Check if it's a category filter link
            if (text.includes('classic foundations')) {
                document.querySelector('.filter-btn[data-category="classic"]')?.click();
            } else if (text.includes('modern & popular')) {
                document.querySelector('.filter-btn[data-category="modern"]')?.click();
            } else if (text.includes('experimental')) {
                document.querySelector('.filter-btn[data-category="experimental"]')?.click();
            } else if (text.includes('platform & industry')) {
                document.querySelector('.filter-btn[data-category="platform"]')?.click();
            } else {
                // For all other links, open the about modal
                setTimeout(() => {
                    if (aboutModal) aboutModal.classList.add('active');
                }, 400); // Wait for scroll before opening
            }
        });
    });

    // ==========================================================================
    // 8. COPY CODE HANDLERS
    // ==========================================================================
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(currentSelectedStyle.snippet).then(() => {
                const origText = copyCodeBtn.innerHTML;
                copyCodeBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                copyCodeBtn.style.background = '#10b981';
                copyCodeBtn.style.borderColor = '#10b981';
                setTimeout(() => {
                    copyCodeBtn.innerHTML = origText;
                    copyCodeBtn.style.background = '';
                    copyCodeBtn.style.borderColor = '';
                }, 2000);
            });
        });
    }

    if (copyStitchBtn) {
        copyStitchBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(currentSelectedStyle.stitchPrompt).then(() => {
                const origText = copyStitchBtn.innerHTML;
                copyStitchBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                copyStitchBtn.style.background = '#10b981';
                copyStitchBtn.style.borderColor = '#10b981';
                setTimeout(() => {
                    copyStitchBtn.innerHTML = origText;
                    copyStitchBtn.style.background = '';
                    copyStitchBtn.style.borderColor = '';
                }, 2000);
            });
        });
    }

    // Initial Render
    renderGrid();
});
