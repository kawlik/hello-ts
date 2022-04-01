import { defineConfig } from 'vite';

//  plugins
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


/*  Use defined config
/*   *   *   *   *   *   *   *   *   *   */
export default defineConfig({

    //  base url path
    base: '/hello-ts/',

    //  used plugins
    plugins: [

        //  react plugin
        react(),

		VitePWA({
			
			//  PWA mode
			registerType: 'autoUpdate',

			//  workbox options
			workbox: {
				cleanupOutdatedCaches: false, 
			},
	
			//  included assets
			includeAssets: [
				'favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png',
			],
	
			//  manifest
			manifest: {
	
				name: 'Hello!',
				short_name: 'Hello!',
	
				display: 'standalone',
				theme_color: '#ffffff',
				background_color: '#ffffff',
				orientation: 'portrait',
	
				description: 'Hello! A modular application for household management. Here you can create a shopping list, split the bill, monitor expenses and keep an eye on the budget. See for yourself how easy it is!',
	
				icons: [
					{
						src: 'android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
				screenshots: [
					{
						src: 'screenshot-login.jpg',
						sizes: '1080x2340',
						type: 'image/jpg',
					},
					{
						src: 'screenshot-login.jpg',
						sizes: '1080x2340',
						type: 'image/jpg',
					},
					{
						src: 'screenshot-login.jpg',
						sizes: '1080x2340',
						type: 'image/jpg',
					},
				],
			},
		}),
    ],
});