const std = @import("std");

export fn add(a: i32, b: i32) i32 {
    return a + b;
}

export fn print() void {
    std.debug.print("hello, world", .{});
}