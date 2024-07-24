type Constructor<T> = new (...args: any[]) => T;

class Container {
    private services: Map<string, Constructor<any>> = new Map();

    register<T>(key: string, service: Constructor<T>): void {
        this.services.set(key, service);
    }

    resolve<T>(key: string): T {
        const service = this.services.get(key);
        if (!service) {
            throw new Error(`Service not found: ${key}`);
        }
        return new service();
    }
}

export const container = new Container();