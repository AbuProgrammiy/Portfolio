import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled'
			})
		),
		provideHttpClient(),
		provideAnimationsAsync(),
		MessageService,
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: 'light',
				}
			},
			ripple: true
		})

	]
};
