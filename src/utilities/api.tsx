import { server } from '../configuration'

interface Cabecera {
    'Content-Type': string,
    'Authorization': string | null
}

class API {

    private cabecera: Cabecera

    constructor() {
        this.cabecera = {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        }
    }

    public callGET(url: string, successCallback: Function, failureCallback: Function) {
        let properties = { method: 'GET', headers: this.cabecera }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callDELETE(url: string, successCallback: Function, failureCallback: Function) {
        let properties = { method: 'DELETE', headers: this.cabecera }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callPUT(url: string, body: Object, successCallback: Function, failureCallback: Function) {
        let properties = {
            method: 'PUT', headers: this.cabecera, body: JSON.stringify(body)
        }
        this.call(url, properties, successCallback, failureCallback)
    }

    public callPOST(url: string, body: Object, successCallback: Function, failureCallback: Function) {
        let properties = {
            method: 'POST', headers: this.cabecera, body: JSON.stringify(body)
        }
        this.call(url, properties, successCallback, failureCallback)
    }

    private call(url: string, properties: Object, successCallback: Function, failureCallback: Function) {
        fetch(server.host + url, properties)
            .then(async response => {
                if (response.ok) {
                    localStorage.setItem('token', await response.headers.get('Authorization') || '')
                    return response.json()
                }
                failureCallback(JSON.stringify(response))
            })
            .then(datos => successCallback(datos))
            .catch(error => failureCallback(error))
    }
}

export default new API()