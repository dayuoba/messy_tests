#include <stdio.h>

int drawRect(int h, int w) {
	int i;
	int j;
	char space = ' ';
	char dot = '.';
	for (i = 0; i < h; i++) { 
			for (j = 0; j < w; j++) {
		 		if (i == 0 || i == h-1) {
		   			if (j == w-1) {
		  				printf(".\n");
					}else {
		 				 printf("%c", dot);
					}
		 		}else {
		   			if (j == 0) {
		  			printf("%c", dot);
				}else if (j == w-1) {
		  			printf(".\n");
				}else {
		  			printf("%c", space);
				}
		 	}
		}
	}
}
