import "Library.sol";

contract Main {
    using Lib for int;
    int foo;

    function Main() {

    }

    function doSomething() {
      foo.something();
    }
}
