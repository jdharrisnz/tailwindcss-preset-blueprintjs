import { colorsConfig } from './colorsConfig.js';
import { shadowsConfig } from './shadowsConfig.js';
import { fontFamilyConfig } from './fontFamilyConfig.js';
import { transitionTimingConfig } from './transitionTimingConfig.js';

const blueprint = {
    content: [],
    theme: {
        extend: {
            ...colorsConfig,
            ...shadowsConfig,
            ...fontFamilyConfig,
            ...transitionTimingConfig
        }
    }
};

export { blueprint };
