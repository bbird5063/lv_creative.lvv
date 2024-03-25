/**
 * Сначала мы загрузим все зависимости JavaScript этого проекта, которые
 * включает Vue и другие библиотеки. Это отличная отправная точка, когда
 * Создание надежных и мощных веб-приложений с использованием Vue и Laravel.
 */
import './bootstrap';
import { createApp } from 'vue';

/**
 * Далее мы создадим новый экземпляр приложения Vue. 
 */
const app = createApp({});

/**
Затем вы можете начать
 * регистрация компонентов в экземпляре приложения, чтобы они были готовы
 * для использования в представлениях вашего приложения. Пример включен для вас.
 */


import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

/**
 * Следующий блок кода может использоваться для автоматической регистрации вашего
 * Компоненты Vue. Он будет рекурсивно сканировать этот каталог на наличие Vue.
 * компоненты и автоматически регистрировать их по их «basename».
 *
 * Например. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

 //Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
 //    app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
 //});

/**
 * Наконец, мы прикрепим экземпляр приложения к элементу HTML с помощью
 * атрибут «id» для «приложения». Этот элемент включен в атрибут «auth».
 * строительные леса. В противном случае вам придется добавить элемент самостоятельно.
 */

app.mount('#app');
