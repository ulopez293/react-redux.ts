import { server } from '../configuration'

interface Cabecera {
    'Content-Type': string,
    Authorization ?: string | null
}

class API {

    private cabecera: Cabecera

    constructor() {
        this.cabecera = {
            'Content-Type': 'application/json'
        }
    }

    private auth() {
        this.cabecera = {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }

    public callLOGIN(url: string, body: Object, successCallback: Function, failureCallback: Function) {
        let properties = { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body) }
        this.callToken(url, properties, successCallback, failureCallback)
    }

    public callGET(url: string, successCallback: Function, failureCallback: Function) {
        this.auth()
        let properties = { method: 'GET', headers: this.cabecera }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callDELETE(url: string, successCallback: Function, failureCallback: Function) {
        this.auth()
        let properties = { method: 'DELETE', headers: this.cabecera }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callPUT(url: string, body: Object, successCallback: Function, failureCallback: Function) {
        this.auth()
        let properties = {
            method: 'PUT', headers: this.cabecera, body: JSON.stringify(body)
        }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callPOST(url: string, body: Object, successCallback: Function, failureCallback: Function) {
        this.auth()
        let properties = {
            method: 'POST', headers: this.cabecera, body: JSON.stringify(body)
        }
        this.call(url, properties, successCallback, failureCallback)
    }

    private callToken(url: string, properties: Object, successCallback: Function, failureCallback: Function){
        fetch(server.host + url, properties)
            .then(async response => {
                if (response.ok) {
                    const token = await response.headers.get('Authorization')
                    if (token) {
                        localStorage.setItem('token', token)
                        return await response.json()
                    } else{
                        new Error("No se ha recibido el token")
                    }
                }
                failureCallback(JSON.stringify(response))
            })
            .then(datos => successCallback(datos))
            .catch(error => failureCallback(error))
    }

    private call(url: string, properties: Object, successCallback: Function, failureCallback: Function) {
        fetch(server.host + url, properties)
            .then(async response => {
                if (response.ok) {
                    return response.json()
                }
                failureCallback(JSON.stringify(response))
            })
            .then(datos => successCallback(datos))
            .catch(error => failureCallback(error))
    }
}

export default new API()