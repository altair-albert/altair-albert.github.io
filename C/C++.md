## 获取函数参数

## 模版自定义参数个数

```c++
#include <iostream>
template<typename...Args>
void fun(Args... args){
std::cout << sizeof...(args) << std::endl;
}
int main() { fun(1, 2, 3, "4", 5, "6"); } // out: 6
```