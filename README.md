# ТЗ для тестового задания на должность HTML-верстальщика

Содержание:
1. [Требования](#Требования)
2. [Комментарии](#Комментарии)

## Требования

[Исходный макет для выполнения задания](https://www.figma.com/file/2b7UqUrTs4R8JQoYutlKTu/Тестовое?nodeid=0%3A1&t=Xamu5jsuoYeNTGc8-1)

1. Вёрстка должна быть адаптивной с минимальным разрешением для отображения 320px. Адаптив делается на Ваше усмотрение, однако при любом разрешении страница должна корректно отображаться в браузере.
2. Вёрстка с соблюдением структуры и нейминга в соответствии с методологией БЭМ.
3. Для стилей используется препроцессор SASS в диалекте SCSS.
4. Готовая вёрстка должна корректно отображаться на последних версиях всех актуальных браузеров (Chrome, Firefox, Edge (chromium), Safari), а также их мобильных аналогах.
5. Готовая страница, а также все ресурсы должны быть оптимизированы по "весу" и размеру.
6. Текст, количество пунктов в оформлении заказа, количество полей форм могут меняться - вёрстка должна это предусматривать.
7. В футере платежные системы - не ссылки, а контакты – ссылки.
8. Форма должна быть подготовленной к работе (каждое поле должно быть input[name='....']).
9. Шапка (header) должна прилипать к верху страницы при скролле.
10. Не допускается использование html/css-фреймворков или сеток по типу bootstrap и др.
11. Приветствуется инициативность в создании динамики на странице (анимации, hover).
12. Допускается использование сторонних плагинов для стилизации элементов, если это необходимо.
13. Выполненное тестовое задание должно быть загружено на github со страницей на github pages.

## Комментарии

- Шрифт Lato
  В макете он предлагается к использованию для кириллицы, тогда как шрифт поддерживает только латиницу. Поэтому для кириллицы в свёрстанной странице подключен Raleway и безопасные шрифты без засечек. Из-за этого длина текста на кириллице в макете и на странице заметно различается. Также безопасные шрифты будут использоваться в том случае, если шрифты Lato и Raleway не подгрузятся.

- Высота строки
  Как правило, используется высота строки 120%, но в некоторых случаях она меньше и колеблется около 117.4% Я оставила эти два варианта, потому что разница меньше десятой % не так существенна.

- Отступы в подвале
  Поскольку отступы разнятся от элемента к элементу, я позволила себе вольность в общих местах привести их к общим значениям.