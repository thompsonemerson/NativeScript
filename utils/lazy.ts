export default function lazy<T>(action: () => T): () => T {
    let _value: T;
    return () => _value || (_value = action());
}

export function lazyExtend(exports: any, action: () => void): void {
    if (!global.__snapshot) {
        action();
    } else {
        exports.__pendingExtendCalls = exports.__pendingExtendCalls || [];
        exports.__pendingExtendCalls.push(action);
    }
}
