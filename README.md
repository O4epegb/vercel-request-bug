### Vercel duplicate requests possbile bug

Steps to reproduce:

1. Deploy a server app on some VPS or something like that
2. Deploy Next.js app to Vercel with all default settings (only change `NEXT_PUBLIC_ROOT_URL` env var to your backend server url)
3. Visit index page of Next.js app on Vercel, hover over a link to prefetch data for that page
4. Check backend app logs (stdout), there will be 3 incoming GET requests for page data
5. It does not happen if you build Next.js app locally (only 1 request) or start on VPS (not Vercel)
