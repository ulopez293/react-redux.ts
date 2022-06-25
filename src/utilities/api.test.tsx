import API from "./api"

test("login is an object", async () => {
    API.callLOGIN("/login", {
        user: { email: "usuario", password: "1234" }
    }, (response: any) => {
        expect(response).toBeTruthy()
    }, (error: any) => {
        console.log(error)
    })
})

test("wallets Array", async () => {
    API.callGET("/member/wallets", (response: any) => {
        expect(Array.isArray(response)).toBe(true)
    }, (error: any) => {
        console.log(error)
    })
})

test("benevits is an object", async () => {
    localStorage.setItem("token","Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNTYwOTkiLCJzY3AiOiJ1c2VyIiwiYXVkIjpudWxsLCJpYXQiOjE2NTExMTA4MDksImV4cCI6MTY4MjY0NjgwOSwianRpIjoiYzczMjZlOTYtMjM4MS00NTEwLTk3MTQtYjVjNzg4OTAyMjg2In0.tDxTF29Yp96OlDeA7dXhK10Z7PiHXU1yAsHCeLBZYo8")
    API.callGET("/member/landing_benevits", (response: any) => {
        expect(response).toBeTruthy()
        console.log(response)
    }, (error: any) => {
        console.log(error)
    })
})
