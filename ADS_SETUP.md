# Ad Setup Guide for OWDLE

This guide will help you set up ads in your OWDLE game to monetize your traffic.

## 🎯 Ad Networks Overview

### 1. Google AdSense (Recommended)
- **Pros**: High-quality ads, good revenue, easy setup
- **Cons**: Requires approval, minimum traffic requirements
- **Best for**: Established sites with good traffic

### 2. Media.net (Yahoo/Bing Ads)
- **Pros**: Alternative to AdSense, good for gaming content
- **Cons**: Lower revenue than AdSense
- **Best for**: Sites that don't qualify for AdSense

### 3. Amazon Associates
- **Pros**: High commission rates, gaming-related products
- **Cons**: Requires user to make purchases
- **Best for**: Gaming accessories and merchandise

## 🚀 Google AdSense Setup

### Step 1: Create AdSense Account
1. Go to [adsense.google.com](https://adsense.google.com)
2. Sign in with your Google account
3. Fill out the application form
4. Wait for approval (usually 1-2 weeks)

### Step 2: Get Your Publisher ID
1. Once approved, go to AdSense dashboard
2. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXX`)

### Step 3: Create Ad Units
1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Create new ad units:
   - **Top Banner**: 728x90 or responsive
   - **Sidebar**: 300x600 or responsive
   - **Bottom Banner**: 728x90 or responsive
3. Copy the ad unit codes

### Step 4: Update Your Code
1. Replace `YOUR_PUBLISHER_ID` in `ads.js` with your actual Publisher ID
2. Replace `YOUR_AD_SLOT_ID_1`, `YOUR_AD_SLOT_ID_2`, etc. with your ad unit IDs
3. Switch from `SimpleAdManager` to `AdManager` in `ads.js`

```javascript
// In ads.js, change this line:
window.adManager = new SimpleAdManager();

// To this:
window.adManager = new AdManager();
```

## 📱 Ad Placement Strategy

### Current Ad Positions:
1. **Top Banner**: Above the game (728x90)
2. **Sidebar**: Right side of the game (300x600)
3. **Bottom Banner**: Below the game (728x90)

### Mobile Optimization:
- Ads automatically resize for mobile
- Sidebar ad moves to bottom on mobile
- Responsive design ensures good user experience

## 💰 Revenue Optimization Tips

### 1. Ad Placement
- **Above the fold**: Top banner gets most views
- **Natural breaks**: Bottom banner after game completion
- **Non-intrusive**: Sidebar doesn't interfere with gameplay

### 2. User Experience
- Don't overload with ads
- Ensure ads don't break game functionality
- Test on mobile devices

### 3. Content Strategy
- Regular updates keep users coming back
- Social sharing increases traffic
- SEO optimization for organic traffic

## 🔧 Alternative Ad Networks

### Media.net Setup
```javascript
// Replace AdSense script with Media.net
const script = document.createElement('script');
script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
script.setAttribute('data-ad-client', 'YOUR_MEDIA_NET_ID');
```

### Amazon Associates
```html
<!-- Add affiliate links for gaming products -->
<a href="https://amazon.com/dp/PRODUCT_ID?tag=YOUR_TAG">
    Gaming Headset - Recommended for Overwatch
</a>
```

## 📊 Analytics Integration

### Google Analytics
```html
<!-- Add to your HTML head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track Ad Performance
- Monitor click-through rates (CTR)
- Track revenue per thousand impressions (RPM)
- Analyze user engagement patterns

## 🛡️ Ad Blocking Considerations

### Detection
```javascript
// Check if ads are blocked
function detectAdBlocker() {
    const testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);
    
    const isBlocked = testAd.offsetHeight === 0;
    document.body.removeChild(testAd);
    
    return isBlocked;
}
```

### Alternative Revenue
- Premium features (ad-free experience)
- Donations/Patreon
- Merchandise sales
- Sponsored content

## 📈 Traffic Requirements

### AdSense Minimums:
- **Content**: Original, high-quality content
- **Traffic**: 10,000+ monthly page views
- **Compliance**: Follow AdSense policies
- **Age**: Site should be at least 6 months old

### Quick Traffic Tips:
1. **Social Media**: Share on Twitter, Reddit, Discord
2. **SEO**: Optimize for "Overwatch guessing game" keywords
3. **Community**: Engage with Overwatch communities
4. **Updates**: Regular content updates

## 🚨 Important Notes

### AdSense Policies:
- No clickbait or misleading content
- No excessive ads
- No copyrighted material
- No adult content

### Best Practices:
- Test ads thoroughly before going live
- Monitor site performance
- Respect user experience
- Follow ad network guidelines

## 🔄 Implementation Steps

1. **Choose ad network** (start with AdSense)
2. **Apply and get approved**
3. **Update code with your IDs**
4. **Test thoroughly**
5. **Deploy to production**
6. **Monitor performance**
7. **Optimize based on data**

## 📞 Support

- **AdSense Help**: [support.google.com/adsense](https://support.google.com/adsense)
- **Media.net Support**: [media.net/support](https://media.net/support)
- **Amazon Associates**: [affiliate-program.amazon.com](https://affiliate-program.amazon.com)

---

**Remember**: Start small and scale up. Focus on user experience first, then optimize for revenue! 