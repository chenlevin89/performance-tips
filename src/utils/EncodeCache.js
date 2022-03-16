import { enc, Rabbit} from 'crypto-js';

const SECRET_KEY = 'SECRET_KEY_123';

class EncodeCache {

    cache = {};

    get(key) {
        if(!this.cache[key]){
            const value = sessionStorage.getItem(key);
            if (value) {
                this.cache[key]= JSON.parse(this.decode(value));
            }
        }
        return this.cache[key];
    }

    set({key, value}) {
        const encoded = this.encode(JSON.stringify(value));
        sessionStorage.setItem(key, encoded);
    }

    has(key) {
        return sessionStorage.hasOwnProperty(key);
    }

    remove(key) {
        sessionStorage.removeItem(key);
    }

    encode(value) {
        return Rabbit.encrypt(value, SECRET_KEY).toString();
    }

    decode(value) {
        return Rabbit.decrypt(value, SECRET_KEY).toString(enc.Utf8);
    }

}

export default new EncodeCache();