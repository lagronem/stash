// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://xalzskokyxvrfjnxothj.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'sb_publishable_bbc6PVdVt5gn082UyM3Y3Q_CLI_lKK3',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'http://localhost:3000',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: '8a7d5520-52d6-4c4b-a297-3183f514ac6d',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
