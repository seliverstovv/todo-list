## Запуск проекта
- скачать и установить https://nodejs.org (протестировано на версии - 18.12.0)
- установить зависимости `yarn` or `npm i`
- запустить проект `npm start` or `yarn start`

### Пример реализации frontend для простого трекера задач

#### Используемые технологии
- https://www.typescriptlang.org
- https://reactjs.org/
- https://redux-toolkit.js.org/
- https://github.com/axios/axios
- https://emotion.sh

На данный момент, стили выглядяит не очент красиво, использую разные подходы (styled & css), местами прописываю стили через тэги. 
В ближайшее время наведу рефакторинг в стилях и UI-kit:
- перенести все стили в отдельные файлы
- убрать по возможности стилизацию через тэги
- написать шаблоны для добавления новых тем к кнопкам (по примеру компонента Typography)
- добавить светлую тему
- исправить все размеры и отступы с px на rem