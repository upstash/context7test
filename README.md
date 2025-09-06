# Auto-generated Test Document

This file is generated for E2E parsing.

**Document ID:** cfrhdgigrgi-mf8otf06

This document contains a variety of concise, self-contained code examples across multiple programming languages.

Each example includes a short description followed by a fenced code block.

## C++: Transform Vector

C++ transforms a vector in-place and prints the results.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
  vector<int> v{1,2,3,4,5};
  transform(v.begin(), v.end(), v.begin(), [](int n){return n*2;});
  for (auto n: v) cout<<n<<" ";
  return 0;
}
```


