// Should indicate that no value is returned (void)
function test1() {
    return;
}

// Should indicate that a number is returned
var fn = function () {
    return 1;
};

// Should indicate that a string is returned
var arrowFn = () => 'test';

class Test2 {
    // Should indicate that no value is returned (void)
    method() {
        return;
    }
}