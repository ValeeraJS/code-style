// No return value should be expected (void)
function test(): void {
    return;
}

// A return value of type number
var fn = function (): number {
    return 1;
};

// A return value of type string
var arrowFn = (): string => 'test';

class Test {
    // No return value should be expected (void)
    method(): void {
        return;
    }
}