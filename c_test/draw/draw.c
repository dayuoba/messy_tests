#include <stdio.h>
#include "drawLine.h"
#include "drawRect.h"

int main() {
  int len = 20;
  int width = 10;
  int height = 10;
  drawRect(width, height);
  drawLine(len);
  return 0;
}
