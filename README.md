## Буквобек

Напишите бекенд, принимающий текст, и отвечающий объектом, с количеством каждого символа в переданном тексте. Символы приводим к нижнему регистру. Например:

Передали текст `Буквобек`, ответ сервера:

```json
{
	"б": 2,
	"у": 1,
	"к": 2,
	"в": 1,
	"o": 1,
	"е": 1
}
```

Пробелы считаем символами. Из-за того что текст может быть любого объема, передадим его в теле запроса.

## Usage

1. git clone
2. mpm install
3. node index
4. use postman or other services to send POST request to server with string data
