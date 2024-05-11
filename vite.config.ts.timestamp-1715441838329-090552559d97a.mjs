// vite.config.ts
import { defineConfig } from "file:///C:/Users/Amin/Desktop/codes/todo-list/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Amin/Desktop/codes/todo-list/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "C:\\Users\\Amin\\Desktop\\codes\\todo-list";
var root = resolve(__vite_injected_original_dirname, "src");
var outDir = resolve(__vite_injected_original_dirname, "public");
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    outDir
  },
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@hooks": resolve(root, "hooks"),
      "@store": resolve(root, "store"),
      "@services": resolve(root, "services"),
      "@Errors": resolve(root, "Errors")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbWluXFxcXERlc2t0b3BcXFxcY29kZXNcXFxcdG9kby1saXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbWluXFxcXERlc2t0b3BcXFxcY29kZXNcXFxcdG9kby1saXN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BbWluL0Rlc2t0b3AvY29kZXMvdG9kby1saXN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5cbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpO1xuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBvdXREaXIsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0Bjb21wb25lbnRzJzogcmVzb2x2ZShyb290LCAnY29tcG9uZW50cycpLFxuICAgICAgJ0Bob29rcyc6IHJlc29sdmUocm9vdCwgJ2hvb2tzJyksXG4gICAgICAnQHN0b3JlJzogcmVzb2x2ZShyb290LCAnc3RvcmUnKSxcbiAgICAgICdAc2VydmljZXMnOiByZXNvbHZlKHJvb3QsICdzZXJ2aWNlcycpLFxuICAgICAgJ0BFcnJvcnMnOiByZXNvbHZlKHJvb3QsICdFcnJvcnMnKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVEsb0JBQW1CO0FBQ3hVLE9BQU8sV0FBVztBQUNsQixTQUFRLGVBQWM7QUFGdEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxPQUFPLFFBQVEsa0NBQVcsS0FBSztBQUNyQyxJQUFNLFNBQVMsUUFBUSxrQ0FBVyxRQUFRO0FBRTFDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGVBQWUsUUFBUSxNQUFNLFlBQVk7QUFBQSxNQUN6QyxVQUFVLFFBQVEsTUFBTSxPQUFPO0FBQUEsTUFDL0IsVUFBVSxRQUFRLE1BQU0sT0FBTztBQUFBLE1BQy9CLGFBQWEsUUFBUSxNQUFNLFVBQVU7QUFBQSxNQUNyQyxXQUFXLFFBQVEsTUFBTSxRQUFRO0FBQUEsSUFDbkM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K