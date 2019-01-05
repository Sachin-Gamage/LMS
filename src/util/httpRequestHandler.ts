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
        let body: string = JSON.stringify(data);
        let responseBody = '';
        let responseData: any = {};
        let options = {
            host: this.baseUrl,
            path: url,
            method: 'PUT',
            headers: {}
        }
        return new Promise((resolve, reject) => {
            let request = http.request(options, (res) => {

                res.on('data', (data) => {
                    responseBody += data
                });
                res.on('error', (err) => {
                    reject(err);
                });
                res.on('end', () => {
                    responseData = JSON.parse(responseBody);
                    resolve(responseData);
                })
            }).on('error', (err) => {
                reject(err)
            });

            request.write(body);
            request.end();
        });
    }

    public deleteItem(url: string): Promise<any> {

        let options = {
            host: this.baseUrl,
            path: url,
            rejectUnauthorized: false,
            method: 'DELETE',
            headers: {}
        }
        return new Promise((resolve, reject) => {
            let responseBody = '';
            let responseData: any = {};
            http.request(options, (res) => {
                res.on('data', (data) => {
                    responseBody += data;
                });
                res.on('error', (err) => {
                    reject(err);
                });
                res.on('end', () => {
                    responseData = JSON.parse(responseBody);
                    resolve(responseData);
                })
            }).on('error', (error) => {
                reject(error);
            })
        });
    }
}