#include <stdio.h>
int drawLine(int length) {
  char dot = '.';
  for (int i = 0;i < length;i++) {
    printf("%c", dot);
  }
  printf("\n");
  return length;
}

