````markdown
# ionic-test-task

## Версии окружения

- **Версия Node:** 16.14.0
- **Версия npm:** 8.3.1
- **Версия Xcode:** Version 15.0 (15A240d)

## Getting Started

Используйте расширение Ionic от официального разработчика

1. Скачайте репозиторий:

```bash
git clone https://github.com/bishop38/ionic-test-task.git
```
````

2. После перейдите в папку:

```bash
cd ionic-test-task/
```

3. Установите Ionic CLI глобально, используя npm. Откройте свой терминал или командную строку и выполните следующую команду:

```bash
npm install -g @ionic/cli
```

4. Перед запуском приложения нужно ввести команду:

```bash
npm i
ionic build
```

5. Установите capacitor

```bash
npm i @capacitor/core
npm i -D @capacitor/cli
```

6. Затем инициализируйте Capacitor, используя опросник CLI:

```bash
npx cap init
name: ionic-test-task
Package ID: com.ionictesttask.www
```

7. После установки среды выполнения Capacitor core вы можете установить iOS

```bash
npm i @capacitor/ios
npx cap add ios
npx cap sync
```

8. Перейдите `./ios/App/App/info.plist` в `<dict></dict>` добавьте следующее:

```xml
<key>NSContactsUsageDescription</key>
<string>Need all your contacts</string>
<key>NSCameraUsageDescription</key>
<string>The app enables the scanning of various barcodes.</string>
```

9. Откройте Xcode, выполнив следующую команду:

```bash
   npx cap open ios
```

10. В Xcode выберите Signing & Capabilities выберите команду разработчика (укажите appleId)

11. Выберите устроиство и нажмите "Start"

## Информация об эмуляторе

Если вы используете эмулятор, пожалуйста, обязательно используйте следующие настройки:

- **Устройство:** iPhone XR и выше
- **iOS Version:** 13.0 и выше

Теперь вы готовы к работе над проектом Ionic Test Task. Счастливого кодирования!

```

```
