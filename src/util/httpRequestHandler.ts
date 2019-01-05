import * as http from 'http';

import Axios, * as axios from 'axios';



export class HttpRequestHandler {
    private baseUrl: string = 'http://localhost:9000';

    public getItem(url: string): Promise<any> {

        return new Promise((resolve,reject)=>{
            Axios.get(`${this.baseUrl}${url}`).then(res=>{
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }

    public postItem(url: string, data: any): Promise<any> {

        return new Promise((resolve,reject) => {
            Axios.post(`${this.baseUrl}${url}`,data).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

    public putItem(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            Axios.put(`${this.baseUrl}${url}`, data).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

    public deleteItem(url: string): Promise<any> {
        debugger
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}${url}`).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
}