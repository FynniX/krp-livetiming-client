# krp-livetiming-client

LiveTiming Client for [Kart Racing Pro](https://www.kartracing-pro.com/).

## Requirements

- [LiveTiming Server](https://github.com/FynniX/krp-livetiming-server) 

## Installing

This package was tested under [Node.js](https://nodejs.org/) 16.16.0 x64.

`npm install krp-livetiming-client`

## Documentation

## Examples

```js
const client = new Client("http://localhost:6878/")
```

| Function           | Description              |
|--------------------|--------------------------|
| "handleConnect"    | Callback for connect.    |
| "handleDisconnect" | Callback for disconnect. |
| "handleUpdate"     | Callback for update.     |

```js
client.handleUpdate((type: string, data: UpdateDataT) => {
    console.log(type, data)
})
```

## License

Released under the [MIT License](https://github.com/FynniX/krp-livetiming-client/blob/main/LICENSE).
