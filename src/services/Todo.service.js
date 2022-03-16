import EncodeCache from '../utils/EncodeCache';

const API_URL = 'http://localhost:8088/todo';
const CACHE_KEY = 'todo_list';

class TodoService {

    async get() {
        if (EncodeCache.has(CACHE_KEY)) {
            return EncodeCache.get(CACHE_KEY);
        }
        const response = await fetch(API_URL);
        const parsed = await response.json();
        setTimeout(() => {
            EncodeCache.set({key: CACHE_KEY, value: parsed});
        },200);
        // EncodeCache.set({key: CACHE_KEY, value: parsed});
        return parsed;
    }

    clearCache() {
        EncodeCache.remove(CACHE_KEY);
    }
}

export default new TodoService();
