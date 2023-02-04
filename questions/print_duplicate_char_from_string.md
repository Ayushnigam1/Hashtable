---
title: "First non repeated char in the string"
date: "2023-02-04"
tags: ["string", "data structure", "hashmap" ,"set"]
difficulty: "Medium"
toc:
    Duplicate character:
---
## Duplicate characters in a string
Given a string s consisting of characters,you need to print the **duplicate characters** from that string.

Input 1:
- first line will contain the string

```
hashtable
```
Output:
- print duplicate characters.
```
h a 
```
Explanation: here **h and a** are repeat two times in the string and others are only single time. 

Input 2:
```
input - hello world

output - l o
```
#### Approach 1:
Here's the naive approach using **set**.

- Loop through the string, and for each character, loop through the rest of the string to see if it appears again.
- If it does, add it to a set (or a similar data structure) to keep track of the duplicates.
  
```
#include <bits/stdc++.h>
using namespace std;
void printDuplicateChars(string &str) {
   set<char> duplicateChars;
    for (int i = 0; i < str.length(); i++) {
        for (int j = i + 1; j < str.length(); j++) {
            if (str[i] == str[j]) {
                duplicateChars.insert(str[i]);
                break;
            }
        }
    }

    for (auto &c : duplicateChars) {
        cout << c << " ";
    }
    cout << endl;
}

int main() {
    string str = "hello world";
    printDuplicateChars(str);
    return 0;
}

```
**Time Complexity :** 

#### Approach 2:
A more optimized approach is to use a **hashmap**.

- Create an  hash map to store the count of each character in the string.
- Loop through the string, and for each character, update the count in the hash map.
- Loop through the hash map, and check the count of each character. If the count is greater than 1, add it to a list of duplicates.

This approach has a time complexity of **O(n)**, where n is the length of the string.
```
#include <bits/stdc++.h>
using namespace std;

void printDuplicateChars(string &str) {
    unordered_map<char, int> frequency;
    vector<char> duplicates;

    for (auto &c : str) {
        frequency[c]++;
    }

    for (auto &[c, count] : frequency) {
        if (count > 1) {
            duplicates.push_back(c);
        }
    }

    for (const auto &c : duplicates) {
        cout << c << " ";
    }
   cout <<endl;
}

int main() {
    string str = "hello world";
    printDuplicateChars(str);
    return 0;
}

```