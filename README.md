# krp-livetiming-client

LiveTiming Client for [Kart Racing Pro](https://www.kartracing-pro.com/).

## Requirements

- [LiveTiming Server](https://github.com/FynniX/krp-livetiming-server) 

## Installing

This package was tested under [Node.js](https://nodejs.org/) 16.16.0 x64.

`npm install krp-livetiming-client`

## Documentation

# ClientClient

## Examples

```js
const clientClient = new ClientClient("http://localhost:6878/")
```

| Function           | Description              |
|--------------------|--------------------------|
| "handleUpdate"     | Callback for update.     |

```js
clientClient.handleUpdate((type: string, data: ClientUpdateDataT) => {
    console.log(type, data)
})
```

# ServerClient

## Examples

```js
const serverClient = new ServerClient("http://localhost:6878/")
```

| Function           | Description              |
|--------------------|--------------------------|
| "handleConnect"    | Callback for connect.    |
| "handleDisconnect" | Callback for disconnect. |
| "handleUpdate"     | Callback for update.     |

```js
serverClient.handleUpdate((type: string, data: ServerClientDataT) => {
    console.log(type, data)
})
```

## License

Released under the [MIT License](https://github.com/FynniX/krp-livetiming-client/blob/main/LICENSE).
