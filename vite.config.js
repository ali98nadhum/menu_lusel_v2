import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // تأكد من أن المسار الأساسي مضبوط بشكل صحيح
  plugins: [react()],
});
