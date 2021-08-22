// vueモジュールにある`createApp`メソッドを読み込む
import { createApp } from 'vue'
// App.vueファイルを読み込む
import App from './App.vue'

// Vue3のアプリケーションオブジェクトを生成し、id="app"にマウント
createApp(App).mount('#app')


/**
 * `import`
 *    - モジュールからオブジェクトを読み込んで使えるようにする
 * .vueファイル
 *    - Vueのコンポーネントを記述したもの
 * 
 * App.vueを読み込んで、アプリケーションオブジェクトを生成し、
 * id="app"にマウントして表示している
 *    →App.vueで行っていることが、実質的に画面の表示を行っている。
 */