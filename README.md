# NativeDev Documentation (VitePress)

এই রিপোজিটরি [VitePress](https://vitepress.dev) দিয়ে বানানো NativeDev-এর ডকুমেন্টেশন সাইট।

## লোকালি চালানো

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে `http://localhost:5173/nativedev/` খুলুন।

## বিল্ড করা

```bash
npm run build     # .vitepress/dist এ static সাইট তৈরি হবে
npm run preview   # বিল্ড করা সাইট লোকালি প্রিভিউ করতে
```

## GitHub Pages-এ ডিপ্লয় করা

এই প্রজেক্টে `.github/workflows/deploy.yml` workflow দেওয়া আছে, যা `main` ব্রাঞ্চে push করলেই স্বয়ংক্রিয়ভাবে সাইট বিল্ড করে GitHub Pages-এ পাবলিশ করে দেবে।

ধাপগুলো:

1. এই পুরো ফোল্ডারের কনটেন্ট আপনার GitHub রিপোজিটরির root-এ (অথবা `docs/` সাবফোল্ডারে — সেক্ষেত্রে workflow-এর `paths` লাইনটা আনকমেন্ট করে দিন) push করুন।
2. GitHub রিপোতে যান → **Settings → Pages**।
3. **Build and deployment → Source** এ **"GitHub Actions"** সিলেক্ট করুন (Deploy from a branch নয়)।
4. `main` ব্রাঞ্চে পরবর্তী push-এর পর **Actions** ট্যাবে workflow রান হবে, শেষ হলে সাইট লাইভ হয়ে যাবে।

### ⚠️ জরুরি: `base` পাথ চেক করুন

`.vitepress/config.mts` ফাইলে এখন সেট করা আছে:

```ts
base: '/nativedev/',
```

এই মানটা docs-এর ভেতরের রেফারেন্স (`sayedsahin/nativedev`) থেকে অনুমান করা — অর্থাৎ এটা ধরে নেওয়া হয়েছে সাইটটা `https://sayedsahin.github.io/nativedev/` এই URL-এ যাবে (project page)। যদি আপনার আসল রিপোর নাম বা owner ভিন্ন হয়, তাহলে:

- **Project page** (`https://<user>.github.io/<repo>/`) হলে: `base: '/<repo-name>/'`
- **User/Org page** (`https://<user>.github.io/`, রিপোর নাম `<user>.github.io`) অথবা **custom domain** হলে: `base: '/'`

ভুল `base` দিলে CSS/JS/ছবি লোড হবে না — সাইট ভাঙা দেখাবে।

## স্ট্রাকচার

```
.
├── .vitepress/
│   ├── config.mts        # নেভিগেশন, সাইডবার, থিম কনফিগ
│   └── theme/
│       ├── index.ts       # ডিফল্ট থিম extend করা
│       └── custom.css     # কালার/টাইপোগ্রাফি কাস্টমাইজেশন
├── public/images/         # সব ছবি ও লোগো/আইকন
├── features/              # Features সেকশনের পেজগুলো
├── index.md                # হোমপেজ (hero + feature grid)
└── *.md                    # বাকি সব ডকস পেজ
```

## কনটেন্ট এডিট করা

প্রতিটা `.md` ফাইলের উপরে ছোট একটা frontmatter আছে (`title: ...`) — এটা রেখে দিয়ে তার নিচে সাধারণ Markdown-এই লেখা এডিট করতে পারবেন। নতুন পেজ যোগ করলে `.vitepress/config.mts`-এর `sidebar` ও `nav`-এও সেটার লিঙ্ক যোগ করতে ভুলবেন না, নাহলে পেজটা নেভিগেশনে দেখাবে না।
