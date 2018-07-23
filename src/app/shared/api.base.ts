export class BaseApiClass {
    constructor(public serviceResponseCode: string,
        public serviceResponseMsg: string,
        public status: string,
        public data: any,
        ) {
    }
 }