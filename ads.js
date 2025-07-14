// Ad Management for OWDLE
class AdManager {
    constructor() {
        this.adSenseLoaded = false;
        this.adUnits = {};
        this.init();
    }

    init() {
        // Load Google AdSense
        this.loadAdSense();
        
        // Initialize ad containers
        this.initAdContainers();
    }

    loadAdSense() {
        // Google AdSense script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
        
        script.onload = () => {
            this.adSenseLoaded = true;
            this.loadAds();
        };
    }

    initAdContainers() {
        // Initialize ad containers with placeholder content
        const adBannerTop = document.getElementById('adBannerTop');
        const adSidebar = document.getElementById('adSidebar');
        const adBannerBottom = document.getElementById('adBannerBottom');

        if (adBannerTop) {
            adBannerTop.innerHTML = '<div>Ad Banner (Top)</div>';
        }
        if (adSidebar) {
            adSidebar.innerHTML = '<div>Sidebar Ad</div>';
        }
        if (adBannerBottom) {
            adBannerBottom.innerHTML = '<div>Ad Banner (Bottom)</div>';
        }
    }

    loadAds() {
        if (!this.adSenseLoaded) return;

        // Top Banner Ad
        this.createAdSenseAd('adBannerTop', {
            'ad-slot': 'YOUR_AD_SLOT_ID_1',
            'ad-format': 'auto',
            'full-width-responsive': 'true'
        });

        // Sidebar Ad
        this.createAdSenseAd('adSidebar', {
            'ad-slot': 'YOUR_AD_SLOT_ID_2',
            'ad-format': 'auto',
            'full-width-responsive': 'true'
        });

        // Bottom Banner Ad
        this.createAdSenseAd('adBannerBottom', {
            'ad-slot': 'YOUR_AD_SLOT_ID_3',
            'ad-format': 'auto',
            'full-width-responsive': 'true'
        });
    }

    createAdSenseAd(containerId, attributes) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear container
        container.innerHTML = '';

        // Create ins element for AdSense
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        
        // Add attributes
        Object.keys(attributes).forEach(key => {
            ins.setAttribute(key, attributes[key]);
        });

        container.appendChild(ins);

        // Push to AdSense
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log('AdSense error:', e);
        }
    }

    // Show ads after game completion
    showAdsAfterGame() {
        // Refresh ads when game ends
        if (this.adSenseLoaded) {
            this.loadAds();
        }
    }

    // Hide ads for premium users (if you implement premium features)
    hideAds() {
        const adContainers = document.querySelectorAll('.ad-banner, .ad-sidebar');
        adContainers.forEach(container => {
            container.style.display = 'none';
        });
    }

    // Show ads again
    showAds() {
        const adContainers = document.querySelectorAll('.ad-banner, .ad-sidebar');
        adContainers.forEach(container => {
            container.style.display = 'flex';
        });
    }
}

// Alternative: Simple banner ad implementation
class SimpleAdManager {
    constructor() {
        this.adNetworks = [
            {
                name: 'AdSense',
                script: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID'
            },
            {
                name: 'Media.net',
                script: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
            }
        ];
        this.init();
    }

    init() {
        this.loadAdNetwork();
        this.setupAdContainers();
    }

    loadAdNetwork() {
        // Load your preferred ad network
        const adNetwork = this.adNetworks[0]; // Use first ad network
        
        const script = document.createElement('script');
        script.async = true;
        script.src = adNetwork.script;
        document.head.appendChild(script);
    }

    setupAdContainers() {
        // Add placeholder content for development
        const containers = document.querySelectorAll('.ad-banner, .ad-sidebar');
        containers.forEach(container => {
            container.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <div style="font-size: 12px; margin-bottom: 5px;">Advertisement</div>
                    <div style="font-size: 10px; opacity: 0.7;">Ad space - Replace with actual ad code</div>
                </div>
            `;
        });
    }
}

// Initialize ad manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Use SimpleAdManager for development, switch to AdManager for production
    window.adManager = new SimpleAdManager();
    
    // For production with AdSense, use:
    // window.adManager = new AdManager();
}); 