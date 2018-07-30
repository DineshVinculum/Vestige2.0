export class BaseApiClass {
    constructor(public statuscode: string,
        public serviceResponseMsg: string,
        public status: string,
        public data: any,
        ) {
    }
 }