export let API: string

if (process.env.NODE_ENV === "development") {
    // ! 在 ts 中表示非空断言，表示该变量一定有值，即不为 undefined
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}